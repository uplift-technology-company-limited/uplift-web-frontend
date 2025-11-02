# 🚀 CI/CD Guide - Uplift Web Frontend

คู่มือสั้นๆ ง่ายๆ สำหรับ deploy

---

## 📋 TL;DR

```bash
# Deploy to Development
git checkout dev && git merge develop && git push

# Deploy to Production (ต้องสร้าง PR)
gh pr create --base main --head dev --title "Release $(date +%Y-%m-%d)"

# Check status
gh run list --limit 5
curl https://www.uplifttech.dev        # Dev
curl https://www.uplifttech.store      # Prod
```

---

## 🎯 Branches

| Branch | Deploy To | URL |
|--------|-----------|-----|
| `main` | **Production** | www.uplifttech.store |
| `dev` | **Development** | www.uplifttech.dev |
| `develop` | *No deploy* | - |

---

## 🔧 Setup (ครั้งแรกเท่านั้น)

### 1. สร้าง IAM Role

```bash
# 1. สร้าง OIDC Provider
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1

# 2. สร้าง trust policy
cat > /tmp/trust-policy.json <<'EOF'
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {
      "Federated": "arn:aws:iam::820242926004:oidc-provider/token.actions.githubusercontent.com"
    },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
      "StringEquals": {"token.actions.githubusercontent.com:aud": "sts.amazonaws.com"},
      "StringLike": {"token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_ORG/uplift-web-frontend:*"}
    }
  }]
}
EOF

# 3. สร้าง role
aws iam create-role \
  --role-name github-actions-uplift-web-frontend \
  --assume-role-policy-document file:///tmp/trust-policy.json

# 4. สร้าง permissions
cat > /tmp/permissions.json <<'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["ecr:*", "ecs:DescribeTaskDefinition", "ecs:RegisterTaskDefinition", "ecs:UpdateService", "ecs:DescribeServices", "iam:PassRole"],
      "Resource": "*"
    }
  ]
}
EOF

aws iam put-role-policy \
  --role-name github-actions-uplift-web-frontend \
  --policy-name Permissions \
  --policy-document file:///tmp/permissions.json

# 5. Get ARN
aws iam get-role --role-name github-actions-uplift-web-frontend --query 'Role.Arn' --output text
```

### 2. ตั้งค่า GitHub

1. ไปที่ **Settings** → **Secrets and variables** → **Actions**
2. เพิ่ม secret:
   - Name: `AWS_ROLE_ARN`
   - Value: `arn:aws:iam::820242926004:role/github-actions-uplift-web-frontend`

3. สร้าง environments:
   - **production** (ต้อง approve ก่อน deploy)
   - **development** (auto deploy)

---

## 🚀 Workflow

### พัฒนา Feature

```bash
# 1. สร้าง branch
git checkout develop
git pull
git checkout -b feature/new-thing

# 2. เขียนโค้ด
git add .
git commit -m "feat: add new thing"

# 3. Merge กลับ develop
git checkout develop
git merge feature/new-thing
git push

# 4. ลบ branch
git branch -d feature/new-thing
```

### Deploy to Dev

```bash
git checkout dev
git merge develop
git push  # Auto deploy!
```

รอ 3-5 นาที แล้วเช็ค: https://www.uplifttech.dev

### Deploy to Production

```bash
# สร้าง PR
gh pr create --base main --head dev --title "Release $(date +%Y-%m-%d)"

# หรือใช้ GitHub UI
# Get review → Merge → Auto deploy!
```

รอ 3-5 นาที แล้วเช็ค: https://www.uplifttech.store

---

## 🔍 Monitoring

### Check Deployment

```bash
# GitHub Actions
gh run list --limit 5
gh run view --log

# ECS Services
aws ecs describe-services \
  --cluster uplift-production \
  --services web-frontend web-frontend-dev \
  --region ap-southeast-1 \
  --query 'services[*].{Name:serviceName,Status:status,Running:runningCount}'

# Logs
aws logs tail /ecs/uplift-production \
  --follow \
  --filter-pattern "web-frontend" \
  --region ap-southeast-1
```

### Test Websites

```bash
curl https://www.uplifttech.dev
curl https://www.uplifttech.store
curl -I https://www.uplifttech.store  # with headers
```

---

## 🔄 Rollback

```bash
# 1. List revisions
aws ecs list-task-definitions \
  --family-prefix web-frontend \
  --sort DESC \
  --max-items 5 \
  --region ap-southeast-1

# 2. Rollback
aws ecs update-service \
  --cluster uplift-production \
  --service web-frontend \
  --task-definition web-frontend:PREVIOUS_REVISION \
  --region ap-southeast-1

# 3. Wait
aws ecs wait services-stable \
  --cluster uplift-production \
  --services web-frontend \
  --region ap-southeast-1
```

---

## 🐛 Troubleshooting

### Deployment ค้าง

```bash
# Service events
aws ecs describe-services \
  --cluster uplift-production \
  --services web-frontend \
  --region ap-southeast-1 \
  --query 'services[0].events[0:5]'

# Target health
aws elbv2 describe-target-health \
  --target-group-arn arn:aws:elasticloadbalancing:ap-southeast-1:820242926004:targetgroup/uplift-web-frontend-tg/b9abcd6c6482d16d \
  --region ap-southeast-1
```

### Build failed

```bash
# ดู logs
gh run view --log-failed

# Test locally
npm ci && npm run build
```

### Permission error

```bash
# Check role
aws iam get-role --role-name github-actions-uplift-web-frontend
```

---

## 💡 Best Practices

1. **Test in dev first**: `develop` → `dev` → `main`
2. **Use PR for production**: ไม่ push ตรงไป `main`
3. **Meaningful commits**: `feat:`, `fix:`, `docs:`
4. **Monitor deployments**: เช็ค Actions + logs
5. **Keep updated**: `git pull` บ่อยๆ

---

## 📝 Quick Commands

```bash
# Deploy dev
git checkout dev && git merge develop && git push

# Deploy prod
gh pr create --base main --head dev --title "Release $(date +%Y-%m-%d)"

# Check
gh run list
curl https://www.uplifttech.dev
curl https://www.uplifttech.store

# Logs
aws logs tail /ecs/uplift-production --follow --region ap-southeast-1

# Rollback
aws ecs update-service --cluster uplift-production --service web-frontend --task-definition web-frontend:X --region ap-southeast-1
```

---

## 📞 Links

- Production: https://www.uplifttech.store
- Development: https://www.uplifttech.dev
- GitHub Actions: https://github.com/YOUR_ORG/uplift-web-frontend/actions
- AWS ECS: https://ap-southeast-1.console.aws.amazon.com/ecs/v2/clusters/uplift-production

---

**Last Updated**: 2025-11-02
