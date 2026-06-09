#!/bin/bash
set -e

echo "=============================="
echo "  OmniCRM AI - Netlify Deploy"
echo "=============================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Step 1: Clean
echo -e "${BLUE}[1/4] Cleaning previous build...${NC}"
rm -rf out .next
echo -e "${GREEN}  Done${NC}"

# Step 2: Install dependencies
echo -e "${BLUE}[2/4] Installing dependencies...${NC}"
npm install 2>/dev/null
echo -e "${GREEN}  Done${NC}"

# Step 3: Build
echo -e "${BLUE}[3/4] Building for production...${NC}"
npm run build
echo -e "${GREEN}  Done${NC}"

# Step 4: Verify
echo -e "${BLUE}[4/4] Verifying build output...${NC}"
if [ -d "out" ]; then
  FILE_COUNT=$(find out -type f | wc -l)
  echo -e "${GREEN}  Build output: out/ ($FILE_COUNT files)${NC}"
  
  # Check for critical files
  if [ -f "out/index.html" ]; then
    echo -e "${GREEN}  ✓ index.html found${NC}"
  else
    echo "  ✗ index.html missing!"
    exit 1
  fi
  
  if [ -f "out/_redirects" ]; then
    echo -e "${GREEN}  ✓ _redirects found${NC}"
  else
    echo "  ✗ _redirects missing!"
    exit 1
  fi
  
  if [ -f "out/_headers" ]; then
    echo -e "${GREEN}  ✓ _headers found${NC}"
  else
    echo "  ✗ _headers missing!"
    exit 1
  fi
else
  echo "  ERROR: out/ directory not found"
  exit 1
fi

echo ""
echo -e "${GREEN}=============================="
echo -e "  Build Complete!"
echo -e "  Output: ./out/"
echo -e "  Files:  $FILE_COUNT"
echo -e "==============================${NC}"
echo ""
echo "To deploy to Netlify:"
echo ""
echo "Option 1: Drag & Drop"
echo "  Go to https://app.netlify.com/drop"
echo "  Drag the 'out' folder to the drop zone"
echo ""
echo "Option 2: CLI Deploy"
echo "  npx netlify login"
echo "  npx netlify deploy --prod --dir=out"
echo ""
echo "Option 3: Connect Git repo"
echo "  1. Go to https://app.netlify.com"
echo "  2. Click 'Add new site' → 'Import an existing project'"
echo "  3. Connect your repo"
echo "  4. Build command: npm run build"
echo "  5. Publish directory: out"
echo ""
