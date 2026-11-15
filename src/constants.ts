import { Topic, CustomerProblemMap, LandscapeTool } from './types';

export const STEVEN_MENTORSHIP_CONFIG = {
  coachName: 'Steven Kelly',
  brandTitle: 'Natural Growth Partner',
  contactEmail: 'realstevekelly@gmail.com',
  // Paste your scheduling / Calendly / booking URL below anytime:
  bookingUrl: '',
  // Optional private VIP community URL:
  communityUrl: '',
  sessionHeadline: 'Ready for Personal 1-on-1 Guidance With Steven?',
  sessionSubheadline:
    'Use this workspace every day to build your foundation. When you want direct feedback on your offer, funnel, or customer strategy—or want help setting up your system side-by-side—bring your exported roadmap to a personal session.'
};

export const IMPLEMENTATION_CHECKLIST = [
  {
    id: 'chk-1',
    phase: 1,
    label: 'Complete your Business Profile & pick your active Tool Stack',
    detail: 'Locks your business details into all 27 prompts automatically.'
  },
  {
    id: 'chk-2',
    phase: 1,
    label: 'Run Topic 1 prompts and document your 90-day target in Superhuman Docs',
    detail: 'Sets your revenue milestone, ideal customer avatar, and 5 daily metrics.'
  },
  {
    id: 'chk-3',
    phase: 1,
    label: 'Package your core offer and 3 pricing tiers (Topic 2)',
    detail: 'Replaces hourly/commodity pricing with clear problem-solution value.'
  },
  {
    id: 'chk-4',
    phase: 1,
    label: 'Generate local buyer-intent keywords & conversion copy (Topic 3)',
    detail: 'Gives you the exact words your ideal customers search before they buy.'
  },
  {
    id: 'chk-5',
    phase: 2,
    label: 'Build your Welcome & Recovery email/SMS sequences (Topic 4)',
    detail: 'Ensures every new lead receives automatic trust-building follow-up.'
  },
  {
    id: 'chk-6',
    phase: 2,
    label: 'Publish your Opt-In & Offer Funnel pages (Topic 7)',
    detail: 'Turns visitors into booked calls, leads, or buyers 24/7.'
  },
  {
    id: 'chk-7',
    phase: 2,
    label: 'Connect your Follow-Up & Pipeline workflows (Topic 9)',
    detail: 'Stops revenue leaks from missed calls, slow replies, or forgotten leads.'
  },
  {
    id: 'chk-8',
    phase: 3,
    label: 'Create visual assets, video scripts, and 30-day social calendar (Topics 5, 6, 8)',
    detail: 'Builds consistent visibility and natural affiliate/tool demo opportunities.'
  }
];

export const CUSTOMER_PROBLEMS: CustomerProblemMap[] = [
  {
    id: 'invisible-online',
    symptom: '“Nobody can find us online — not enough steady leads.”',
    rootCause: 'Missing local buyer-intent keywords, inconsistent social presence, and zero search-friendly video or map visibility.',
    plainEnglishFix: 'Map what ready-to-buy customers type into Google and AI search, then turn one core message into weekly videos and local social posts.',
    recommendedTopicIds: [3, 6, 8],
    recommendedPromptIds: ['3.1', '6.2', '8.1'],
    toolsUsed: ['Gemini', 'Google Business Profile', 'Superhuman Docs']
  },
  {
    id: 'traffic-no-sales',
    symptom: '“People visit our website or ask for quotes, then disappear.”',
    rootCause: 'Unclear offer packaging, competing on price alone, or a confusing landing page with no clear next step.',
    plainEnglishFix: 'Package your service as an obvious outcome with tiered options, visual proof, and a high-trust landing page.',
    recommendedTopicIds: [2, 5, 7],
    recommendedPromptIds: ['2.1', '5.2', '7.1'],
    toolsUsed: ['Superhuman Docs', 'Funnel / Page Builder', 'Gemini']
  },
  {
    id: 'leads-go-cold',
    symptom: '“Missed calls and inquiries slip through the cracks.”',
    rootCause: 'No automated welcome sequence, no instant text-back, and no simple pipeline to track who still needs a reply.',
    plainEnglishFix: 'Install an automated welcome sequence and a 5-stage follow-up pipeline so every inquiry gets nurtured even when you are busy.',
    recommendedTopicIds: [4, 9],
    recommendedPromptIds: ['4.1', '9.1', '9.3'],
    toolsUsed: ['Email & SMS Automation', 'Google Workspace', 'Superhuman Docs']
  },
  {
    id: 'overwhelmed-random',
    symptom: '“I feel overwhelmed — I post randomly and don’t know what to work on.”',
    rootCause: 'Jumping into tactics without a 90-day target, ideal customer profile, or simple daily scoreboard.',
    plainEnglishFix: 'Start at Topic 1 to lock in your 90-day goal, single ideal customer, and 5-metric tracker, then multiply one weekly message.',
    recommendedTopicIds: [1, 3, 8],
    recommendedPromptIds: ['1.1', '1.3', '3.3'],
    toolsUsed: ['Superhuman Docs', 'Gemini', 'Google Sheets']
  },
  {
    id: 'ready-to-scale',
    symptom: '“We have happy customers, how do we get referrals and repeat business?”',
    rootCause: 'No post-purchase onboarding, testimonial capture habit, or retention check-in rhythm.',
    plainEnglishFix: 'Turn every completed job into a video testimonial, a follow-up check-in, and a referral loop.',
    recommendedTopicIds: [6, 9],
    recommendedPromptIds: ['6.3', '9.2'],
    toolsUsed: ['Descript / Mobile Video', 'Email & SMS Automation', 'Superhuman Docs']
  }
];

export const LANDSCAPE_TOOLS: LandscapeTool[] = [
  {
    id: 'superhuman-docs',
    name: 'Superhuman Docs',
    category: 'Command Center & Knowledge Hub',
    plainEnglishRole: 'Your digital headquarters where your goals, offers, copy, SOPs, and daily trackers live in one clean place.',
    bestUsedFor: 'Organizing your 9-topic outputs, client strategy roadmaps, content calendars, and repeatable checklists.',
    replacesConfusion: 'Replaces scattered sticky notes, lost Google Docs, and "where did I save that prompt?" chaos.',
    connectedTopicIds: [1, 2, 5, 8, 9]
  },
  {
    id: 'gemini',
    name: 'Gemini (AI Strategist)',
    category: 'Thinking & Drafting Partner',
    plainEnglishRole: 'Your 24/7 research assistant, copywriter, and strategist. You paste the 27 tailored prompts here to generate drafts in seconds.',
    bestUsedFor: 'Brainstorming offers, researching local keywords, writing emails, drafting video scripts, and formatting tables.',
    replacesConfusion: 'Eliminates staring at a blank screen trying to sound like a pro marketer.',
    connectedTopicIds: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    id: 'google-workspace',
    name: 'Google Workflow Tools',
    category: 'Daily Operations & Visibility',
    plainEnglishRole: 'Everyday essentials—Google Sheets, Drive, Calendar, Gmail, and Google Business Profile—that keep leads and bookings organized.',
    bestUsedFor: 'Tracking 5 daily numbers, hosting lead magnets, managing local map SEO, and sending direct follow-ups.',
    replacesConfusion: 'Lets you launch immediately using reliable tools you probably already know.',
    connectedTopicIds: [1, 3, 4, 9]
  },
  {
    id: 'funnel-builder',
    name: 'Funnel & Page Builder (e.g. Systeme.io / Website)',
    category: 'Digital Storefront',
    plainEnglishRole: 'The webpage where curious visitors land, learn what problem you solve, and either book a call, request a quote, or buy.',
    bestUsedFor: 'Lead capture (opt-in) pages, offer breakdown pages, and thank-you pages with a clear next step.',
    replacesConfusion: 'Replaces bloated 15-page websites that look nice but never ask the visitor to take action.',
    connectedTopicIds: [2, 4, 7]
  },
  {
    id: 'automation-followup',
    name: 'Email, SMS & Chat Automation',
    category: '24/7 Follow-Up Engine',
    plainEnglishRole: 'Automated messages that reply instantly when someone submits a form or misses a call, and stay in touch until they are ready.',
    bestUsedFor: '7-day welcome series, missed-call text-backs, quote follow-ups, and post-purchase check-ins.',
    replacesConfusion: 'Stops you from losing $500+ jobs simply because you were on a job site and could not answer.',
    connectedTopicIds: [4, 7, 9]
  },
  {
    id: 'visual-video',
    name: 'Visual & Video Studio (Gemini Image / Phone / Descript)',
    category: 'Trust & Authority Media',
    plainEnglishRole: 'Simple tools for turning plain phone clips and clean graphics into trustworthy before/after proof and tutorials.',
    bestUsedFor: 'Short vertical videos, 3-5 minute YouTube answers, infographics, and customer video reviews.',
    replacesConfusion: 'Proves you do not need expensive camera crews—clarity and real customer stories win.',
    connectedTopicIds: [5, 6, 8]
  }
];

export const TOPICS: Topic[] = [
  {
    id: 1,
    title: "Set Business Goals",
    subtitle: "Foundation & Daily Compass",
    description: "Foundation for everything — connects calm clarity with measurable revenue targets.",
    plainEnglish: "Before touching ads or software, decide exactly how much revenue you want in 90 days, who you serve best, and the 5 numbers that prove you're moving forward.",
    solvesProblem: "Stops random busywork and digital overwhelm by giving every marketing task a clear target.",
    phase: 1,
    coreTools: ["Superhuman Docs", "Gemini", "Google Sheets"],
    glossary: [
      { term: "Client Avatar", meaning: "A clear snapshot of your favorite, most profitable type of customer—their real problem, budget, and what makes them say yes." },
      { term: "Leading vs. Lagging Metric", meaning: "Leading = daily actions you control (calls returned, posts published). Lagging = results (monthly revenue)." }
    ],
    prompts: [
      {
        id: "1.1",
        title: "Vision-to-Revenue Goal Setter",
        intro: "Turn your bigger vision into a grounded 90-day revenue plan with calm, repeatable weekly milestones.",
        role: "You are a strategic business advisor who blends calm mindset clarity (steady daily repetition) with practical small-business revenue math.",
        context: "We are building a clear 90-day roadmap for {{businessName}} ({{businessType}}) serving {{targetAudience}} in {{location}}. Current revenue is {{currentRevenue}}/month and the goal is {{desiredRevenue}}/month. We organize our strategy inside {{toolStack}}.",
        task: "Create a 90-day Goal & Execution Framework that connects mindset stability with 3 concrete revenue milestones and weekly action targets.",
        action: [
          "Clarify the core transformation and purpose behind {{businessName}} in plain English",
          "Break the gap between {{currentRevenue}}/month and {{desiredRevenue}}/month into 3 realistic 30/60/90-day milestones",
          "Calculate how many leads, conversations, and closed sales are needed each week to hit those milestones",
          "Include a 5-minute daily mindset & repetition check-in (grounded in the 14–21 day habit rule)",
          "Structure the output as a clean table ready to paste into Superhuman Docs"
        ],
        outputFormat: "1) One-sentence North Star Vision, 2) 30/60/90-Day Revenue & Lead Math Table, 3) Weekly Non-Negotiable Action Checklist, 4) 5-Minute Daily Reset Routine.",
        constraints: [
          "Keep math realistic and transparent—show exact assumptions (e.g., average sale price × customers needed).",
          "Avoid hype or vague buzzwords; write for a practical business owner.",
          "Ensure the final section is formatted cleanly for Superhuman Docs."
        ],
        clarifyingStep: "Before finalizing the numbers, ask me up to 3 quick questions if my average job/offer price or weekly hours available are missing.",
        whyItMatters: "Clear goals anchor every other topic. Once you know you only need, say, 4 new clients a month, marketing stops feeling mysterious and becomes simple math.",
        beginnerTip: "Don't worry if your current revenue is $0 or an estimate—fill in your Business Profile first, copy this into Gemini, and adjust the numbers together.",
        recommendedTools: ["Gemini", "Superhuman Docs"],
        problemTags: ["overwhelmed-random"],
        expertExample: `**30/60/90-Day Milestone Snapshot (Example: Local HVAC)**\n- Average Job Value: $650 | Goal: +$6,000/mo (+9 jobs/mo)\n- Weekly Target: 6 qualified inquiries → 3 booked estimates → 2–3 closed jobs\n- Daily Habit: 15 min follow-up on open quotes + 1 customer check-in before 10am.`
      },
      {
        id: "1.2",
        title: "Client Avatar Goal Aligner",
        intro: "Pinpoint the exact customer who gladly pays full price and loves working with you.",
        role: "You are a customer psychology and local-market positioning expert who identifies high-value, low-friction buyers.",
        context: "For {{businessName}} ({{businessType}}) in {{location}}, we want to focus exclusively on the highest-fit segment of {{targetAudience}} rather than trying to talk to everyone. Our biggest obstacle right now is {{mainChallenge}}.",
        task: "Build 3 candidate ideal customer profiles, recommend the strongest #1 focus avatar, and map their exact buying triggers.",
        action: [
          "Analyze {{businessType}} and identify 3 distinct customer segments in {{location}}",
          "Score each segment on urgency to buy, ability to pay, and ease of serving",
          "Flesh out the #1 winning Avatar: demographics, daily frustrations, fears, and desired outcome",
          "List the exact places (online searches, local groups, offline hangouts) this avatar already spends time",
          "Write 3 'I feel like you're reading my mind' hook sentences tailored to them"
        ],
        outputFormat: "Comparison table of 3 segments, followed by a 1-page Ideal Customer Dossier and 3 ready-to-use messaging hooks.",
        constraints: [
          "Use everyday language the customer actually speaks—no corporate marketing jargon.",
          "Focus on specific, observable triggers (e.g., 'AC died in July' rather than 'wants comfort')."
        ],
        clarifyingStep: "Ask me 2–3 short questions about my favorite past customer (or dream customer) if my Business Profile lacks specifics.",
        whyItMatters: "Knowing one specific person shapes your offer (Topic 2), your search keywords (Topic 3), your emails (Topic 4), and your social content (Topic 8).",
        beginnerTip: "Think of the single best customer you've ever helped—or the one person you'd clone 10 times. Describe them when Gemini asks.",
        recommendedTools: ["Gemini", "Superhuman Docs"],
        problemTags: ["overwhelmed-random", "traffic-no-sales"],
        expertExample: `**Top Avatar: Busy Dual-Income Homeowner (35–55)**\n- Trigger: Unexpected breakdown before a family event or heatwave.\n- Real Fear: Paying for a cheap patch that fails twice + waiting around all day.\n- Hook: "Same-day fix with upfront flat pricing—no surprise add-ons."`
      },
      {
        id: "1.3",
        title: "5-Metric Daily Scoreboard Builder",
        intro: "Replace analytics overwhelm with a 5-number scoreboard you can check in 3 minutes a day.",
        role: "You are a small-business operations analyst who turns complex marketing data into simple, 3-minute daily scoreboards.",
        context: "{{businessName}} wants to grow from {{currentRevenue}}/month to {{desiredRevenue}}/month without staring at complicated analytics. We track numbers inside {{toolStack}}.",
        task: "Design a 5-metric daily/weekly dashboard with Green/Yellow/Red thresholds and a 10-minute Friday review ritual.",
        action: [
          "Select the 5 highest-leverage metrics across Traffic, Leads, Follow-Ups, Sales, and Revenue",
          "Define exact Green (on track), Yellow (watch closely), and Red (fix today) targets for each",
          "Build a clean spreadsheet / Superhuman Docs table layout with columns for Date, Metric, Target, and Actual",
          "Add the exact 'If Red, Do This' corrective action for each metric",
          "Write 4 short Friday review questions to spot bottlenecks calmly"
        ],
        outputFormat: "A ready-to-copy 5-Row Scoreboard Table + Action Playbook for Red Indicators + Friday Review Checklist.",
        constraints: [
          "Strictly limit to 5 metrics—no vanity metrics like raw pageviews or likes unless tied directly to leads.",
          "Keep tracking time under 3 minutes per day."
        ],
        clarifyingStep: "Ask me how leads currently contact me (phone calls, web forms, DMs, or walk-ins) if not specified.",
        whyItMatters: "What gets measured calmly gets improved. When leads drop, your scoreboard tells you in 10 seconds whether you need more traffic (Topics 3/8) or better follow-up (Topics 4/9).",
        beginnerTip: "Start by filling in just 1 row a week in Google Sheets or Superhuman Docs—consistency beats perfection.",
        recommendedTools: ["Superhuman Docs", "Google Sheets", "Gemini"],
        problemTags: ["overwhelmed-random"],
        expertExample: `**5-Metric Scoreboard Sample**\n1. New Leads / Week (Green: 10+ | Yellow: 5–9 | Red: <5)\n2. Speed-to-Reply <5 min (Green: 90%+ | Red: <70%)\n3. Quotes / Calls Booked | 4. Close Rate % | 5. Cash Collected.`
      }
    ]
  },
  {
    id: 2,
    title: "Create Your Offer",
    subtitle: "Package Value Irresistibly",
    description: "Package your expertise into a clear transformation customers gladly pay premium prices for.",
    plainEnglish: "People don't buy hours or technical features—they buy a reliable fix to an expensive headache. Here you package what you do into clear, confident options.",
    solvesProblem: "Fixes 'customers always ask for discounts' or 'people shop around and pick the cheapest competitor.'",
    phase: 1,
    coreTools: ["Superhuman Docs", "Gemini", "Funnel / Page Builder"],
    glossary: [
      { term: "Value Stack", meaning: "Listing everything included in your service (core work + fast-start bonus + warranty) so the total value clearly outweighs the price." },
      { term: "Risk Reversal", meaning: "A clear promise or guarantee that takes the fear out of buying from you for the first time." }
    ],
    prompts: [
      {
        id: "2.1",
        title: "Irresistible Offer Stack Creator",
        intro: "Transform a plain service into a clear, high-trust offer package that stands out from local competitors.",
        role: "You are a master offer architect specializing in value stacking, risk reversal, and clear outcome-based packaging for local and digital businesses.",
        context: "{{businessName}} offers {{productName}} ({{businessType}}) for {{targetAudience}} in {{location}}. Right now, communicating clear value is tough because of: {{mainChallenge}}. We will present this offer using {{toolStack}}.",
        task: "Design a complete, irresistible Offer Stack including core transformation, 3–4 practical bonuses, a believable guarantee, and honest urgency.",
        action: [
          "Define the #1 before-and-after transformation {{targetAudience}} actually wants",
          "Name the core offer so the result is obvious in under 5 seconds",
          "Create 3–4 zero-fluff bonuses that remove common client headaches (checklists, priority scheduling, inspection reports)",
          "Craft a realistic, trustworthy risk-reversal guarantee that protects both the client and the business",
          "Write an authentic reason to act now (seasonal capacity, limited weekly slots) without fake countdown pressure"
        ],
        outputFormat: "Offer Name & 1-Sentence Promise, Value Stack Breakdown Table (Item + Value + Why It Matters), Guarantee Statement, and Ethical Urgency Line.",
        constraints: [
          "Bonuses must be genuinely helpful and low-cost to deliver.",
          "No cheesy infomercial hype—keep tone credible and grounded."
        ],
        clarifyingStep: "Ask me 3 quick questions about what I currently include in my service and what customers hesitate about before buying.",
        whyItMatters: "Your Offer is the heart of the machine. Weak offers require twice the ad spend and hard selling; a strong offer makes Topic 3 (copy) and Topic 7 (funnel pages) convert naturally.",
        beginnerTip: "Remember: a 'bonus' doesn't have to be free physical stuff—it can be a 48-hour turnaround, a 1-page maintenance guide, or a 30-day check-in call.",
        recommendedTools: ["Gemini", "Superhuman Docs", "Funnel / Page Builder"],
        problemTags: ["traffic-no-sales"],
        expertExample: `**Core Offer:** The 24-Hour Comfort & Efficiency Tune-Up\n- Bonus 1: 18-Point Photo Inspection Report ($95 value)\n- Bonus 2: Priority Emergency Dispatch Pass for 12 Months\n- Guarantee: "If it breaks within 90 days of our tune-up, we return free."`
      },
      {
        id: "2.2",
        title: "Problem-Solution Offer Matcher",
        intro: "Uncover the top 3 expensive headaches your customers want gone today—and match each to a clear solution.",
        role: "You are a problem-solution strategist who uncovers urgent, high-value customer pains and packages clean fixes.",
        context: "{{businessName}} serves {{targetAudience}} in {{location}}. Prospects often don't understand the real cost of waiting to fix their problem. This messaging will power our landing pages and chat/SMS scripts in {{toolStack}}.",
        task: "Identify the top 3 costly problems our market faces, rank them by urgency, and write Problem-Agitation-Solution (PAS) offer blurbs for each.",
        action: [
          "Brainstorm 6–8 problems {{targetAudience}} experiences related to {{businessType}}",
          "Rank and select the top 3 most urgent, expensive problems",
          "Create a dedicated mini-offer or entry package for each of the 3 problems",
          "Anchor each package's price against the cost of doing nothing",
          "Write a concise Problem → Cost of Waiting → Clean Solution script for each"
        ],
        outputFormat: "Top 3 Problems Matrix + 3 Ready-to-Paste PAS Offer Cards for landing pages and chat replies.",
        constraints: [
          "Focus on measurable costs (lost time, wasted money, emergency fees, stress).",
          "Keep each PAS script under 120 words so it works on mobile screens."
        ],
        clarifyingStep: "Ask me what emergency or frustrating event usually triggers a customer to finally call or message me.",
        whyItMatters: "People pay fast to stop pain. Matching your offer to an urgent problem fuels Topic 3 keywords, Topic 6 videos, and Topic 8 social hooks.",
        beginnerTip: "Look at the last 5 questions customers asked you—those exact questions usually reveal your most profitable Problem-Solution match.",
        recommendedTools: ["Gemini", "Superhuman Docs"],
        problemTags: ["traffic-no-sales", "invisible-online"],
        expertExample: `**Problem:** Missed after-hours calls costing $500+ jobs.\n**Cost of Waiting:** 3 missed calls/week = $6,000+/mo handed to competitors.\n**Solution:** 24/7 Instant Call-Back & Booking Setup in 48 hours.`
      },
      {
        id: "2.3",
        title: "3-Tier Pricing Psychology Optimizer",
        intro: "Give customers Good / Better / Best choices so the right option feels obvious—without discounting.",
        role: "You are a behavioral pricing strategist who applies anchoring and Good-Better-Best tier architecture to boost average order value.",
        context: "{{businessName}} currently sells {{productName}} (around ${{productPrice}} or single-tier pricing) to {{targetAudience}}. We want to display clear options in {{toolStack}} so buyers stop defaulting to the cheapest option.",
        task: "Architect 3 strategic pricing tiers (Starter, Most Popular Core, and Concierge/VIP) designed to guide 60%+ of buyers to the middle tier.",
        action: [
          "Design Tier 1 ('Foot-in-the-Door' starter/diagnostic option) with clear boundaries",
          "Design Tier 2 ('Best Value / Most Popular' core transformation) as the clear hero choice",
          "Design Tier 3 ('Done-For-You / Priority VIP' premium anchor) that makes Tier 2 feel smart",
          "Give each tier a benefit-driven name and 4–5 crisp comparison bullets",
          "Write 3 friendly responses for customers who ask 'Which tier should I pick?'"
        ],
        outputFormat: "3-Column Pricing Comparison Table + Naming Rationale + Sales Conversation Scripts.",
        constraints: [
          "Keep differences between tiers crystal clear—never confuse the buyer with 20 tiny checkboxes.",
          "Ensure Tier 1 still delivers a genuine win."
        ],
        clarifyingStep: "Ask me my current base price and what high-touch extra a premium client would happily pay 2–3x more for.",
        whyItMatters: "When you only offer one price, the customer's only decision is 'Yes or No.' With 3 clear tiers, the decision shifts to 'Which level fits me best?'",
        beginnerTip: "Even if you offer a free VIP resource or low-ticket starter, having a 'Do It Yourself → Do It With Me → Done For You' ladder shows customers how they can work deeper with you.",
        recommendedTools: ["Gemini", "Funnel / Page Builder", "Superhuman Docs"],
        problemTags: ["traffic-no-sales"],
        expertExample: `**Tier 1: Diagnostic Audit ($197)** — 1-hour roadmap.\n**Tier 2: Growth System Setup ($997 · Most Popular)** — Full setup + 30-day support.\n**Tier 3: VIP Partner Retainer ($2,500/mo)** — Ongoing management & priority updates.`
      }
    ]
  },
  {
    id: 3,
    title: "Keywords and Copy",
    subtitle: "Words That Get Found & Convert",
    description: "Speak your customer's exact words so Google, AI search, and real buyers choose you.",
    plainEnglish: "Keywords are simply the exact phrases people type when they need help. Copywriting is arranging those words on a page so they nod and take the next step.",
    solvesProblem: "Fixes 'nobody finds me on Google' and 'people read my website but don't call or click.'",
    phase: 1,
    coreTools: ["Gemini", "Google Business Profile", "Superhuman Docs"],
    glossary: [
      { term: "Buyer-Intent Keyword", meaning: "A search phrase from someone ready to hire now (e.g., 'emergency plumber near me'), not just browsing." },
      { term: "AI Search / GEO", meaning: "Structuring clear Q&A phrases so tools like Gemini and ChatGPT recommend your local business by name." }
    ],
    prompts: [
      {
        id: "3.1",
        title: "Local SEO & AI Search Keyword Finder",
        intro: "Uncover the exact search phrases local buyers type into Google Maps, search bars, and AI assistants.",
        role: "You are a local SEO and AI-search (GEO/Map Pack) strategist for service businesses and creators.",
        context: "{{businessName}} ({{businessType}}) wants high-intent traffic from {{targetAudience}} in {{location}}. We will organize these phrases in {{toolStack}} and weave them into pages, videos, and Google Business Profile updates.",
        task: "Generate 25 high-intent keywords organized across Emergency, Local 'Near Me', Comparison, and Natural AI Question formats.",
        action: [
          "Generate 5 urgent / 'need help today' search phrases for {{location}}",
          "Create 5 local Map Pack / 'near me' variations tailored to {{businessType}}",
          "Add 5 'best / cost / vs' comparison phrases buyers check before hiring",
          "Include 5 conversational questions people ask Gemini or voice search",
          "Suggest 5 specific page or Google Business Profile post titles using these phrases"
        ],
        outputFormat: "Categorized 25-Keyword Table (Phrase, Buyer Intent Level, Where to Use It) + Top 5 Page/Post Titles.",
        constraints: [
          "Use realistic local phrasing—skip impossible national single-word terms.",
          "Explain briefly why each category converts differently."
        ],
        clarifyingStep: "Ask me which neighborhoods, cities, or surrounding zip codes I want to dominate first.",
        whyItMatters: "You don't need millions of visitors—you need the 50 people in your town actively looking for your solution this week.",
        beginnerTip: "Pick just 3 phrases from the 'Emergency' or 'Question' list and make each one the headline of a short video or Google Business post.",
        recommendedTools: ["Gemini", "Google Business Profile", "Superhuman Docs"],
        problemTags: ["invisible-online"],
        expertExample: `**Sample Keywords (Austin Roofing)**\n- Urgent: "24 hour roof leak repair Austin TX"\n- Comparison: "metal vs shingle roof cost Austin"\n- AI Question: "How do I know if hail damage qualifies for insurance in Austin?"`
      },
      {
        id: "3.2",
        title: "Conversion Copy Formula Generator",
        intro: "Write clear, persuasive headlines and page copy that move readers from skeptical to ready-to-book.",
        role: "You are a direct-response copywriter known for warm, honest, high-converting messaging for local service businesses and experts.",
        context: "{{businessName}} needs clear, compelling copy for {{productName}} targeting {{targetAudience}} in {{location}}, directly addressing {{mainChallenge}}. We are deploying this on {{toolStack}}.",
        task: "Write a complete above-the-fold hero block, problem-solution body copy, trust bullets, and 3 call-to-action button options.",
        action: [
          "Write 4 attention-grabbing headlines using clear outcome + timeframe formulas",
          "Write a 2-sentence subheadline that explains who it's for and how it works",
          "Draft concise Problem → Agitation → Solution body copy without hype",
          "Create 5 benefit-focused bullet points (not dry feature lists)",
          "Write 3 clear, low-friction CTA button labels + micro-trust line underneath"
        ],
        outputFormat: "Complete Page Copy Kit formatted in sections (Hero, Problem/Solution, Proof Bullets, Risk Reversal, CTA).",
        constraints: [
          "Write at a clear, conversational 7th–8th grade reading level.",
          "Ban empty clichés like 'cutting-edge', 'synergy', or 'unlock your potential'."
        ],
        clarifyingStep: "Ask me what single action I want the visitor to take on this page (Book a Call, Request Estimate, Download Guide, or Buy).",
        whyItMatters: "Great copy isn't clever—it's clear. This exact messaging gets reused across your emails (Topic 4), landing pages (Topic 7), and social posts (Topic 8).",
        beginnerTip: "Read the generated headline out loud. If it sounds like something you'd actually say across a kitchen table to a customer, keep it!",
        recommendedTools: ["Gemini", "Funnel / Page Builder", "Superhuman Docs"],
        problemTags: ["traffic-no-sales"],
        expertExample: `**Headline:** "Stop Losing $500+ Local Jobs Every Time You Can't Answer the Phone."\n**Subheadline:** "We install a 24/7 automated response & booking workflow so you stay focused on the job site."`
      },
      {
        id: "3.3",
        title: "1-to-20 AI Content Multiplier",
        intro: "Turn one helpful customer answer into an entire week of emails, social posts, and short videos.",
        role: "You are an efficient content strategist who helps busy owners turn one core insight into multi-channel assets in under 20 minutes.",
        context: "{{businessName}} doesn't have hours to invent fresh content every day. Using {{toolStack}}, we want to take one real customer question or win and turn it into everywhere-ready content.",
        task: "Multiply one core topic or customer story into 20 ready-to-publish micro-assets across email, short video, and social.",
        action: [
          "Take one core customer pain or myth I share with you",
          "Write 4 email subject lines + 1 value email draft",
          "Create 6 social media posts (2 myths, 2 checklists, 2 quick stories)",
          "Draft 3 short 45-second vertical video scripts (Reels/Shorts)",
          "Write 7 curiosity-driven headline hooks for thumbnails and Google posts"
        ],
        outputFormat: "Master Content Matrix organized by Channel (Email, Short Video, Social, Hooks) ready to drop into Superhuman Docs.",
        constraints: [
          "Every piece must lead back naturally to one single call-to-action.",
          "Keep posts specific and practical, never generic motivational fluff."
        ],
        clarifyingStep: "Ask me to paste 1 real question a customer asked me recently (or 1 quick job story) to multiply.",
        whyItMatters: "Consistency shouldn't require creativity every morning. Answering one customer question well can feed your entire marketing machine for 2 weeks.",
        beginnerTip: "Record a 2-minute voice memo explaining how you solved a customer's problem today, paste the transcript into Gemini with this prompt, and watch 20 assets appear.",
        recommendedTools: ["Gemini", "Superhuman Docs", "Visual & Video Studio"],
        problemTags: ["overwhelmed-random", "invisible-online"],
        expertExample: `**Input Story:** Saved a homeowner $1,400 by catching a clogged drain early.\n**Output:** 1) 45s Reel script ("3 warning signs your drain is about to back up"), 2) Email story + inspection CTA, 3) Carousel checklist.`
      }
    ]
  },
  {
    id: 4,
    title: "Create Email Sequences",
    subtitle: "Automate Trust & Follow-Up",
    description: "Stay top-of-mind automatically so leads trust you and buy when they're ready.",
    plainEnglish: "Most people don't buy the very first minute they meet you. Automated email and text sequences send helpful messages on autopilot so you never have to chase anyone manually.",
    solvesProblem: "Fixes 'people download my guide or ask for info and I never hear from them again.'",
    phase: 2,
    coreTools: ["Email & SMS Automation", "Gemini", "Superhuman Docs"],
    glossary: [
      { term: "Welcome Sequence", meaning: "A pre-written series of 5–7 friendly emails sent automatically over a week when someone joins your list." },
      { term: "Segmentation / Tagging", meaning: "Labeling contacts by what they clicked or need (e.g., 'Repair' vs. 'New Install') so they only get relevant messages." }
    ],
    prompts: [
      {
        id: "4.1",
        title: "7-Day Trust & Conversion Welcome Series",
        intro: "Write a warm 7-email welcome series that builds real trust and invites new leads to take the next step.",
        role: "You are a lifecycle email strategist who writes personal, plain-text-style emails that read like a helpful advisor—not a corporate newsletter.",
        context: "New leads join {{businessName}}'s list after showing interest in {{productName}}. We want our automated system ({{toolStack}}) to nurture {{targetAudience}} in {{location}} into booked calls or buyers within 7 days.",
        task: "Write a complete 7-email Welcome Sequence (Day 0 to Day 7) with subject lines, preview text, body copy, and soft-to-direct CTAs.",
        action: [
          "Day 0: Deliver promised resource + set expectations + ask 1 simple reply question",
          "Day 1: Share a relatable origin or customer story addressing {{mainChallenge}}",
          "Day 2: Teach 1 quick win they can apply in 10 minutes today",
          "Day 4: Bust the #1 myth costing {{targetAudience}} money",
          "Day 5–7: Share real proof, answer top 2 objections, and present a clear invitation to work together"
        ],
        outputFormat: "Email-by-Email Blueprint (Send Day, Subject Line A/B, Body Copy, CTA Link Placement).",
        constraints: [
          "Keep each email 150–250 words so it's easy to read on a phone.",
          "Write as a human using 'I' and 'you'—zero spam trigger phrases."
        ],
        clarifyingStep: "Ask me what free resource, quote, or lead magnet triggers this welcome series.",
        whyItMatters: "Email is still the highest-ROI channel you actually own—no social media algorithm can take away your list.",
        beginnerTip: "Don't wait until all 7 are perfect! Put Days 0, 1, and 2 live first, then add the rest over the weekend.",
        recommendedTools: ["Email & SMS Automation", "Gemini", "Superhuman Docs"],
        problemTags: ["leads-go-cold"],
        expertExample: `**Day 0 Subject:** Here's your checklist (+ a quick question)\n**Body:** "Hey [First Name], here's the link you requested... Quick question: what's the #1 thing slowing down your [project] right now? Just hit reply—I read every note."`
      },
      {
        id: "4.2",
        title: "Abandoned Inquiry & Quote Recovery",
        intro: "Gently follow up with people who started booking, requested a quote, or viewed your offer—but got distracted.",
        role: "You are a conversion recovery copywriter who re-engages busy prospects with helpfulness and zero pressure.",
        context: "Prospects visit {{businessName}}'s offer page or request pricing for {{productName}}, then disappear before completing the booking or purchase. We use {{toolStack}} for automated email/SMS follow-up.",
        task: "Create a 3-step Email + optional SMS recovery sequence triggered 1 hour, 24 hours, and 72 hours after drop-off.",
        action: [
          "Touch 1 (1 hr): Helpful check-in ('Did something glitch or have a quick question?')",
          "Touch 2 (24 hrs): Address the biggest hidden hesitation + share a short proof snippet",
          "Touch 3 (72 hrs): Friendly close-the-loop message offering a quick 10-minute chat or next step",
          "Include matching 2-sentence SMS variations for local service leads",
          "Specify exact delay timing and stop-when-replied rules"
        ],
        outputFormat: "3-Step Recovery Flow (Timing, Email Version, Short SMS Version, Automation Rule).",
        constraints: [
          "Never guilt-trip or pressure the prospect; stay genuinely helpful.",
          "Include clear opt-out courtesy for SMS messages."
        ],
        clarifyingStep: "Ask me the top 2 reasons prospects say 'let me think about it' before buying from me.",
        whyItMatters: "Often 30–50% of lost revenue isn't a 'No'—it's just someone whose kid walked in the room while they were filling out your form.",
        beginnerTip: "If you use SMS, make sure your prompt reminds you to ask permission on the form ('Text me updates about my request').",
        recommendedTools: ["Email & SMS Automation", "Gemini"],
        problemTags: ["leads-go-cold", "traffic-no-sales"],
        expertExample: `**24-Hr SMS:** "Hi [Name], Steven with [Business]—just checking if you had any questions about the estimate we sent over? Happy to jump on a quick 5-min call if helpful."`
      },
      {
        id: "4.3",
        title: "Simple Audience Segmentation Builder",
        intro: "Stop sending the exact same message to everyone—group contacts into 3 simple buckets that boost replies.",
        role: "You are a CRM and email segmentation specialist who builds clean, maintainable tagging systems for small teams.",
        context: "{{businessName}} wants to organize {{targetAudience}} inside {{toolStack}} so brand-new prospects, warm leads, and past customers get the right message at the right time.",
        task: "Design a lean 4-tag segmentation framework with trigger rules and tailored next-step messaging for each group.",
        action: [
          "Define 4 simple tags: New Explorer, Warm Prospect (Clicked/Replied), Active Client, Past Client",
          "Map the exact behavior or form click that applies each tag automatically",
          "Write 1 tailored 'next step' message angle for each segment",
          "Create a clean naming convention rule (e.g., `status:warm`, `interest:install`) so tags stay tidy",
          "Document the full tag map in a Superhuman Docs reference table"
        ],
        outputFormat: "4-Segment Architecture Table (Tag Name, Trigger Rule, What They Receive, Goal Action).",
        constraints: [
          "Keep it under 6 tags total—beginners fail when they invent 40 complicated tags.",
          "Must be easy to set up in any standard email or CRM tool."
        ],
        clarifyingStep: "Ask me if I sell 1 main service/offer or 2–3 distinct service lines (e.g., repair vs. replacement).",
        whyItMatters: "Sending a 'New Customer Welcome' promo to someone who already paid you last month hurts trust. Clean tags make small lists feel personal.",
        beginnerTip: "Start with just two tags: `lead` and `customer`. You can add interest tags later once your flow is running smoothly.",
        recommendedTools: ["Email & SMS Automation", "Superhuman Docs", "Gemini"],
        problemTags: ["leads-go-cold"],
        expertExample: `**Tag:** \`status:quoted\` → Stops generic newsletter → Triggers 3-step Quote Follow-Up → Switches to \`status:customer\` once invoice paid.`
      }
    ]
  },
  {
    id: 5,
    title: "Design and Create Images",
    subtitle: "Visuals That Explain Value Fast",
    description: "Turn complex services into clear, scroll-stopping graphics without hiring a design agency.",
    plainEnglish: "People judge credibility in 3 seconds by what they see. Clean before-and-after graphics, simple diagrams, and helpful screenshots prove your value faster than paragraphs of text.",
    solvesProblem: "Fixes 'my business looks amateur online' or 'customers don't understand why my service costs more than the cheap guy.'",
    phase: 3,
    coreTools: ["Gemini", "Visual & Video Studio", "Superhuman Docs"],
    glossary: [
      { term: "Visual Anchor", meaning: "A clean image or diagram next to your headline that immediately shows the problem you fix or the result you deliver." },
      { term: "Annotation", meaning: "Adding simple arrows, numbers, or callout boxes on a photo or screenshot to show a customer exactly what to look at." }
    ],
    prompts: [
      {
        id: "5.1",
        title: "Brand Visual & AI Image Prompt Kit",
        intro: "Create a repeatable look-and-feel plus ready-to-use AI image prompts for your social posts and pages.",
        role: "You are a brand art director who helps non-designers maintain a sharp, trustworthy visual identity across every channel.",
        context: "{{businessName}} ({{businessType}}) wants consistent, professional imagery for {{productName}} across social media, emails, and {{toolStack}} pages without spending hours designing.",
        task: "Define a 3-color + 2-font brand kit, 5 reusable layout templates, and 5 copy-paste AI image generation prompts.",
        action: [
          "Recommend a trustworthy 3-color palette and clean font pairing suited for {{businessType}}",
          "Outline 5 reusable visual templates (Quote Card, Before/After, 3-Step Checklist, Client Win, Offer Promo)",
          "Write 5 detailed AI image-generation prompts tailored to {{targetAudience}} and {{location}}",
          "Include strict aspect ratio guidance (16:9 web, 1:1 feed, 9:16 stories/reels)",
          "Add simple layout rules (margins, contrast, max 8 words per graphic)"
        ],
        outputFormat: "Mini Brand Style Guide + 5 Template Wireframes + 5 Copy-Paste AI Image Prompts.",
        constraints: [
          "Keep graphics clean and readable on a phone screen—never cram paragraphs onto an image.",
          "Avoid cheesy stock-photo poses in AI prompts; aim for authentic, editorial lighting."
        ],
        clarifyingStep: "Ask me what colors I already use (logo/truck/website) or what mood I want (bold & modern vs. warm & neighborly).",
        whyItMatters: "Visual consistency makes a 1-person business look as established as a regional leader—which directly supports higher pricing (Topic 2).",
        beginnerTip: "Once you pick 2 brand colors and 1 style, save them at the top of your Superhuman Docs workspace so every graphic matches effortlessly.",
        recommendedTools: ["Gemini", "Visual & Video Studio", "Superhuman Docs"],
        problemTags: ["traffic-no-sales", "invisible-online"],
        expertExample: `**AI Image Prompt:** "Editorial documentary photo of a friendly HVAC technician explaining a digital thermostat diagnostic to a smiling homeowner in a bright modern kitchen, natural window light, crisp detail, 16:9."`
      },
      {
        id: "5.2",
        title: "1-Image Value Infographic Designer",
        intro: "Turn your process into one simple visual diagram so prospects immediately see why your system works.",
        role: "You are an information designer who simplifies multi-step services into crystal-clear, scannable visual roadmaps.",
        context: "{{targetAudience}} often feels confused about how {{businessName}} delivers results with {{productName}}. We want a visual blueprint to embed on our {{toolStack}} pages and inside Superhuman Docs.",
        task: "Design a step-by-step 'How It Works' infographic blueprint showing Current Problem → 3-Step Process → Finished Outcome.",
        action: [
          "Condense your delivery process into exactly 3 or 4 simple named stages",
          "Write a 6-word label + 12-word explanation for each stage",
          "Design a visual 'Before (Chaos) vs. After (Calm System)' comparison strip",
          "Include 2 proof anchors (e.g., timeframe or guarantee) at the bottom",
          "Provide both a Canva/slide layout plan AND an AI diagram prompt"
        ],
        outputFormat: "Text Blueprint by Zone (Header, Before/After, 3-Step Flow, Proof Footer) + Ready AI Diagram Prompt.",
        constraints: [
          "If a stranger cannot understand the visual in 5 seconds, simplify the text.",
          "Limit total copy on the graphic to under 90 words."
        ],
        clarifyingStep: "Ask me to list the 3 main steps a customer goes through from first contact to finished result.",
        whyItMatters: "A great diagram does the heavy lifting on sales pages (Topic 7) and sales calls—it proves you have a repeatable system, not guesswork.",
        beginnerTip: "Even a clean 3-box slide exported as an image works wonders on your landing page!",
        recommendedTools: ["Gemini", "Visual & Video Studio", "Funnel / Page Builder"],
        problemTags: ["traffic-no-sales"],
        expertExample: `**3-Step Graphic:** Step 1: 15-Min Diagnostic → Step 2: Custom System Setup (48 Hrs) → Step 3: 24/7 Automated Follow-Up.`
      },
      {
        id: "5.3",
        title: "Annotated Tutorial & Demo Guide Builder",
        intro: "Create helpful step-by-step visual walkthroughs that position you as the trusted guide (and earn affiliate trust).",
        role: "You are a technical educator who turns software or service walkthroughs into friendly, mistake-proof visual guides.",
        context: "{{businessName}} wants to teach {{targetAudience}} how to solve {{mainChallenge}} using visual tutorials stored in {{toolStack}}—naturally introducing recommended tools where helpful.",
        task: "Plan a repeatable visual tutorial system with top 8 tutorial ideas, screenshot callout rules, and natural tool-recommendation placement.",
        action: [
          "Generate 8 high-value 'How To' tutorial topics that solve immediate problems for {{targetAudience}}",
          "Define a 5-frame screenshot/photo structure (Hook → Setup → Key Click → Common Mistake → Result)",
          "Create an annotation rulebook (1 numbered circle + 1 short arrow per frame)",
          "Write a natural, transparent disclosure and recommendation box for any affiliate tools featured",
          "Format as a reusable SOP template inside Superhuman Docs"
        ],
        outputFormat: "8 Tutorial Topics List + 5-Frame Visual SOP + Ethical Tool Recommendation Callout.",
        constraints: [
          "Always solve the reader's problem first—never push a tool link without teaching genuine value.",
          "Keep visual steps beginner-friendly."
        ],
        clarifyingStep: "Ask me which 1 or 2 tools or workflows my audience asks me 'how do you do that?' about most often.",
        whyItMatters: "Teaching with real screenshots builds instant authority. Readers who learn from your guides naturally trust your offers (Topic 2) and tool links.",
        beginnerTip: "Use your built-in Mac/Windows screenshot markup tool or any simple screen recorder—no fancy software required to start.",
        recommendedTools: ["Superhuman Docs", "Visual & Video Studio", "Gemini"],
        problemTags: ["invisible-online", "overwhelmed-random"],
        expertExample: `**Tutorial #1:** "How to Organize Your Weekly Lead Follow-Up in 10 Minutes Inside Superhuman Docs (Free Template Included)."`
      }
    ]
  },
  {
    id: 6,
    title: "Shoot and Publish Videos",
    subtitle: "High-Trust Content on Camera",
    description: "Let prospects see and hear the real person behind the business so trust builds before you ever meet.",
    plainEnglish: "Video is the fastest shortcut to 'know, like, and trust.' You don't need studio lighting—just a phone, clear audio, and answers to the exact questions customers already ask you.",
    solvesProblem: "Fixes 'strangers treat me like just another price quote' and builds organic, compounding search traffic.",
    phase: 3,
    coreTools: ["Visual & Video Studio", "Gemini", "Superhuman Docs"],
    glossary: [
      { term: "Pattern Interrupt / Hook", meaning: "The first 3–10 seconds of a video that directly names a problem so the right viewer stops scrolling." },
      { term: "B-Roll", meaning: "Quick clips of you working, pointing at a screen, or showing a finished job while your voice keeps explaining." }
    ],
    prompts: [
      {
        id: "6.1",
        title: "Dual Video Script Generator (Short + YouTube)",
        intro: "Script both a punchy 45-second vertical video and a deeper 4-minute trust-building video from one topic.",
        role: "You are a video storyteller who helps camera-shy business owners sound natural, clear, and trustworthy without cheesy acting.",
        context: "{{businessName}} wants to publish helpful videos for {{targetAudience}} in {{location}} that drive traffic toward {{productName}} inside {{toolStack}}.",
        task: "Write two matched scripts on one topic: a 45-second Short/Reel script AND a 4-minute YouTube/educational video script.",
        action: [
          "Write a 45-second Vertical Video script (0–5s Hook, 5–35s 1 Clear Tip, 35–45s Next Step CTA)",
          "Write a 4-minute YouTube script (0–15s Hook, 15s–3:15 Teaching with Real Example, 3:15–4:00 Calm CTA)",
          "Include simple bullet-point talking notes (so you don't sound like you're reading a teleprompter)",
          "Suggest 3 easy phone B-roll shots to film on the job or at your desk",
          "Write a 1-sentence pinned comment CTA linking to your funnel"
        ],
        outputFormat: "1) 45s Short/Reel Script + Talking Bullets, 2) 4-Min YouTube Script + B-Roll Cues, 3) Pinned Comment CTA.",
        constraints: [
          "Keep sentences short and conversational—no 'Hey guys, welcome back to my channel, smash that subscribe button!' intros.",
          "Start directly with the customer's problem in the first 3 seconds."
        ],
        clarifyingStep: "Ask me what common mistake or question customers ask me every single week.",
        whyItMatters: "One honest 4-minute video answering a real buyer question can bring you warm, pre-sold leads for years.",
        beginnerTip: "Film using the bullet-point outline instead of reading word-for-word—your natural personality is your biggest advantage.",
        recommendedTools: ["Visual & Video Studio", "Gemini", "Superhuman Docs"],
        problemTags: ["invisible-online", "traffic-no-sales"],
        expertExample: `**0–3s Hook:** "If your AC runs all day and the house still feels sticky, check this $0 fix before calling anyone."`
      },
      {
        id: "6.2",
        title: "YouTube & Local Search Video Optimizer",
        intro: "Package your video titles, descriptions, and thumbnails so local buyers actually find and click them.",
        role: "You are a YouTube and local video SEO specialist focused on converting views into real inquiries.",
        context: "{{businessName}} creates videos for {{targetAudience}} in {{location}} and wants them to rank for buyer-intent terms and send traffic to {{toolStack}}.",
        task: "Create a complete Video Publishing & Optimization Kit for your next video.",
        action: [
          "Write 5 clickable, honest title options pairing Topic 3 keywords with curiosity",
          "Draft a structured YouTube description (top 2 lines hook + link, timestamps, local service summary)",
          "Suggest 15 relevant tags + local geographic modifiers",
          "Design 3 high-contrast thumbnail concepts (max 3–4 words of text on image)",
          "Script a 10-second verbal CTA to add near the 70% mark of the video"
        ],
        outputFormat: "5 Title Options, Copy-Paste Description Template, 15 Tags, 3 Thumbnail Text Mockups, Mid-Roll CTA.",
        constraints: [
          "Thumbnail text must complement the title—never repeat the exact same words.",
          "Put the call-to-action link in the very first 2 lines of the description."
        ],
        clarifyingStep: "Ask me the main topic of the video I'm about to publish and the link I want viewers to click.",
        whyItMatters: "Great videos sit at zero views without searchable titles and clear thumbnails. Optimization turns one recording into evergreen search traffic.",
        beginnerTip: "Keep thumbnail text to 2–4 big, bold words (e.g., 'COSTLY MISTAKE' or '3-STEP FIX') so it's readable on a tiny phone screen.",
        recommendedTools: ["Gemini", "Visual & Video Studio"],
        problemTags: ["invisible-online"],
        expertExample: `**Title:** "3 Signs Your Water Heater Is About to Fail (Austin Homeowner Checklist)"\n**Thumbnail Text:** "REPLACE OR REPAIR?"`
      },
      {
        id: "6.3",
        title: "Effortless Customer Testimonial Video System",
        intro: "Collect authentic 60-second customer story videos without awkwardness—and use them everywhere.",
        role: "You are a social proof strategist who helps businesses capture natural, believable customer stories on a regular rhythm.",
        context: "{{businessName}} has happy customers among {{targetAudience}}, but rarely captures their stories on video. We want a simple workflow using {{toolStack}}.",
        task: "Build a friction-free Testimonial Capture System including exact ask scripts, 4 interview questions, and repurposing checklist.",
        action: [
          "Write a casual SMS/email ask sent right at the moment of peak customer happiness",
          "Provide 4 natural interview questions that pull out a Before → Change → Outcome story",
          "Create a 3-bullet 'how to film on your phone in 60 seconds' tip card for customers",
          "Write a simple 1-sentence permission/release note customers can reply 'Yes' to",
          "Map 5 places to reuse each video clip (landing page, email Day 5, social reel, Google Business Profile)"
        ],
        outputFormat: "Ask Message Templates, 4-Question Interview Guide, Mobile Filming Tips, Permission Text, and 5-Channel Repurpose Checklist.",
        constraints: [
          "Never ask 'Can you give me a testimonial?'—ask 'Would you share 60 seconds about what changed for you?'",
          "Questions must pull out concrete results, not generic 'they were nice!' praise."
        ],
        clarifyingStep: "Ask me whether I see customers in person (on-site) or remotely (Zoom/phone).",
        whyItMatters: "One real customer saying 'Here was my problem and how fast they fixed it' outsells 100 marketing claims.",
        beginnerTip: "Right after a customer says 'Thank you so much!', pull out your phone (or send a 1-link prompt) right then—don't wait two weeks!",
        recommendedTools: ["Visual & Video Studio", "Superhuman Docs", "Email & SMS Automation"],
        problemTags: ["ready-to-scale", "traffic-no-sales"],
        expertExample: `**4 Questions:** 1) What was happening before you called us? 2) What made you hesitate? 3) What stood out during the work? 4) What would you tell a neighbor considering us?`
      }
    ]
  },
  {
    id: 7,
    title: "Build Funnel Pages",
    subtitle: "Pages That Guide Visitors to Act",
    description: "Build focused pages with one clear job: turn curious visitors into leads, bookings, or buyers.",
    plainEnglish: "A regular website has 12 distracting links. A funnel page removes the clutter and gently walks one type of visitor through Problem → Proof → One Clear Action.",
    solvesProblem: "Fixes 'we get website visitors every week, but almost nobody fills out the form or calls.'",
    phase: 2,
    coreTools: ["Funnel / Page Builder", "Gemini", "Superhuman Docs"],
    glossary: [
      { term: "Opt-In / Lead Magnet Page", meaning: "A short, focused page offering a helpful checklist, guide, or instant estimate in exchange for a name and email/phone." },
      { term: "Above the Fold", meaning: "Everything a visitor sees on their screen right when the page loads, before scrolling down." }
    ],
    prompts: [
      {
        id: "7.1",
        title: "High-Converting Opt-In / Lead Page Blueprint",
        intro: "Design a focused 1-page lead capture blueprint that turns cold traffic into warm leads at 20–40%+.",
        role: "You are a conversion-rate optimization (CRO) architect specializing in clean, mobile-first lead generation pages.",
        context: "{{businessName}} wants a focused lead/quote capture page for {{targetAudience}} in {{location}} built with {{toolStack}}. Our goal is to solve {{mainChallenge}}.",
        task: "Create a complete wireframe and copy blueprint for a high-converting Opt-In / Request page.",
        action: [
          "Design the Above-the-Fold Hero (Eyebrow qualifier, Outcome Headline, Subheadline, Visual Preview, CTA Button)",
          "Write 4 curiosity-based bullet points explaining what they get immediately",
          "Place a clean 2–3 field form (only ask what you truly need right now)",
          "Add 3 micro-trust markers (local years/reviews, zero-spam promise, fast response time)",
          "Script the Thank-You Page headline and immediate next step (e.g., calendar link or call number)"
        ],
        outputFormat: "Section-by-Section Wireframe + Ready-to-Paste Copy + Thank-You Page Script.",
        constraints: [
          "One page = one single goal. Remove top navigation menus that leak traffic away.",
          "Optimize first for mobile thumbs (short paragraphs, bold subheads, single-column form)."
        ],
        clarifyingStep: "Ask me what free lead magnet, diagnostic audit, or fast-quote promise visitors receive when they submit the form.",
        whyItMatters: "Sending paid ads or social traffic to a cluttered homepage wastes clicks. A focused landing page captures leads so Topics 4 and 9 can convert them.",
        beginnerTip: "Keep your form to 2 or 3 fields max (Name + Email or Phone). Every extra required field drops conversions.",
        recommendedTools: ["Funnel / Page Builder", "Gemini", "Superhuman Docs"],
        problemTags: ["traffic-no-sales"],
        expertExample: `**Hero:** "[Austin Homeowners] Get Your Free 15-Point Pre-Summer AC Check & Flat-Rate Quote in 60 Seconds"\n**Thank-You Page:** "Got it! Check your inbox—or grab a priority slot on our calendar right below."`
      },
      {
        id: "7.2",
        title: "Sales & Booking Page Psychology Builder",
        intro: "Structure an offer or booking page that answers every silent objection and makes saying 'Yes' feel safe.",
        role: "You are a buyer-psychology specialist who designs ethical, high-trust sales and appointment pages.",
        context: "{{businessName}} is presenting {{productName}} (${{productPrice}}) to {{targetAudience}} in {{location}}. Visitors often hesitate before committing. We are building this page in {{toolStack}}.",
        task: "Map the complete 8-section Sales / Booking Page flow with persuasive copy blocks and objection-handling FAQs.",
        action: [
          "Section 1–2: Empathy Hook (Name the frustration) + The New Solution",
          "Section 3–4: How It Works (3 simple steps) + Full Value Stack Presentation",
          "Section 5–6: Real Proof / Case Snapshot + Who This Is For (and Not For)",
          "Section 7: Risk-Reversal Guarantee + Top 5 Honest FAQs",
          "Section 8: Final Decision CTA + Instant Chat / Support Fallback Line"
        ],
        outputFormat: "8-Section Sales Page Blueprint with complete placeholder-free draft copy and FAQ answers.",
        constraints: [
          "Respect the reader's intelligence—answer objections honestly instead of hiding prices or terms.",
          "Include clear scannable subheadings for people who skim before reading."
        ],
        clarifyingStep: "Ask me the #1 objection I hear right before someone decides to book or pay.",
        whyItMatters: "Your sales page is your best salesperson working 24/7 while you sleep or serve other clients.",
        beginnerTip: "Include a short 'Who this is NOT for' box—ironically, telling wrong-fit buyers politely builds huge trust with the right buyers!",
        recommendedTools: ["Funnel / Page Builder", "Gemini"],
        problemTags: ["traffic-no-sales"],
        expertExample: `**FAQ Example:** "What if I'm not tech-savvy? Every step is mapped in plain English, and if you ever get stuck, you can book a 1-on-1 setup check-in."`
      },
      {
        id: "7.3",
        title: "End-to-End Customer Journey Funnel Map",
        intro: "Connect separate pages into one smooth journey from stranger → lead → first win → loyal repeat customer.",
        role: "You are a systems architect who connects marketing pages, follow-ups, and upsells into one simple, leak-free customer journey.",
        context: "{{businessName}} wants its pages, emails, and follow-up tools in {{toolStack}} connected seamlessly so no visitor hits a dead end.",
        task: "Map a complete 4-stage Customer Journey Funnel (Discovery → Lead Capture → Core Offer → Follow-Up/Retention) with conversion benchmarks.",
        action: [
          "Map Stage 1: Traffic Sources (Google, Social, Referrals) entering a single front door",
          "Map Stage 2: Lead Capture / Diagnostic Quiz + Immediate Thank-You Page",
          "Map Stage 3: Core Offer Booking or Starter Purchase + Confirmation Automation",
          "Map Stage 4: What happens if they say 'No' (Topic 4 nurture) vs. 'Yes' (Topic 9 onboarding)",
          "Include realistic benchmark conversion rates for each step to spot leaks early"
        ],
        outputFormat: "Visual Text Flowchart + Step-by-Step Automation Handoffs + Benchmark Table for Superhuman Docs.",
        constraints: [
          "Keep the funnel to 3–4 pages max—avoid complex 12-upsell spiderwebs.",
          "Every step must specify what triggers the next step automatically."
        ],
        clarifyingStep: "Ask me whether customers buy directly online OR book an estimate/strategy call first.",
        whyItMatters: "Random pages don't make a system. Seeing the whole map on one screen removes tech fear and reveals exactly what to build next.",
        beginnerTip: "Draw this 4-box map on a single sheet of paper or inside Superhuman Docs before building a single button in software.",
        recommendedTools: ["Superhuman Docs", "Funnel / Page Builder", "Email & SMS Automation", "Gemini"],
        problemTags: ["overwhelmed-random", "leads-go-cold"],
        expertExample: `**4-Box Flow:** Local Post/Video → 60s Quote/Guide Page (25% opt-in) → Calendar/Offer Page (20% book) → Automated SMS/Email Confirmation.`
      }
    ]
  },
  {
    id: 8,
    title: "Social Media Channel",
    subtitle: "Consistent Signal Without Burnout",
    description: "Build local visibility and daily conversations without dancing on camera or posting 5 times a day.",
    plainEnglish: "Social media isn't about chasing viral likes—it's about showing up consistently with helpful proof so people in your market remember you when they need help.",
    solvesProblem: "Fixes 'we post randomly once a month and get 2 likes and zero customers.'",
    phase: 3,
    coreTools: ["Superhuman Docs", "Gemini", "Visual & Video Studio"],
    glossary: [
      { term: "80/20 Value Rule", meaning: "80% helpful tips, stories, and behind-the-scenes proof; 20% direct invitations to book, download, or buy." },
      { term: "Social-to-Pipeline Bridge", meaning: "Moving an interested commenter into a friendly DM, text, or email opt-in instead of hoping they search your website later." }
    ],
    prompts: [
      {
        id: "8.1",
        title: "Stress-Free 30-Day Content Calendar",
        intro: "Plan an entire month of practical, authority-building posts in 15 minutes—balanced 80/20 between value and offers.",
        role: "You are a pragmatic social media strategist for local businesses, consultants, and creators with limited time.",
        context: "{{businessName}} ({{businessType}}) wants consistent visibility with {{targetAudience}} in {{location}} that sends traffic to {{productName}} via {{toolStack}}.",
        task: "Generate a realistic 30-day content calendar (3–4 posts per week = 16 strong posts) with themes, hooks, and CTAs.",
        action: [
          "Assign 4 simple weekly pillars (Monday Myth/Tip, Wednesday Behind-the-Scenes, Friday Client Win, Weekend Story/Offer)",
          "Write 16 complete post concepts with opening hooks and clear CTAs",
          "Maintain an 80% teach/prove, 20% direct offer balance",
          "Include simple visual suggestions (phone photo, screenshot, 30s clip)",
          "Format as a Superhuman Docs Content Calendar table with Status and Link columns"
        ],
        outputFormat: "4-Pillar Weekly Rhythm + 16-Post Ready-to-Use Calendar Table formatted for Superhuman Docs.",
        constraints: [
          "Focus on 3–4 quality posts per week rather than burning out with 30 forced daily posts.",
          "Ban generic 'Happy Monday!' filler posts."
        ],
        clarifyingStep: "Ask me which 1 or 2 platforms my buyers actually check (Facebook, Instagram, LinkedIn, Nextdoor, or YouTube).",
        whyItMatters: "Consistency beats intensity. Three helpful posts a week for 90 days changes how an entire local market sees you.",
        beginnerTip: "Batch-write 4 posts on Sunday in 30 minutes using your Superhuman Docs calendar, then forget about content for the rest of the week.",
        recommendedTools: ["Superhuman Docs", "Gemini", "Visual & Video Studio"],
        problemTags: ["invisible-online", "overwhelmed-random"],
        expertExample: `**Wed Post (Behind-the-Scenes):** Photo of diagnostic tool + Caption: "What $0 in maintenance looks like after 3 summers—and the 10-minute habit that prevents this $2,200 repair."`
      },
      {
        id: "8.2",
        title: "Conversation-Starter Engagement Posts",
        intro: "Create posts that spark real comments and neighborhood conversations—instead of silent scrolling.",
        role: "You are a community engagement writer who sparks natural discussions that algorithms love and buyers notice.",
        context: "{{businessName}}'s posts currently get little interaction from {{targetAudience}} in {{location}}. We want organic conversations that warm up leads for {{toolStack}}.",
        task: "Write 8 plug-and-play conversation-starter post templates customized for {{businessType}}.",
        action: [
          "Create 2 'This or That' preference polls",
          "Create 2 'Unpopular Honest Truth' industry opinion posts",
          "Create 2 'Quick Ask / Recommendation' community posts",
          "Create 2 'Spot the Mistake / Before & After' visual curiosity posts",
          "Include a friendly 1-line comment reply strategy for turning commenters into conversations"
        ],
        outputFormat: "8 Ready-to-Post Engagement Templates + Comment-to-DM Follow-Up Guide.",
        constraints: [
          "Questions must take under 5 seconds for a busy person to answer in the comments.",
          "Stay warm, respectful, and helpful—avoid rage-bait."
        ],
        clarifyingStep: "Ask me one common debate or preference my customers always have opinions about.",
        whyItMatters: "When people comment on your post, platforms show your next 3 posts—including your offer posts—to those exact people.",
        beginnerTip: "Reply to every single comment within 24 hours with a follow-up question—that doubles your post's organic reach.",
        recommendedTools: ["Gemini", "Superhuman Docs"],
        problemTags: ["invisible-online"],
        expertExample: `**Poll Post:** "Homeowners in [City]: Would you rather pay $19/mo for zero-surprise checkups or pay once only when something breaks? Curious which camp you're in!"`
      },
      {
        id: "8.3",
        title: "Authentic Social-to-Client DM Bridge",
        intro: "Turn likes, comments, and followers into real booked calls or sales without feeling spammy or pushy.",
        role: "You are a relationship-based social selling mentor who teaches conversational, zero-pressure DM workflows.",
        context: "{{businessName}} gets views and occasional messages on social media but lacks a repeatable bridge into {{toolStack}} and {{productName}}.",
        task: "Build a respectful 4-step Social-to-Booking workflow with exact DM conversation scripts.",
        action: [
          "Create a 'Comment a keyword' (e.g. 'ROADMAP' or 'CHECKLIST') post CTA strategy",
          "Write 3 warm opener DMs when someone comments, likes repeatedly, or follows",
          "Write 3 natural discovery questions to diagnose if they actually need help",
          "Script the permission-based transition ('Want me to send the link / grab 10 minutes?')",
          "Include a simple Superhuman Docs DM follow-up tracker template"
        ],
        outputFormat: "4-Step Conversation Playbook + Copy-Paste DM Scripts + 5-Column DM Tracker Table.",
        constraints: [
          "Zero cold-pitching strangers with walls of text.",
          "Always ask permission before dropping a link or calendar invite."
        ],
        clarifyingStep: "Ask me what low-friction freebie or conversation starter I'd feel comfortable sending people in DMs.",
        whyItMatters: "Most beginners think social sales happen automatically from links in bio. In reality, 70% of early deals happen inside simple, helpful DMs.",
        beginnerTip: "Keep your DM messages short like texts—1 or 2 sentences at a time, ending with an easy yes/no question.",
        recommendedTools: ["Superhuman Docs", "Gemini", "Email & SMS Automation"],
        problemTags: ["traffic-no-sales", "leads-go-cold"],
        expertExample: `**Permission Transition:** "Makes total sense. I actually put together a 1-page breakdown on how we fix that—want me to shoot the link over so you can look at it whenever you have 2 minutes?"`
      }
    ]
  },
  {
    id: 9,
    title: "Follow Up Workflows",
    subtitle: "Never Lose a Lead Again",
    description: "Close the loop with automated follow-ups, repeat-client check-ins, and a visual sales pipeline.",
    plainEnglish: "The fortune—and peace of mind—is in the follow-up. These workflows catch missed inquiries automatically, guide quotes to a decision, and turn one-time buyers into repeat clients and referrals.",
    solvesProblem: "Fixes 'we spend money/time getting leads, then forget to follow up twice and lose the job to someone slower.'",
    phase: 2,
    coreTools: ["Email & SMS Automation", "Google Workspace", "Superhuman Docs"],
    glossary: [
      { term: "Speed-to-Lead", meaning: "How fast a new caller or form lead hears back. Replying within 5 minutes increases close rates dramatically." },
      { term: "Sales Pipeline", meaning: "Visual columns (New Lead → Contacted → Quote Sent → Won) showing every opportunity so nobody gets forgotten." }
    ],
    prompts: [
      {
        id: "9.1",
        title: "Missed-Call & 90-Day Lead Nurture Engine",
        intro: "Install an instant missed-call / new-lead response plus a calm 90-day check-in rhythm so cold leads come back ready to buy.",
        role: "You are a marketing automation architect specializing in local service speed-to-lead and long-term lead nurturing.",
        context: "{{businessName}} loses opportunities when leads go unanswered or need more time to decide. Using {{toolStack}}, we want an automated safety net for {{targetAudience}} in {{location}}.",
        task: "Design an Instant Lead Response (under 2 minutes) plus a respectful 90-day stay-in-touch workflow.",
        action: [
          "Script the Instant Missed-Call Text-Back & Form Confirmation message",
          "Map Day 1–14 active quote follow-ups (alternating helpful value + quick check-in)",
          "Map Day 15–90 monthly 'still here when you need us' value touches",
          "Design 3 simple chatbot / SMS quick-reply qualification questions (Name, Need, Urgency)",
          "Specify clear 'Stop automation when customer replies or books' rules"
        ],
        outputFormat: "Instant Response Scripts + 90-Day Touchpoint Schedule Table + Quick-Qualification Flow.",
        constraints: [
          "Keep SMS messages under 160–240 characters so they feel human and readable.",
          "Never sound robotic or nag—every long-term touch should share a useful tip or seasonal reminder."
        ],
        clarifyingStep: "Ask me how long a typical customer takes to decide after asking for pricing (same day, 1 week, or 1–3 months).",
        whyItMatters: "Up to 50% of buyers hire the first business that responds clearly—and another 30% buy weeks later only because you stayed politely visible.",
        beginnerTip: "Even before buying fancy software, saving these 3 quick text templates in your phone's Notes app lets you reply in 10 seconds!",
        recommendedTools: ["Email & SMS Automation", "Google Workspace", "Gemini"],
        problemTags: ["leads-go-cold"],
        expertExample: `**Instant Missed-Call Text:** "Sorry we missed your call at [Business Name]! We're helping a customer right now—how can we help you today? Reply here and we'll take care of you."`
      },
      {
        id: "9.2",
        title: "Post-Purchase Retention & Referral Machine",
        intro: "Turn every satisfied buyer into a repeat customer, 5-star Google review, and warm word-of-mouth referral.",
        role: "You are a customer experience and lifetime-value strategist who builds memorable onboarding and referral loops.",
        context: "{{businessName}} completes great work for {{targetAudience}}, then often loses touch afterward. We want an automated post-purchase workflow tracked in {{toolStack}}.",
        task: "Create a 4-stage Post-Purchase Experience covering Day 1 Onboarding, Day 7 Review Ask, Day 30 Check-In, and Quarterly Value Touch.",
        action: [
          "Day 0–1: 'What to Expect Next' welcome message that eliminates buyer's remorse",
          "Day 3–7: Simple 1-click Google Review & quick feedback ask",
          "Day 30: Helpful maintenance/check-in tip + gentle referral reminder ('Know anyone else dealing with X?')",
          "Quarterly: Seasonal reminder or loyalty cross-sell / upgrade invitation",
          "Format as a repeatable Customer Retention SOP in Superhuman Docs"
        ],
        outputFormat: "4-Stage Post-Purchase Timeline + Copy-Paste Messages + Referral Script.",
        constraints: [
          "Deliver real post-purchase care BEFORE asking for a review or referral.",
          "Make leaving a Google review a single direct tap."
        ],
        clarifyingStep: "Ask me what happens right after a customer pays me today, and whether I offer repeat maintenance or related services.",
        whyItMatters: "Keeping and delighting an existing customer costs a fraction of finding a stranger—and 5-star reviews power Topic 3 (local search) and Topic 7 (page trust).",
        beginnerTip: "Create your direct Google Review short link today and save it in Superhuman Docs so it's always one copy-paste away.",
        recommendedTools: ["Email & SMS Automation", "Google Business Profile", "Superhuman Docs"],
        problemTags: ["ready-to-scale"],
        expertExample: `**Day 7 Review Text:** "Hey [Name], thanks again for trusting us with your [project]! If everything is running great, would you mind tapping this 30-second link to share a quick review? It helps neighbors find us: [Link]"`
      },
      {
        id: "9.3",
        title: "Zero-Leak Sales Pipeline Creator",
        intro: "Build a visual 6-stage pipeline board so you always know who needs a call today and how much revenue is in progress.",
        role: "You are a sales operations coach who builds simple, visual CRM pipelines that busy founders actually update daily.",
        context: "{{businessName}} wants to stop tracking leads in random texts, sticky notes, and inbox threads. We want a crystal-clear pipeline managed in {{toolStack}}.",
        task: "Design a 6-stage Sales Pipeline with exact entry rules, next actions, stale-lead alerts, and win/loss tracking.",
        action: [
          "Define 6 clear stages: New Inquiry → Contacted → Qualified/Booked → Quote/Offer Sent → Won → Nurture Later",
          "Define the exact 'Next Action' and max waiting time allowed in each stage",
          "Write a 10-minute morning 'Move the Pipeline' daily routine",
          "Create a simple Win/Loss reason dropdown list (Price, Timing, No Response, Great Fit) to learn from every deal",
          "Format as a clean Kanban / Table layout ready for Superhuman Docs or Google Sheets"
        ],
        outputFormat: "6-Stage Pipeline Architecture Table + Daily 10-Minute Morning Routine + Win/Loss Tracker.",
        constraints: [
          "No bloated 18-stage enterprise CRM—if it takes more than 10 seconds to update a lead, nobody will use it.",
          "Every open lead must always have a 'Next Follow-Up Date' attached."
        ],
        clarifyingStep: "Ask me roughly how many active leads or quotes I juggle in a typical week.",
        whyItMatters: "A simple pipeline gives you instant calm—you stop waking up at 2am wondering 'Did I ever call Sarah back?' because the board remembers for you.",
        beginnerTip: "You can run this entire 6-column pipeline inside a single Superhuman Docs table or Google Sheet from Day 1.",
        recommendedTools: ["Superhuman Docs", "Google Sheets", "Email & SMS Automation"],
        problemTags: ["leads-go-cold", "overwhelmed-random"],
        expertExample: `**Golden Rule of the Pipeline:** No contact is allowed to sit in 'Quote Sent' without a scheduled Next Follow-Up Date (Day 2, Day 5, Day 12).`
      }
    ]
  }
];
