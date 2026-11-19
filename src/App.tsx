import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarCheck,
  Check,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  Compass,
  Copy,
  Download,
  LayoutDashboard,
  Library,
  Menu,
  MessageSquareHeart,
  Plus,
  Rocket,
  Search,
  Trash2,
  Upload,
  UserCircle,
  Users,
  X,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LandingPage from './LandingPage';
import MemberCheckInModal from './components/MemberCheckInModal';
import LandscapeGuide from './components/LandscapeGuide';
import PromptCard from './components/PromptCard';
import MentorshipView from './components/MentorshipView';
import { CUSTOMER_PROBLEMS, IMPLEMENTATION_CHECKLIST, TOPICS } from './constants';
import { AppView, BusinessProfile, StrategyMode, ToolPreference, Topic, WorkspaceProgress } from './types';
import {
  buildBusinessSnapshot,
  compileFullPrompt,
  exportRoadmapMarkdown,
  isProfileComplete
} from './utils/promptBuilder';

const STORAGE_KEYS = {
  profiles: 'dcl_profiles_v2',
  activeProfileId: 'dcl_active_profile_v2',
  progressMap: 'dcl_progress_v2',
  checkedIn: 'dcl_checked_in_v2',
  legacyProfile: 'coda_profile'
};

function createDefaultProfile(overrides: Partial<BusinessProfile> = {}): BusinessProfile {
  return {
    id: overrides.id || `prof-${Date.now()}`,
    memberName: '',
    businessName: '',
    businessType: '',
    targetAudience: '',
    location: '',
    currentRevenue: '',
    desiredRevenue: '',
    mainChallenge: '',
    productName: '',
    productPrice: '',
    toolPreference: 'superhuman_google',
    customTools: '',
    mode: 'own_business',
    ...overrides
  };
}

function createEmptyProgress(): WorkspaceProgress {
  return {
    completedPromptIds: [],
    completedChecklistIds: [],
    promptOutputs: {},
    checkInDates: [],
    dailyFocusNote: ''
  };
}

function getTodayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function App() {
  const [view, setView] = useState<AppView>('landing');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);

  // Library search & filters
  const [libraryQuery, setLibraryQuery] = useState('');
  const [libraryStatusFilter, setLibraryStatusFilter] = useState<'all' | 'todo' | 'done'>('all');
  const [libraryProblemFilter, setLibraryProblemFilter] = useState<string>('all');
  const [libraryCopiedId, setLibraryCopiedId] = useState<string | null>(null);
  const [roadmapCopied, setRoadmapCopied] = useState(false);
  const [importNotice, setImportNotice] = useState<string | null>(null);
  const backupInputRef = useRef<HTMLInputElement>(null);

  // Member workspace state (persisted locally — zero cloud required)
  const [hasCheckedIn, setHasCheckedIn] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.checkedIn) === 'true';
  });

  const [profiles, setProfiles] = useState<BusinessProfile[]>(() => {
    const savedV2 = localStorage.getItem(STORAGE_KEYS.profiles);
    if (savedV2) {
      try {
        const parsed = JSON.parse(savedV2);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {
        // fallback below
      }
    }
    const legacy = localStorage.getItem(STORAGE_KEYS.legacyProfile);
    if (legacy) {
      try {
        const old = JSON.parse(legacy);
        return [
          createDefaultProfile({
            id: 'default-1',
            businessName: old.businessName || '',
            businessType: old.businessType || '',
            targetAudience: old.targetAudience || '',
            location: old.location || '',
            currentRevenue: old.currentRevenue || '',
            desiredRevenue: old.desiredRevenue || '',
            mainChallenge: old.mainChallenge || '',
            productName: old.productName === 'Superhuman Docs Ebook' ? '' : old.productName || '',
            productPrice: old.productPrice === '19' ? '' : old.productPrice || ''
          })
        ];
      } catch {
        // fallback below
      }
    }
    return [createDefaultProfile({ id: 'default-1' })];
  });

  const [activeProfileId, setActiveProfileId] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEYS.activeProfileId) || 'default-1';
  });

  const [progressByProfile, setProgressByProfile] = useState<Record<string, WorkspaceProgress>>(
    () => {
      const saved = localStorage.getItem(STORAGE_KEYS.progressMap);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return {};
        }
      }
      return {};
    }
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.profiles, JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.activeProfileId, activeProfileId);
  }, [activeProfileId]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.progressMap, JSON.stringify(progressByProfile));
  }, [progressByProfile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.checkedIn, String(hasCheckedIn));
  }, [hasCheckedIn]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    if (view !== 'landing' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [view, selectedTopic]);

  const activeProfile =
    profiles.find((p) => p.id === activeProfileId) || profiles[0] || createDefaultProfile();
  const activeProgress: WorkspaceProgress =
    progressByProfile[activeProfile.id] || createEmptyProgress();

  const updateActiveProfile = (patch: Partial<BusinessProfile>) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === activeProfile.id ? { ...p, ...patch } : p))
    );
  };

  const updateActiveProgress = (updater: (current: WorkspaceProgress) => WorkspaceProgress) => {
    setProgressByProfile((prev) => {
      const current = prev[activeProfile.id] || createEmptyProgress();
      return {
        ...prev,
        [activeProfile.id]: updater(current)
      };
    });
  };

  const togglePromptComplete = (promptId: string) => {
    updateActiveProgress((curr) => {
      const exists = curr.completedPromptIds.includes(promptId);
      return {
        ...curr,
        completedPromptIds: exists
          ? curr.completedPromptIds.filter((id) => id !== promptId)
          : [...curr.completedPromptIds, promptId]
      };
    });
  };

  const savePromptOutput = (promptId: string, output: string) => {
    updateActiveProgress((curr) => ({
      ...curr,
      promptOutputs: {
        ...curr.promptOutputs,
        [promptId]: output
      }
    }));
  };

  const toggleChecklistItem = (itemId: string) => {
    updateActiveProgress((curr) => {
      const exists = curr.completedChecklistIds.includes(itemId);
      return {
        ...curr,
        completedChecklistIds: exists
          ? curr.completedChecklistIds.filter((id) => id !== itemId)
          : [...curr.completedChecklistIds, itemId]
      };
    });
  };

  const todayIso = getTodayIso();
  const checkedInToday = activeProgress.checkInDates.includes(todayIso);

  const handleDailyCheckIn = () => {
    if (checkedInToday) return;
    updateActiveProgress((curr) => ({
      ...curr,
      checkInDates: [...curr.checkInDates, todayIso]
    }));
  };

  const handleEnterFromLanding = () => {
    if (hasCheckedIn && activeProfile.memberName.trim()) {
      setView('dashboard');
    } else {
      setShowCheckInModal(true);
    }
  };

  const handleCreateWorkspace = (
    memberName: string,
    businessName: string,
    mode: StrategyMode
  ) => {
    updateActiveProfile({
      memberName,
      businessName: businessName || activeProfile.businessName,
      mode
    });
    updateActiveProgress((curr) => ({
      ...curr,
      checkInDates: curr.checkInDates.includes(todayIso)
        ? curr.checkInDates
        : [...curr.checkInDates, todayIso]
    }));
    setHasCheckedIn(true);
    setShowCheckInModal(false);
    setView('dashboard');
  };

  const handleLoadSampleDemo = () => {
    const demoId = 'demo-contractor-1';
    const demoProfile = createDefaultProfile({
      id: demoId,
      memberName: 'Demo Contractor',
      businessName: 'Apex Comfort HVAC & Plumbing',
      businessType: 'Residential HVAC & Emergency Plumbing',
      targetAudience: 'Busy Homeowners 35-65',
      location: 'Austin, TX',
      currentRevenue: '8000',
      desiredRevenue: '22000',
      mainChallenge: 'Missing calls while out on job sites and losing $500+ jobs to competitors who answer first',
      productName: '24-Hour Comfort & Efficiency Tune-Up',
      productPrice: '297',
      toolPreference: 'superhuman_google',
      mode: 'own_business'
    });

    setProfiles((prev) => {
      const exists = prev.some((p) => p.id === demoId);
      return exists ? prev.map((p) => (p.id === demoId ? demoProfile : p)) : [...prev, demoProfile];
    });
    setActiveProfileId(demoId);
    setProgressByProfile((prev) => ({
      ...prev,
      [demoId]: {
        completedPromptIds: ['1.1', '2.1'],
        completedChecklistIds: ['chk-1', 'chk-2'],
        promptOutputs: {
          '1.1':
            '90-Day Target: +$14,000/mo (+20 jobs @ $700 avg).\nWeekly Non-Negotiable: 8 inbound inquiries -> 5 booked estimates -> 4 closed jobs.\nDaily 15-min habit: Follow up on every open quote before 10:00 AM.'
        },
        checkInDates: [todayIso],
        dailyFocusNote: 'Publish 24-Hour Comfort Tune-Up page and connect instant missed-call text-back.'
      }
    }));
    setHasCheckedIn(true);
    setShowCheckInModal(false);
    setView('dashboard');
  };

  const handleAddNewProfile = () => {
    const newId = `prof-${Date.now()}`;
    const newProfile = createDefaultProfile({
      id: newId,
      memberName: activeProfile.memberName,
      businessName: `New Project ${profiles.length + 1}`,
      mode: 'client_project'
    });
    setProfiles((prev) => [...prev, newProfile]);
    setActiveProfileId(newId);
  };

  const handleDeleteProfile = (id: string) => {
    if (profiles.length <= 1) return;
    const remaining = profiles.filter((p) => p.id !== id);
    setProfiles(remaining);
    if (activeProfileId === id && remaining[0]) {
      setActiveProfileId(remaining[0].id);
    }
  };

  const handleExportWorkspaceJson = () => {
    const payload = {
      version: 2,
      exportedAt: new Date().toISOString(),
      profiles,
      activeProfileId,
      progressByProfile
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `creator-compass-workspace-backup.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportWorkspaceJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (Array.isArray(parsed.profiles) && parsed.profiles.length > 0) {
          setProfiles(parsed.profiles);
          setActiveProfileId(parsed.activeProfileId || parsed.profiles[0].id);
          if (parsed.progressByProfile) {
            setProgressByProfile(parsed.progressByProfile);
          }
          setHasCheckedIn(true);
          setShowCheckInModal(false);
          setView('dashboard');
          setImportNotice('Workspace backup restored successfully.');
          setTimeout(() => setImportNotice(null), 4000);
        }
      } catch {
        setImportNotice('Could not read that backup file. Please choose a valid .json backup.');
        setTimeout(() => setImportNotice(null), 4000);
      }
    };
    reader.readAsText(file);
  };

  const handleCopyRoadmap = () => {
    const md = exportRoadmapMarkdown(
      activeProfile,
      TOPICS,
      activeProgress.completedPromptIds,
      activeProgress.promptOutputs
    );
    navigator.clipboard.writeText(md);
    setRoadmapCopied(true);
    setTimeout(() => setRoadmapCopied(false), 2000);
  };

  const handleDownloadRoadmap = () => {
    const md = exportRoadmapMarkdown(
      activeProfile,
      TOPICS,
      activeProgress.completedPromptIds,
      activeProgress.promptOutputs
    );
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const slug = (activeProfile.businessName || 'my-business')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');
    a.href = url;
    a.download = `${slug}-strategy-roadmap.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalPrompts = TOPICS.reduce((acc, t) => acc + t.prompts.length, 0);
  const completedCount = activeProgress.completedPromptIds.length;
  const overallPercent = Math.round((completedCount / totalPrompts) * 100);

  const getPhaseProgress = (topicIds: number[]) => {
    const phasePrompts = TOPICS.filter((t) => topicIds.includes(t.id)).flatMap((t) => t.prompts);
    const done = phasePrompts.filter((p) =>
      activeProgress.completedPromptIds.includes(p.id)
    ).length;
    return {
      done,
      total: phasePrompts.length,
      percent: phasePrompts.length ? Math.round((done / phasePrompts.length) * 100) : 0
    };
  };

  const navigateToTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setView('topics');
    setIsMobileMenuOpen(false);
  };

  const NavItem = ({
    id,
    icon: Icon,
    label
  }: {
    id: AppView;
    icon: typeof LayoutDashboard;
    label: string;
  }) => (
    <button
      onClick={() => {
        if (id === 'topics') setSelectedTopic(null);
        setView(id);
        setIsMobileMenuOpen(false);
      }}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap ${
        view === id
          ? 'bg-neon-blue text-black font-bold'
          : 'text-slate-300 hover:bg-white/5 hover:text-white font-medium'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  if (view === 'landing') {
    return (
      <>
        <LandingPage
          onEnter={handleEnterFromLanding}
          onOpenMentorship={() => {
            setView('mentorship');
          }}
          returningMemberName={hasCheckedIn ? activeProfile.memberName : undefined}
        />
        <MemberCheckInModal
          isOpen={showCheckInModal}
          onClose={() => setShowCheckInModal(false)}
          onCreateWorkspace={handleCreateWorkspace}
          onImportBackup={handleImportWorkspaceJson}
          onLoadSampleDemo={handleLoadSampleDemo}
          onContinueGuest={() => {
            setHasCheckedIn(true);
            setShowCheckInModal(false);
            setView('dashboard');
          }}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col md:flex-row font-sans text-slate-200">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-72 shrink-0 bg-[#15171c] border-r border-white/10 flex-col p-5 gap-6 sticky top-0 h-screen overflow-y-auto">
        <div className="flex items-center justify-between px-2">
          <button
            onClick={() => setView('landing')}
            className="font-bold text-lg tracking-tight text-neon-blue neon-text-glow text-left"
          >
            Design-Create-Launch
          </button>
        </div>

        {/* Active Member / Workspace Switcher */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-white truncate">
              {activeProfile.memberName
                ? `Hi, ${activeProfile.memberName}`
                : 'Guest Workspace'}
            </span>
            <button
              onClick={() => setShowCheckInModal(true)}
              className="text-xs text-neon-blue hover:underline whitespace-nowrap shrink-0"
            >
              Sign In / Switch
            </button>
          </div>
          <select
            value={activeProfile.id}
            onChange={(e) => setActiveProfileId(e.target.value)}
            aria-label="Active business or client profile"
            className="w-full px-2.5 py-1.5 rounded-lg bg-[#181a1f] border border-white/15 text-xs text-slate-200 outline-none focus:border-neon-blue"
          >
            {profiles.map((p) => (
              <option key={p.id} value={p.id}>
                {p.businessName.trim() || 'Untitled Business'} (
                {p.mode === 'client_project' ? 'Client' : 'My Business'})
              </option>
            ))}
          </select>
        </div>

        <nav className="flex flex-col gap-1.5">
          <button
            onClick={() => setView('landing')}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Rocket size={18} />
            <span>Landing Page</span>
          </button>
          <NavItem id="dashboard" icon={LayoutDashboard} label="Daily Dashboard" />
          <NavItem id="landscape" icon={Compass} label="Landscape & Tools" />
          <NavItem id="profile" icon={UserCircle} label="Business Profile" />
          <NavItem id="topics" icon={BookOpen} label="9-Topic System" />
          <NavItem id="tracker" icon={CheckSquare} label="Roadmap Tracker" />
          <NavItem id="library" icon={Library} label="All 27 Prompts" />
          <NavItem id="mentorship" icon={MessageSquareHeart} label="Work With Steven" />
        </nav>

        {/* Real Progress Card */}
        <div className="mt-auto p-4 bg-black/45 rounded-2xl border border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-400">System Progress</span>
            <span className="font-mono font-bold text-neon-blue tabular-nums">
              {completedCount}/{totalPrompts} ({overallPercent}%)
            </span>
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div
              className="bg-neon-blue h-full transition-all duration-300"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 tabular-nums">
            Daily check-ins logged: <strong className="text-white">{activeProgress.checkInDates.length}</strong>
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden bg-[#15171c] border-b border-white/10 px-4 py-3.5 flex items-center justify-between sticky top-0 z-50">
        <button
          onClick={() => setView('dashboard')}
          className="font-bold text-base text-neon-blue"
        >
          Design-Create-Launch
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-300 tabular-nums">
            {completedCount}/{totalPrompts}
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-200"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden fixed inset-0 top-[57px] bg-[#121212] z-40 p-5 flex flex-col gap-2 overflow-y-auto"
          >
            <NavItem id="dashboard" icon={LayoutDashboard} label="Daily Dashboard" />
            <NavItem id="landscape" icon={Compass} label="Landscape & Tools" />
            <NavItem id="profile" icon={UserCircle} label="Business Profile" />
            <NavItem id="topics" icon={BookOpen} label="9-Topic System" />
            <NavItem id="tracker" icon={CheckSquare} label="Roadmap Tracker" />
            <NavItem id="library" icon={Library} label="All 27 Prompts" />
            <NavItem id="mentorship" icon={MessageSquareHeart} label="Work With Steven" />
            <button
              onClick={() => {
                setView('landing');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white mt-2 border-t border-white/10 pt-4"
            >
              <Rocket size={18} />
              <span>Back to Landing Page</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-5 md:p-10 lg:p-12">
        {importNotice && (
          <div className="max-w-5xl mx-auto mb-6 p-3.5 rounded-xl bg-neon-blue/15 border border-neon-blue/40 text-sm text-white">
            {importNotice}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* 1. DASHBOARD */}
          {view === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl mx-auto space-y-10"
            >
              <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-neon-blue">
                    {activeProfile.memberName
                      ? `Welcome back, ${activeProfile.memberName}`
                      : 'VIP Daily Strategy Workspace'}
                    {activeProfile.businessName ? ` · ${activeProfile.businessName}` : ''}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Master Strategy Dashboard
                  </h2>
                  <p className="text-slate-300 text-base max-w-2xl">
                    Return here each day for 15–20 minutes until your business machine is set up, tested, and generating leads automatically.
                  </p>
                </div>

                <button
                  onClick={handleDailyCheckIn}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 whitespace-nowrap shrink-0 transition-colors ${
                    checkedInToday
                      ? 'bg-neon-green/15 border border-neon-green/40 text-neon-green'
                      : 'neon-button-blue'
                  }`}
                >
                  <CalendarCheck size={16} />
                  {checkedInToday
                    ? `Checked In Today (Day ${activeProgress.checkInDates.length})`
                    : 'Log Today’s Check-In'}
                </button>
              </header>

              {/* Daily Focus & Setup Readiness Strip */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-[#181a1f] p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-neon-blue/15 rounded-xl flex items-center justify-center text-neon-blue">
                      <UserCircle size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white">1. Business Profile</h3>
                    <p className="text-sm text-slate-300">
                      {isProfileComplete(activeProfile)
                        ? `Active for ${activeProfile.businessName} (${activeProfile.businessType}).`
                        : 'Fill in your business details once so all 27 prompts auto-customize.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setView('profile')}
                    className="text-neon-blue font-semibold text-sm flex items-center gap-1.5 hover:underline"
                  >
                    {isProfileComplete(activeProfile) ? 'Edit Profile & Tools' : 'Set Up Profile Now'}
                    <ChevronRight size={15} />
                  </button>
                </div>

                <div className="bg-[#181a1f] p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-neon-orange/15 rounded-xl flex items-center justify-center text-neon-orange">
                      <Compass size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white">2. New to Marketing?</h3>
                    <p className="text-sm text-slate-300">
                      See how Superhuman Docs, Gemini, funnels, and follow-ups work together in plain English.
                    </p>
                  </div>
                  <button
                    onClick={() => setView('landscape')}
                    className="text-neon-orange font-semibold text-sm flex items-center gap-1.5 hover:underline"
                  >
                    Open Landscape Guide <ChevronRight size={15} />
                  </button>
                </div>

                <div className="bg-[#181a1f] p-6 rounded-2xl border border-neon-blue/35 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-neon-blue/20 rounded-xl flex items-center justify-center text-neon-blue">
                      <Zap size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white">3. Build Next Topic</h3>
                    <p className="text-sm text-slate-300 tabular-nums">
                      You have completed {completedCount} of {totalPrompts} prompts ({overallPercent}%).
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const nextTopic =
                        TOPICS.find((t) =>
                          t.prompts.some(
                            (p) => !activeProgress.completedPromptIds.includes(p.id)
                          )
                        ) || TOPICS[0];
                      navigateToTopic(nextTopic);
                    }}
                    className="neon-button-blue px-4 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"
                  >
                    Continue Next Step <ArrowRight size={16} />
                  </button>
                </div>
              </section>

              {/* Daily Focus Note (14-21 Day Momentum) */}
              <section className="bg-[#181a1f] p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-sm font-bold text-white">
                    Today&apos;s One Priority Step (14–21 Day Repetition Log)
                  </label>
                  <span className="text-xs text-slate-400">Auto-saved locally for your next visit</span>
                </div>
                <input
                  type="text"
                  value={activeProgress.dailyFocusNote}
                  onChange={(e) =>
                    updateActiveProgress((curr) => ({
                      ...curr,
                      dailyFocusNote: e.target.value
                    }))
                  }
                  placeholder="e.g. Finish Prompt 2.1 Offer Stack and paste result into Superhuman Docs..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-neon-blue outline-none"
                />
              </section>

              {/* Customer Problem -> Strategy Mapper */}
              <section className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Customer Problem → Strategy Mapper
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Not sure where to start for your business or a customer? Pick the exact bottleneck below to jump to the topics that fix it.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CUSTOMER_PROBLEMS.map((prob) => (
                    <div
                      key={prob.id}
                      className="bg-[#181a1f] p-5 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <h4 className="font-bold text-white text-base">{prob.symptom}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          <strong className="text-slate-300">Why it happens:</strong> {prob.rootCause}
                        </p>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          <strong className="text-neon-blue">The fix:</strong> {prob.plainEnglishFix}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs text-slate-400">
                          Tools: {prob.toolsUsed.join(' · ')}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {prob.recommendedTopicIds.map((tid) => {
                            const topic = TOPICS.find((t) => t.id === tid);
                            if (!topic) return null;
                            return (
                              <button
                                key={tid}
                                onClick={() => navigateToTopic(topic)}
                                className="px-2.5 py-1 rounded-lg bg-neon-blue/15 text-neon-blue hover:bg-neon-blue hover:text-black text-xs font-semibold transition-colors whitespace-nowrap"
                              >
                                Topic 0{tid} →
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Subtle Work With Steven Bridge */}
              <section className="bg-[#181a1f] p-6 md:p-8 rounded-2xl border border-neon-raspberry/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1.5 max-w-2xl">
                  <p className="text-xs font-semibold text-neon-raspberry">Personal 1-on-1 Support</p>
                  <h3 className="text-xl font-bold text-white">
                    Want Steven to review your offer, funnel, or customer roadmap with you?
                  </h3>
                  <p className="text-sm text-slate-300">
                    Use this workspace daily to build your momentum. When you are ready for personal feedback or hands-on setup help, export your brief in one click.
                  </p>
                </div>
                <button
                  onClick={() => setView('mentorship')}
                  className="px-5 py-3 rounded-xl bg-neon-raspberry/15 border border-neon-raspberry text-white hover:bg-neon-raspberry font-bold text-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
                >
                  <MessageSquareHeart size={16} /> Work With Steven
                </button>
              </section>
            </motion.div>
          )}

          {/* 2. LANDSCAPE & TOOLS GUIDE */}
          {view === 'landscape' && (
            <motion.div
              key="landscape"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <LandscapeGuide onSelectTopic={navigateToTopic} />
            </motion.div>
          )}

          {/* 3. BUSINESS PROFILE & MULTI-CLIENT SWITCHER */}
          {view === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                    Business &amp; Client Profile
                  </h2>
                  <p className="text-slate-300 text-base">
                    Everything you enter here is injected automatically into all 27 AI prompts. Switch between your own business and customer strategy projects anytime.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button
                    onClick={handleLoadSampleDemo}
                    className="px-4 py-2.5 rounded-xl bg-neon-orange/15 border border-neon-orange/40 hover:bg-neon-orange hover:text-black text-neon-orange text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-colors"
                  >
                    <Zap size={14} /> Load Sample Demo
                  </button>
                  <button
                    onClick={handleAddNewProfile}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold flex items-center gap-2 whitespace-nowrap"
                  >
                    <Plus size={15} /> Add Client / Business Profile
                  </button>
                </div>
              </header>

              {/* Profile Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {profiles.map((p) => (
                  <div
                    key={p.id}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-colors ${
                      p.id === activeProfile.id
                        ? 'bg-neon-blue text-black border-neon-blue'
                        : 'bg-[#181a1f] text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <button
                      onClick={() => setActiveProfileId(p.id)}
                      className="flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <Users size={13} />
                      <span>{p.businessName.trim() || 'Untitled Business'}</span>
                    </button>
                    {profiles.length > 1 && (
                      <button
                        onClick={() => handleDeleteProfile(p.id)}
                        className={`p-0.5 rounded ${
                          p.id === activeProfile.id
                            ? 'hover:bg-black/15 text-black'
                            : 'hover:text-neon-raspberry text-slate-500'
                        }`}
                        aria-label={`Delete ${p.businessName || 'profile'}`}
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-[#181a1f] p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
                {/* Mode Toggle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Your Name (Workspace Owner)
                    </label>
                    <input
                      type="text"
                      value={activeProfile.memberName}
                      onChange={(e) => updateActiveProfile({ memberName: e.target.value })}
                      placeholder="e.g. Sarah"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder:text-slate-500 focus:border-neon-blue outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Strategy Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-black/50 rounded-xl border border-white/15">
                      <button
                        type="button"
                        onClick={() => updateActiveProfile({ mode: 'own_business' })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                          activeProfile.mode === 'own_business'
                            ? 'bg-neon-blue text-black'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        My Business
                      </button>
                      <button
                        type="button"
                        onClick={() => updateActiveProfile({ mode: 'client_project' })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                          activeProfile.mode === 'client_project'
                            ? 'bg-neon-blue text-black'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        Client Strategy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Core Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      label: 'Business Name',
                      key: 'businessName',
                      placeholder: 'e.g. Summit Heating & Air'
                    },
                    {
                      label: 'Business Type / Service',
                      key: 'businessType',
                      placeholder: 'e.g. Residential HVAC & Plumbing'
                    },
                    {
                      label: 'Target Audience',
                      key: 'targetAudience',
                      placeholder: 'e.g. Homeowners 35-65'
                    },
                    {
                      label: 'Location / Niche',
                      key: 'location',
                      placeholder: 'e.g. Nashville, TN'
                    },
                    {
                      label: 'Current Monthly Revenue ($)',
                      key: 'currentRevenue',
                      placeholder: 'e.g. 5000'
                    },
                    {
                      label: 'Desired Monthly Revenue ($)',
                      key: 'desiredRevenue',
                      placeholder: 'e.g. 15000'
                    },
                    {
                      label: 'Core Offer / Product Name',
                      key: 'productName',
                      placeholder: 'e.g. Priority Comfort Tune-Up'
                    },
                    {
                      label: 'Offer Price ($)',
                      key: 'productPrice',
                      placeholder: 'e.g. 297'
                    }
                  ].map((field) => (
                    <div key={field.key} className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        value={(activeProfile as unknown as Record<string, string>)[field.key] || ''}
                        onChange={(e) =>
                          updateActiveProfile({ [field.key]: e.target.value } as Partial<BusinessProfile>)
                        }
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder:text-slate-500 focus:border-neon-blue outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Main Challenge / Bottleneck Right Now
                  </label>
                  <textarea
                    value={activeProfile.mainChallenge}
                    onChange={(e) => updateActiveProfile({ mainChallenge: e.target.value })}
                    placeholder="e.g. Missing calls while out on job sites and struggling to follow up consistently..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder:text-slate-500 focus:border-neon-blue outline-none resize-none"
                  />
                </div>

                {/* Tool Stack Preference */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Active Tool Stack (Adapts All 27 Prompts Automatically)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {[
                      {
                        id: 'superhuman_google' as ToolPreference,
                        title: 'Full Modern Growth Stack',
                        desc: 'Superhuman Docs, Gemini/NotebookLM, Pomelli, Google Workspace, Systeme.io & AI Studio/Vercel'
                      },
                      {
                        id: 'all_in_one' as ToolPreference,
                        title: 'Lean Starter Stack',
                        desc: 'Google Workspace ($8/mo) + Gemini + Superhuman Docs + Systeme.io'
                      },
                      {
                        id: 'custom' as ToolPreference,
                        title: 'Custom Tool Stack',
                        desc: 'Specify your exact tools below'
                      }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => updateActiveProfile({ toolPreference: opt.id })}
                        className={`p-3.5 rounded-xl border text-left transition-colors ${
                          activeProfile.toolPreference === opt.id
                            ? 'bg-neon-blue/15 border-neon-blue text-white'
                            : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/25'
                        }`}
                      >
                        <p className="text-xs font-bold">{opt.title}</p>
                        <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
                      </button>
                    ))}
                  </div>

                  {activeProfile.toolPreference === 'custom' && (
                    <input
                      type="text"
                      value={activeProfile.customTools}
                      onChange={(e) => updateActiveProfile({ customTools: e.target.value })}
                      placeholder="e.g. WordPress, Mailchimp, Google Sheets, Gemini"
                      className="w-full mt-2 px-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-neon-blue outline-none"
                    />
                  )}
                </div>

                {/* Live Snapshot Preview */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <p className="text-xs font-semibold text-neon-blue">
                    Live Snapshot Injected Into Every Prompt:
                  </p>
                  <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {buildBusinessSnapshot(activeProfile)}
                  </pre>
                </div>

                {/* Actions + Backup */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleExportWorkspaceJson}
                      className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-xs font-semibold text-slate-200 hover:border-neon-blue flex items-center gap-1.5"
                    >
                      <Download size={14} /> Save Backup (.json)
                    </button>
                    <button
                      type="button"
                      onClick={() => backupInputRef.current?.click()}
                      className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-xs font-semibold text-slate-200 hover:border-neon-blue flex items-center gap-1.5"
                    >
                      <Upload size={14} /> Restore Backup
                    </button>
                    <input
                      ref={backupInputRef}
                      type="file"
                      accept="application/json"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) handleImportWorkspaceJson(f);
                      }}
                    />
                  </div>

                  <button
                    onClick={() => setView('topics')}
                    className="neon-button-blue px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2"
                  >
                    Go to 9-Topic System <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. 9-TOPIC SYSTEM */}
          {view === 'topics' && (
            <motion.div
              key="topics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              {!selectedTopic ? (
                <div className="space-y-8">
                  <header className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                      The 9-Topic System
                    </h2>
                    <p className="text-slate-300 text-base">
                      Pick any topic below to learn the concept in plain English, copy tailored AI prompts, and save your outputs.
                    </p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {TOPICS.map((topic) => {
                      const doneInTopic = topic.prompts.filter((p) =>
                        activeProgress.completedPromptIds.includes(p.id)
                      ).length;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => setSelectedTopic(topic)}
                          className="text-left group bg-[#181a1f] p-6 rounded-2xl border border-white/10 hover:border-neon-blue/60 transition-colors flex flex-col justify-between gap-5"
                        >
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between text-xs text-slate-400 font-mono tabular-nums">
                              <span>
                                Topic 0{topic.id} · Phase {topic.phase}
                              </span>
                              <span
                                className={
                                  doneInTopic === topic.prompts.length
                                    ? 'text-neon-green font-semibold'
                                    : ''
                                }
                              >
                                {doneInTopic}/{topic.prompts.length} Done
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                              {topic.title}
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {topic.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                            <span className="text-slate-400 truncate max-w-[180px]">
                              {topic.coreTools.join(' · ')}
                            </span>
                            <span className="text-neon-blue font-bold flex items-center gap-1 whitespace-nowrap">
                              Open <ChevronRight size={14} />
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="text-slate-300 hover:text-neon-blue font-semibold text-sm flex items-center gap-1.5"
                    >
                      <ChevronRight size={16} className="rotate-180" /> Back to All 9 Topics
                    </button>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>Tools: {selectedTopic.coreTools.join(' · ')}</span>
                    </div>
                  </div>

                  {/* Topic Learning Overview Box */}
                  <header className="bg-[#181a1f] p-6 md:p-8 rounded-2xl border border-white/10 space-y-5">
                    <div className="space-y-2">
                      <p className="text-xs font-mono text-neon-blue">
                        Topic 0{selectedTopic.id} · Phase {selectedTopic.phase} · {selectedTopic.subtitle}
                      </p>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        {selectedTopic.title}
                      </h2>
                      <p className="text-base text-slate-200 leading-relaxed max-w-3xl">
                        {selectedTopic.plainEnglish}
                      </p>
                      <p className="text-sm text-slate-400">
                        <strong className="text-neon-orange">Problem this solves:</strong>{' '}
                        {selectedTopic.solvesProblem}
                      </p>
                    </div>

                    {/* Key Terms Glossary */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedTopic.glossary.map((item, idx) => (
                        <div key={idx} className="text-xs space-y-1">
                          <span className="font-bold text-white">{item.term}: </span>
                          <span className="text-slate-300">{item.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </header>

                  {/* 3 Upgraded Prompts */}
                  <div className="space-y-6">
                    {selectedTopic.prompts.map((prompt) => (
                      <div key={prompt.id}>
                        <PromptCard
                          prompt={prompt}
                          profile={activeProfile}
                          isCompleted={activeProgress.completedPromptIds.includes(prompt.id)}
                          savedOutput={activeProgress.promptOutputs[prompt.id] || ''}
                          onToggleComplete={togglePromptComplete}
                          onSaveOutput={savePromptOutput}
                          onGoToProfile={() => setView('profile')}
                          onGoToMentorship={() => setView('mentorship')}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* 5. INTERACTIVE IMPLEMENTATION TRACKER */}
          {view === 'tracker' && (
            <motion.div
              key="tracker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto space-y-10"
            >
              <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                    Implementation Roadmap Tracker
                  </h2>
                  <p className="text-slate-300 text-base">
                    Track your 3-phase build progress and export your saved strategy straight into Superhuman Docs.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 shrink-0">
                  <button
                    onClick={handleCopyRoadmap}
                    className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-bold text-white hover:border-neon-blue flex items-center gap-1.5 whitespace-nowrap"
                  >
                    {roadmapCopied ? <Check size={14} className="text-neon-green" /> : <Copy size={14} />}
                    {roadmapCopied ? 'Copied for Superhuman Docs!' : 'Copy for Superhuman Docs'}
                  </button>
                  <button
                    onClick={handleDownloadRoadmap}
                    className="neon-button-blue px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <Download size={14} /> Download Roadmap (.md)
                  </button>
                </div>
              </header>

              {/* 3 Interactive Phases */}
              <div className="space-y-5">
                {[
                  {
                    phase: 1,
                    title: 'Phase 1 · Foundation (Goals, Offer & Copy)',
                    topicIds: [1, 2, 3],
                    accent: 'bg-neon-orange text-black'
                  },
                  {
                    phase: 2,
                    title: 'Phase 2 · Engine Build (Emails, Funnel & Follow-Up)',
                    topicIds: [4, 7, 9],
                    accent: 'bg-neon-blue text-black'
                  },
                  {
                    phase: 3,
                    title: 'Phase 3 · Visibility & Scale (Visuals, Video & Social)',
                    topicIds: [5, 6, 8],
                    accent: 'bg-neon-raspberry text-white'
                  }
                ].map((phase) => {
                  const stats = getPhaseProgress(phase.topicIds);
                  return (
                    <div
                      key={phase.phase}
                      className="bg-[#181a1f] rounded-2xl border border-white/10 overflow-hidden"
                    >
                      <div className="p-5 md:p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-9 h-9 ${phase.accent} rounded-xl flex items-center justify-center font-bold text-sm tabular-nums`}
                          >
                            {phase.phase}
                          </div>
                          <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                        </div>
                        <span className="text-xs font-mono font-bold text-neon-blue tabular-nums">
                          {stats.done}/{stats.total} Prompts ({stats.percent}%)
                        </span>
                      </div>
                      <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {phase.topicIds.map((tid) => {
                          const topic = TOPICS.find((t) => t.id === tid);
                          if (!topic) return null;
                          const topicDone = topic.prompts.filter((p) =>
                            activeProgress.completedPromptIds.includes(p.id)
                          ).length;
                          return (
                            <button
                              key={tid}
                              onClick={() => navigateToTopic(topic)}
                              className="text-left p-4 rounded-xl border border-white/10 hover:border-neon-blue bg-black/35 transition-colors group"
                            >
                              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                                <span>Topic 0{tid}</span>
                                <span
                                  className={
                                    topicDone === topic.prompts.length ? 'text-neon-green' : ''
                                  }
                                >
                                  {topicDone}/{topic.prompts.length}
                                </span>
                              </div>
                              <p className="text-sm font-bold text-white group-hover:text-neon-blue">
                                {topic.title}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Launch Checklist */}
              <div className="bg-[#181a1f] p-6 md:p-8 rounded-2xl border border-white/10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <BarChart3 size={18} className="text-neon-green" />
                      Launch &amp; Setup Milestones Checklist
                    </h3>
                    <p className="text-sm text-slate-400 mt-0.5">
                      Check off each milestone as you build your system day by day.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-neon-green tabular-nums">
                    {activeProgress.completedChecklistIds.length}/{IMPLEMENTATION_CHECKLIST.length} Complete
                  </span>
                </div>

                <ul className="space-y-3">
                  {IMPLEMENTATION_CHECKLIST.map((item) => {
                    const checked = activeProgress.completedChecklistIds.includes(item.id);
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => toggleChecklistItem(item.id)}
                          className={`w-full text-left p-4 rounded-xl border transition-colors flex items-start gap-3.5 ${
                            checked
                              ? 'bg-neon-green/10 border-neon-green/35'
                              : 'bg-black/35 border-white/10 hover:border-white/25'
                          }`}
                        >
                          <div
                            className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                              checked
                                ? 'bg-neon-green border-neon-green text-black'
                                : 'border-slate-500'
                            }`}
                          >
                            {checked && <Check size={13} strokeWidth={3} />}
                          </div>
                          <div className="space-y-0.5">
                            <p
                              className={`text-sm font-semibold ${
                                checked ? 'text-white line-through opacity-80' : 'text-white'
                              }`}
                            >
                              {item.label}
                            </p>
                            <p className="text-xs text-slate-400">{item.detail}</p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}

          {/* 6. ALL 27 PROMPTS LIBRARY */}
          {view === 'library' && (
            <motion.div
              key="library"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl mx-auto space-y-8"
            >
              <header className="space-y-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                    Prompt Library (All 27 Prompts)
                  </h2>
                  <p className="text-slate-300 text-base">
                    Search by task, filter by customer problem, or one-click copy any personalized prompt directly from here.
                  </p>
                </div>

                {/* Search & Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="relative">
                    <Search
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={libraryQuery}
                      onChange={(e) => setLibraryQuery(e.target.value)}
                      placeholder="Search prompts (e.g. video, offer, SMS)..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#181a1f] border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-neon-blue outline-none"
                    />
                  </div>

                  <select
                    value={libraryProblemFilter}
                    onChange={(e) => setLibraryProblemFilter(e.target.value)}
                    aria-label="Filter prompts by customer problem"
                    className="px-4 py-2.5 rounded-xl bg-[#181a1f] border border-white/15 text-sm text-slate-200 outline-none focus:border-neon-blue"
                  >
                    <option value="all">All Customer Problems</option>
                    {CUSTOMER_PROBLEMS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.symptom.replace(/[“”]/g, '').slice(0, 48)}...
                      </option>
                    ))}
                  </select>

                  <div className="grid grid-cols-3 gap-1 p-1 bg-[#181a1f] rounded-xl border border-white/15">
                    {[
                      { id: 'all' as const, label: 'All' },
                      { id: 'todo' as const, label: 'To Do' },
                      { id: 'done' as const, label: 'Done' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setLibraryStatusFilter(tab.id)}
                        className={`py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                          libraryStatusFilter === tab.id
                            ? 'bg-neon-blue text-black'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </header>

              <div className="space-y-8">
                {TOPICS.map((topic) => {
                  const filteredPrompts = topic.prompts.filter((prompt) => {
                    const isDone = activeProgress.completedPromptIds.includes(prompt.id);
                    if (libraryStatusFilter === 'done' && !isDone) return false;
                    if (libraryStatusFilter === 'todo' && isDone) return false;
                    if (
                      libraryProblemFilter !== 'all' &&
                      !prompt.problemTags.includes(libraryProblemFilter)
                    ) {
                      return false;
                    }
                    if (libraryQuery.trim()) {
                      const q = libraryQuery.toLowerCase();
                      const match =
                        prompt.title.toLowerCase().includes(q) ||
                        prompt.intro.toLowerCase().includes(q) ||
                        topic.title.toLowerCase().includes(q);
                      if (!match) return false;
                    }
                    return true;
                  });

                  if (filteredPrompts.length === 0) return null;

                  return (
                    <section key={topic.id} className="space-y-3">
                      <h3 className="text-lg font-bold flex items-center gap-2.5 text-white">
                        <span className="font-mono text-xs px-2 py-1 rounded-lg bg-neon-blue/15 text-neon-blue">
                          0{topic.id}
                        </span>
                        <span>{topic.title}</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {filteredPrompts.map((prompt) => {
                          const isDone = activeProgress.completedPromptIds.includes(prompt.id);
                          return (
                            <div
                              key={prompt.id}
                              className={`bg-[#181a1f] p-5 rounded-2xl border flex flex-col justify-between gap-4 ${
                                isDone ? 'border-neon-green/35' : 'border-white/10'
                              }`}
                            >
                              <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs font-mono">
                                  <span className="text-neon-blue">Prompt {prompt.id}</span>
                                  {isDone && (
                                    <span className="text-neon-green flex items-center gap-1">
                                      <CheckCircle2 size={12} /> Done
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-sm font-bold text-white leading-snug">
                                  {prompt.title}
                                </h4>
                                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                  {prompt.intro}
                                </p>
                              </div>

                              <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/10">
                                <button
                                  onClick={() => navigateToTopic(topic)}
                                  className="text-xs font-semibold text-slate-300 hover:text-white"
                                >
                                  Open Details
                                </button>
                                <button
                                  onClick={() => {
                                    const compiled = compileFullPrompt(prompt, activeProfile);
                                    navigator.clipboard.writeText(compiled);
                                    setLibraryCopiedId(prompt.id);
                                    setTimeout(() => setLibraryCopiedId(null), 1800);
                                  }}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 ${
                                    libraryCopiedId === prompt.id
                                      ? 'bg-neon-green text-black'
                                      : 'bg-neon-blue/15 text-neon-blue hover:bg-neon-blue hover:text-black'
                                  }`}
                                >
                                  {libraryCopiedId === prompt.id ? (
                                    <>
                                      <Check size={12} /> Copied
                                    </>
                                  ) : (
                                    <>
                                      <Copy size={12} /> Copy
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* 7. WORK WITH STEVEN (PERSONAL MENTORSHIP) */}
          {view === 'mentorship' && (
            <motion.div
              key="mentorship"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <MentorshipView
                profile={activeProfile}
                progress={activeProgress}
                onGoToProfile={() => setView('profile')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <MemberCheckInModal
        isOpen={showCheckInModal}
        onClose={() => setShowCheckInModal(false)}
        onCreateWorkspace={handleCreateWorkspace}
        onImportBackup={handleImportWorkspaceJson}
        onLoadSampleDemo={handleLoadSampleDemo}
        onContinueGuest={() => {
          setHasCheckedIn(true);
          setShowCheckInModal(false);
          setView('dashboard');
        }}
      />
    </div>
  );
}
