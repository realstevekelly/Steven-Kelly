import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import { 
  LayoutDashboard, 
  UserCircle, 
  BookOpen, 
  CheckSquare, 
  Library,
  ChevronRight,
  Copy,
  Check,
  ArrowRight,
  Target,
  Zap,
  DollarSign,
  BarChart3,
  Menu,
  X,
  Rocket,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TOPICS } from './constants';
import { AppView, BusinessProfile, Topic, Prompt } from './types';

const INITIAL_PROFILE: BusinessProfile = {
  businessName: '',
  businessType: '',
  targetAudience: '',
  location: '',
  currentRevenue: '',
  desiredRevenue: '',
  mainChallenge: '',
  productName: 'Superhuman Docs Ebook',
  productPrice: '19'
};

export default function App() {
  const [view, setView] = useState<AppView>('landing');
  const [profile, setProfile] = useState<BusinessProfile>(() => {
    const saved = localStorage.getItem('coda_profile');
    return saved ? JSON.parse(saved) : INITIAL_PROFILE;
  });
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showVaultLock, setShowVaultLock] = useState(false);
  const [hasVaultAccess, setHasVaultAccess] = useState(() => {
    return localStorage.getItem('coda_vault_access') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('coda_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('coda_vault_access', String(hasVaultAccess));
  }, [hasVaultAccess]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const injectProfile = (text: string) => {
    let result = text;
    result = result.replace(/\[business type\]/gi, profile.businessType || '[business type]');
    result = result.replace(/\[target audience\]/gi, profile.targetAudience || '[target audience]');
    result = result.replace(/\[location\/niche\]/gi, profile.location || '[location/niche]');
    result = result.replace(/\[current situation\]/gi, profile.currentRevenue ? `making ${profile.currentRevenue}/month` : '[current situation]');
    result = result.replace(/\[biggest obstacle\]/gi, profile.mainChallenge || '[biggest obstacle]');
    result = result.replace(/\[desired outcome\]/gi, profile.desiredRevenue ? `reach ${profile.desiredRevenue}/month` : '[desired outcome]');
    result = result.replace(/\[X\]/gi, profile.currentRevenue || 'X');
    return result;
  };

  const NavItem = ({ id, icon: Icon, label }: { id: AppView, icon: any, label: string }) => {
    const isLocked = id === 'library' && !hasVaultAccess;

    return (
      <button
        onClick={() => { 
          if (isLocked) {
            setShowVaultLock(true);
            setIsMobileMenuOpen(false);
            return;
          }
          setView(id); 
          setIsMobileMenuOpen(false); 
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
          view === id 
            ? 'bg-neon-blue text-black shadow-[0_0_20px_rgba(0,242,255,0.6)]' 
            : 'text-neon-blue/60 hover:bg-neon-blue/10 hover:text-neon-blue'
        }`}
      >
        <Icon size={20} />
        <span className="font-medium">{label}</span>
        {isLocked && <Lock size={14} className="ml-auto opacity-50" />}
      </button>
    );
  };

  if (view === 'landing') {
    return (
      <LandingPage 
        onEnter={() => setView('dashboard')} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col md:flex-row font-sans text-neon-blue">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-72 bg-black/40 backdrop-blur-md border-r border-neon-blue/20 flex-col p-6 gap-8">
        <div className="flex items-center justify-center px-2">
          <h1 className="font-bold text-xl tracking-tight neon-text-glow">Design-Create-Launch</h1>
        </div>

        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setView('landing')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-neon-blue/60 hover:bg-neon-blue/10 hover:text-neon-blue`}
          >
            <Rocket size={20} />
            <span className="font-medium">Landing Page</span>
          </button>
          <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem id="profile" icon={UserCircle} label="Business Profile" />
          <NavItem id="topics" icon={BookOpen} label="9-Topic System" />
          <NavItem id="tracker" icon={CheckSquare} label="Implementation" />
          <NavItem id="library" icon={Library} label="Prompt Library" />
        </nav>

        <div className="mt-auto p-4 bg-black/60 rounded-2xl border border-neon-blue/30 shadow-[inset_0_0_10px_rgba(0,242,255,0.1)]">
          <p className="text-xs font-semibold text-neon-blue/40 uppercase tracking-widest mb-2">Current Goal</p>
          <p className="text-sm font-medium text-neon-blue">Launch $19 Ebook Campaign</p>
          <div className="mt-3 w-full bg-neon-blue/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-neon-blue h-full w-1/3 shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden bg-black/80 backdrop-blur-md border-b border-neon-blue/20 p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-lg neon-text-glow">Design-Create-Launch</h1>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-neon-blue">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-[65px] bg-black/95 z-40 p-6 flex flex-col gap-4"
          >
            <button
              onClick={() => { setView('landing'); setIsMobileMenuOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-neon-blue/60 hover:bg-neon-blue/10 hover:text-neon-blue`}
            >
              <Rocket size={20} />
              <span className="font-medium">Landing Page</span>
            </button>
            <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
            <NavItem id="profile" icon={UserCircle} label="Business Profile" />
            <NavItem id="topics" icon={BookOpen} label="9-Topic System" />
            <NavItem id="tracker" icon={CheckSquare} label="Implementation" />
            <NavItem id="library" icon={Library} label="Prompt Library" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
        <AnimatePresence mode="wait">
          {view === 'dashboard' && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-5xl mx-auto space-y-12"
            >
              <header>
                <h2 className="text-4xl font-bold tracking-tight mb-4 italic serif neon-text-glow">Master Strategy Dashboard</h2>
                <p className="text-neon-blue/60 text-lg max-w-2xl">
                  Your all-in-one blueprint for systematized marketing and business growth. 
                  Follow the 9-topic system to launch your $19 Ebook campaign.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/40 p-8 rounded-3xl border border-neon-raspberry/30 shadow-[0_0_15px_rgba(223,0,111,0.1)] hover:border-neon-raspberry transition-all group">
                  <div className="w-12 h-12 bg-neon-raspberry/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(223,0,111,0.2)]">
                    <DollarSign className="text-neon-raspberry" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neon-raspberry">Monetization Path</h3>
                  <p className="text-neon-blue/50 text-sm mb-4">How each topic generates revenue for your Superhuman Docs campaign.</p>
                  <button onClick={() => setView('topics')} className="text-neon-raspberry font-semibold text-sm flex items-center gap-2 group">
                    View Paths <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="bg-black/40 p-8 rounded-3xl border border-neon-orange/30 shadow-[0_0_15px_rgba(223,124,0,0.1)] hover:border-neon-orange transition-all group">
                  <div className="w-12 h-12 bg-neon-orange/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(223,124,0,0.2)]">
                    <BarChart3 className="text-neon-orange" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neon-orange">Success Metrics</h3>
                  <p className="text-neon-blue/50 text-sm mb-4">Track KPIs across all 9 topics to ensure profitable growth.</p>
                  <button onClick={() => setView('tracker')} className="text-neon-orange font-semibold text-sm flex items-center gap-2 group">
                    Track KPIs <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="bg-black/60 p-8 rounded-3xl border border-neon-blue/50 shadow-[0_0_25px_rgba(0,242,255,0.2)] text-white">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                    <Zap className="text-neon-blue" size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neon-blue">Quick Start</h3>
                  <p className="text-neon-blue/60 text-sm mb-4">Ready to launch? Start with Topic 1 to align your vision.</p>
                  <button 
                    onClick={() => { setView('topics'); setSelectedTopic(TOPICS[0]); }}
                    className="neon-button-blue px-6 py-2 rounded-xl"
                  >
                    Start Topic 1
                  </button>
                </div>
              </div>

              <section>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold italic serif neon-text-glow">The 9-Topic Framework</h3>
                  <button onClick={() => setView('topics')} className="text-sm font-semibold text-neon-blue/50 hover:text-neon-blue">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {TOPICS.slice(0, 3).map((topic, idx) => {
                    const colors = ['border-neon-blue', 'border-neon-raspberry', 'border-neon-pink'];
                    const glowColors = ['rgba(0,242,255,0.1)', 'rgba(255,0,127,0.1)', 'rgba(255,0,255,0.1)'];
                    return (
                      <div 
                        key={topic.id}
                        onClick={() => { setView('topics'); setSelectedTopic(topic); }}
                        className={`group bg-black/40 p-6 rounded-2xl border ${colors[idx]}/30 cursor-pointer hover:border-neon-blue transition-all shadow-[0_0_15px_${glowColors[idx]}]`}
                      >
                        <span className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest mb-2 block">Topic 0{topic.id}</span>
                        <h4 className="text-lg font-bold group-hover:text-neon-blue transition-colors">{topic.title}</h4>
                        <p className="text-neon-blue/50 text-sm mt-2 line-clamp-2">{topic.description}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </motion.div>
          )}

          {view === 'profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto"
            >
              <header className="mb-12">
                <h2 className="text-4xl font-bold tracking-tight mb-4 italic serif neon-text-glow">Business Profile</h2>
                <p className="text-neon-blue/60 text-lg">
                  Enter your business details here. We'll automatically inject these into your AI prompts to save you time.
                </p>
              </header>

              <div className="bg-black/40 p-8 rounded-3xl border border-neon-blue/30 shadow-[0_0_20px_rgba(0,242,255,0.05)] space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Business Name', key: 'businessName', placeholder: 'e.g. Kelly Digital' },
                    { label: 'Business Type', key: 'businessType', placeholder: 'e.g. Local Fitness Coaching' },
                    { label: 'Target Audience', key: 'targetAudience', placeholder: 'e.g. Busy professionals 30-45' },
                    { label: 'Location / Niche', key: 'location', placeholder: 'e.g. Nashville, TN' },
                    { label: 'Current Revenue ($/mo)', key: 'currentRevenue', placeholder: 'e.g. 3000' },
                    { label: 'Desired Revenue ($/mo)', key: 'desiredRevenue', placeholder: 'e.g. 10000' },
                  ].map((field) => (
                    <div key={field.key} className="space-y-2">
                      <label className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest">{field.label}</label>
                      <input 
                        type="text" 
                        value={(profile as any)[field.key]}
                        onChange={(e) => setProfile({...profile, [field.key]: e.target.value})}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neon-blue/20 text-neon-blue placeholder:text-neon-blue/20 focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all outline-none"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest">Main Business Challenge</label>
                  <textarea 
                    value={profile.mainChallenge}
                    onChange={(e) => setProfile({...profile, mainChallenge: e.target.value})}
                    placeholder="e.g. Struggling to convert social media followers into paying clients..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neon-blue/20 text-neon-blue placeholder:text-neon-blue/20 focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all outline-none resize-none"
                  />
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => setView('topics')}
                    className="neon-button-blue px-8 py-3 rounded-xl flex items-center gap-2"
                  >
                    Save & Continue <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'topics' && (
            <motion.div 
              key="topics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-6xl mx-auto"
            >
              {!selectedTopic ? (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-4xl font-bold tracking-tight mb-4 italic serif neon-text-glow">The 9-Topic System</h2>
                    <p className="text-neon-blue/60 text-lg">Select a topic to explore its specific AI prompts and strategy.</p>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TOPICS.map((topic) => (
                      <div 
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className="group bg-black/40 p-8 rounded-3xl border border-neon-blue/20 cursor-pointer hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,242,255,0.1)] transition-all relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <span className="text-8xl font-black text-neon-blue">{topic.id}</span>
                        </div>
                        <span className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest mb-2 block">Topic 0{topic.id}</span>
                        <h3 className="text-2xl font-bold mb-3 text-neon-blue group-hover:neon-text-glow transition-all">{topic.title}</h3>
                        <p className="text-neon-blue/50 text-sm mb-6 leading-relaxed">{topic.description}</p>
                        <div className="flex items-center gap-2 text-neon-blue font-bold text-sm">
                          Explore Prompts <ChevronRight size={16} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                  <button 
                    onClick={() => setSelectedTopic(null)}
                    className="text-neon-blue/60 hover:text-neon-blue font-semibold flex items-center gap-2 mb-8"
                  >
                    <ChevronRight size={18} className="rotate-180" /> Back to Topics
                  </button>

                  <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                      <span className="text-sm font-bold text-neon-blue/40 uppercase tracking-widest">Topic 0{selectedTopic.id}</span>
                      <h2 className="text-5xl font-bold tracking-tighter italic serif neon-text-glow">{selectedTopic.title}</h2>
                      <p className="text-neon-blue/60 text-xl">{selectedTopic.description}</p>
                    </div>
                  </header>

                  <div className="space-y-8 relative">
                    {!hasVaultAccess && (
                      <div className="absolute inset-x-0 top-0 bottom-0 z-20 flex flex-col items-center justify-start pt-32 bg-[#121212]/80 backdrop-blur-md rounded-3xl border border-neon-blue/20 p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="w-20 h-20 bg-neon-blue/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                          <Lock size={40} className="text-neon-blue" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 italic serif">Premium Vault Locked</h3>
                        <p className="text-neon-blue/80 text-lg max-w-md mx-auto mb-8">
                          Secure your lifetime access to the Gemini 3 Pro strategic advisor engines for a one-time exchange of $27.
                        </p>
                        <button 
                          onClick={() => setHasVaultAccess(true)} 
                          className="neon-button-blue px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                        >
                          Unlock Now
                        </button>
                      </div>
                    )}
                    <div className={`space-y-8 ${!hasVaultAccess ? 'opacity-30 pointer-events-none select-none blur-[6px]' : ''}`}>
                      {selectedTopic.prompts.map((prompt) => (
                        <div key={prompt.id} className="bg-black/40 rounded-3xl border border-neon-blue/20 overflow-hidden shadow-sm">
                        <div className="p-8 border-b border-neon-blue/10 flex items-center justify-between bg-black/20">
                          <div>
                            <span className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest mb-1 block">Prompt {prompt.id}</span>
                            <h4 className="text-2xl font-bold text-neon-blue">{prompt.title}</h4>
                          </div>
                          <button 
                            onClick={() => {
                              const fullPrompt = `
TITLE: ${prompt.title}
INTRO: ${injectProfile(prompt.intro)}
ROLE: ${prompt.role}
CONTEXT: ${injectProfile(prompt.context)}
TASK: ${prompt.task}
ACTION:
${prompt.action.map((a, i) => `${i+1}. ${a}`).join('\n')}
CONCLUSION: ${prompt.conclusion}
                              `.trim();
                              copyToClipboard(fullPrompt, prompt.id);
                            }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                              copiedId === prompt.id ? 'bg-neon-green text-black shadow-[0_0_15px_rgba(57,255,20,0.5)]' : 'neon-button-blue'
                            }`}
                          >
                            {copiedId === prompt.id ? <Check size={16} /> : <Copy size={16} />}
                            {copiedId === prompt.id ? 'Copied!' : 'Copy Prompt'}
                          </button>
                        </div>
                        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                          <div className="space-y-6">
                            <div>
                              <p className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest mb-2">Introduction</p>
                              <p className="text-neon-blue/80 leading-relaxed">{injectProfile(prompt.intro)}</p>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest mb-2">Role</p>
                              <p className="text-neon-blue/80 leading-relaxed italic">"{prompt.role}"</p>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest mb-2">Task</p>
                              <p className="text-neon-blue font-medium">{prompt.task}</p>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <p className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest mb-2">Action Steps</p>
                              <ul className="space-y-3">
                                {prompt.action.map((step, i) => (
                                  <li key={i} className="flex gap-3 text-sm text-neon-blue/70">
                                    <span className="font-bold text-neon-blue">{i + 1}.</span>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-4 bg-black/40 rounded-2xl border border-neon-blue/10">
                              <p className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest mb-2">Why this matters</p>
                              <p className="text-xs text-neon-blue/50 italic leading-relaxed">{prompt.conclusion}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {view === 'tracker' && (
            <motion.div 
              key="tracker"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <header>
                <h2 className="text-4xl font-bold tracking-tight mb-4 italic serif neon-text-glow">Implementation Tracker</h2>
                <p className="text-neon-blue/60 text-lg">Follow this 3-phase roadmap to launch and scale your campaign.</p>
              </header>

              <div className="space-y-6">
                {[
                  { phase: 1, title: "Foundation (Week 1)", topics: [1, 2, 3], color: "bg-neon-orange", glow: "rgba(255,140,0,0.5)" },
                  { phase: 2, title: "Build (Week 2)", topics: [4, 7, 9], color: "bg-neon-blue", glow: "rgba(0,242,255,0.5)" },
                  { phase: 3, title: "Scale (Week 3)", topics: [5, 6, 8], color: "bg-neon-raspberry", glow: "rgba(255,0,127,0.5)" }
                ].map((phase) => (
                  <div key={phase.phase} className="bg-black/40 rounded-3xl border border-neon-blue/20 overflow-hidden shadow-sm">
                    <div className="p-6 border-b border-neon-blue/10 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${phase.color} rounded-xl flex items-center justify-center text-black font-bold shadow-[0_0_15px_${phase.glow}]`}>
                          {phase.phase}
                        </div>
                        <h3 className="text-xl font-bold text-neon-blue">{phase.title}</h3>
                      </div>
                      <span className="text-xs font-bold text-neon-blue/40 uppercase tracking-widest">0% Complete</span>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.topics.map(topicId => {
                        const topic = TOPICS.find(t => t.id === topicId);
                        return (
                          <div 
                            key={topicId}
                            onClick={() => { setView('topics'); setSelectedTopic(topic || null); }}
                            className="p-4 rounded-2xl border border-neon-blue/10 hover:border-neon-blue transition-all cursor-pointer group bg-black/20"
                          >
                            <p className="text-[10px] font-bold text-neon-blue/40 uppercase tracking-widest mb-1">Topic 0{topicId}</p>
                            <p className="text-sm font-bold text-neon-blue/80 group-hover:text-neon-blue group-hover:underline">{topic?.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-black/60 p-10 rounded-[40px] border border-neon-pink/50 shadow-[0_0_40px_rgba(255,0,255,0.1)] text-white relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl font-bold italic serif text-neon-pink shadow-neon-pink">Monetization Checklist</h3>
                  <ul className="space-y-4">
                    {[
                      "Recommend tools in templates (Affiliate Revenue)",
                      "Tutorial content with tool demos",
                      "Case studies featuring Coda/Systeme.io",
                      "Comparison posts with affiliate links",
                      "Success stories using your stack"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded border border-neon-pink/30 flex items-center justify-center">
                          <Check size={12} className="text-neon-pink/30" />
                        </div>
                        <span className="text-neon-blue/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute top-0 right-0 p-12 opacity-5 text-neon-pink">
                  <DollarSign size={200} />
                </div>
              </div>
            </motion.div>
          )}

          {view === 'library' && (
            <motion.div 
              key="library"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto space-y-12"
            >
              <header>
                <h2 className="text-4xl font-bold tracking-tight mb-4 italic serif neon-text-glow">Prompt Library</h2>
                <p className="text-neon-blue/60 text-lg">Quick access to all 27 prompts in the system.</p>
              </header>

              <div className="space-y-12">
                {TOPICS.map((topic) => (
                  <section key={topic.id} className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-3 text-neon-blue">
                      <span className="w-8 h-8 bg-neon-blue/10 rounded-lg flex items-center justify-center text-sm border border-neon-blue/20">0{topic.id}</span>
                      {topic.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {topic.prompts.map((prompt) => (
                        <div 
                          key={prompt.id}
                          onClick={() => { setView('topics'); setSelectedTopic(topic); }}
                          className="bg-black/40 p-6 rounded-2xl border border-neon-blue/10 hover:border-neon-blue transition-all cursor-pointer group"
                        >
                          <p className="text-[10px] font-bold text-neon-blue/40 uppercase tracking-widest mb-1">Prompt {prompt.id}</p>
                          <p className="text-sm font-bold text-neon-blue/80 group-hover:text-neon-blue group-hover:underline leading-tight">{prompt.title}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Vault Lock Modal */}
      <AnimatePresence>
        {showVaultLock && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#121212] border border-neon-blue/40 rounded-3xl p-8 md:p-12 max-w-lg w-full text-center shadow-[0_0_50px_rgba(0,242,255,0.15),inset_0_0_30px_rgba(0,0,0,0.8)] relative"
            >
              <button 
                onClick={() => setShowVaultLock(false)}
                className="absolute top-6 right-6 text-neon-blue/50 hover:text-neon-blue transition-colors"
                title="Close"
              >
                <X size={24} />
              </button>
              <div className="mx-auto w-20 h-20 bg-neon-blue/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                <Lock size={40} className="text-neon-blue" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 italic serif">Premium Vault Locked</h3>
              <p className="text-neon-blue/80 text-lg mb-8 leading-relaxed">
                Secure your lifetime access to the Gemini 3 Pro strategic advisor engines for a one-time exchange of $27.
              </p>
              <button 
                onClick={() => { setHasVaultAccess(true); setShowVaultLock(false); }} 
                className="w-full neon-button-blue px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(0,242,255,0.4)]"
              >
                Unlock Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
