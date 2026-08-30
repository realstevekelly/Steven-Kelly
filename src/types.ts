export interface Prompt {
  id: string;
  title: string;
  intro: string;
  role: string;
  context: string;
  task: string;
  action: string[];
  conclusion: string;
  expertExample?: string;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  prompts: Prompt[];
}

export interface BusinessProfile {
  businessName: string;
  businessType: string;
  targetAudience: string;
  location: string;
  currentRevenue: string;
  desiredRevenue: string;
  mainChallenge: string;
  productName: string;
  productPrice: string;
}

export type AppView = 'landing' | 'dashboard' | 'profile' | 'topics' | 'tracker' | 'library';
