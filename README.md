# OmniCRM AI

> The AI-powered CRM platform that adapts to any business, any industry, any size.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npx next start -p 3000
```

## What's Inside

- **27 pages** — Landing, marketing, auth, onboarding, dashboard, 12 CRM modules
- **30 industry templates** — Construction, logistics, healthcare, retail, and 26 more
- **AI Assistant** — Chat-based copilot that creates leads, quotes, and reports
- **Workflow Builder** — Visual automation with triggers and actions
- **Real-time Dashboards** — Revenue charts, pipeline views, activity feeds
- **Dark Mode** — Full dark mode support
- **Responsive** — Works on desktop, tablet, and mobile
- **R0/R199/R499 pricing** — In South African Rand

## Tech Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS + Radix UI
- Recharts for data visualization
- Lucide icons

## Deploy

See [DEPLOY.md](./DEPLOY.md) for Firebase, Vercel, Netlify, AWS, and Docker instructions.

## Project Structure

```
src/
  app/
    page.tsx              # Landing page
    website/page.tsx      # Marketing site
    onboarding/page.tsx   # AI wizard
    (auth)/login/         # Sign in
    (auth)/signup/        # Sign up
    (dashboard)/          # All dashboard pages
      dashboard/          # Main dashboard
      crm/leads/          # Leads
      crm/customers/      # Customers
      sales/pipeline/     # Pipeline
      ai-assistant/       # AI chat
      analytics/          # Charts + insights
      ...                 # 12 more modules
  components/
    ui/                   # Button, Badge, Progress
    layout/               # Sidebar, Header, DashboardLayout
    dashboard/            # StatCard, Charts, ActivityFeed
  data/
    industries.ts         # 30 industry templates
    mock-data.ts          # Sample data
  lib/
    utils.ts              # Helpers
```

## License

Proprietary — OmniCRM AI
