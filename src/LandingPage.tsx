import { motion } from 'motion/react';
import {
  ArrowRight,
  Target,
  CheckCircle2,
  Shield,
  Layout,
  Play,
  Zap,
  Star,
  Compass,
  MessageSquareHeart
} from 'lucide-react';
import compassDiagram from './assets/images/creator_compass_diagram_1782577812214.jpg';
import creatorWorkingBg from './assets/images/creator-working.png';
import { STEVEN_MENTORSHIP_CONFIG } from './constants';

interface LandingPageProps {
  onEnter: () => void;
  onOpenMentorship: () => void;
  returningMemberName?: string;
}

export default function LandingPage({
  onEnter,
  onOpenMentorship,
  returningMemberName
}: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#121212] text-slate-200 font-sans overflow-x-hidden">
      {/* 1. Nav Menu with CTA (3-Zone Top Bar Contract) */}
      <nav className="fixed top-0 w-full z-50 bg-black/75 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-bold text-lg md:text-xl tracking-tight text-neon-blue neon-text-glow whitespace-nowrap shrink-0"
          >
            Design-Create-Launch
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#system" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              The System
            </a>
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Creator Compass
            </a>
            <a href="#tools" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              The Stack
            </a>
            <a href="#work-with-steven" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              1-on-1 Help
            </a>
          </div>

          <button
            onClick={onEnter}
            className="neon-button-blue px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            {returningMemberName ? `Resume (${returningMemberName})` : 'Member Sign In'}
            <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      <main id="top">
        {/* 2. Hero */}
        <section className="relative w-full min-h-screen flex flex-col justify-end pb-24 md:pb-32 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-left bg-no-repeat scale-[1.06] origin-left"
            style={{ backgroundImage: `url(${creatorWorkingBg})` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#121212] from-5% via-[#121212]/65 via-[48%] to-black/30 to-100%" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-left pt-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="text-xs md:text-sm font-semibold text-neon-blue mb-3">
                Private VIP Bonus · Free Daily Strategy &amp; Prompt Workspace
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight text-balance">
                Shatter Technical Overwhelm.
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-raspberry">
                  Step Into Finished Harmony.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
                The 9-topic digital marketing engine for creators, beginners, and local service businesses. Sign in to your daily workspace, map your strategy with 27 guided AI prompts, and build your system step by step.
              </p>
              <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
                <button
                  onClick={onEnter}
                  className="w-full sm:w-auto neon-button-blue px-8 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-3"
                >
                  <Play size={18} fill="currentColor" />
                  {returningMemberName ? `Continue Workspace` : 'Sign In & Start Building'}
                </button>
                <a
                  href="#system"
                  className="w-full sm:w-auto text-white border border-white/25 hover:bg-white/10 font-bold px-8 py-4 rounded-2xl transition-all text-base flex items-center justify-center backdrop-blur-sm"
                >
                  Explore the 9-Topic System
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2.5 The 30,000 Foot View */}
        <section className="py-16 px-6 relative z-10 border-y border-white/10 bg-black/25">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                The 30,000 Foot View
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                The 9 pillars of the Digital Machine—showing how every piece connects so beginners never feel lost.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  name: '1. Set The Goal',
                  desc: '90-day math & daily compass',
                  icon: <Target className="text-neon-blue mx-auto mb-2" size={22} />
                },
                {
                  name: '2. Create The Offer',
                  desc: 'Package outcomes, not hours',
                  icon: <Zap className="text-neon-raspberry mx-auto mb-2" size={22} />
                },
                {
                  name: '3. Keywords & Copywriting',
                  desc: 'Words buyers search & trust',
                  icon: <Layout className="text-neon-orange mx-auto mb-2" size={22} />
                },
                {
                  name: '4. Design The Emails',
                  desc: 'Automated trust & recovery',
                  icon: <Shield className="text-neon-blue mx-auto mb-2" size={22} />
                },
                {
                  name: '5. Create The Images',
                  desc: 'Clear visuals & diagrams',
                  icon: <Star className="text-neon-raspberry mx-auto mb-2" size={22} />
                },
                {
                  name: '6. Publish The Videos',
                  desc: 'Short clips & searchable answers',
                  icon: <Play className="text-neon-orange mx-auto mb-2" size={22} />
                },
                {
                  name: '7. Build The Funnel',
                  desc: 'Pages with one clear job',
                  icon: <Target className="text-neon-blue mx-auto mb-2" size={22} />
                },
                {
                  name: '8. The Social Channel',
                  desc: 'Consistent visibility & DMs',
                  icon: <Zap className="text-neon-raspberry mx-auto mb-2" size={22} />
                },
                {
                  name: '9. Follow Up Workflows',
                  desc: 'Zero leaks, reviews & pipeline',
                  icon: <CheckCircle2 className="text-neon-orange mx-auto mb-2" size={22} />
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#181a1f] p-6 rounded-2xl border border-white/10 text-center hover:border-neon-blue/40 transition-colors"
                >
                  {item.icon}
                  <h4 className="font-bold text-white text-base">{item.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={onEnter}
                className="text-neon-blue hover:text-white text-sm font-bold flex items-center justify-center gap-2 mx-auto transition-colors"
              >
                Open Interactive Landscape &amp; Prompts <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* 3. VIP Playbook */}
        <section id="system" className="py-20 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Your Daily Implementation Hub
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Built as a free resource you can return to every single day until your digital system is live and working for your business.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="bg-[#181a1f] p-8 rounded-3xl border border-neon-blue/35 flex flex-col h-full text-center space-y-5">
                <div className="w-14 h-14 bg-neon-blue/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Compass className="text-neon-blue" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Design, Create, Launch</h3>
                  <p className="text-base font-medium text-neon-blue mt-1">
                    Superhuman Docs &amp; Gemini Playbook
                  </p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Includes a Beginner Landscape Guide, Customer Problem Mapper, 27 auto-personalized AI prompts, daily progress tracker, and one-click Superhuman Docs roadmap export.
                </p>
                <div className="py-2">
                  <div className="text-3xl font-extrabold text-neon-blue tracking-wide">
                    FREE VIP ACCESS
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Private VIP Group Bonus · Daily Progress Auto-Saved
                  </p>
                </div>
                <button
                  onClick={onEnter}
                  className="w-full py-4 rounded-xl neon-button-blue font-bold text-lg"
                >
                  {returningMemberName ? 'Return to My Workspace' : 'Access the VIP Playbook'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. About / Creator Compass */}
        <section id="about" className="py-20 px-6 relative z-10 bg-black/25">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
            <div className="w-full text-center max-w-4xl space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight text-balance">
                I am your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-raspberry">
                  Natural Growth Partner
                </span>
                .
              </h2>
              <p className="text-lg md:text-xl text-neon-blue/90 font-light leading-relaxed">
                If you are feeling the &ldquo;echo&rdquo; of old programming—technical overwhelm and digital chaos—I&apos;m here to help you get back to a calm state of flow.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                We focus on our &ldquo;Learning By Documenting&rdquo; strategy and the 14–21 day repetition rhythm. By building from the Finished Picture in small, daily check-ins, you replace anxiety with clean, steady execution.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-neon-blue" /> Conscious Clarity
                </span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-neon-raspberry" /> Documented Execution
                </span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-neon-orange" /> 14–21 Day Repetition
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full rounded-3xl border border-white/15 bg-[#121212] overflow-hidden flex items-center justify-center">
                <img
                  src={compassDiagram}
                  alt="The Creator Compass aligning internal maintenance with external business evolution"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Tech Stack */}
        <section id="tools" className="py-20 px-6 relative z-10 bg-black/40 border-y border-white/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              The Tools that Support Our Peace of Mind
            </h2>
            <p className="text-slate-300 mb-10 text-base max-w-2xl mx-auto">
              Modern web design in front, reliable automation in the back, and simple tools that keep you building in calm creative flow.
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 items-center max-w-4xl mx-auto">
              {[
                'Superhuman Docs',
                'Gemini & NotebookLM',
                'Google AI Studio & Antigravity',
                'Google Pomelli',
                'Google Workspace',
                'Systeme.io',
                'Namecheap',
                'GitHub & Vercel',
                'Snagit · Camtasia · Gling'
              ].map((tool, i) => (
                <div
                  key={i}
                  className="text-base md:text-lg font-bold tracking-wide text-white border-b-2 border-neon-blue/30 pb-1"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Work With Steven Bridge + Final CTA */}
        <section id="work-with-steven" className="py-24 px-6 relative z-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#181a1f] p-8 md:p-10 rounded-3xl border border-neon-blue/35 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-neon-blue">Step 1 · Build Daily For Free</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Step Into the Finished Picture
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Log into your daily workspace, complete your Business Profile once, and follow the 9-topic roadmap until your system is live.
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={onEnter}
                  className="w-full neon-button-blue px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2"
                >
                  Go Ahead &amp; Get Started <ArrowRight size={18} />
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Instant VIP Access · Progress saved daily in your browser
                </p>
              </div>
            </div>

            <div className="bg-[#181a1f] p-8 md:p-10 rounded-3xl border border-neon-raspberry/35 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-neon-raspberry">
                  Step 2 · Personal 1-on-1 Guidance
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Want to Build It With Steven Personally?
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Whenever you want direct feedback on your offer, funnel, or customer strategy—or side-by-side setup help—you can bring your exported roadmap to a personal session.
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={onOpenMentorship}
                  className="w-full py-4 px-6 rounded-xl border border-neon-raspberry text-white bg-neon-raspberry/15 hover:bg-neon-raspberry hover:text-white font-bold text-base transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquareHeart size={18} /> Explore 1-on-1 Guidance
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Direct coaching &amp; done-with-you implementation
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-10 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span className="font-bold text-white/80">Design Create Launch · {STEVEN_MENTORSHIP_CONFIG.brandTitle}</span>
          <div className="flex gap-6 text-slate-400">
            <a
              href={`mailto:${STEVEN_MENTORSHIP_CONFIG.contactEmail}`}
              className="hover:text-neon-blue transition-colors"
            >
              Contact Steven ({STEVEN_MENTORSHIP_CONFIG.contactEmail})
            </a>
          </div>
          <div className="text-xs text-slate-500">
            Copyright © 2026 Design Create Launch · All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
