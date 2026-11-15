# The Creator Compass: Design · Create · Launch

A zero-cost, browser-persisted digital marketing strategy workspace and 27-prompt playbook for creators, beginners, and local service businesses—built with React, Vite, and Tailwind CSS.

## What's Inside

- **Daily VIP Workspace**: Sign in locally (no paid cloud or database required), log daily check-ins, and save progress automatically in browser `localStorage` with `.json` backup/restore.
- **27 Auto-Personalized AI Prompts (9-Topic System)**: Enter a Business Profile once and every prompt injects your business context, preferred tool stack (**Superhuman Docs**, **Gemini**, **Google Workflow Tools**), output format, guardrails, and sample outputs.
- **Beginner Landscape & Tools Guide**: Explains how traffic, lead capture, email/SMS nurture, and follow-up pipelines connect, plus a searchable plain-English marketing dictionary.
- **Customer Problem → Strategy Mapper**: Connects real business bottlenecks directly to the exact topics and prompts that solve them.
- **Implementation Tracker & Superhuman Docs Export**: Track 3-phase progress, check off setup milestones, and export your full roadmap as Markdown (`.md`).
- **Work With Steven**: Generates a ready-to-share 1-on-1 Strategy Call Brief so members can email or book directly for personal guidance.

## Deploy Free to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repository.
3. Click **Deploy** (Vite build settings and `vercel.json` SPA rewrites are already configured).

## Adding Your Booking Link Later

Open `src/constants.ts` and paste your scheduling link (Calendly, TidyCal, GoHighLevel, etc.) into `STEVEN_MENTORSHIP_CONFIG.bookingUrl`. When empty, the **Work With Steven** page defaults to emailing `realstevekelly@gmail.com` with the member's pre-filled Strategy Call Brief.

## Local Development

```bash
npm install
npm run dev
```
