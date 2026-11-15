import { useState } from 'react';
import { ArrowRight, BookOpen, Compass, Layers, Search, Wrench } from 'lucide-react';
import { LANDSCAPE_TOOLS, TOPICS } from '../constants';
import { Topic } from '../types';

interface LandscapeGuideProps {
  onSelectTopic: (topic: Topic) => void;
}

const MACHINE_STAGES = [
  {
    step: '01',
    name: 'Set Direction & Offer',
    plainEnglish: 'Decide who you serve, how much you want to make in 90 days, and what clear outcome you sell.',
    topics: [1, 2]
  },
  {
    step: '02',
    name: 'Get Found Locally',
    plainEnglish: 'Use the exact search phrases, helpful videos, and consistent social posts your buyers already look for.',
    topics: [3, 6, 8]
  },
  {
    step: '03',
    name: 'Show Value & Capture Leads',
    plainEnglish: 'Send interested people to one simple page with visual proof where they can request a quote or guide.',
    topics: [5, 7]
  },
  {
    step: '04',
    name: 'Follow Up & Close',
    plainEnglish: 'Reply automatically via email/SMS, nurture undecided leads, and track every deal in a simple pipeline.',
    topics: [4, 9]
  }
];

export default function LandscapeGuide({ onSelectTopic }: LandscapeGuideProps) {
  const [glossaryQuery, setGlossaryQuery] = useState('');

  const allGlossaryItems = TOPICS.flatMap((topic) =>
    topic.glossary.map((item) => ({
      ...item,
      topicId: topic.id,
      topicTitle: topic.title
    }))
  ).filter(
    (entry) =>
      entry.term.toLowerCase().includes(glossaryQuery.toLowerCase()) ||
      entry.meaning.toLowerCase().includes(glossaryQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-neon-blue">
          <Compass size={15} />
          <span>Beginner Navigation Guide</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          How the Digital Marketing Landscape Fits Together
        </h2>
        <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
          If marketing tools and buzzwords ever feel like puzzle pieces from different boxes, start here. Every successful business—yours or a customer&apos;s—runs on the same 4-stage engine below.
        </p>
      </header>

      {/* 4-Stage Visual Flow */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers size={18} className="text-neon-blue" />
            The 4-Stage Digital Machine Flow
          </h3>
          <span className="text-xs text-slate-400">Click any topic to jump straight into its prompts</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MACHINE_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bg-[#181a1f] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono tabular-nums">
                  <span className="text-neon-blue font-semibold">Stage {stage.step}</span>
                  <span aria-hidden="true">·</span>
                  <span>Topics {stage.topics.join(' & ')}</span>
                </div>
                <h4 className="text-lg font-bold text-white">{stage.name}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{stage.plainEnglish}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {stage.topics.map((tid) => {
                  const topic = TOPICS.find((t) => t.id === tid);
                  if (!topic) return null;
                  return (
                    <button
                      key={tid}
                      onClick={() => onSelectTopic(topic)}
                      className="px-3 py-1.5 rounded-lg bg-neon-blue/10 hover:bg-neon-blue hover:text-black text-neon-blue text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>0{topic.id}. {topic.title}</span>
                      <ArrowRight size={13} />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plain-English Tool Navigator */}
      <section className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Wrench size={18} className="text-neon-orange" />
            Your Core Tool Stack in Plain English
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            You do not need 20 subscriptions. Here is the simple job each tool handles—and what confusion it eliminates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LANDSCAPE_TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="bg-[#181a1f] border border-white/10 rounded-2xl p-6 space-y-3"
            >
              <div>
                <p className="text-xs text-neon-blue font-medium">{tool.category}</p>
                <h4 className="text-lg font-bold text-white mt-0.5">{tool.name}</h4>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">{tool.plainEnglishRole}</p>
              <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs">
                <p className="text-slate-300">
                  <span className="font-semibold text-white">Best for:</span> {tool.bestUsedFor}
                </p>
                <p className="text-slate-400">
                  <span className="font-semibold text-slate-300">Why it helps:</span> {tool.replacesConfusion}
                </p>
              </div>
              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span>Used in Topics:</span>
                {tool.connectedTopicIds.map((tid) => {
                  const topic = TOPICS.find((t) => t.id === tid);
                  if (!topic) return null;
                  return (
                    <button
                      key={tid}
                      onClick={() => onSelectTopic(topic)}
                      className="text-neon-blue hover:underline font-medium"
                    >
                      #{tid}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Searchable Jargon Translator */}
      <section className="bg-[#181a1f] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen size={18} className="text-neon-raspberry" />
              Plain-English Marketing Dictionary
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Look up any marketing word in seconds before pitching a customer or running a prompt.
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={glossaryQuery}
              onChange={(e) => setGlossaryQuery(e.target.value)}
              placeholder="Search terms (e.g. funnel, tag)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-neon-blue outline-none"
            />
          </div>
        </div>

        {allGlossaryItems.length === 0 ? (
          <p className="text-sm text-slate-400 py-4">
            No matching terms found. Try clearing your search filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allGlossaryItems.map((item, idx) => {
              const topic = TOPICS.find((t) => t.id === item.topicId);
              return (
                <div
                  key={`${item.topicId}-${idx}`}
                  className="p-4 rounded-xl bg-black/35 border border-white/10 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-white text-sm">{item.term}</h4>
                    {topic && (
                      <button
                        onClick={() => onSelectTopic(topic)}
                        className="text-xs text-neon-blue hover:underline whitespace-nowrap shrink-0"
                      >
                        Topic 0{topic.id}
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.meaning}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
