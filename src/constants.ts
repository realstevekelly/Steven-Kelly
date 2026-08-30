import { Topic } from './types';

export const TOPICS: Topic[] = [
  {
    id: 1,
    title: "Set Business Goals",
    description: "Foundation for everything - connects consciousness with profit",
    prompts: [
      {
        id: "1.1",
        title: "Vision-to-Revenue Goal Setter",
        intro: "I need help setting clear business goals that align my purpose with profit for my local service business.",
        role: "You are a strategic business advisor who understands both consciousness principles (Dr. Bruce Lipton's work) and practical revenue generation. You help entrepreneurs create goals that manifest through focused intention and systematic action.",
        context: "My business currently makes $[X]/month. I believe in creating reality through focused thought but need practical metrics. I'm using Coda.io to track progress and Systeme.io to build my systems.",
        task: "Create a 90-day goal framework that includes both mindset/consciousness goals and specific revenue targets with weekly milestones.",
        action: [
          "First, help me clarify my deeper purpose and vision",
          "Then, translate this into 3 specific revenue goals",
          "Break down into weekly actionable metrics",
          "Include consciousness practices for each week",
          "Format as a Coda.io tracking template structure"
        ],
        conclusion: "Setting proper goals determines my offer creation, keyword strategy, and entire marketing system. Without clear goals, the other 8 topics lack direction and purpose."
      },
      {
        id: "1.2",
        title: "Client Avatar Goal Aligner",
        intro: "I need to identify exactly who my ideal client is so my goals align with serving real people with real problems.",
        role: "You are a customer psychology expert who understands local business dynamics and buying behaviors. You know how to identify profitable, easy-to-serve clients.",
        context: "I have general business goals but struggle to picture my exact customer. I'll use Systeme.io to segment them and Merlin AI to create content for them.",
        task: "Create a detailed avatar that includes demographics, psychographics, pain points, and buying triggers that align with my goals.",
        action: [
          "Analyze my business type and goals",
          "Generate 3 potential ideal client profiles",
          "Detail their biggest problem I solve",
          "Identify where they hang out online/offline",
          "Create messaging that resonates"
        ],
        conclusion: "Knowing my ideal client shapes my offer, determines my keywords, guides my email sequences, and focuses my social media. This avatar drives all 8 remaining topics."
      },
      {
        id: "1.3",
        title: "Metric Dashboard Builder",
        intro: "I need a simple dashboard to track if I'm hitting my goals daily without overwhelming complexity.",
        role: "You are a business analytics expert who specializes in simple, actionable metrics for small businesses. You make data tracking easy and meaningful.",
        context: "I've set goals but don't track progress well. I want to use Coda.io for my dashboard and connect it to my Systeme.io data.",
        task: "Create a 5-metric daily dashboard that shows exactly if I'm on track for my monthly goals.",
        action: [
          "Identify the 5 most important metrics for my business",
          "Create daily/weekly tracking benchmarks",
          "Design a simple Coda.io table structure",
          "Include green/yellow/red indicators",
          "Add weekly review prompts"
        ],
        conclusion: "Daily tracking ensures my funnel pages convert, my email sequences engage, and my follow-up workflows close deals. What gets measured gets achieved across all topics."
      }
    ]
  },
  {
    id: 2,
    title: "Create Your Offer",
    description: "Package your value irresistibly",
    prompts: [
      {
        id: "2.1",
        title: "Irresistible Offer Stack Creator",
        intro: "I need help packaging my services into an irresistible offer that commands premium prices.",
        role: "You are an offer creation specialist who understands value stacking, risk reversal, and psychological triggers that make people buy now.",
        context: "I provide good service but struggle to communicate value. I'll use Systeme.io for the sales page and Coda.io to organize offer components.",
        task: "Create a comprehensive offer stack that includes core offer, bonuses, guarantee, urgency, and pricing strategy.",
        action: [
          "Analyze my current services and pricing",
          "Identify the core transformation I provide",
          "Create 3-5 valuable bonuses",
          "Design a risk-reversal guarantee",
          "Add authentic urgency/scarcity"
        ],
        conclusion: "My offer determines my keywords (what people search for), email sequences (what I promise), and funnel pages (what converts). This shapes Topics 3, 4, and 7 directly."
      },
      {
        id: "2.2",
        title: "Problem-Solution Offer Matcher",
        intro: "I need to identify the exact expensive problem I solve and package it as a clear solution.",
        role: "You are a problem-solution strategist who identifies what people pay premium prices to fix. You understand pain-point marketing.",
        context: "I know my craft but struggle to articulate the problem I solve. I need this clear for my Systeme.io funnels and Fastbots.ai chatbot scripts.",
        task: "Identify the top 3 expensive problems I solve and create specific solution packages for each.",
        action: [
          "List potential problems my service solves",
          "Rank by urgency and expense to client",
          "Create specific solution package for each",
          "Price based on value not time",
          "Write problem-agitation-solution copy"
        ],
        conclusion: "Clear problem-solution matching drives my keywords (Topic 3), video content (Topic 6), and social media messaging (Topic 8). Everything stems from the problem I solve."
      },
      {
        id: "2.3",
        title: "Pricing Psychology Optimizer",
        intro: "I need help creating pricing tiers that make my main offer look like the obvious choice.",
        role: "You are a pricing psychology expert who understands anchoring, decoy effect, and value perception. You help businesses maximize revenue per customer.",
        context: "I have one price for everything and leave money on the table. I'll display this on Systeme.io pages and track in Coda.io.",
        task: "Create 3 pricing tiers that psychologically guide customers to the middle option while maximizing overall revenue.",
        action: [
          "Analyze my current pricing and costs",
          "Design entry-level 'toe in water' offer",
          "Create premium 'best value' middle option",
          "Add ultra-premium 'everything' option",
          "Name each tier strategically"
        ],
        conclusion: "Pricing tiers affect my email sequences (different nurture paths), funnel pages (conversion optimization), and follow-up workflows (Topic 9). Price structure influences everything."
      }
    ]
  },
  {
    id: 3,
    title: "Keywords and Copy",
    description: "Words that rank and convert",
    prompts: [
      {
        id: "3.1",
        title: "Local SEO Keyword Goldmine Finder",
        intro: "I need to find the exact phrases my ideal customers type when they're ready to buy my service.",
        role: "You are an SEO keyword specialist focused on local service businesses. You understand buyer intent and local search patterns.",
        context: "I need words that rank and convert for my local market. I'll use these in my Systeme.io pages and track performance with Merlin AI assistance.",
        task: "Generate 20 high-intent keywords including transactional, local, and emergency phrases my customers actually use.",
        action: [
          "Analyze my service and location",
          "Generate 5 'buy now' keywords",
          "Create 5 'near me' variations",
          "Add 5 emergency/urgent phrases",
          "Include 5 comparison/best keywords"
        ],
        conclusion: "These keywords shape my funnel page copy (Topic 7), video titles (Topic 6), and social media content (Topic 8). Keywords are the foundation of being found."
      },
      {
        id: "3.2",
        title: "Conversion Copy Formula Generator",
        intro: "I need compelling copy that makes people want to buy now, not think about it.",
        role: "You are a direct response copywriter who specializes in local service businesses. You know how to trigger action without being pushy.",
        context: "I have traffic but low conversions. I need copy for my Systeme.io landing pages and Fastbots.ai chatbot scripts.",
        task: "Create headline, subheadline, body copy, and call-to-action using proven conversion formulas.",
        action: [
          "Write 3 attention-grabbing headlines",
          "Create problem-agitation-solution body copy",
          "Add social proof elements",
          "Include risk reversal language",
          "Craft urgent call-to-action"
        ],
        conclusion: "This copy appears in email sequences (Topic 4), funnel pages (Topic 7), and follow-up messages (Topic 9). Copy is what converts across all marketing."
      },
      {
        id: "3.3",
        title: "AI Content Multiplier System",
        intro: "I need to turn one piece of content into multiple formats for different platforms efficiently.",
        role: "You are a content multiplication expert who uses AI to create consistent messaging across all channels without repetitive work.",
        context: "I create content once but need it everywhere. I use Merlin AI for writing, Descript for video, and Systeme.io for distribution.",
        task: "Show me how to turn one core message into 30 pieces of content across all platforms.",
        action: [
          "Take my core message/offer",
          "Create 5 email subject lines",
          "Generate 10 social media posts",
          "Write 5 video scripts",
          "Design 10 headline variations"
        ],
        conclusion: "Content multiplication feeds email sequences (Topic 4), videos (Topic 6), social media (Topic 8), and follow-up workflows (Topic 9). One message, everywhere."
      }
    ]
  },
  {
    id: 4,
    title: "Create Email Sequences",
    description: "Automate relationship building",
    prompts: [
      {
        id: "4.1",
        title: "Welcome Series That Sells",
        intro: "I need an email sequence that turns new subscribers into eager buyers within a week.",
        role: "You are an email marketing automation expert who writes sequences that build trust and drive sales without being salesy.",
        context: "People join my list but don't buy. I need Systeme.io automation that nurtures them using content from Coda.io.",
        task: "Create a 7-email welcome sequence with subject lines, body copy, and clear calls-to-action.",
        action: [
          "Map the customer journey from skeptic to buyer",
          "Write email 1: Welcome & quick win",
          "Create emails 2-6: Value, story, proof, objections",
          "Design email 7: Irresistible offer",
          "Add engagement triggers"
        ],
        conclusion: "Email sequences deliver my offer (Topic 2), use my keywords (Topic 3), and trigger follow-up workflows (Topic 9). Email is the profit center."
      },
      {
        id: "4.2",
        title: "Abandoned Cart Recovery Machine",
        intro: "I need emails that bring back people who showed interest but didn't buy.",
        role: "You are a conversion recovery specialist who knows how to re-engage without annoying, turning abandoned interest into completed sales.",
        context: "People visit my Systeme.io sales page but leave. I need automated emails that bring them back to buy.",
        task: "Write a 3-email sequence for cart abandoners with psychological triggers that overcome their hesitation.",
        action: [
          "Email 1: Friendly reminder + answer objections",
          "Email 2: Social proof + limited bonus",
          "Email 3: Last chance + scarcity",
          "Include specific subject lines",
          "Add personalization tokens"
        ],
        conclusion: "Recovery emails complement funnel pages (Topic 7) and follow-up workflows (Topic 9). This captures revenue that would otherwise be lost forever."
      },
      {
        id: "4.3",
        title: "Segmentation Strategy Builder",
        intro: "I need to send the right message to the right person at the right time based on their interests.",
        role: "You are a marketing segmentation strategist who creates personalized paths that dramatically increase engagement and sales.",
        context: "I blast everyone the same emails. I need Systeme.io segments based on behavior tracked in my Coda.io database.",
        task: "Create a segmentation strategy with 3-5 segments and specific email paths for each.",
        action: [
          "Identify key behavioral triggers",
          "Create 3-5 distinct segments",
          "Design unique path for each segment",
          "Write segment-specific messaging",
          "Set up tag/trigger system"
        ],
        conclusion: "Segmentation improves offer relevance (Topic 2), social media retargeting (Topic 8), and follow-up effectiveness (Topic 9). Personal wins over generic."
      }
    ]
  },
  {
    id: 5,
    title: "Design and Create Images",
    description: "Visual assets that drive action",
    prompts: [
      {
        id: "5.1",
        title: "Social Media Image Template System",
        intro: "I need professional-looking images that maintain brand consistency across all platforms.",
        role: "You are a visual design strategist who creates templates that non-designers can easily customize while maintaining professional quality.",
        context: "I need images for social media, emails, and Systeme.io pages. I use SnagIt for captures and need Merlin AI to help with design ideas.",
        task: "Design specifications for 10 image templates I can reuse with different text/content.",
        action: [
          "Define brand colors, fonts, style",
          "Create quote post template specs",
          "Design before/after template",
          "Build testimonial template",
          "Include CTA button designs"
        ],
        conclusion: "Visual consistency reinforces my offer (Topic 2), improves email engagement (Topic 4), and boosts social media presence (Topic 8). Images convert."
      },
      {
        id: "5.2",
        title: "Infographic Value Builder",
        intro: "I need to visualize my service value so prospects instantly understand what they get.",
        role: "You are an information designer who transforms complex services into simple, compelling visuals that sell.",
        context: "My service is complex and people don't understand the value. I need visuals for my Systeme.io funnel pages.",
        task: "Create an infographic design that shows my process, value, and results in one compelling image.",
        action: [
          "Identify 3-5 key value points",
          "Create visual metaphor for process",
          "Design before/after comparison",
          "Include statistics/proof points",
          "Add clear call-to-action"
        ],
        conclusion: "Infographics enhance funnel pages (Topic 7), email content (Topic 4), and social posts (Topic 8). Visuals explain faster than words."
      },
      {
        id: "5.3",
        title: "Screenshot Tutorial Creator",
        intro: "I need to create helpful tutorials that position me as the expert while promoting my tools.",
        role: "You are a tutorial design expert who creates clear, helpful visual guides that build trust and authority.",
        context: "I need tutorials showing how to use Systeme.io, Coda.io, and other tools. I'll capture with SnagIt and organize in Coda.io.",
        task: "Create a system for producing professional screenshot tutorials that include my affiliate links naturally.",
        action: [
          "Identify top 10 tutorial topics",
          "Define screenshot sequence structure",
          "Create annotation style guide",
          "Design intro/outro templates",
          "Include affiliate link placement"
        ],
        conclusion: "Tutorials support email content (Topic 4), video scripts (Topic 6), and social media value (Topic 8). Teaching builds trust and commissions."
      }
    ]
  },
  {
    id: 6,
    title: "Shoot and Publish Videos",
    description: "Content that builds trust",
    prompts: [
      {
        id: "6.1",
        title: "Video Script Formula Generator",
        intro: "I need video scripts that keep people watching and take action at the end.",
        role: "You are a video marketing strategist who writes scripts that engage, educate, and convert without being salesy.",
        context: "I need weekly videos for YouTube/social. I'll edit with Descript and optimize with VidIQ for my Systeme.io funnel.",
        task: "Create a complete 5-minute video script with hook, content, and call-to-action.",
        action: [
          "Write attention-grabbing hook (0-15 seconds)",
          "Create valuable teaching content (15s-4min)",
          "Design soft transition to offer (4-4:30)",
          "Add clear call-to-action (4:30-5min)",
          "Include b-roll suggestions"
        ],
        conclusion: "Videos drive traffic to funnels (Topic 7), provide email content (Topic 4), and fuel social media (Topic 8). Video builds know-like-trust faster."
      },
      {
        id: "6.2",
        title: "YouTube Optimization Checklist",
        intro: "I need my videos to be found by people searching for my services on YouTube.",
        role: "You are a YouTube SEO expert who knows how to rank videos for local service keywords and convert views to leads.",
        context: "I create videos but they get no views. I use VidIQ for research and need videos to drive Systeme.io funnel traffic.",
        task: "Create optimization checklist for title, description, tags, thumbnail, and engagement.",
        action: [
          "Generate SEO-optimized title options",
          "Write keyword-rich description template",
          "Create tag strategy (20 tags)",
          "Design thumbnail specifications",
          "Script engagement triggers"
        ],
        conclusion: "Optimized videos rank for keywords (Topic 3), support email sequences (Topic 4), and feed social content (Topic 8). YouTube is free traffic forever."
      },
      {
        id: "6.3",
        title: "Testimonial Video System",
        intro: "I need a system to easily capture and use customer success stories in video format.",
        role: "You are a testimonial video expert who knows how to capture authentic stories that overcome objections and drive sales.",
        context: "Happy customers don't give testimonials. I need a system using Descript for editing and Systeme.io for distribution.",
        task: "Create a testimonial capture system including questions, technical setup, and editing workflow.",
        action: [
          "Write 5 testimonial prompt questions",
          "Create simple filming instructions",
          "Design editing template in Descript",
          "Build distribution strategy",
          "Include usage rights template"
        ],
        conclusion: "Testimonials enhance offers (Topic 2), email sequences (Topic 4), and funnel conversions (Topic 7). Social proof sells better than claims."
      }
    ]
  },
  {
    id: 7,
    title: "Build Funnel Pages",
    description: "Pages that guide visitors to buy",
    prompts: [
      {
        id: "7.1",
        title: "High-Converting Landing Page Blueprint",
        intro: "I need a landing page that turns traffic into leads at a high conversion rate.",
        role: "You are a conversion rate optimization expert who designs pages that eliminate friction and maximize opt-ins.",
        context: "My current page converts at 2%. I'm building in Systeme.io and need every element optimized for conversions.",
        task: "Create complete landing page blueprint with copy, design, and technical specifications.",
        action: [
          "Design above-fold layout for maximum impact",
          "Write headline/subheadline combinations",
          "Create bullet point benefits",
          "Design opt-in form placement",
          "Add trust elements positioning"
        ],
        conclusion: "Landing pages capture leads for email sequences (Topic 4), showcase offers (Topic 2), and convert social traffic (Topic 8). This page is your money maker."
      },
      {
        id: "7.2",
        title: "Sales Page Psychology Optimizer",
        intro: "I need a sales page that overcomes every objection and makes buying feel like the obvious choice.",
        role: "You are a sales psychology expert who crafts pages that guide visitors through an emotional journey ending in purchase.",
        context: "People visit but don't buy. I need a Systeme.io sales page that addresses concerns and triggers action using Fastbots.ai for support.",
        task: "Create comprehensive sales page structure with all psychological elements positioned for maximum impact.",
        action: [
          "Map emotional journey from problem to solution",
          "Position credibility markers",
          "Structure offer stack presentation",
          "Place testimonials strategically",
          "Create urgency/scarcity elements"
        ],
        conclusion: "Sales pages deliver on keywords promises (Topic 3), fulfill email expectations (Topic 4), and complete follow-up sequences (Topic 9). This is where money exchanges hands."
      },
      {
        id: "7.3",
        title: "Funnel Flow Optimizer",
        intro: "I need a complete funnel that moves people from stranger to customer to repeat buyer.",
        role: "You are a funnel strategy expert who designs customer journeys that maximize lifetime value and minimize drop-off.",
        context: "I have random pages not connected. I need a Systeme.io funnel flow tracked in Coda.io that works together.",
        task: "Create 3-step funnel with opt-in, tripwire, and core offer pages that flow seamlessly.",
        action: [
          "Design opt-in page for maximum leads",
          "Create tripwire offer for instant buyers",
          "Build core offer upsell page",
          "Map email automation between steps",
          "Include retargeting strategy"
        ],
        conclusion: "Complete funnels integrate offers (Topic 2), emails (Topic 4), and follow-ups (Topic 9). A funnel is a system, not just pages."
      }
    ]
  },
  {
    id: 8,
    title: "Social Media Channel",
    description: "Consistent presence that converts",
    prompts: [
      {
        id: "8.1",
        title: "Content Calendar Generator",
        intro: "I need a month of social content planned that builds authority and drives traffic to my funnel.",
        role: "You are a social media strategist who creates content calendars that balance value, engagement, and promotion perfectly.",
        context: "I post randomly when I remember. I need systematic content for Facebook/Instagram that drives Systeme.io funnel traffic, organized in Coda.io.",
        task: "Generate complete 30-day calendar with post types, captions, hashtags, and posting times.",
        action: [
          "Create weekly theme structure",
          "Balance value/promo posts (80/20)",
          "Write 30 post concepts",
          "Include engagement prompts",
          "Add optimal posting schedule"
        ],
        conclusion: "Social media feeds funnel traffic (Topic 7), shares video content (Topic 6), and triggers email sign-ups (Topic 4). Consistency creates customers."
      },
      {
        id: "8.2",
        title: "Engagement Post Formula Creator",
        intro: "I need posts that get comments, shares, and build a community around my brand.",
        role: "You are a social engagement expert who writes posts that trigger responses and create conversations that lead to sales.",
        context: "My posts get 2-3 likes. I need engaging content that builds community and drives Systeme.io community growth.",
        task: "Create 10 high-engagement post templates I can customize for my business.",
        action: [
          "Design 'fill in the blank' posts",
          "Create controversial opinion posts",
          "Build 'this or that' posts",
          "Write story posts with cliffhangers",
          "Add clear conversation starters"
        ],
        conclusion: "Engagement builds trust for offers (Topic 2), grows email lists (Topic 4), and increases video views (Topic 6). Engagement equals reach equals revenue."
      },
      {
        id: "8.3",
        title: "Social Selling System Builder",
        intro: "I need a system that turns social media activity into actual sales, not just vanity metrics.",
        role: "You are a social selling expert who creates systems that nurture followers into customers without being pushy or salesy.",
        context: "I have followers but no sales from social. I need to connect social to my Systeme.io funnels and track in Coda.io.",
        task: "Build complete social selling system from first touch to purchase.",
        action: [
          "Create value ladder content strategy",
          "Design soft-sell post templates",
          "Build DM conversation scripts",
          "Create social-to-email bridge",
          "Track conversion metrics"
        ],
        conclusion: "Social selling supports email sequences (Topic 4), drives funnel traffic (Topic 7), and initiates follow-up workflows (Topic 9). Social is the top of funnel."
      }
    ]
  },
  {
    id: 9,
    title: "Follow Up Workflows",
    description: "Never lose a lead again",
    prompts: [
      {
        id: "9.1",
        title: "Lead Nurture Automation Builder",
        intro: "I need an automated system that stays in touch with leads until they're ready to buy.",
        role: "You are a marketing automation expert who builds follow-up systems that nurture relationships without being annoying.",
        context: "Leads go cold after initial interest. I need Systeme.io automation with Fastbots.ai chatbot support to stay engaged.",
        task: "Create 90-day follow-up workflow that re-engages cold leads and converts them to customers.",
        action: [
          "Map 90-day touchpoint calendar",
          "Create email/SMS sequence",
          "Design chatbot check-ins",
          "Build value-add content plan",
          "Include re-engagement triggers"
        ],
        conclusion: "Follow-up maximizes email list value (Topic 4), reinforces offers (Topic 2), and multiplies funnel ROI (Topic 7). Fortune is in the follow-up."
      },
      {
        id: "9.2",
        title: "Customer Retention Workflow Designer",
        intro: "I need an automated system that turns one-time buyers into repeat customers and raving fans.",
        role: "You are a customer retention specialist who builds workflows that maximize lifetime value and create brand advocates.",
        context: "Customers buy once and disappear. I need Systeme.io workflows that keep them engaged and buying, tracked in Coda.io.",
        task: "Design complete post-purchase workflow including onboarding, value delivery, and repeat purchase campaigns.",
        action: [
          "Create immediate post-purchase sequence",
          "Design 30-day onboarding experience",
          "Build quarterly check-in system",
          "Add referral request timing",
          "Include upsell/cross-sell triggers"
        ],
        conclusion: "Retention workflows maximize offer value (Topic 2), utilize email automation (Topic 4), and complete the funnel journey (Topic 7). Keeping customers costs less than finding new ones."
      },
      {
        id: "9.3",
        title: "Pipeline Management System Creator",
        intro: "I need a system that ensures no lead falls through the cracks and every opportunity is maximized.",
        role: "You are a sales pipeline expert who creates workflows that move leads systematically from interest to purchase.",
        context: "I lose track of leads at different stages. I need Systeme.io CRM with Coda.io reporting and Fastbots.ai qualification.",
        task: "Create complete pipeline workflow with stages, actions, and automation for each step.",
        action: [
          "Define 5-7 pipeline stages",
          "Create action checklist per stage",
          "Build automation triggers",
          "Design lead scoring system",
          "Include win/loss tracking"
        ],
        conclusion: "Pipeline workflows ensure offers close (Topic 2), emails hit right timing (Topic 4), and funnels convert (Topic 7). A system beats random follow-up every time."
      }
    ]
  }
];
