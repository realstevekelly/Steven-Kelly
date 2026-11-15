import { BusinessProfile, Prompt, Topic } from '../types';
import { STEVEN_MENTORSHIP_CONFIG } from '../constants';

export function getToolStackLabel(profile: BusinessProfile): string {
  if (profile.toolPreference === 'all_in_one') {
    return 'Superhuman Docs, Gemini, and an all-in-one funnel & email/SMS platform (e.g., Systeme.io or GoHighLevel)';
  }
  if (profile.toolPreference === 'custom' && profile.customTools.trim()) {
    return profile.customTools.trim();
  }
  return 'Superhuman Docs, Gemini, and Google Workspace Tools (Sheets, Drive, Calendar, Gmail, Business Profile)';
}

export function injectProfileTokens(text: string, profile: BusinessProfile): string {
  const bName = profile.businessName.trim() || 'my business';
  const bType = profile.businessType.trim() || 'local service / expert business';
  const audience = profile.targetAudience.trim() || 'my ideal local customers';
  const location = profile.location.trim() || 'my local area';
  const curRev = profile.currentRevenue.trim()
    ? profile.currentRevenue.trim().startsWith('$')
      ? profile.currentRevenue.trim()
      : `$${profile.currentRevenue.trim()}`
    : '$[Current Monthly Revenue]';
  const desRev = profile.desiredRevenue.trim()
    ? profile.desiredRevenue.trim().startsWith('$')
      ? profile.desiredRevenue.trim()
      : `$${profile.desiredRevenue.trim()}`
    : '$[Goal Monthly Revenue]';
  const challenge =
    profile.mainChallenge.trim() || 'turning attention into steady, predictable leads and sales';
  const productName = profile.productName.trim() || 'our core offer';
  const productPrice = profile.productPrice.trim() || '[Price]';
  const toolStack = getToolStackLabel(profile);

  return text
    .replace(/\{\{businessName\}\}/g, bName)
    .replace(/\{\{businessType\}\}/g, bType)
    .replace(/\{\{targetAudience\}\}/g, audience)
    .replace(/\{\{location\}\}/g, location)
    .replace(/\{\{currentRevenue\}\}/g, curRev)
    .replace(/\{\{desiredRevenue\}\}/g, desRev)
    .replace(/\{\{mainChallenge\}\}/g, challenge)
    .replace(/\{\{productName\}\}/g, productName)
    .replace(/\{\{productPrice\}\}/g, productPrice)
    .replace(/\{\{toolStack\}\}/g, toolStack);
}

export function isProfileComplete(profile: BusinessProfile): boolean {
  return Boolean(
    profile.businessName.trim() &&
      profile.businessType.trim() &&
      profile.targetAudience.trim()
  );
}

export function buildBusinessSnapshot(profile: BusinessProfile): string {
  const modeLabel =
    profile.mode === 'client_project' ? 'Client Strategy Project' : 'Own Business Setup';
  return [
    `STRATEGY MODE: ${modeLabel}`,
    `BUSINESS: ${profile.businessName.trim() || '[Not set yet — fill in Business Profile]'} (${profile.businessType.trim() || 'Service / Creator Business'})`,
    `TARGET CUSTOMER: ${profile.targetAudience.trim() || '[Not set yet]'}`,
    `LOCATION / NICHE: ${profile.location.trim() || '[Not set yet]'}`,
    `REVENUE TARGET: ${profile.currentRevenue.trim() || 'Current'} -> ${profile.desiredRevenue.trim() || 'Goal'} / month`,
    `CORE OFFER: ${profile.productName.trim() || 'Core Offer'}${profile.productPrice.trim() ? ` ($${profile.productPrice.trim()})` : ''}`,
    `BIGGEST OBSTACLE: ${profile.mainChallenge.trim() || '[Not set yet]'}`,
    `ACTIVE TOOL STACK: ${getToolStackLabel(profile)}`
  ].join('\n');
}

export function compileFullPrompt(prompt: Prompt, profile: BusinessProfile): string {
  const snapshot = buildBusinessSnapshot(profile);
  const role = injectProfileTokens(prompt.role, profile);
  const context = injectProfileTokens(prompt.context, profile);
  const task = injectProfileTokens(prompt.task, profile);
  const actions = prompt.action
    .map((step, idx) => `${idx + 1}. ${injectProfileTokens(step, profile)}`)
    .join('\n');
  const constraints = prompt.constraints
    .map((c) => `- ${injectProfileTokens(c, profile)}`)
    .join('\n');

  return [
    `### BUSINESS CONTEXT SNAPSHOT`,
    snapshot,
    ``,
    `### YOUR ROLE`,
    role,
    ``,
    `### SITUATION & CONTEXT`,
    context,
    ``,
    `### TASK`,
    task,
    ``,
    `### STEP-BY-STEP EXECUTION`,
    actions,
    ``,
    `### OUTPUT FORMAT`,
    injectProfileTokens(prompt.outputFormat, profile),
    ``,
    `### GUARDRAILS`,
    constraints,
    ``,
    `### INTERACTIVE FIRST STEP`,
    injectProfileTokens(prompt.clarifyingStep, profile)
  ].join('\n');
}

export function exportRoadmapMarkdown(
  profile: BusinessProfile,
  topics: Topic[],
  completedPromptIds: string[],
  promptOutputs: Record<string, string>
): string {
  const lines: string[] = [
    `# ${profile.businessName.trim() || 'My Business'} — Digital Machine Strategy Roadmap`,
    `Prepared by: ${profile.memberName.trim() || 'VIP Member'} | Framework: Design · Create · Launch (9-Topic System)`,
    `Progress: ${completedPromptIds.length} of 27 Prompts Completed`,
    ``,
    `## Business Snapshot`,
    '```',
    buildBusinessSnapshot(profile),
    '```',
    ``
  ];

  topics.forEach((topic) => {
    const topicDone = topic.prompts.filter((p) => completedPromptIds.includes(p.id)).length;
    lines.push(`## Topic ${topic.id}: ${topic.title} (${topicDone}/${topic.prompts.length} Complete)`);
    lines.push(`*${topic.plainEnglish}*`);
    lines.push(``);

    topic.prompts.forEach((prompt) => {
      const done = completedPromptIds.includes(prompt.id);
      const saved = promptOutputs[prompt.id]?.trim();
      lines.push(`### [${done ? 'x' : ' '}] ${prompt.id} ${prompt.title}`);
      if (saved) {
        lines.push(`**Saved Strategy Output:**`);
        lines.push(saved);
      } else {
        lines.push(`_No output pasted yet. Recommended tools: ${prompt.recommendedTools.join(', ')}._`);
      }
      lines.push(``);
    });
  });

  lines.push(`---`);
  lines.push(
    `Want personal feedback from ${STEVEN_MENTORSHIP_CONFIG.coachName} (${STEVEN_MENTORSHIP_CONFIG.brandTitle})? Email this roadmap to ${STEVEN_MENTORSHIP_CONFIG.contactEmail} or bring it to your 1-on-1 strategy session.`
  );

  return lines.join('\n');
}

export function buildCallPrepBrief(
  profile: BusinessProfile,
  topics: Topic[],
  completedPromptIds: string[],
  dailyFocusNote: string
): string {
  const completedCount = completedPromptIds.length;
  const nextTopic =
    topics.find((t) => t.prompts.some((p) => !completedPromptIds.includes(p.id))) || topics[0];

  return [
    `1-ON-1 STRATEGY CALL BRIEF FOR STEVEN KELLY`,
    `Member: ${profile.memberName.trim() || 'VIP Member'}`,
    `Business: ${profile.businessName.trim() || '[Business Name]'} (${profile.businessType.trim() || 'Business Type'})`,
    `Audience & Location: ${profile.targetAudience.trim() || '[Audience]'} in ${profile.location.trim() || '[Location]'}`,
    `Revenue Goal: ${profile.currentRevenue.trim() || '?'} -> ${profile.desiredRevenue.trim() || '?'}/month`,
    `Progress: ${completedCount}/27 Prompts Completed`,
    `Current Next Topic: Topic ${nextTopic.id} — ${nextTopic.title}`,
    `Biggest Roadblock Right Now: ${profile.mainChallenge.trim() || '[Describe where you feel stuck]'}`,
    dailyFocusNote.trim() ? `Current Note: ${dailyFocusNote.trim()}` : ''
  ]
    .filter(Boolean)
    .join('\n');
}
