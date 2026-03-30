import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Clock, AlertTriangle, CheckCircle2, ArrowRight, Calendar, Play, Pause, X, ChevronDown } from 'lucide-react';

interface ScheduledTask {
  id: string;
  title: string;
  prompt: string;
  schedule: string;
  lastRun: string;
  nextRun: string;
  status: 'active' | 'paused' | 'running';
  isDefault?: boolean;
  lastResult?: string;
}

interface HandoffAlert {
  id: string;
  title: string;
  description: string;
  time: string;
  severity: 'high' | 'medium';
  conversationId: string;
}

const SCHEDULE_OPTIONS = [
  'Every day @ 9:00 AM',
  'Every day @ 8:00 AM',
  'Every Monday @ 9:00 AM',
  'Every Friday @ 6:00 PM',
  'After each new post',
  'Every hour',
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
    isDefault: true,
  },
  {
    id: '2',
    title: 'Weekly Conversion Summary',
    prompt: 'Pull all closed deals and lost leads from the past 7 days. Identify patterns and give 3 actionable improvements.',
    schedule: 'Every Monday @ 9:00 AM',
    lastRun: 'Mon Mar 24',
    nextRun: 'Mon Mar 31',
    status: 'active',
  },
  {
    id: '3',
    title: 'Post Performance Analysis',
    prompt: 'After each new post goes live, analyze engagement metrics, comment sentiment, and DM replies. Identify the top follow-up targets.',
    schedule: 'After each new post',
    lastRun: '1 day ago',
    nextRun: 'Next post',
    status: 'active',
  },
];

const HANDOFF_ALERTS: HandoffAlert[] = [
  { id: '1', title: 'High-value lead detected', description: 'Exequiel Selickas — manual intervention recommended', time: '12 min ago', severity: 'high', conversationId: '1' },
  { id: '2', title: 'Booking opportunity', description: 'Roberto M. — showing strong intent signals', time: '1h ago', severity: 'medium', conversationId: '2' },
  { id: '3', title: 'Follow-up needed', description: 'Valentina G. — 3 unanswered messages', time: '3h ago', severity: 'medium', conversationId: '3' },
];

interface ReportsViewProps {
  onViewConversation: (conversationId: string) => void;
}

export function ReportsView({ onViewConversation }: ReportsViewProps) {
  const [tasks, setTasks] = useState<ScheduledTask[]>(DEFAULT_TASKS);
  const [expandedId, setExpandedId] = useState<string | null>('default-1');
  const [showNewForm, setShowNewForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newPrompt, setNewPrompt] = useState('');
  const [newSchedule, setNewSchedule] = useState(SCHEDULE_OPTIONS[0]);
  const [showScheduleDropdown, setShowScheduleDropdown] = useState(false);

  const handleAddTask = () => {
    if (!newTitle.trim() || !newPrompt.trim()) return;
    const task: ScheduledTask = {
      id: Math.random().toString(36).substring(7),
      title: newTitle.trim(),
      prompt: newPrompt.trim(),
      schedule: newSchedule,
      lastRun: 'Never',
      nextRun: 'Scheduled',
      status: 'active',
    };
    setTasks(prev => [...prev, task]);
    setNewTitle('');
    setNewPrompt('');
    setNewSchedule(SCHEDULE_OPTIONS[0]);
    setShowNewForm(false);
  };

  const toggleStatus = (id: string) => {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: t.status === 'active' ? 'paused' : 'active' } : t
    ));
  };

  return (
    <div className="flex-1 h-full overflow-y-auto bg-white">
      <div className="px-5 py-6 flex flex-col gap-8">

        {/* Scheduled Tasks */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[13px] font-mono-io uppercase tracking-widest text-zinc-400">Scheduled Tasks</h2>
            <button
              onClick={() => setShowNewForm(v => !v)}
              className="flex items-center gap-1.5 text-[12px] font-mono-io text-[#FF8F40] hover:opacity-70 transition-opacity uppercase tracking-tight"
            >
              {showNewForm ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              {showNewForm ? 'Cancel' : 'New Task'}
            </button>
          </div>

          {/* New Task Form */}
          <AnimatePresence>
            {showNewForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="border border-[#FF8F40]/30 bg-orange-50/30 rounded-[12px] p-4 flex flex-col gap-3">
                  <p className="text-[12px] font-mono-io uppercase tracking-widest text-[#FF8F40]">New Scheduled Task</p>

                  <input
                    type="text"
                    placeholder="Task name"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-3 py-2.5 text-[13px] font-mono-io text-black placeholder:text-zinc-400 outline-none focus:border-[#FF8F40] transition-colors"
                  />

                  <textarea
                    placeholder="What should the Operator analyze or do?"
                    value={newPrompt}
                    onChange={e => setNewPrompt(e.target.value)}
                    rows={3}
                    className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-3 py-2.5 text-[13px] font-mono-io text-black placeholder:text-zinc-400 outline-none focus:border-[#FF8F40] transition-colors resize-none"
                  />

                  {/* Schedule picker */}
                  <div className="relative">
                    <button
                      onClick={() => setShowScheduleDropdown(v => !v)}
                      className="w-full flex items-center justify-between bg-white border border-[#d9d9d9] rounded-[8px] px-3 py-2.5 text-[13px] font-mono-io text-black outline-none hover:border-zinc-400 transition-colors"
                    >
                      <span className="flex items-center gap-2 text-zinc-600">
                        <Calendar className="w-3.5 h-3.5" />
                        {newSchedule}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                    </button>
                    <AnimatePresence>
                      {showScheduleDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="absolute top-full mt-1 w-full bg-white border border-[#d9d9d9] rounded-[8px] shadow-lg z-10 overflow-hidden"
                        >
                          {SCHEDULE_OPTIONS.map(opt => (
                            <button
                              key={opt}
                              onClick={() => { setNewSchedule(opt); setShowScheduleDropdown(false); }}
                              className={`w-full text-left px-3 py-2.5 text-[13px] font-mono-io hover:bg-zinc-50 transition-colors ${newSchedule === opt ? 'text-[#FF8F40]' : 'text-black'}`}
                            >
                              {opt}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={handleAddTask}
                    disabled={!newTitle.trim() || !newPrompt.trim()}
                    className="bg-black text-white text-[12px] font-mono-io uppercase tracking-widest py-2.5 rounded-[8px] disabled:opacity-30 hover:bg-zinc-800 transition-colors"
                  >
                    Schedule Task
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Task List */}
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <div key={task.id} className={`rounded-[12px] overflow-hidden border ${task.isDefault ? 'border-[#FF8F40]/20 bg-orange-50/20' : 'border-transparent bg-[#F5F5F5]'}`}>
                {/* Task header — always visible */}
                <button
                  onClick={() => setExpandedId(expandedId === task.id ? null : task.id)}
                  className="w-full flex items-start justify-between gap-3 p-4 text-left"
                >
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {task.isDefault && (
                        <span className="text-[9px] font-mono-io uppercase tracking-widest bg-[#FF8F40] text-white px-1.5 py-0.5 rounded-full shrink-0">Default</span>
                      )}
                      <p className="text-[14px] font-mono-io text-black tracking-tight truncate">{task.title}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-io text-zinc-400 uppercase">
                      <Calendar className="w-3 h-3 shrink-0" />
                      {task.schedule}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    <span className={`text-[10px] font-mono-io uppercase tracking-widest px-2 py-0.5 rounded-full ${
                      task.status === 'active' ? 'bg-green-100 text-green-700'
                      : task.status === 'running' ? 'bg-blue-100 text-blue-700'
                      : 'bg-zinc-200 text-zinc-500'
                    }`}>
                      {task.status}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${expandedId === task.id ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Expanded detail */}
                <AnimatePresence>
                  {expandedId === task.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 flex flex-col gap-3 border-t border-black/5 pt-3">
                        {/* Prompt */}
                        <p className="text-[12px] font-mono-io text-zinc-500 leading-relaxed">{task.prompt}</p>

                        {/* Run info */}
                        <div className="flex items-center justify-between text-[11px] font-mono-io text-zinc-400 uppercase">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            Last: {task.lastRun}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            Next: {task.nextRun}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => toggleStatus(task.id)}
                            className="flex items-center gap-1.5 text-[11px] font-mono-io uppercase tracking-tight text-zinc-500 hover:text-black transition-colors border border-[#d9d9d9] rounded-[6px] px-3 py-1.5"
                          >
                            {task.status === 'active' ? <><Pause className="w-3 h-3" /> Pause</> : <><Play className="w-3 h-3" /> Resume</>}
                          </button>
                          {task.lastRun !== 'Never' && (
                            <button className="flex items-center gap-1.5 text-[11px] font-mono-io uppercase tracking-tight text-[#FF8F40] hover:opacity-70 transition-opacity border border-[#FF8F40]/30 rounded-[6px] px-3 py-1.5">
                              <ArrowRight className="w-3 h-3" /> View Last Result
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
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
    </div>
  );
}
