import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, AlertTriangle, CheckCircle2, ArrowRight, ArrowLeft, Calendar, Play, Pause, X, Zap, TrendingUp, MessageSquare, BarChart2, Repeat2, BookOpen, Target, Eye, CalendarCheck, ThumbsUp, ThumbsDown, RefreshCcw, Copy } from 'lucide-react';
import { ConversationsIcon, AgentsIcon } from './Sidebar';
import { PromptBox } from './PromptBox';

interface RunHistoryEntry {
  id: string;
  timestamp: string;
  result: string;
  actionItems?: ActionItem[];
}

interface ActionItem {
  label: string;
  type: 'conversation' | 'amplify' | 'testdrive';
  conversationId?: string;
}

interface ScheduledTask {
  id: string;
  title: string;
  prompt: string;
  schedule: string;
  lastRun: string;
  nextRun: string;
  status: 'active' | 'paused' | 'running';
  lastResult?: string;
  actionItems?: ActionItem[];
  runHistory?: RunHistoryEntry[];
}

interface HandoffAlert {
  id: string;
  title: string;
  description: string;
  time: string;
  severity: 'high' | 'medium';
  conversationId: string;
}

interface ConversationContext {
  task: ScheduledTask;
  entry: RunHistoryEntry;
  source: 'sheet' | 'history';
}

type ViewName = 'main' | 'conversation' | 'history' | 'explore';
type ExploreCategory = 'all' | 'growth' | 'conversions' | 'content' | 'analytics';

interface ConvMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  actionItems?: ActionItem[];
}

const CONV_CHIPS: Record<string, string[][]> = {
  'default-1': [
    ["Who needs follow-up today?", "Compare to last week", "Break down by source"],
    ["What's the biggest risk?", "How to improve response time?", "Best time to reach out?"],
  ],
  '2': [
    ["How to handle price objections?", "Best converting source?", "Week-over-week trend"],
    ["What closed these deals?", "How to improve win rate?", "Forecast next week"],
  ],
  '3': [
    ["DM the top targets now", "What time should I post next?", "Compare to last reel"],
    ["Which comment drove most DMs?", "Best performing caption style?", "Boost this post?"],
  ],
};
const DEFAULT_CONV_CHIPS = [
  ["Tell me more", "What should I do next?", "Summarize key actions"],
  ["Any risks I should know?", "What's working best?", "Give me a quick summary"],
];

const MOCK_RESPONSES: Record<string, Array<{ keywords: string[]; response: string }>> = {
  'default-1': [
    {
      keywords: ['exequiel', 'follow'],
      response: `Exequiel Selickas — here's the full picture:

He's requested pricing information twice over the last 36 hours and opened your DM thread 4 separate times without responding. That's a classic high-intent, high-hesitation pattern.

My recommendation: send a short voice note or video message in the next 2 hours. Something like "Hey Exequiel, I know you've been looking at the pricing — happy to walk you through it quickly. When's a good time?"

Personalized outreach at this stage converts at 3× the standard DM reply rate.`,
    },
    {
      keywords: ['response time', 'slow', 'speed', '4.2', 'automat'],
      response: `Your 4.2h average response time is the single biggest lever you can pull right now.

Data from your last 30 days shows leads that received a reply within 1h converted at 28% vs. 9% for those that waited 4h+. That's a 3× gap.

Three ways to close it:
• Set up an automated first-response for new DMs (I can draft this for you)
• Block 20 min at 9am, 1pm, and 6pm daily for manual DM replies
• Use the hot lead alerts to prioritize only the highest-intent leads in real time

Want me to draft the first-response script?`,
    },
    {
      keywords: ['roberto', 'calendar', 'booking'],
      response: `Roberto M. is in a sweet spot — engaged with your last 3 posts and has an open DM thread.

Best move right now: send him your calendar link directly. Something like "Hey Roberto, saw you've been following along — I have a 15-min spot open Thursday at 4pm if you want to connect."

Don't ask if he wants to connect. Just offer a specific time. Leads with an open DM thread who receive a direct calendar invite convert at 41% vs. 14% with an open-ended offer.`,
    },
    {
      keywords: ['cold', 're-engage', 'lost', 'old'],
      response: `3 leads went cold after your initial reply — here's what's likely happening and how to fix it:

The drop-off pattern suggests your opening message created interest, but the follow-up felt generic or salesy. Cold leads at day 2-3 need a pattern interrupt.

Recommended re-engagement message:
"Hey [name], I know I dropped into your DMs earlier — no pressure at all, just wanted to share something I thought you'd find useful: [specific insight or post link]."

This format reactivates ~22% of cold leads at this stage. Want me to generate personalized versions for each of the 3 leads?`,
    },
    {
      keywords: ['last week', 'compare', 'trend', 'yesterday', 'vs'],
      response: `Here's today vs. yesterday comparison:

Today: 47 leads | 12.7% conversion | 4.2h avg response
Yesterday: 39 leads | 10.6% conversion | 5.1h avg response

The improvement is real — +8 leads (+20%), +2.1pp conversion. Likely driven by yesterday's Reel reaching a second wave of viewers this morning.

The response time also improved by 54 minutes — if that trend holds, you should see another 1-2pp conversion lift by the end of the week.

Biggest delta: story reply leads jumped from 3 to 9 today. That source is outperforming feed comments by 2.4×.`,
    },
    {
      keywords: ['source', 'where', 'platform', 'instagram', 'reel', 'story', 'feed'],
      response: `Lead sources breakdown for today's 47 leads:

Story replies: 9 leads (19%) — highest intent, 22% conversion
Reel comments: 18 leads (38%) — medium intent, 14% conversion
Feed post comments: 12 leads (26%) — lower intent, 8% conversion
Profile visits → DMs: 8 leads (17%) — mixed intent, 11% conversion

Story reply leads are your highest-value source by far. If you're not posting stories daily, that's the single biggest growth lever available to you right now.`,
    },
  ],
  '2': [
    {
      keywords: ['price', 'objection', 'expensive', 'cost', 'afford'],
      response: `Price objections at 57% of losses is a solvable problem — and here's why it's actually good news.

It means people want what you offer. The objection is about perceived value vs. price, not about the product itself.

Three scripts that work at the offer stage:

1. "What would it need to look like for it to make sense for you?" — opens negotiation without discounting
2. "If the results I described happened, what would that be worth to you?" — anchors value before price
3. "The investment is X, but most clients see Y return in the first 90 days." — reframe as ROI

Want me to turn these into full message templates you can save to your quick-reply library?`,
    },
    {
      keywords: ['story', 'reel', 'content', 'source'],
      response: `Story reply leads are your highest-converting source at 3× the average — here's what that means for your strategy.

Story viewers have already self-selected into your world. They're warm before the first message. Your close rate from this source is 34% vs. 11% for cold DMs.

Recommendation: post at minimum 3-4 stories per day, and include at least one "opinion" or "behind the scenes" story that invites replies. The goal is to manufacture the conditions for that first inbound reply.

Your Friday 6pm stories get 2.1× more replies than any other day+time combo. That's your best slot.`,
    },
    {
      keywords: ['forecast', 'next week', 'project', 'predict'],
      response: `Based on current pipeline and historical patterns, here's next week's forecast:

Projected deals: 5-7 (confidence: 72%)
Expected win rate: 28-34%
At-risk leads in current pipeline: 4 leads showing late-stage drop-off signals

The range is wide because 3 high-value leads (combined potential: 3 deals) are in the offer stage and could swing next week significantly either way.

Biggest variable: your response time. Every hour of improvement in avg response time correlates with ~0.8pp win rate increase based on your last 8 weeks of data.`,
    },
  ],
  '3': [
    {
      keywords: ['lucas', '@lucas', 'dm', 'priority'],
      response: `@lucas.fern is your highest-priority lead from this reel — here's the full context.

He commented "I need this" at 2:34pm, then sent a direct DM 11 minutes later saying "hey, saw your reel, can you tell me more about how this works?"

That's a double-signal. Comment + unprompted DM within 15 minutes is the strongest intent pattern in your dataset (historically converts at 58%).

Recommended reply: "Hey Lucas! Thanks for reaching out. Quick question — are you currently [specific qualifying question]?" Keep it short and conversational. The goal is to get him talking, not to pitch.

He's been waiting 18 hours. Reply in the next hour to maximize close probability.`,
    },
    {
      keywords: ['time', 'post', 'schedule', 'when', 'best'],
      response: `Based on your last 12 posts and engagement patterns, here's your optimal posting schedule:

Best day/time combos (ranked by DM reply rate):
1. Tuesday 7:00 PM — 8.4% DM reply rate
2. Thursday 12:00 PM — 7.1%
3. Friday 6:00 PM — 6.8%
4. Sunday 9:00 AM — 6.2%

Your Mar 29 Reel that generated 23 DMs posted on a Friday at 6:47 PM — consistent with this data.

Reels outperform carousels by 2.1× on DM replies. If you have a transformation or results-focused reel ready, Friday evening is your highest-leverage slot.`,
    },
    {
      keywords: ['boost', 'ad', 'promote', 'paid'],
      response: `This reel (6.8% engagement rate, 23 DMs) is a strong candidate for a boost — but only with the right targeting.

The organic reach already validated the hook. The transformation angle resonated with 78% positive sentiment.

If you boost it, I'd recommend:
• Budget: $20-40/day for 3-4 days (not a long run — test fast)
• Target: lookalike audience based on your last 5 conversions + interest targeting aligned with your service
• Objective: Messages (not link clicks — you want DMs, not website traffic)

Expected outcome based on similar past boosts in your account: 40-80 additional DM replies over the campaign period. At your current 14% conversion rate from DMs, that's 6-11 potential deals for $80-160 spend.`,
    },
  ],
};

const DEFAULT_MOCK_RESPONSE = `Based on what I'm seeing across your data, here's my read:

The patterns are consistent with what's been working — your content-to-DM pipeline is functioning, but there's clear room to tighten the follow-up layer.

The leads that convert share three traits: they received a reply within 90 minutes, the conversation included at least one qualifying question, and there was a clear next step offered before the thread went quiet.

If you want, I can pull a more specific breakdown. Just tell me which leads or timeframe you want to dig into.`;

function getMockResponse(taskId: string, userMsg: string): string {
  const msg = userMsg.toLowerCase();
  const responses = MOCK_RESPONSES[taskId] ?? [];
  for (const r of responses) {
    if (r.keywords.some(k => msg.includes(k))) return r.response;
  }
  return DEFAULT_MOCK_RESPONSE;
}

function getConvChips(taskId: string, roundIndex: number): string[] {
  const pool = CONV_CHIPS[taskId] ?? DEFAULT_CONV_CHIPS;
  return pool[Math.min(roundIndex, pool.length - 1)] ?? [];
}

interface SuggestedTask {
  id: string;
  title: string;
  prompt: string;
  schedule: string;
  category: ExploreCategory;
  visual: React.ReactNode;
}

const SCHEDULE_OPTIONS = [
  'Every day @ 9:00 AM',
  'Every day @ 8:00 AM',
  'Every Monday @ 9:00 AM',
  'Every Friday @ 6:00 PM',
  'After each new post',
  'Every hour',
];

// ── Explore task card visuals ──────────────────────────────────────────────

const LeadPulseVisual = () => (
  <div className="w-full h-full bg-[#0f172a] flex items-center justify-center overflow-hidden relative">
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: 'radial-gradient(circle, #FF8F40 1px, transparent 1px)',
      backgroundSize: '18px 18px'
    }} />
    <div className="relative flex flex-col items-center gap-2">
      <div className="flex gap-1.5 items-end">
        {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
          <div key={i} className="w-3 rounded-sm" style={{ height: h * 0.6, background: i === 6 ? '#FF8F40' : `rgba(255,143,64,${0.2 + i * 0.1})` }} />
        ))}
      </div>
      <span className="text-[10px] font-mono text-[#FF8F40]/80 uppercase tracking-widest">47 leads today</span>
    </div>
  </div>
);

const StoryFunnelVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#4f1dab] to-[#7c3aed] flex items-center justify-center overflow-hidden relative">
    <div className="flex flex-col items-center gap-1">
      {[
        { w: '80%', label: '18.4K reach', opacity: 1 },
        { w: '58%', label: '6.8% engage', opacity: 0.85 },
        { w: '36%', label: '23 DMs', opacity: 0.7 },
        { w: '18%', label: '4 closed', opacity: 0.55 },
      ].map((row, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <div className="h-5 rounded-sm bg-white/30" style={{ width: row.w, opacity: row.opacity }} />
          <span className="text-[9px] font-mono text-white/70">{row.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const ResponseTimeVisual = () => (
  <div className="w-full h-full bg-[#f0fdf4] flex items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-full border-4 border-[#16a34a] flex items-center justify-center bg-white">
        <Clock className="w-6 h-6 text-[#16a34a]" />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[18px] font-bold font-mono text-[#16a34a]">1.4h</span>
        <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">avg response</span>
      </div>
      <div className="flex gap-1">
        {['M','T','W','T','F'].map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div className="w-4 rounded-sm bg-[#16a34a]" style={{ height: [24, 16, 28, 12, 20][i], opacity: 0.4 + i * 0.1 }} />
            <span className="text-[8px] font-mono text-zinc-400">{d}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ObjectionVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] flex items-center justify-center overflow-hidden">
    <div className="flex flex-col gap-2 w-[75%]">
      {[
        { text: '"Too expensive"', pct: '57%', color: '#ef4444' },
        { text: '"Not sure yet"', pct: '24%', color: '#FF8F40' },
        { text: '"Need to think"', pct: '12%', color: '#f59e0b' },
      ].map((obj, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          <div className="flex justify-between">
            <span className="text-[9px] font-mono text-zinc-500 italic">{obj.text}</span>
            <span className="text-[9px] font-mono font-bold" style={{ color: obj.color }}>{obj.pct}</span>
          </div>
          <div className="h-1.5 bg-black/10 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: obj.pct, background: obj.color }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TopLeadsVisual = () => (
  <div className="w-full h-full bg-[#1c1917] flex items-center justify-center overflow-hidden">
    <div className="flex items-end gap-2">
      {[
        { h: 50, label: '2nd', color: '#94a3b8' },
        { h: 72, label: '1st', color: '#f59e0b' },
        { h: 38, label: '3rd', color: '#b45309' },
      ].map((bar, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className="text-[8px] font-mono" style={{ color: bar.color }}>{bar.label}</span>
          <div className="w-8 rounded-t-md" style={{ height: bar.h, background: bar.color, opacity: 0.85 }} />
        </div>
      ))}
    </div>
  </div>
);

const PostPipelineVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#fdf2f8] to-[#fce7f3] flex items-center justify-center">
    <div className="flex items-center gap-2">
      {[
        { icon: <BookOpen className="w-4 h-4 text-pink-500" />, label: 'Post' },
        { icon: <ArrowRight className="w-3 h-3 text-zinc-400" />, label: '' },
        { icon: <MessageSquare className="w-4 h-4 text-purple-500" />, label: 'DM' },
        { icon: <ArrowRight className="w-3 h-3 text-zinc-400" />, label: '' },
        { icon: <Target className="w-4 h-4 text-[#FF8F40]" />, label: 'Close' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className={`${item.label ? 'w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center' : ''}`}>
            {item.icon}
          </div>
          {item.label && <span className="text-[8px] font-mono text-zinc-400">{item.label}</span>}
        </div>
      ))}
    </div>
  </div>
);

const RevenueTrendVisual = () => (
  <div className="w-full h-full bg-[#052e16] flex items-center justify-center overflow-hidden relative">
    <svg width="90%" height="70%" viewBox="0 0 120 60" preserveAspectRatio="none">
      <defs>
        <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,55 L20,48 L40,40 L60,30 L80,18 L100,10 L120,4" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      <path d="M0,55 L20,48 L40,40 L60,30 L80,18 L100,10 L120,4 L120,60 L0,60Z" fill="url(#trendGrad)" />
    </svg>
    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
      <span className="text-[10px] font-mono text-[#22c55e]/80 uppercase tracking-widest">+34% this month</span>
    </div>
  </div>
);

const ReEngageVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0f4c5c] to-[#0e7490] flex items-center justify-center overflow-hidden">
    <div className="flex flex-col items-center gap-2">
      <svg width="80" height="36" viewBox="0 0 80 36">
        <path d="M0,18 Q10,8 20,18 Q30,28 40,18 Q50,8 60,18 Q70,28 80,18" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="flex gap-1.5">
        {['cold','cold','warm','hot'].map((s, i) => (
          <span key={i} className="text-[8px] font-mono px-1.5 py-0.5 rounded-full" style={{
            background: s === 'hot' ? '#FF8F40' : s === 'warm' ? 'rgba(255,143,64,0.3)' : 'rgba(255,255,255,0.1)',
            color: s === 'hot' ? 'white' : s === 'warm' ? '#FF8F40' : 'rgba(255,255,255,0.5)'
          }}>{s}</span>
        ))}
      </div>
    </div>
  </div>
);

const CompetitorVisual = () => (
  <div className="w-full h-full bg-[#0f172a] flex items-center justify-center">
    <div className="flex flex-col gap-2 w-[75%]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Mentions</span>
        <Eye className="w-3 h-3 text-indigo-400" />
      </div>
      {[
        { name: 'You', pct: 72, color: '#818cf8' },
        { name: 'Brand A', pct: 48, color: 'rgba(255,255,255,0.15)' },
        { name: 'Brand B', pct: 35, color: 'rgba(255,255,255,0.15)' },
      ].map((b, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[9px] font-mono text-white/50 w-10 shrink-0">{b.name}</span>
          <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all" style={{ width: `${b.pct}%`, background: b.color }} />
          </div>
          <span className="text-[9px] font-mono text-white/40 w-6 text-right">{b.pct}%</span>
        </div>
      ))}
    </div>
  </div>
);

const BookingSignalVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] flex items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
        <CalendarCheck className="w-6 h-6 text-blue-500" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[true, false, true, true, false, true, false, true, true].map((active, i) => (
          <div key={i} className="w-5 h-5 rounded-md flex items-center justify-center" style={{
            background: active ? '#3b82f6' : 'rgba(59,130,246,0.15)'
          }}>
            {active && <span className="text-[7px] text-white font-bold">✓</span>}
          </div>
        ))}
      </div>
      <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">8 signals this week</span>
    </div>
  </div>
);

const SUGGESTED_TASKS: SuggestedTask[] = [
  {
    id: 'sug-1',
    title: 'Daily Lead Pulse',
    prompt: 'Analyze all leads from the past 24 hours. Summarize conversion rates, flag cold leads, and surface today\'s top opportunities.',
    schedule: 'Every day @ 9:00 AM',
    category: 'growth',
    visual: <LeadPulseVisual />,
  },
  {
    id: 'sug-2',
    title: 'Story Funnel Analysis',
    prompt: 'After each story goes live, track reach → engagement → DM replies → conversions. Identify the top follow-up targets.',
    schedule: 'After each new post',
    category: 'content',
    visual: <StoryFunnelVisual />,
  },
  {
    id: 'sug-3',
    title: 'Response Time Tracker',
    prompt: 'Measure average response time per day of the week and time slot. Flag periods where response time exceeds 2 hours and recommend automation.',
    schedule: 'Every day @ 9:00 AM',
    category: 'analytics',
    visual: <ResponseTimeVisual />,
  },
  {
    id: 'sug-4',
    title: 'Objection Pattern Detector',
    prompt: 'Scan all lost leads from the past 7 days. Categorize objections, calculate frequency, and generate rebuttal recommendations for the top 3.',
    schedule: 'Every Monday @ 9:00 AM',
    category: 'conversions',
    visual: <ObjectionVisual />,
  },
  {
    id: 'sug-5',
    title: 'Top Leads of the Week',
    prompt: 'Rank the top 5 leads this week by intent signals, engagement depth, and recency. Provide a one-line action recommendation for each.',
    schedule: 'Every Friday @ 6:00 PM',
    category: 'growth',
    visual: <TopLeadsVisual />,
  },
  {
    id: 'sug-6',
    title: 'Post-to-DM Pipeline',
    prompt: 'After each post, track the full path from comment/save → DM initiated → conversation started → close attempt. Report drop-off points.',
    schedule: 'After each new post',
    category: 'content',
    visual: <PostPipelineVisual />,
  },
  {
    id: 'sug-7',
    title: 'Revenue Trend Report',
    prompt: 'Aggregate closed deals from the past 30 days. Calculate MoM revenue trend, average deal size, and forecast next month based on current pipeline.',
    schedule: 'Every Monday @ 9:00 AM',
    category: 'analytics',
    visual: <RevenueTrendVisual />,
  },
  {
    id: 'sug-8',
    title: 'Re-engagement Pulse',
    prompt: 'Identify leads that went cold in the last 14 days. Score them by original intent level and generate a personalized re-engagement message for each.',
    schedule: 'Every day @ 8:00 AM',
    category: 'conversions',
    visual: <ReEngageVisual />,
  },
  {
    id: 'sug-9',
    title: 'Competitor Benchmarks',
    prompt: 'Monitor mentions of competitor brands in DMs and comments. Compare engagement rates and surface any leads who mentioned competitors by name.',
    schedule: 'Every Monday @ 9:00 AM',
    category: 'analytics',
    visual: <CompetitorVisual />,
  },
  {
    id: 'sug-10',
    title: 'Booking Signal Monitor',
    prompt: 'Scan all active conversations for booking intent signals (calendar mentions, "when can we", "I\'m ready"). Surface them as priority tasks.',
    schedule: 'Every hour',
    category: 'conversions',
    visual: <BookingSignalVisual />,
  },
];

const DEFAULT_TASKS: ScheduledTask[] = [
  {
    id: 'default-1',
    title: 'Daily Growth Analysis',
    prompt: 'Analyze all leads from the past 24 hours. Summarize conversion rates, highlight top opportunities, and flag anything that needs attention.',
    schedule: 'Every day @ 9:00 AM',
    lastRun: 'Today @ 9:00 AM',
    nextRun: 'Tomorrow @ 9:00 AM',
    status: 'active',
    lastResult: `**Daily Growth Analysis — Today @ 9:00 AM**

**Overview**
47 new leads processed in the last 24 hours. Overall conversion rate: 12.7% (+2.1% vs. yesterday).

**Top Opportunities**
• Exequiel Selickas — High intent, requested pricing twice. Recommend immediate follow-up.
• Roberto M. — Engaged with 3 posts, opened DM thread. Warm lead.
• Valentina G. — Booking signal detected in latest message.

**Flags**
• 3 leads went cold after initial reply. Consider a re-engagement sequence.
• Response time avg: 4.2h — target is under 2h.`,
    actionItems: [
      { label: 'Follow up with Exequiel today', type: 'conversation', conversationId: '1' },
      { label: 'Send Roberto a calendar link', type: 'conversation', conversationId: '2' },
      { label: 'Train AI on re-engagement flow', type: 'testdrive' },
    ],
    runHistory: [
      {
        id: 'rh-d1-1',
        timestamp: 'Today @ 9:00 AM',
        result: `**Daily Growth Analysis — Today @ 9:00 AM**

**Overview**
47 new leads processed in the last 24 hours. Overall conversion rate: 12.7% (+2.1% vs. yesterday).

**Top Opportunities**
• Exequiel Selickas — High intent, requested pricing twice. Recommend immediate follow-up.
• Roberto M. — Engaged with 3 posts, opened DM thread. Warm lead.
• Valentina G. — Booking signal detected in latest message.

**Flags**
• 3 leads went cold after initial reply. Consider a re-engagement sequence.
• Response time avg: 4.2h — target is under 2h.`,
        actionItems: [
          { label: 'Follow up with Exequiel today', type: 'conversation', conversationId: '1' },
          { label: 'Send Roberto a calendar link', type: 'conversation', conversationId: '2' },
          { label: 'Train AI on re-engagement flow', type: 'testdrive' },
        ],
      },
      {
        id: 'rh-d1-2',
        timestamp: 'Yesterday @ 9:00 AM',
        result: `**Daily Growth Analysis — Yesterday @ 9:00 AM**

**Overview**
39 new leads processed. Conversion rate: 10.6% (-0.4% vs. prior day).

**Top Opportunities**
• Maria L. — Clicked pricing link twice, awaiting reply.
• Diego R. — High engagement on last 4 posts.

**Flags**
• Response time avg: 5.1h — above target. Consider automating first response.`,
      },
      {
        id: 'rh-d1-3',
        timestamp: 'Mar 29 @ 9:00 AM',
        result: `**Daily Growth Analysis — Mar 29 @ 9:00 AM**

**Overview**
52 new leads. Conversion rate: 13.4% (best day this week).

**Top Opportunities**
• @lucas.fern — commented and sent DM, priority contact.
• @mia.coast — asked about pricing in comments.

**Flags**
• 2 leads from story replies left on read. Follow up recommended.`,
      },
      {
        id: 'rh-d1-4',
        timestamp: 'Mar 28 @ 9:00 AM',
        result: `**Daily Growth Analysis — Mar 28 @ 9:00 AM**

**Overview**
31 new leads. Conversion rate: 9.8%.

**Flags**
• Slowest day this week. Low post activity likely a factor.
• Re-engagement sequence triggered for 5 cold leads.`,
      },
      {
        id: 'rh-d1-5',
        timestamp: 'Mar 27 @ 9:00 AM',
        result: `**Daily Growth Analysis — Mar 27 @ 9:00 AM**

**Overview**
44 new leads. Conversion rate: 11.2%.

**Top Opportunities**
• Carlos Mendez — asked for pricing, strong close signal.

**Flags**
• Response time avg: 3.8h — improving trend.`,
      },
      {
        id: 'rh-d1-6',
        timestamp: 'Mar 26 @ 9:00 AM',
        result: `**Daily Growth Analysis — Mar 26 @ 9:00 AM**

**Overview**
36 new leads. Conversion rate: 10.0%.

**Flags**
• 4 leads dropped off after 2nd message. Consider A/B testing follow-up scripts.`,
      },
    ],
  },
  {
    id: '2',
    title: 'Weekly Conversion Summary',
    prompt: 'Pull all closed deals and lost leads from the past 7 days. Identify patterns and give 3 actionable improvements.',
    schedule: 'Every Monday @ 9:00 AM',
    lastRun: 'Mon Mar 24',
    nextRun: 'Mon Mar 31',
    status: 'active',
    lastResult: `**Weekly Conversion Summary — Mon Mar 24**

**Closed Deals:** 6  |  **Lost Leads:** 14  |  **Win Rate:** 30%

**Patterns Identified**
• Leads that received a reply within 1h converted at 3× the average rate.
• Price objections accounted for 57% of losses — mostly at the offer stage.
• Leads from story replies had higher intent than feed comment leads.`,
    actionItems: [
      { label: 'Train auto-reply for faster response', type: 'testdrive' },
      { label: 'Train price-objection rebuttal script', type: 'testdrive' },
      { label: 'Review story reply leads in inbox', type: 'conversation', conversationId: undefined },
    ],
    runHistory: [
      {
        id: 'rh-2-1',
        timestamp: 'Mon Mar 24',
        result: `**Weekly Conversion Summary — Mon Mar 24**

**Closed Deals:** 6  |  **Lost Leads:** 14  |  **Win Rate:** 30%

**Patterns Identified**
• Leads that received a reply within 1h converted at 3× the average rate.
• Price objections accounted for 57% of losses — mostly at the offer stage.
• Leads from story replies had higher intent than feed comment leads.`,
        actionItems: [
          { label: 'Train auto-reply for faster response', type: 'testdrive' },
          { label: 'Train price-objection rebuttal script', type: 'testdrive' },
          { label: 'Review story reply leads in inbox', type: 'conversation', conversationId: undefined },
        ],
      },
      {
        id: 'rh-2-2',
        timestamp: 'Mon Mar 17',
        result: `**Weekly Conversion Summary — Mon Mar 17**

**Closed Deals:** 4  |  **Lost Leads:** 18  |  **Win Rate:** 18%

**Patterns Identified**
• Lower win rate tied to slower response times (avg 6.2h).
• Reels-driven leads showed 2× higher engagement than feed posts.
• 8 of 18 losses had no follow-up after day 2.`,
      },
      {
        id: 'rh-2-3',
        timestamp: 'Mon Mar 10',
        result: `**Weekly Conversion Summary — Mon Mar 10**

**Closed Deals:** 7  |  **Lost Leads:** 11  |  **Win Rate:** 39%

**Patterns Identified**
• Best week of the month — high-intent reel went viral.
• Most closures happened within 24h of first contact.`,
      },
      {
        id: 'rh-2-4',
        timestamp: 'Mon Mar 3',
        result: `**Weekly Conversion Summary — Mon Mar 3**

**Closed Deals:** 5  |  **Lost Leads:** 16  |  **Win Rate:** 24%

**Patterns Identified**
• Price was the top objection again (52% of losses).
• Story replies continue to outperform feed comments as a lead source.`,
      },
      {
        id: 'rh-2-5',
        timestamp: 'Mon Feb 24',
        result: `**Weekly Conversion Summary — Mon Feb 24**

**Closed Deals:** 3  |  **Lost Leads:** 20  |  **Win Rate:** 13%

**Patterns Identified**
• Lowest win rate month-to-date. Low-engagement week overall.
• 11 leads were never followed up after initial message.`,
      },
    ],
  },
  {
    id: '3',
    title: 'Post Performance Analysis',
    prompt: 'After each new post goes live, analyze engagement metrics, comment sentiment, and DM replies. Identify the top follow-up targets.',
    schedule: 'After each new post',
    lastRun: '1 day ago',
    nextRun: 'Next post',
    status: 'active',
    lastResult: `**Post Performance — Mar 29 Reel**

**Reach:** 18,400  |  **Engagement Rate:** 6.8%  |  **DM Replies:** 23

**Comment Sentiment**
• 78% positive — strong resonance with the transformation angle.
• 14% neutral questions (pricing, availability).
• 8% negative — mostly unrelated.

**Top Follow-Up Targets**
• @lucas.fern — commented "I need this" + sent DM. Priority.
• @mia.coast — asked about pricing in comments.
• @ryan.ko — saved the post and replied to story.

**Recommendation**
DM the top 3 within the next 2 hours while intent is highest.`,
    actionItems: [
      { label: 'Open @lucas.fern conversation', type: 'conversation', conversationId: 'hot-lead-carlos' },
      { label: 'Generate pricing FAQ post', type: 'amplify' },
      { label: 'Open @ryan.ko conversation', type: 'conversation', conversationId: '2' },
    ],
    runHistory: [
      {
        id: 'rh-3-1',
        timestamp: 'Mar 29 Reel',
        result: `**Post Performance — Mar 29 Reel**

**Reach:** 18,400  |  **Engagement Rate:** 6.8%  |  **DM Replies:** 23

**Comment Sentiment**
• 78% positive — strong resonance with the transformation angle.
• 14% neutral questions (pricing, availability).
• 8% negative — mostly unrelated.

**Top Follow-Up Targets**
• @lucas.fern — commented "I need this" + sent DM. Priority.
• @mia.coast — asked about pricing in comments.
• @ryan.ko — saved the post and replied to story.`,
        actionItems: [
          { label: 'Open @lucas.fern conversation', type: 'conversation', conversationId: 'hot-lead-carlos' },
          { label: 'Generate pricing FAQ post', type: 'amplify' },
          { label: 'Open @ryan.ko conversation', type: 'conversation', conversationId: '2' },
        ],
      },
      {
        id: 'rh-3-2',
        timestamp: 'Mar 27 Carousel',
        result: `**Post Performance — Mar 27 Carousel**

**Reach:** 11,200  |  **Engagement Rate:** 4.1%  |  **DM Replies:** 9

**Comment Sentiment**
• 65% positive. Lower than usual — topic was more niche.
• 22% questions about process.

**Top Follow-Up Targets**
• @jorge.av — asked for a link in comments.
• @paula.m — saved post + replied to story.`,
      },
      {
        id: 'rh-3-3',
        timestamp: 'Mar 25 Reel',
        result: `**Post Performance — Mar 25 Reel**

**Reach:** 22,100  |  **Engagement Rate:** 8.2%  |  **DM Replies:** 31

**Comment Sentiment**
• 84% positive — highest sentiment score this month.
• 10% pricing questions.

**Top Follow-Up Targets**
• @ana.r — DM'd within 5 mins of post. High intent.
• @felix.mo — asked "how do I start?" in comments.`,
      },
      {
        id: 'rh-3-4',
        timestamp: 'Mar 22 Story',
        result: `**Post Performance — Mar 22 Story**

**Views:** 4,300  |  **Replies:** 14

**Top Follow-Up Targets**
• @nat.b — replied with "interested, DM me".
• @carlos.v — asked about pricing.`,
      },
      {
        id: 'rh-3-5',
        timestamp: 'Mar 20 Reel',
        result: `**Post Performance — Mar 20 Reel**

**Reach:** 9,800  |  **Engagement Rate:** 3.5%  |  **DM Replies:** 7

**Comment Sentiment**
• 60% positive. Moderate engagement.

**Top Follow-Up Targets**
• @tom.h — left 3 comments, clearly interested.`,
      },
    ],
  },
];

const HANDOFF_ALERTS: HandoffAlert[] = [
  { id: 'hot-lead-1', title: '🔥 Hot lead ready to close', description: 'Carlos Mendez — asked for pricing, ready to sign', time: 'Just now', severity: 'high', conversationId: 'hot-lead-carlos' },
  { id: '1', title: 'High-value lead detected', description: 'Exequiel Selickas — manual intervention recommended', time: '12 min ago', severity: 'high', conversationId: '1' },
  { id: '2', title: 'Booking opportunity', description: 'Roberto M. — showing strong intent signals', time: '1h ago', severity: 'medium', conversationId: '2' },
  { id: '3', title: 'Follow-up needed', description: 'Valentina G. — 3 unanswered messages', time: '3h ago', severity: 'medium', conversationId: '3' },
];

const EXPLORE_CATEGORIES: { id: ExploreCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'growth', label: 'Growth' },
  { id: 'conversions', label: 'Conversions' },
  { id: 'content', label: 'Content' },
  { id: 'analytics', label: 'Analytics' },
];

interface ReportsViewProps {
  onViewConversation: (conversationId: string) => void;
  onGoToAmplify: () => void;
  onGoToTestDrive: () => void;
  autoOpenResultTaskId?: string | null;
  onAutoOpenConsumed?: () => void;
}

function renderResultLines(text: string) {
  return text.split('\n').map((line, i) => {
    const bold = line.startsWith('**') && line.endsWith('**');
    const bullet = line.startsWith('•') || /^\d+\./.test(line);
    if (bold) {
      return <p key={i} className="text-[13px] font-mono-io text-black font-semibold mt-3 mb-1 first:mt-0">{line.replace(/\*\*/g, '')}</p>;
    }
    if (bullet) {
      return <p key={i} className="text-[13px] font-mono-io text-zinc-600 leading-relaxed pl-2">{line}</p>;
    }
    if (line.trim() === '') return <div key={i} className="h-1" />;
    return <p key={i} className="text-[13px] font-mono-io text-zinc-600 leading-relaxed">{line}</p>;
  });
}

export function ReportsView({ onViewConversation, onGoToAmplify, onGoToTestDrive, autoOpenResultTaskId, onAutoOpenConsumed }: ReportsViewProps) {
  const [tasks, setTasks] = useState<ScheduledTask[]>(DEFAULT_TASKS);

  // Navigation
  const [view, setView] = useState<ViewName>('main');
  const [sheetTask, setSheetTask] = useState<ScheduledTask | null>(null);
  const [convCtx, setConvCtx] = useState<ConversationContext | null>(null);
  const [historyTask, setHistoryTask] = useState<ScheduledTask | null>(null);
  const [exploreCategory, setExploreCategory] = useState<ExploreCategory>('all');

  // Conversation state
  const [convMessages, setConvMessages] = useState<ConvMessage[]>([]);
  const [convInputText, setConvInputText] = useState('');
  const [convIsTyping, setConvIsTyping] = useState(false);
  const convScrollRef = React.useRef<HTMLDivElement>(null);

  // Init messages when a conversation is opened
  useEffect(() => {
    if (convCtx) {
      setConvMessages([
        { id: 'init-user', type: 'user', content: convCtx.task.prompt },
        { id: 'init-agent', type: 'agent', content: convCtx.entry.result, actionItems: convCtx.entry.actionItems },
      ]);
      setConvInputText('');
      setConvIsTyping(false);
    }
  }, [convCtx?.task.id, convCtx?.entry.id]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (convScrollRef.current) {
      convScrollRef.current.scrollTop = convScrollRef.current.scrollHeight;
    }
  }, [convMessages, convIsTyping]);

  const handleConvSend = () => {
    if (!convInputText.trim() || convIsTyping || !convCtx) return;
    const userMsg = convInputText.trim();
    setConvInputText('');
    const withUser: ConvMessage[] = [
      ...convMessages,
      { id: Math.random().toString(36), type: 'user', content: userMsg },
    ];
    setConvMessages(withUser);
    setConvIsTyping(true);
    setTimeout(() => {
      setConvMessages(prev => [
        ...prev,
        { id: Math.random().toString(36), type: 'agent', content: getMockResponse(convCtx.task.id, userMsg) },
      ]);
      setConvIsTyping(false);
    }, 1200);
  };

  const convRound = Math.floor(Math.max(0, convMessages.length - 2) / 2);

  useEffect(() => {
    if (autoOpenResultTaskId) {
      const task = tasks.find(t => t.id === autoOpenResultTaskId);
      if (task) {
        setSheetTask(task);
        onAutoOpenConsumed?.();
      }
    }
  }, [autoOpenResultTaskId]);

  const openConversation = (task: ScheduledTask, entry: RunHistoryEntry, source: 'sheet' | 'history') => {
    setConvCtx({ task, entry, source });
    setView('conversation');
  };

  const openHistory = (task: ScheduledTask) => {
    setHistoryTask(task);
    setSheetTask(null);
    setView('history');
  };

  const handleConversationBack = () => {
    if (convCtx?.source === 'history') {
      setView('history');
      setConvCtx(null);
    } else {
      setView('main');
      setConvCtx(null);
      setSheetTask(null);
    }
  };

  const handleHistoryBack = () => {
    setView('main');
    setHistoryTask(null);
    setSheetTask(null);
  };

  const handleActionFromConversation = (item: ActionItem) => {
    setView('main');
    setConvCtx(null);
    setSheetTask(null);
    setHistoryTask(null);
    if (item.type === 'conversation' && item.conversationId) {
      onViewConversation(item.conversationId);
    } else if (item.type === 'conversation') {
      onViewConversation('');
    } else if (item.type === 'amplify') {
      onGoToAmplify();
    } else if (item.type === 'testdrive') {
      onGoToTestDrive();
    }
  };

  const handleAddSuggestedTask = (suggested: SuggestedTask) => {
    const alreadyAdded = tasks.some(t => t.id === suggested.id || t.title === suggested.title);
    if (alreadyAdded) return;
    const task: ScheduledTask = {
      id: suggested.id,
      title: suggested.title,
      prompt: suggested.prompt,
      schedule: suggested.schedule,
      lastRun: 'Never',
      nextRun: 'Scheduled',
      status: 'active',
    };
    setTasks(prev => [...prev, task]);
    setView('main');
  };

  const toggleStatus = (id: string) => {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: t.status === 'active' ? 'paused' : 'active' } : t
    ));
    setSheetTask(prev => prev?.id === id ? { ...prev, status: prev.status === 'active' ? 'paused' : 'active' } : prev);
  };

  const filteredSuggested = exploreCategory === 'all'
    ? SUGGESTED_TASKS
    : SUGGESTED_TASKS.filter(t => t.category === exploreCategory);

  const addedIds = new Set(tasks.map(t => t.id));

  return (
    <div className="flex-1 h-full overflow-y-auto bg-white relative">
      <div className="px-5 py-6 flex flex-col gap-8">

        {/* Scheduled Tasks */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[13px] font-mono-io uppercase tracking-widest text-zinc-400">Scheduled Tasks</h2>

          {/* Task List */}
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => setSheetTask(task)}
                className="w-full rounded-[12px] border border-transparent bg-[#F5F5F5] text-left"
              >
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <p className="text-[14px] font-mono-io text-black tracking-tight truncate">{task.title}</p>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-io text-zinc-400 uppercase">
                      <Calendar className="w-3 h-3 shrink-0" />
                      {task.schedule}
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono-io uppercase tracking-widest px-2 py-0.5 rounded-full shrink-0 ${
                    task.status === 'active' ? 'bg-green-100 text-green-700'
                    : task.status === 'running' ? 'bg-blue-100 text-blue-700'
                    : 'bg-zinc-200 text-zinc-500'
                  }`}>
                    {task.status}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Explore Tasks CTA */}
          <button
            onClick={() => setView('explore')}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-[12px] border border-dashed border-[#d9d9d9] text-[12px] font-mono-io text-zinc-400 hover:border-[#FF8F40] hover:text-[#FF8F40] transition-colors uppercase tracking-widest"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Explore Tasks
          </button>
        </section>

        {/* Handoff Alerts */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[13px] font-mono-io uppercase tracking-widest text-zinc-400">Handoff Alerts</h2>

          <div className="flex flex-col gap-3">
            {HANDOFF_ALERTS.map((alert) => (
              <div
                key={alert.id}
                className="bg-white border border-[#d9d9d9] rounded-[12px] p-4 flex gap-3 items-start"
              >
                <div className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  alert.severity === 'high' ? 'bg-red-50' : 'bg-orange-50'
                }`}>
                  {alert.severity === 'high'
                    ? <AlertTriangle className="w-4 h-4 text-red-500" />
                    : <CheckCircle2 className="w-4 h-4 text-[#FF8F40]" />
                  }
                </div>
                <div className="flex flex-col gap-0.5 flex-1 overflow-hidden">
                  <p className="text-[13px] font-mono-io text-black tracking-tight leading-tight">{alert.title}</p>
                  <p className="text-[11px] font-mono-io text-zinc-500 leading-snug truncate">{alert.description}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[10px] font-mono-io text-zinc-400 uppercase">{alert.time}</span>
                    <button
                      onClick={() => onViewConversation(alert.conversationId)}
                      className="flex items-center gap-1 text-[11px] font-mono-io text-[#FF8F40] hover:opacity-70 transition-opacity uppercase tracking-tight"
                    >
                      View Conversation <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── TASK BOTTOM SHEET ── */}
      <AnimatePresence>
        {sheetTask && view === 'main' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
            onClick={() => setSheetTask(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-lg bg-white rounded-t-[20px] flex flex-col overflow-hidden"
              style={{ maxHeight: '85vh' }}
            >
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 rounded-full bg-[#d9d9d9]" />
              </div>
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#f0f0f0] shrink-0">
                <p className="text-[14px] font-mono-io text-black tracking-tight">{sheetTask.title}</p>
                <button onClick={() => setSheetTask(null)} className="text-zinc-400 hover:text-black transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="overflow-y-auto flex-1 px-5 py-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-io text-zinc-400 uppercase">
                    <Calendar className="w-3 h-3 shrink-0" />
                    {sheetTask.schedule}
                  </div>
                  <span className={`text-[10px] font-mono-io uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    sheetTask.status === 'active' ? 'bg-green-100 text-green-700'
                    : sheetTask.status === 'running' ? 'bg-blue-100 text-blue-700'
                    : 'bg-zinc-200 text-zinc-500'
                  }`}>
                    {sheetTask.status}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[10px] font-mono-io uppercase tracking-widest text-zinc-400">Prompt</p>
                  <p className="text-[13px] font-gt-america text-zinc-600 leading-relaxed">{sheetTask.prompt}</p>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono-io text-zinc-400 uppercase">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    Last: {sheetTask.lastRun}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    Next: {sheetTask.nextRun}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleStatus(sheetTask.id)}
                    className="flex items-center gap-1.5 text-[11px] font-mono-io uppercase tracking-tight text-zinc-500 hover:text-black transition-colors border border-[#d9d9d9] rounded-[6px] px-3 py-1.5"
                  >
                    {sheetTask.status === 'active' ? <><Pause className="w-3 h-3" /> Pause</> : <><Play className="w-3 h-3" /> Resume</>}
                  </button>
                  {sheetTask.runHistory && sheetTask.runHistory.length > 0 && (
                    <button
                      onClick={() => openConversation(sheetTask, sheetTask.runHistory![0], 'sheet')}
                      className="flex items-center gap-1.5 text-[11px] font-mono-io uppercase tracking-tight text-[#FF8F40] hover:opacity-70 transition-opacity border border-[#FF8F40]/30 rounded-[6px] px-3 py-1.5"
                    >
                      <ArrowRight className="w-3 h-3" /> View Last Result
                    </button>
                  )}
                </div>
                {sheetTask.runHistory && sheetTask.runHistory.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-mono-io uppercase tracking-widest text-zinc-400">Run History</p>
                    {sheetTask.runHistory.slice(0, 5).map((entry) => (
                      <button
                        key={entry.id}
                        onClick={() => openConversation(sheetTask, entry, 'sheet')}
                        className="w-full flex items-start justify-between gap-3 px-3 py-2.5 bg-[#F5F5F5] rounded-[10px] text-left hover:bg-zinc-100 transition-colors"
                      >
                        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                          <p className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-tight">{entry.timestamp}</p>
                          <p className="text-[12px] font-mono-io text-black leading-snug truncate">
                            {entry.result.split('\n').find(l => l.trim()) ?? '—'}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-1" />
                      </button>
                    ))}
                    {sheetTask.runHistory.length > 5 && (
                      <button
                        onClick={() => openHistory(sheetTask)}
                        className="w-full text-center text-[11px] font-mono-io uppercase tracking-widest text-[#FF8F40] hover:opacity-70 transition-opacity py-2"
                      >
                        View All ({sheetTask.runHistory.length} runs)
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── EXPLORE TASKS FULL-PAGE ── */}
      <AnimatePresence>
        {view === 'explore' && (
          <motion.div
            key="explore-view"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute inset-0 bg-white z-40 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 h-14 border-b border-[#f0f0f0] shrink-0">
              <button
                onClick={() => setView('main')}
                className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <p className="text-[15px] font-mono-io text-black tracking-tight font-semibold flex-1 text-center pr-8">Explore Tasks</p>
            </div>

            {/* Category pills */}
            <div className="flex gap-2 px-5 py-3 overflow-x-auto shrink-0 scrollbar-hide">
              {EXPLORE_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setExploreCategory(cat.id)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] font-mono-io uppercase tracking-widest transition-colors ${
                    exploreCategory === cat.id
                      ? 'bg-black text-white'
                      : 'bg-[#F5F5F5] text-zinc-500 hover:bg-zinc-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* 2-column card grid */}
            <div className="flex-1 overflow-y-auto px-4 pb-8">
              <div className="grid grid-cols-2 gap-3">
                {filteredSuggested.map(task => {
                  const added = addedIds.has(task.id);
                  return (
                    <button
                      key={task.id}
                      onClick={() => !added && handleAddSuggestedTask(task)}
                      disabled={added}
                      className="flex flex-col rounded-[16px] overflow-hidden bg-white border border-[#f0f0f0] shadow-sm text-left hover:shadow-md transition-shadow disabled:opacity-60"
                    >
                      {/* Visual preview */}
                      <div className="w-full h-[130px] overflow-hidden">
                        {task.visual}
                      </div>
                      {/* Title + badge */}
                      <div className="px-3 py-2.5 flex flex-col gap-1">
                        <p className="text-[13px] font-mono-io text-black leading-snug">{task.title}</p>
                        {added ? (
                          <span className="text-[9px] font-mono-io uppercase tracking-widest text-green-600">Added</span>
                        ) : (
                          <span className="text-[9px] font-mono-io uppercase tracking-widest text-zinc-400">{task.schedule}</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HISTORY FULL-PAGE VIEW ── */}
      <AnimatePresence>
        {view === 'history' && historyTask && (
          <motion.div
            key="history-view"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute inset-0 bg-white z-40 flex flex-col"
          >
            <div className="flex items-center gap-3 px-4 h-14 border-b border-[#f0f0f0] shrink-0">
              <button
                onClick={handleHistoryBack}
                className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <div className="flex flex-col gap-0">
                <p className="text-[13px] font-mono-io text-black tracking-tight leading-tight">{historyTask.title}</p>
                <p className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-widest">Run History</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-2">
              {historyTask.runHistory?.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => openConversation(historyTask, entry, 'history')}
                  className="w-full flex items-start justify-between gap-3 px-4 py-3 bg-[#F5F5F5] rounded-[12px] text-left hover:bg-zinc-100 transition-colors"
                >
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <p className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-tight">{entry.timestamp}</p>
                    <p className="text-[13px] font-mono-io text-black leading-snug truncate">
                      {entry.result.split('\n').find(l => l.trim()) ?? '—'}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CONVERSATION FULL-PAGE VIEW ── */}
      <AnimatePresence>
        {view === 'conversation' && convCtx && (
          <motion.div
            key="conversation-view"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute inset-0 bg-white z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 h-14 border-b border-[#f0f0f0] shrink-0">
              <button
                onClick={handleConversationBack}
                className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <div className="flex flex-col gap-0 flex-1 min-w-0">
                <p className="text-[13px] font-mono-io text-black tracking-tight leading-tight truncate">{convCtx.task.title}</p>
                <p className="text-[10px] font-mono-io text-[#FF8F40] uppercase tracking-widest">Scheduled Task · {convCtx.entry.timestamp}</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={convScrollRef} className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-6">
              {convMessages.map((msg, idx) => {
                if (msg.type === 'user') {
                  return (
                    <div key={msg.id} className="flex justify-end">
                      <div className="bg-[#FF8F40] text-white px-5 py-3.5 rounded-[20px] text-[16px] font-gt-america font-medium max-w-[85%]">
                        {msg.content}
                      </div>
                    </div>
                  );
                }
                // Agent message
                const isFirst = idx === 1;
                return (
                  <div key={msg.id} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 w-full max-w-[90%]">
                      <div className="text-[16px] text-black font-mono-io leading-[1.6] whitespace-pre-wrap">
                        {msg.content}
                      </div>
                      <div className="flex items-center gap-5 text-zinc-300">
                        <ThumbsUp className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                        <ThumbsDown className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                        <RefreshCcw className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                        <Copy className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                      </div>
                    </div>
                    {/* Action items only on first agent message */}
                    {isFirst && msg.actionItems && msg.actionItems.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {msg.actionItems.map((item, i) => {
                          const isConv = item.type === 'conversation';
                          const isAmplify = item.type === 'amplify';
                          return (
                            <button
                              key={i}
                              onClick={() => handleActionFromConversation(item)}
                              className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-[10px] border transition-colors ${
                                isConv ? 'border-blue-100 bg-blue-50/50 hover:bg-blue-50 text-blue-700'
                                : isAmplify ? 'border-purple-100 bg-purple-50/50 hover:bg-purple-50 text-purple-700'
                                : 'border-[#FF8F40]/20 bg-orange-50/50 hover:bg-orange-50 text-[#FF8F40]'
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${isConv ? 'bg-blue-100' : isAmplify ? 'bg-purple-100' : 'bg-orange-100'}`}>
                                {isConv && <ConversationsIcon className="w-3.5 h-3.5" />}
                                {isAmplify && <Zap className="w-3.5 h-3.5" />}
                                {!isConv && !isAmplify && <AgentsIcon className="w-3.5 h-3.5" />}
                              </div>
                              <span className="text-[12px] font-mono-io flex-1 leading-snug">{item.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator */}
              {convIsTyping && (
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                </div>
              )}
            </div>

            {/* Chips + PromptBox */}
            <div className="px-4 pb-6 pt-2 flex flex-col gap-3 shrink-0">
              {!convIsTyping && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5"
                  >
                    {getConvChips(convCtx.task.id, convRound).map((chip, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setConvInputText(chip);
                          setTimeout(() => {
                            const syntheticSend = () => {
                              if (!convCtx) return;
                              setConvInputText('');
                              const withUser: ConvMessage[] = [
                                ...convMessages,
                                { id: Math.random().toString(36), type: 'user', content: chip },
                              ];
                              setConvMessages(withUser);
                              setConvIsTyping(true);
                              setTimeout(() => {
                                setConvMessages(prev => [
                                  ...prev,
                                  { id: Math.random().toString(36), type: 'agent', content: getMockResponse(convCtx.task.id, chip) },
                                ]);
                                setConvIsTyping(false);
                              }, 1200);
                            };
                            syntheticSend();
                          }, 0);
                        }}
                        className="whitespace-nowrap bg-white border border-[#d9d9d9] hover:border-black/20 text-[#585858] hover:text-black px-4 py-2 rounded-full text-[14px] font-gt-america transition-all shadow-sm shrink-0"
                      >
                        {chip}
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
              <PromptBox
                value={convInputText}
                onChange={e => setConvInputText(e.target.value)}
                onSend={handleConvSend}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey && !convIsTyping && convInputText.trim()) {
                    handleConvSend();
                  }
                }}
                placeholder="Ask anything or follow up..."
                disabled={convIsTyping}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
