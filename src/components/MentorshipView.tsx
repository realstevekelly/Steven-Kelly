import { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Mail,
  MessageSquareHeart,
  Sparkles,
  Wrench
} from 'lucide-react';
import { STEVEN_MENTORSHIP_CONFIG, TOPICS } from '../constants';
import { BusinessProfile, WorkspaceProgress } from '../types';
import { buildCallPrepBrief, exportRoadmapMarkdown } from '../utils/promptBuilder';

interface MentorshipViewProps {
  profile: BusinessProfile;
  progress: WorkspaceProgress;
  onGoToProfile: () => void;
}

export default function MentorshipView({
  profile,
  progress,
  onGoToProfile
}: MentorshipViewProps) {
  const [copiedBrief, setCopiedBrief] = useState(false);

  const callBrief = buildCallPrepBrief(
    profile,
    TOPICS,
    progress.completedPromptIds,
    progress.dailyFocusNote
  );

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(callBrief);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  const handleDownloadRoadmap = () => {
    const md = exportRoadmapMarkdown(
      profile,
      TOPICS,
      progress.completedPromptIds,
      progress.promptOutputs
    );
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeName = (profile.businessName || 'digital-machine')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');
    a.href = url;
    a.download = `${safeName}-strategy-roadmap.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const mailtoHref = `mailto:${STEVEN_MENTORSHIP_CONFIG.contactEmail}?subject=${encodeURIComponent(
    `1-on-1 Strategy Request: ${profile.businessName || profile.memberName || 'VIP Member'}`
  )}&body=${encodeURIComponent(callBrief)}`;

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-neon-raspberry">
          <MessageSquareHeart size={15} />
          <span>Personal Guidance With {STEVEN_MENTORSHIP_CONFIG.coachName}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Work Personally With Your Natural Growth Partner
        </h2>
        <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
          {STEVEN_MENTORSHIP_CONFIG.sessionSubheadline}
        </p>
      </header>

      {/* 3 Ways Steven Helps */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#181a1f] border border-white/10 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-neon-blue/15 text-neon-blue flex items-center justify-center">
            <Sparkles size={20} />
          </div>
          <h3 className="text-lg font-bold text-white">01. Clarity &amp; Strategy Audit</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Bring your filled-in Business Profile and roadmap. Together we sharpen your offer pricing, fix the biggest revenue leak, and pick your fastest 30-day win.
          </p>
          <p className="text-xs text-slate-400 pt-1">Best after completing Topics 1–3</p>
        </div>

        <div className="bg-[#181a1f] border border-white/10 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-neon-raspberry/15 text-neon-raspberry flex items-center justify-center">
            <Wrench size={20} />
          </div>
          <h3 className="text-lg font-bold text-white">02. Done-With-You Setup</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Tired of wrestling with landing pages, Superhuman Docs workflows, or automated follow-ups? We map and assemble your core digital machine side-by-side.
          </p>
          <p className="text-xs text-slate-400 pt-1">Best when ready to launch Topics 4, 7 &amp; 9</p>
        </div>

        <div className="bg-[#181a1f] border border-white/10 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-neon-orange/15 text-neon-orange flex items-center justify-center">
            <CheckCircle2 size={20} />
          </div>
          <h3 className="text-lg font-bold text-white">03. Ongoing Growth Partner</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Stay grounded with the 14–21 day repetition rhythm, review your 5 weekly metrics together, and scale what converts without tech stress.
          </p>
          <p className="text-xs text-slate-400 pt-1">For owners scaling steadily past launch</p>
        </div>
      </section>

      {/* Live Call Brief Generator */}
      <section className="bg-[#181a1f] border border-neon-raspberry/30 rounded-2xl p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Your Ready-to-Share Strategy Call Brief</h3>
            <p className="text-sm text-slate-300 mt-1">
              Automatically built from your saved Business Profile and workspace progress so you never start a call from scratch.
            </p>
          </div>
          {!profile.businessName && (
            <button
              onClick={onGoToProfile}
              className="text-xs font-semibold text-neon-blue hover:underline whitespace-nowrap shrink-0"
            >
              Update Business Profile →
            </button>
          )}
        </div>

        <pre className="p-4 rounded-xl bg-black/55 border border-white/10 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed">
          {callBrief}
        </pre>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
          {STEVEN_MENTORSHIP_CONFIG.bookingUrl ? (
            <a
              href={STEVEN_MENTORSHIP_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-blue w-full sm:w-auto px-5 py-3 rounded-xl text-sm flex items-center justify-center gap-2 text-center sm:whitespace-nowrap"
            >
              <Calendar size={16} className="shrink-0" /> Book a 1-on-1 Session <ArrowRight size={16} className="shrink-0" />
            </a>
          ) : (
            <a
              href={mailtoHref}
              className="neon-button-blue w-full sm:w-auto px-5 py-3 rounded-xl text-sm flex items-center justify-center gap-2 text-center"
            >
              <Mail size={16} className="shrink-0" /> <span>Email My Brief to Steven for Personal Follow-Up</span> <ArrowRight size={16} className="shrink-0" />
            </a>
          )}

          <button
            onClick={handleCopyBrief}
            className="w-full sm:w-auto px-4 py-3 rounded-xl text-sm font-semibold bg-black/40 border border-white/15 text-white hover:border-neon-blue transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {copiedBrief ? <Check size={16} className="text-neon-green" /> : <Copy size={16} />}
            {copiedBrief ? 'Brief Copied!' : 'Copy Call Brief'}
          </button>

          <button
            onClick={handleDownloadRoadmap}
            className="w-full sm:w-auto px-4 py-3 rounded-xl text-sm font-semibold bg-black/40 border border-white/15 text-slate-200 hover:border-white/30 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Download size={16} /> Download Full Roadmap (.md)
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Prefer Gmail or webmail? Click <strong className="text-white">Copy Call Brief</strong> above and email it directly to{' '}
          <span className="text-neon-blue font-semibold">{STEVEN_MENTORSHIP_CONFIG.contactEmail}</span>—Steven will reply personally with tailored next steps and follow-up ideas.
        </p>
      </section>
    </div>
  );
}
