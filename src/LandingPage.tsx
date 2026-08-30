import { motion } from 'motion/react';
import { ArrowRight, Target, CheckCircle2, Shield, Layout, Play, Zap, Star } from 'lucide-react';
import rocketBg from './assets/images/pig-rocket-media-bkg.png';
import deskBg from './assets/images/creator_perspective_1782576619187.jpg';
import compassDiagram from './assets/images/creator_compass_diagram_1782577812214.jpg';
import creatorWorkingBg from './assets/images/creator-working.png';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#121212] text-neon-blue font-sans overflow-x-hidden">
      {/* 1. Nav Menu with CTA */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-neon-blue/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl tracking-tight neon-text-glow">Design-Create-Launch</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }} className="text-sm font-medium hover:text-white transition-colors">Home</a>
            <a href="#system" className="text-sm font-medium hover:text-white transition-colors">The System</a>
            <a href="#about" className="text-sm font-medium hover:text-white transition-colors">About</a>
            <a href="#tools" className="text-sm font-medium hover:text-white transition-colors">The Stack</a>
          </div>
          <button onClick={onEnter} className="neon-button-blue px-6 py-2.5 rounded-xl text-sm flex items-center gap-2">
            Enter Architect <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      <main>
        {/* 2. Hero - Who Are You? What do you do? */}
        <section className="relative w-full min-h-screen flex flex-col justify-end pb-24 md:pb-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-left bg-no-repeat scale-[1.1] origin-left"
            style={{ backgroundImage: `url(${creatorWorkingBg})` }}
          />
          {/* Gradient Overlay for Legibility (Transparent top, dark bottom) */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#121212] from-0% via-[#121212]/40 via-[45%] to-transparent to-[75%]" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-xl">
                Shatter Technical Overwhelm.
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-raspberry drop-shadow-xl">Step Into Finished Harmony.</span>
              </h1>
              <p className="text-base md:text-lg text-neon-blue/90 mb-8 max-w-xl leading-relaxed drop-shadow-md">
                The 9-topic digital marketing engine for creators and local business owners. Launch your offers and passive affiliate systems from a state of calm clarity.
              </p>
              <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
                <a href="#cta" className="w-full sm:w-auto bg-neon-blue hover:bg-white text-black px-8 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] hover:-translate-y-1">
                  <Play size={20} fill="currentColor" /> Start Your Machine
                </a>
                <a href="#system" className="w-full sm:w-auto text-white border border-white/20 hover:bg-white/10 font-bold px-8 py-4 rounded-2xl transition-all text-base flex items-center justify-center backdrop-blur-sm hover:-translate-y-1">
                  Explore the Framework
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2.5 The 30,000 Foot View (Mind Map) */}
        <section className="py-12 px-6 relative z-10 border-y border-neon-blue/10 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The 30,000 Foot View</h2>
              <p className="text-neon-blue/70 max-w-2xl mx-auto">The 9 pillars of the Digital Machine in perfect harmony.</p>
            </div>
            
            <div className="relative">
              {/* Connecting Lines Context (Hidden on mobile for simplicity) */}
              <div className="hidden md:block absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-neon-blue/20 z-0"></div>
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-neon-blue/20 z-0"></div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 relative z-10">
                {[
                  { name: "1. Set The Goal", desc: "Setting the coordinates", icon: <Target className="text-neon-blue mx-auto mb-2" size={24} /> },
                  { name: "2. Create The Offer", desc: "Crafting the value", icon: <Zap className="text-neon-raspberry mx-auto mb-2" size={24} /> },
                  { name: "3. Keywords & Copywriting", desc: "The messaging engine", icon: <Layout className="text-neon-orange mx-auto mb-2" size={24} /> },
                  { name: "4. Design The Emails", desc: "Automated sequencing", icon: <Shield className="text-neon-blue mx-auto mb-2" size={24} /> },
                  { name: "5. Create The Images", desc: "Visual anchors", icon: <Star className="text-neon-raspberry mx-auto mb-2" size={24} /> },
                  { name: "6. Publish The Videos", desc: "High-trust content", icon: <Play className="text-neon-orange mx-auto mb-2" size={24} /> },
                  { name: "7. Build The Funnel", desc: "The conversion path", icon: <Target className="text-neon-blue mx-auto mb-2" size={24} /> },
                  { name: "8. The Social Channel", desc: "Echoing the signal", icon: <Zap className="text-neon-raspberry mx-auto mb-2" size={24} /> },
                  { name: "9. Follow Up Workflows", desc: "Closing the loop", icon: <CheckCircle2 className="text-neon-orange mx-auto mb-2" size={24} /> },
                ].map((item, i) => (
                  <div key={i} className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] text-center hover:border-neon-blue/40 transition-colors">
                    {item.icon}
                    <h4 className="font-bold text-white text-lg">{item.name}</h4>
                    <p className="text-xs text-neon-blue/60 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 text-center">
               <button onClick={onEnter} className="text-neon-blue hover:text-white text-sm font-bold flex items-center justify-center gap-2 mx-auto transition-colors">
                 Explore the Framework details <ArrowRight size={16} />
               </button>
            </div>
          </div>
        </section>

        {/* 3. 3 Products or Services */}
        <section id="system" className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Digital Machine Path</h2>
              <p className="text-neon-blue/70 max-w-2xl mx-auto">Whether you're just starting or ready to scale a local dominant business, we have the exact system you need.</p>
            </div>

            <div className="max-w-xl mx-auto">
              {/* Card 1 */}
              <div className="bg-black/40 p-8 rounded-3xl border border-neon-blue/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_15px_rgba(0,210,223,0.05)] hover:border-neon-blue/60 transition-all flex flex-col h-full">
                <div className="w-14 h-14 bg-neon-blue/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Zap className="text-neon-blue" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 text-center">Design, Create, Launch</h3>
                <h4 className="text-xl font-medium text-neon-blue mb-3 text-center">Superhuman Docs Playbook</h4>
                <p className="text-neon-blue/60 mb-6 flex-grow text-center">A complete, structured workspace to design your offers, create your assets, and launch your digital machine without the overwhelm. Step-by-step guidance straight from a state of clarity.</p>
                <div className="flex flex-col items-center justify-center mb-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-neon-blue tracking-wide">FREE ACCESS</div>
                  <div className="text-xs uppercase tracking-widest text-neon-raspberry font-semibold mt-1 bg-neon-raspberry/10 border border-neon-raspberry/30 px-3 py-1 rounded-full">
                    Private VIP Group Bonus
                  </div>
                </div>
                <button onClick={onEnter} className="w-full py-4 rounded-xl border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-bold text-lg transition-all shadow-[0_0_15px_rgba(0,210,223,0.15)] hover:shadow-[0_0_25px_rgba(0,210,223,0.4)]">
                  Access the VIP Playbook
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Show the visitors who you are */}
        <section id="about" className="py-24 px-6 relative z-10 bg-black/20">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
            <div className="w-full text-center max-w-4xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                I am your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-raspberry">Natural Growth Partner</span>.
              </h2>
              <p className="text-xl text-neon-blue/80 font-light leading-relaxed">
                If you are feeling the "echo" of old programming—that technical overwhelm and digital chaos—I'm here to help you get back to a calm state of flow.
              </p>
              <p className="text-lg text-white/70 leading-relaxed shadow-[inset_0_0_0_rgba(0,0,0,0)]">
                We focus on our "Learning By Documenting" strategy. We don't do tech-stress. We build from the "Finished Picture"—a place where your system is already a massive, harmonious success. Through simple, documented, highly-systemized steps, we shift you out of anxiety and into clean execution.
              </p>
              <div className="flex justify-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm font-bold text-neon-blue bg-neon-blue/10 px-4 py-2 rounded-lg border border-neon-blue/20">
                  <CheckCircle2 size={18} /> Conscious Clarity
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-neon-raspberry bg-neon-raspberry/10 px-4 py-2 rounded-lg border border-neon-raspberry/20">
                  <CheckCircle2 size={18} /> High-Vibration Systems
                </div>
              </div>
            </div>
            
            <div className="w-full">
              <div className="group w-full rounded-[40px] border border-neon-blue/20 bg-[#121212] relative overflow-hidden flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.05)]">
                {/* Visual for Steven's workspace / Creator Compass */}
                <img src={compassDiagram} alt="The Creator Compass" className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Brand & Tech Stack */}
        <section id="tools" className="py-24 px-6 relative z-10 bg-black/40 border-y border-neon-blue/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Tools that Support Our Peace of Mind</h2>
            <p className="text-neon-blue/60 mb-12 text-lg">We use a hand-picked list of simple, powerful tools to remove all tech overwhelm and keep you in a calm, creative state of flow as you build.</p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-x-8 md:gap-y-8 opacity-80 items-center w-full">
              {[
                "Gemini 3 Pro", "Superhuman Docs", "Google Workflow Tools", "Affiliate Workflow Tool Stack"
              ].map((tool, i) => (
                <div key={i} className="text-xl md:text-2xl font-bold tracking-wide text-white border-b-2 border-neon-blue/20 pb-1">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Final Call to Action */}
        <section id="cta" className="py-32 px-6 relative z-10 overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-raspberry/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="max-w-3xl mx-auto text-center relative z-10 bg-black/60 p-12 md:p-16 rounded-[40px] border border-neon-raspberry/30 shadow-[0_0_50px_rgba(223,0,111,0.1),inset_0_0_30px_rgba(0,0,0,0.5)]">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Step Into the Finished Picture.</h2>
             <p className="text-xl text-neon-blue/80 mb-10 leading-relaxed">It's time to let go of the echo of overwhelm. As a VIP member, jump right in and shift into a calm, conscious state of clarity as we build your digital machine.</p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <button 
                 onClick={onEnter} 
                 className="neon-button-blue px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(0,210,223,0.35)] hover:shadow-[0_0_35px_rgba(0,210,223,0.5)] hover:-translate-y-1 transition-all"
               >
                 Go Ahead & Get Started <ArrowRight size={22} />
               </button>
             </div>
             
             <p className="text-sm text-neon-blue/50 mt-6 flex items-center justify-center gap-2">
               <Shield size={14} className="text-neon-blue" /> Instant VIP Access • No Sign-Up or Email Required
             </p>
           </div>
        </section>
      </main>

      {/* 8. Footer Area */}
      <footer className="bg-black py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center justify-center">
            <span className="font-bold text-white/50">Design Create Launch</span>
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Contact</a>
          </div>
          <div className="text-sm text-white/30">
            Copyright © 2026 | Design Create Launch | All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
