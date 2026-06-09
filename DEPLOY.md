# OmniCRM AI — Deployment Guide

## Quick Deploy to Firebase

### Step 1: Login to Firebase
```bash
npx firebase login
```

### Step 2: Create a Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Create a project"
3. Name it `omnicrm-ai` (or your choice)
4. Enable Google Analytics (optional)

### Step 3: Initialize Hosting
```bash
npx firebase init hosting
```
When prompted:
- Public directory: `out`
- Single-page app: `Yes`
- GitHub auto-deploy: `No` (for now)

### Step 4: Build
```bash
npm run build
```
This creates the `out/` folder with 321 static files (4.8MB).

### Step 5: Deploy
```bash
npx firebase deploy
```

Your app will be live at:
- `https://omnicrm-ai.web.app`
- `https://omnicrm-ai.firebaseapp.com`

---

## Deploy to Other Platforms

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `out`

### AWS S3 + CloudFront
```bash
aws s3 sync out/ s3://your-bucket --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "out", "-p", "3000", "-s"]
```

---

## Environment Variables

Create `.env.production`:
```
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

---

## Custom Domain (Firebase)

```bash
npx firebase hosting:channel:deploy production
npx firebase hosting:sites:create your-site
```

Then in Firebase Console:
1. Hosting → Add custom domain
2. Add your domain
3. Verify DNS records
4. SSL auto-provisioned

---

## Post-Deploy Checklist

- [ ] All 27 pages load (see route list below)
- [ ] Login/signup flow works
- [ ] Onboarding wizard completes
- [ ] Dashboard charts render
- [ ] AI Assistant responds
- [ ] Sidebar navigation works
- [ ] Mobile responsive
- [ ] Dark mode toggles
- [ ] Download links work on /website

## All Routes

| Route | Page |
|-------|------|
| / | Landing page |
| /website | Marketing + download + pricing |
| /login | Sign in |
| /signup | Create account |
| /onboarding | AI wizard |
| /dashboard | Main dashboard |
| /crm/leads | Leads table + kanban |
| /crm/customers | Customer cards |
| /crm/contacts | Contact directory |
| /sales/pipeline | Deal pipeline |
| /sales/quotes | Quotations |
| /sales/orders | Order tracking |
| /marketing/campaigns | Campaigns |
| /marketing/email | Email marketing |
| /support/tickets | Tickets |
| /support/chat | Live chat |
| /projects | Project management |
| /finance/invoices | Invoices |
| /finance/expenses | Expenses |
| /hr/employees | Employees |
| /hr/leave | Leave management |
| /inventory | Inventory |
| /analytics | Analytics + AI insights |
| /ai-assistant | AI chat |
| /workflows | Automation workflows |
| /settings | Settings |
| /admin | Admin panel |
