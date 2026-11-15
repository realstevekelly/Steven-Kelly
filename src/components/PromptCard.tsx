import { useState } from 'react';
import {
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Copy,
  ExternalLink,
  Lightbulb,
  MessageSquareHeart,
  Save,
  Sparkles
} from 'lucide-react';
import { BusinessProfile, Prompt } from '../types';
import { compileFullPrompt, injectProfileTokens, isProfileComplete } from '../utils/promptBuilder';

interface PromptCardProps {
  prompt: Prompt;
  profile: BusinessProfile;
  isCompleted: boolean;
  savedOutput: string;
  onToggleComplete: (promptId: string) => void;
  onSaveOutput: (promptId: string, output: string) => void;
  onGoToProfile: () => void;
  onGoToMentorship: () => void;
}

export default function PromptCard({
  prompt,
  profile,
  isCompleted,
  savedOutput,
  onToggleComplete,
  onSaveOutput,
  onGoToProfile,
  onGoToMentorship
}: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [showNotes, setShowNotes] = useState(Boolean(savedOutput));
  const [justSavedNote, setJustSavedNote] = useState(false);

  const profileReady = isProfileComplete(profile);
  const fullCompiledPrompt = compileFullPrompt(prompt, profile);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCompiledPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOutputChange = (val: string) => {
    onSaveOutput(prompt.id, val);
    setJustSavedNote(true);
    setTimeout(() => setJustSavedNote(false), 1200);
  };

  return (
    <article
      className={`rounded-2xl border transition-colors bg-[#181a1f] ${
        isCompleted ? 'border-neon-green/40' : 'border-white/10'
      }`}
    >
      {/* Header Row */}
      <div className="p-6 md:p-8 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-mono font-semibold text-neon-blue">Prompt {prompt.id}</span>
            <span aria-hidden="true">·</span>
            <span>Tools: {prompt.recommendedTools.join(' / ')}</span>
            {isCompleted && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-neon-green font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Completed
                </span>
              </>
            )}
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-white">{prompt.title}</h4>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            {injectProfileTokens(prompt.intro, profile)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={() => onToggleComplete(prompt.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              isCompleted
                ? 'bg-neon-green/15 border-neon-green/40 text-neon-green'
                : 'bg-black/40 border-white/15 text-slate-300 hover:border-white/30 hover:text-white'
            }`}
          >
            {isCompleted ? <CheckCircle2 size={15} /> : <Circle size={15} />}
            {isCompleted ? 'Done' : 'Mark Complete'}
          </button>

          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              copied
                ? 'bg-neon-green text-black'
                : 'neon-button-blue'
            }`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Prompt Copied!' : 'Copy AI Prompt'}
          </button>

          <a
            href="https://gemini.google.com/app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-black/40 border border-white/15 text-slate-200 hover:border-neon-blue hover:text-neon-blue transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            Open Gemini <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Missing Profile Reminder (if not filled) */}
      {!profileReady && (
        <div className="px-6 md:px-8 py-3 bg-neon-orange/10 border-b border-neon-orange/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="text-slate-200">
            Tip: Fill in your Business Name, Type, and Target Customer so this prompt auto-customizes for your exact business.
          </span>
          <button
            onClick={onGoToProfile}
            className="text-neon-orange font-semibold hover:underline whitespace-nowrap text-left sm:text-right"
          >
            Complete Business Profile →
          </button>
        </div>
      )}

      {/* Main Prompt Body */}
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              AI Role & Perspective
            </p>
            <p className="text-sm text-slate-200 leading-relaxed italic">
              &ldquo;{injectProfileTokens(prompt.role, profile)}&rdquo;
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Injected Context (Auto-Personalized)
            </p>
            <p className="text-sm text-slate-200 leading-relaxed bg-black/35 p-3.5 rounded-xl border border-white/10">
              {injectProfileTokens(prompt.context, profile)}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Core Deliverable
            </p>
            <p className="text-sm font-medium text-white leading-relaxed">
              {injectProfileTokens(prompt.task, profile)}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Expected Output Format
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              {injectProfileTokens(prompt.outputFormat, profile)}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Step-by-Step AI Instructions
            </p>
            <ol className="space-y-2.5">
              {prompt.action.map((step, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm text-slate-200 leading-relaxed">
                  <span className="font-mono text-xs font-bold text-neon-blue pt-0.5 tabular-nums">
                    0{idx + 1}
                  </span>
                  <span>{injectProfileTokens(step, profile)}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-black/35 border border-white/10 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neon-blue">
              <Lightbulb size={14} />
              <span>Beginner Tip &amp; Why This Matters</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">How to start:</strong> {prompt.beginnerTip}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Why it matters:</strong> {prompt.whyItMatters}
            </p>
          </div>
        </div>
      </div>

      {/* Expandable Sample Output + Saved Strategy Workspace */}
      <div className="px-6 md:px-8 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowExample(!showExample)}
              className="text-xs font-semibold text-slate-300 hover:text-neon-blue flex items-center gap-1.5 transition-colors"
            >
              <Sparkles size={14} className="text-neon-blue" />
              {showExample ? 'Hide Example Output' : 'See Example Output'}
              {showExample ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            <button
              type="button"
              onClick={() => setShowNotes(!showNotes)}
              className="text-xs font-semibold text-slate-300 hover:text-neon-green flex items-center gap-1.5 transition-colors"
            >
              <Save size={14} className="text-neon-green" />
              {showNotes
                ? 'Hide My Strategy Output'
                : savedOutput
                  ? 'View / Edit My Saved Output'
                  : 'Save AI Output Here'}
              {showNotes ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          <button
            type="button"
            onClick={onGoToMentorship}
            className="text-xs text-slate-400 hover:text-neon-raspberry flex items-center gap-1.5 transition-colors"
          >
            <MessageSquareHeart size={14} />
            Want Steven&apos;s feedback on this step?
          </button>
        </div>

        {showExample && (
          <div className="p-4 rounded-xl bg-black/50 border border-neon-blue/25 text-xs text-slate-200 whitespace-pre-line leading-relaxed">
            <p className="font-semibold text-neon-blue mb-1.5">Sample Result Preview:</p>
            {prompt.expertExample}
          </div>
        )}

        {showNotes && (
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between text-xs">
              <label className="font-semibold text-slate-300">
                Paste Your AI Result or Decisions Here (Auto-Saved to Your Workspace &amp; Roadmap Export)
              </label>
              {justSavedNote && <span className="text-neon-green font-medium">Saved</span>}
            </div>
            <textarea
              value={savedOutput}
              onChange={(e) => handleOutputChange(e.target.value)}
              rows={4}
              placeholder="Paste the response from Gemini or write your final decision here so it stays organized inside your daily roadmap..."
              className="w-full p-3.5 rounded-xl bg-black/55 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-neon-green outline-none transition-colors resize-y"
            />
          </div>
        )}
      </div>
    </article>
  );
}
