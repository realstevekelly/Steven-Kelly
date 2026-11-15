export type ToolPreference = 'superhuman_google' | 'all_in_one' | 'custom';
export type StrategyMode = 'own_business' | 'client_project';

export interface Prompt {
  id: string;
  title: string;
  intro: string;
  role: string;
  context: string;
  task: string;
  action: string[];
  outputFormat: string;
  constraints: string[];
  clarifyingStep: string;
  whyItMatters: string;
  beginnerTip: string;
  recommendedTools: string[];
  expertExample: string;
  problemTags: string[];
}

export interface GlossaryItem {
  term: string;
  meaning: string;
}

export interface Topic {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  plainEnglish: string;
  solvesProblem: string;
  phase: 1 | 2 | 3;
  coreTools: string[];
  glossary: GlossaryItem[];
  prompts: Prompt[];
}

export interface BusinessProfile {
  id: string;
  memberName: string;
  businessName: string;
  businessType: string;
  targetAudience: string;
  location: string;
  currentRevenue: string;
  desiredRevenue: string;
  mainChallenge: string;
  productName: string;
  productPrice: string;
  toolPreference: ToolPreference;
  customTools: string;
  mode: StrategyMode;
}

export interface CustomerProblemMap {
  id: string;
  symptom: string;
  rootCause: string;
  plainEnglishFix: string;
  recommendedTopicIds: number[];
  recommendedPromptIds: string[];
  toolsUsed: string[];
}

export interface LandscapeTool {
  id: string;
  name: string;
  category: string;
  plainEnglishRole: string;
  bestUsedFor: string;
  replacesConfusion: string;
  connectedTopicIds: number[];
}

export interface WorkspaceProgress {
  completedPromptIds: string[];
  completedChecklistIds: string[];
  promptOutputs: Record<string, string>;
  checkInDates: string[];
  dailyFocusNote: string;
}

export type AppView =
  | 'landing'
  | 'dashboard'
  | 'landscape'
  | 'profile'
  | 'topics'
  | 'tracker'
  | 'library'
  | 'mentorship';
