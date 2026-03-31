import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, CheckCircle2, AlertTriangle, BarChart2, ArrowRight } from 'lucide-react';

interface Notification {
  id: string;
  chatId: string;
  title: string;
  type: 'ready' | 'handoff' | 'report';
  timestamp: Date;
  leadName?: string;
  reason?: string;
  targetView?: 'inbox';
  inboxConversationId?: string;
  reportTaskId?: string;
}

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onSelectChat: (chatId: string) => void;
  onSelectInboxConversation: (conversationId: string) => void;
  onViewReportResult: (taskId: string) => void;
}

export function NotificationDrawer({ isOpen, onClose, notifications, onSelectChat, onSelectInboxConversation, onViewReportResult }: NotificationDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/5 z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute top-0 right-0 w-[90vw] h-full bg-white shadow-[-10px_0_40px_rgba(0,0,0,0.1)] z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-14 border-b border-[#f0f0f0] shrink-0">
              <h3 className="text-[15px] font-mono-io uppercase tracking-widest text-black">Notifications</h3>
              <button onClick={onClose} className="p-1 hover:bg-zinc-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-[#8e8e8e]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full opacity-40 text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <p className="text-[13px] font-mono-io uppercase tracking-widest">No notifications yet</p>
                </div>
              ) : (
                notifications.map((notif, index) => (
                  <React.Fragment key={notif.id}>
                    {notif.type === 'report' && notif.reportTaskId ? (
                      <div className="w-full px-6 py-5 text-left flex gap-4 items-start">
                        <div className="size-9 rounded-xl flex items-center justify-center shrink-0 bg-green-50">
                          <BarChart2 className="w-4.5 h-4.5 text-green-600" />
                        </div>
                        <div className="flex flex-col gap-1 overflow-hidden flex-1">
                          <p className="text-[14px] font-mono-io text-black leading-tight">
                            Your daily growth report is ready
                          </p>
                          <p className="text-[12px] font-mono-io text-zinc-400 uppercase tracking-tight">
                            {notif.title}
                          </p>
                          <p className="text-[10px] font-mono-io text-zinc-300 uppercase tracking-widest mt-0.5">
                            Today @ 9:00 AM
                          </p>
                          <button
                            onClick={() => onViewReportResult(notif.reportTaskId!)}
                            className="mt-2 flex items-center gap-1.5 text-[11px] font-mono-io uppercase tracking-tight text-[#FF8F40] hover:opacity-70 transition-opacity self-start"
                          >
                            View Last Result <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          if (notif.targetView === 'inbox' && notif.inboxConversationId) {
                            onSelectInboxConversation(notif.inboxConversationId);
                          } else {
                            onSelectChat(notif.chatId);
                            onClose();
                          }
                        }}
                        className="w-full px-6 py-5 text-left hover:bg-zinc-50 transition-colors flex gap-4 items-start"
                      >
                        {notif.leadName ? (
                          <>
                            <div className="size-9 rounded-xl flex items-center justify-center shrink-0 bg-orange-50">
                              <span className="text-[18px] leading-none">🔥</span>
                            </div>
                            <div className="flex flex-col gap-1 overflow-hidden">
                              <p className="text-[14px] font-mono-io text-black leading-tight">
                                Hot lead ready to close
                              </p>
                              <p className="text-[12px] font-mono-io text-zinc-500 truncate">
                                {notif.leadName}
                              </p>
                              <p className="text-[11px] font-mono-io text-[#FF8F40] leading-tight">
                                {notif.reason}
                              </p>
                              <p className="text-[10px] font-mono-io text-zinc-300 uppercase tracking-widest mt-0.5">
                                Just now
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`size-9 rounded-xl flex items-center justify-center shrink-0 ${notif.type === 'handoff' ? 'bg-red-50' : 'bg-orange-50'}`}>
                              {notif.type === 'handoff'
                                ? <AlertTriangle className="w-4.5 h-4.5 text-red-500" />
                                : <CheckCircle2 className="w-4.5 h-4.5 text-orange-500" />
                              }
                            </div>
                            <div className="flex flex-col gap-1 overflow-hidden">
                              <p className="text-[14px] font-mono-io text-black leading-tight">
                                {notif.type === 'handoff' ? 'Manual intervention recommended' : 'Your conversation is ready to view'}
                              </p>
                              <p className="text-[12px] font-mono-io text-zinc-400 truncate">
                                "{notif.title}"
                              </p>
                              <p className="text-[10px] font-mono-io text-zinc-300 uppercase tracking-widest mt-0.5">
                                Just now
                              </p>
                            </div>
                          </>
                        )}
                      </button>
                    )}
                    {index < notifications.length - 1 && (
                      <div className="h-px bg-[#f0f0f0] mx-6" />
                    )}
                  </React.Fragment>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
