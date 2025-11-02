# Pre-Push Check Command

Before pushing code to remote, you MUST run these checks in order:

## 1. Run ESLint
```bash
npm run lint
```
- Fix all errors before proceeding
- Address warnings when possible

## 2. Type Check
```bash
npx tsc --noEmit
```
- Fix all TypeScript errors before proceeding
- Ensure no type safety issues

## 3. Build Test
```bash
npm run build
```
- Ensure production build succeeds
- Check for any build-time errors
- Verify all static pages generate correctly

## Success Criteria
✅ All three checks must pass with **zero errors** before commit and push
✅ Warnings should be addressed when reasonable

## If Any Check Fails
❌ DO NOT commit or push
❌ Fix all errors first
❌ Re-run all checks from step 1

## Only After All Checks Pass
✅ Stage your changes: `git add .`
✅ Commit with descriptive message
✅ Push to remote branch
