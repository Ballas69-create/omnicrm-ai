# Netlify Deployment Guide for OmniCRM AI

## Option 1: Deploy via Netlify UI (Easiest)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub/GitLab/Bitbucket repo
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click "Deploy site"

## Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod
```

## Option 3: Manual Deploy (Drag & Drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `out/` folder to the drop zone
3. Done! Your site is live

## Environment Variables

In Netlify Dashboard → Site settings → Environment variables:

```
NEXT_PUBLIC_APP_URL=https://your-site.netlify.app
```

## Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `omnicrm.ai`)
4. Update DNS records as instructed
5. SSL is auto-provisioned

## Troubleshooting

### 404 errors on refresh
The `_redirects` file handles this. Make sure it's in the `out/` directory.

### Blank page
Check browser console for errors. Usually caused by:
- Missing environment variables
- Incorrect base URL

### Slow loading
Enable asset optimization in Netlify Dashboard:
1. Go to Site settings → Build & deploy → Asset optimization
2. Enable "Bundle CSS" and "Bundle JS"

## Files included in this build

- `netlify.toml` - Netlify configuration
- `out/_redirects` - SPA routing rules
- `out/_headers` - Security headers
- `out/` - All 29 static pages (4.9MB)

## Support

- Netlify Docs: https://docs.netlify.com
- Next.js + Netlify: https://nextjs.org/docs/deployment
