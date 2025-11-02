#!/bin/bash

# Pre-Push Check Script
# This script runs all necessary checks before pushing code

set -e  # Exit on any error

echo "🚀 Starting Pre-Push Checks..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: ESLint
echo "📋 Step 1/3: Running ESLint..."
if npm run lint; then
    echo -e "${GREEN}✅ ESLint passed!${NC}"
    echo ""
else
    echo -e "${RED}❌ ESLint failed! Fix errors before pushing.${NC}"
    exit 1
fi

# Step 2: TypeScript Type Check
echo "🔍 Step 2/3: Running TypeScript type check..."
if npx tsc --noEmit; then
    echo -e "${GREEN}✅ Type check passed!${NC}"
    echo ""
else
    echo -e "${RED}❌ Type check failed! Fix type errors before pushing.${NC}"
    exit 1
fi

# Step 3: Build Test
echo "🏗️  Step 3/3: Running production build..."
if npm run build; then
    echo -e "${GREEN}✅ Build passed!${NC}"
    echo ""
else
    echo -e "${RED}❌ Build failed! Fix build errors before pushing.${NC}"
    exit 1
fi

# All checks passed
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ All pre-push checks passed!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "You can now safely commit and push your code."
echo ""
