# ✅ CI/CD พร้อมใช้งานแล้ว!

## 🎉 Setup เสร็จสมบูรณ์

### สิ่งที่ทำไปแล้ว:

1. ✅ **IAM Role**: `github-actions-uplift-web-frontend`
   - ARN: `arn:aws:iam::820242926004:role/github-actions-uplift-web-frontend`
   - Permissions: ECR, ECS, IAM PassRole

2. ✅ **GitHub Secret**: `AWS_ROLE_ARN`

3. ✅ **GitHub Environments**:
   - `production` (for main branch)
   - `development` (for dev branch)

4. ✅ **Workflow File**: `.github/workflows/deploy.yml`

---

## 🚀 ทดสอบ Deployment

### ทดสอบ Deploy to Development

```bash
cd /Users/anonsuphatphon/coding/github/uplift-web-frontend

# Commit workflow file
git add .github/workflows/deploy.yml .github/CICD_GUIDE.md
git commit -m "ci: add GitHub Actions deployment workflow"

# Push to trigger CI (ถ้าอยู่บน main/dev/develop)
git push origin main

# หรือถ้าต้องการ deploy to dev
git checkout dev
git merge main
git push origin dev
```

### เช็ค Deployment

```bash
# ดู GitHub Actions
gh run list --limit 5

# หรือเปิด browser
open https://github.com/uplift-technology-company-limited/uplift-web-frontend/actions
```

---

## 📋 Branch → Environment Mapping

| Branch | Environment | URL | Auto Deploy |
|--------|-------------|-----|-------------|
| `main` | production | www.uplifttech.store | ✅ Yes |
| `dev` | development | www.uplifttech.dev | ✅ Yes |
| `develop` | - | - | ❌ No (build only) |

---

## 💡 Quick Commands

```bash
# Deploy to Development
git checkout dev && git merge develop && git push

# Deploy to Production (create PR first)
gh pr create --base main --head dev --title "Release $(date +%Y-%m-%d)"

# Check deployment status
gh run list

# View logs
gh run view --log

# Test websites
curl https://www.uplifttech.dev
curl https://www.uplifttech.store
```

---

## 🔧 Troubleshooting

ถ้ามีปัญหา ดูได้ที่: [.github/CICD_GUIDE.md](.github/CICD_GUIDE.md)

---

**Setup Date**: 2025-11-02
**Status**: ✅ Ready to deploy!
