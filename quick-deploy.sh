#!/bin/bash
echo ""
echo "  ⚡ OmniCRM AI — Quick Deploy to Vercel"
echo "  ========================================"
echo ""

# Check if vercel is installed
if ! command -v npx &> /dev/null; then
    echo "Error: Node.js is required. Install from https://nodejs.org"
    exit 1
fi

# Login
echo "Step 1: Logging in to Vercel..."
npx vercel login

# Deploy
echo ""
echo "Step 2: Deploying to production..."
npx vercel --prod --yes

echo ""
echo "  ✅ Deployed! Check the URL above."
echo ""
