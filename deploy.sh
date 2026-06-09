#!/bin/bash
set -e

echo "=============================="
echo "  OmniCRM AI - Deploy Script"
echo "=============================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Step 1: Clean
echo -e "${BLUE}[1/5] Cleaning previous build...${NC}"
rm -rf out .next
echo -e "${GREEN}  Done${NC}"

# Step 2: Install
echo -e "${BLUE}[2/5] Installing dependencies...${NC}"
npm install --production=false 2>/dev/null
echo -e "${GREEN}  Done${NC}"

# Step 3: Build
echo -e "${BLUE}[3/5] Building for production...${NC}"
npx next build
echo -e "${GREEN}  Done${NC}"

# Step 4: Verify
echo -e "${BLUE}[4/5] Verifying build output...${NC}"
if [ -d "out" ]; then
  FILE_COUNT=$(find out -type f | wc -l)
  echo -e "${GREEN}  Build output: out/ ($FILE_COUNT files)${NC}"
else
  echo "  ERROR: out/ directory not found"
  exit 1
fi

# Step 5: Deploy
echo -e "${BLUE}[5/5] Deploying to Firebase...${NC}"
echo -e "${YELLOW}  Run: npx firebase login${NC}"
echo -e "${YELLOW}  Then: npx firebase deploy${NC}"
echo ""
echo -e "${GREEN}=============================="
echo -e "  Build Complete!"
echo -e "  Output: ./out/"
echo -e "  Files:  $FILE_COUNT"
echo -e "==============================${NC}"
echo ""
echo "To deploy to Firebase:"
echo "  1. npx firebase login"
echo "  2. npx firebase deploy"
echo ""
echo "To test locally:"
echo "  npx serve out -p 3000"
