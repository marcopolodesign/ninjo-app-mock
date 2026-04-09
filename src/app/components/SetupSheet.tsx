import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ChevronRight, Zap, Target, Bot, Play, Rocket, Sparkles, Link, Calendar, Mic, Users } from 'lucide-react';

interface SetupSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Step {
  id: string;
  label: string;
  description: string;
  done: boolean;
  icon: React.ElementType;
}

interface Upgrade {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

const STEPS: Step[] = [
  {
    id: 'goal',
    label: 'Goal defined',
    description: 'High-ticket appointment setting',
    done: true,
    icon: Target,
  },
  {
    id: 'agent',
    label: 'First agent created',
    description: 'Sales agent · Instagram DMs',
    done: true,
    icon: Bot,
  },
  {
    id: 'agent-type',
    label: 'Agent type selected',
    description: 'Choose how much the AI runs on its own',
    done: false,
    icon: Zap,
  },
  {
    id: 'creation-loop',
    label: 'Creation loop complete',
    description: 'Roleplay & simulate before going live',
    done: false,
    icon: Play,
  },
  {
    id: 'activation',
    label: 'Agent activated',
    description: 'Set contact limits, triggers & handoff logic',
    done: false,
    icon: Rocket,
  },
  {
    id: 'handoff-channel',
    label: 'Handoff channel connected',
    description: 'Where you receive alerts & approvals',
    done: false,
    icon: Sparkles,
  },
];

const UPGRADES: Upgrade[] = [
  {
    id: 'crm',
    label: 'Connect your CRM',
    description: 'Sync leads & track conversions automatically',
    icon: Link,
    tag: 'Integration',
  },
  {
    id: 'calendly',
    label: 'Connect Calendly',
    description: 'Let the agent book calls without you',
    icon: Calendar,
    tag: 'Integration',
  },
  {
    id: 'voice',
    label: 'Enable voice replies',
    description: 'Send AI-generated voice notes to leads',
    icon: Mic,
    tag: 'Expansion',
  },
  {
    id: 'multi-agent',
    label: 'Add a second agent',
    description: 'Run a different use case in parallel',
    icon: Users,
    tag: 'Expansion',
  },
];

const UPGRADE_TAG_COLORS: Record<string, string> = {
  Integration: '#2AABEE',
  Expansion: '#FF8F40',
};

export function SetupSheet({ isOpen, onClose }: SetupSheetProps) {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const doneCount = STEPS.filter(s => s.done).length;
  const total = STEPS.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed bottom-0 left-0 right-0 z-[70] bg-[#111111] rounded-t-[24px] overflow-hidden"
            style={{ height: '90%' }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 shrink-0">
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <span className="text-[17px] font-mono-io uppercase tracking-widest text-white">Setup</span>
              <div className="w-8 h-8" />
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto h-full pb-16">
              <div className="px-4 pt-2 pb-8 flex flex-col gap-6">

                {/* Progress summary */}
                <div className="bg-[#1c1c1e] rounded-[14px] p-4 flex flex-col gap-3">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[22px] font-gt-america font-semibold text-white">
                        {doneCount} of {total} complete
                      </span>
                      <span className="text-[13px] font-gt-america text-zinc-400">
                        {total - doneCount} steps left before you go live
                      </span>
                    </div>
                    <span className="text-[13px] font-mono-io text-[#FF8F40] tabular-nums">
                      {Math.round((doneCount / total) * 100)}%
                    </span>
                  </div>
                  {/* Segmented bar */}
                  <div className="flex gap-1">
                    {STEPS.map((step) => (
                      <div
                        key={step.id}
                        className="flex-1 h-1.5 rounded-full transition-colors duration-300"
                        style={{ backgroundColor: step.done ? '#FF8F40' : 'rgba(255,255,255,0.1)' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">
                    Journey
                  </span>
                  <div className="bg-[#1c1c1e] rounded-[12px] overflow-hidden divide-y divide-white/5">
                    {STEPS.map((step, i) => {
                      const Icon = step.icon;
                      const isExpanded = expandedStep === step.id;
                      return (
                        <button
                          key={step.id}
                          onClick={() => !step.done && setExpandedStep(isExpanded ? null : step.id)}
                          className="w-full flex items-center gap-3.5 px-4 py-3.5 text-left hover:bg-white/5 transition-colors"
                        >
                          {/* Step number or check */}
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: step.done
                                ? 'rgba(255,143,64,0.15)'
                                : 'rgba(255,255,255,0.06)',
                            }}
                          >
                            {step.done ? (
                              <Check className="w-3.5 h-3.5 text-[#FF8F40]" />
                            ) : (
                              <span className="text-[11px] font-mono-io text-zinc-500">{i + 1}</span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <span
                              className={`block text-[15px] font-gt-america ${
                                step.done ? 'text-zinc-400 line-through decoration-zinc-600' : 'text-white'
                              }`}
                            >
                              {step.label}
                            </span>
                            <span className="block text-[12px] font-gt-america text-zinc-500 truncate">
                              {step.description}
                            </span>
                          </div>

                          {!step.done && (
                            <div className="bg-[#FF8F40]/15 px-2 py-0.5 rounded-full shrink-0">
                              <span className="text-[10px] font-mono-io uppercase tracking-widest text-[#FF8F40]">
                                Pending
                              </span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Upgrades */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-0.5 px-1">
                    <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500">
                      Possible upgrades
                    </span>
                    <span className="text-[12px] font-gt-america text-zinc-600">
                      Available once your agent is live
                    </span>
                  </div>
                  <div className="bg-[#1c1c1e] rounded-[12px] overflow-hidden divide-y divide-white/5">
                    {UPGRADES.map((upgrade) => {
                      const Icon = upgrade.icon;
                      return (
                        <button
                          key={upgrade.id}
                          className="w-full flex items-center gap-3.5 px-4 py-3.5 text-left hover:bg-white/5 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-[7px] bg-white/6 flex items-center justify-center shrink-0"
                            style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                          >
                            <Icon className="w-3.5 h-3.5 text-zinc-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-[15px] font-gt-america text-white">{upgrade.label}</span>
                            <span className="block text-[12px] font-gt-america text-zinc-500 truncate">
                              {upgrade.description}
                            </span>
                          </div>
                          <div
                            className="px-2 py-0.5 rounded-full shrink-0"
                            style={{ backgroundColor: `${UPGRADE_TAG_COLORS[upgrade.tag]}18` }}
                          >
                            <span
                              className="text-[10px] font-mono-io uppercase tracking-widest"
                              style={{ color: UPGRADE_TAG_COLORS[upgrade.tag] }}
                            >
                              {upgrade.tag}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
