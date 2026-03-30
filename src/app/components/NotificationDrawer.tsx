import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, CheckCircle2 } from 'lucide-react';

interface Notification {
  id: string;
  chatId: string;
  title: string;
  type: 'ready';
  timestamp: Date;
}

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onSelectChat: (chatId: string) => void;
}

export function NotificationDrawer({ isOpen, onClose, notifications, onSelectChat }: NotificationDrawerProps) {
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
            className="absolute top-0 right-0 w-[320px] h-full bg-white shadow-[-10px_0_40px_rgba(0,0,0,0.1)] z-[70] flex flex-col border-l border-[#d9d9d9]"
          >
            <div className="flex items-center justify-between px-6 h-14 border-b border-[#f0f0f0] shrink-0">
              <h3 className="text-[17px] font-gt-america font-semibold text-black">Notifications</h3>
              <button onClick={onClose} className="p-1 hover:bg-zinc-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-[#8e8e8e]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full opacity-40 text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <p className="text-[15px] font-gt-america">No notifications yet</p>
                </div>
              ) : (
                notifications.map((notif) => (
                  <button
                    key={notif.id}
                    onClick={() => {
                      onSelectChat(notif.chatId);
                      onClose();
                    }}
                    className="w-full bg-white border border-[#d9d9d9] rounded-2xl p-4 text-left hover:border-black transition-all group flex gap-3 items-start"
                  >
                    <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <p className="text-[14px] font-gt-america font-medium text-black leading-tight">
                        Your conversation is ready to view
                      </p>
                      <p className="text-[12px] font-gt-america text-[#8e8e8e] truncate">
                        "{notif.title}"
                      </p>
                      <p className="text-[10px] font-gt-america text-[#c0c0c0] mt-1">
                        Just now
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
