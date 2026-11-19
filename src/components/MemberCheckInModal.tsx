import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Upload, UserCheck, X, Sparkles } from 'lucide-react';
import { StrategyMode } from '../types';

interface MemberCheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateWorkspace: (memberName: string, businessName: string, mode: StrategyMode) => void;
  onImportBackup: (file: File) => void;
  onContinueGuest: () => void;
  onLoadSampleDemo: () => void;
}

export default function MemberCheckInModal({
  isOpen,
  onClose,
  onCreateWorkspace,
  onImportBackup,
  onContinueGuest,
  onLoadSampleDemo
}: MemberCheckInModalProps) {
  const [memberName, setMemberName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [mode, setMode] = useState<StrategyMode>('own_business');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName.trim()) return;
    onCreateWorkspace(memberName.trim(), businessName.trim(), mode);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Sign In to Your Workspace"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-[#16181c] border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label="Close check-in dialog"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center text-neon-blue">
            <UserCheck size={22} />
          </div>
          <div>
            <p className="text-xs font-medium text-neon-blue">VIP Daily Workspace</p>
            <h3 className="text-2xl font-bold text-white">Sign In to Your Workspace</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Your progress, saved prompts, and checklists stay saved automatically in this browser so you can pick up right where you left off every day—no paid cloud account required.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              Your First Name <span className="text-neon-raspberry">*</span>
            </label>
            <input
              type="text"
              required
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              placeholder="e.g. Sarah"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder:text-slate-500 focus:border-neon-blue outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              Business or Project Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Summit Heating & Air"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder:text-slate-500 focus:border-neon-blue outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              How are you using this resource?
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setMode('own_business')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  mode === 'own_business'
                    ? 'bg-neon-blue text-black'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                My Own Business
              </button>
              <button
                type="button"
                onClick={() => setMode('client_project')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  mode === 'client_project'
                    ? 'bg-neon-blue text-black'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Helping a Client
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full neon-button-blue py-3.5 px-4 sm:px-6 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 mt-2 whitespace-nowrap"
          >
            Open My Daily Workspace <ArrowRight size={17} className="shrink-0" />
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-slate-300 hover:text-neon-blue flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <Upload size={14} /> Restore Backup (.json)
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImportBackup(file);
            }}
          />

          <button
            type="button"
            onClick={onLoadSampleDemo}
            className="text-neon-orange hover:text-white flex items-center gap-1.5 transition-colors whitespace-nowrap font-semibold"
          >
            <Sparkles size={14} /> Load Sample Demo
          </button>

          <button
            type="button"
            onClick={onContinueGuest}
            className="text-slate-400 hover:text-white transition-colors whitespace-nowrap"
          >
            Browse as Guest
          </button>
        </div>
      </motion.div>
    </div>
  );
}
