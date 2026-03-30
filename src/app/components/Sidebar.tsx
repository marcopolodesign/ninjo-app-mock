import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, MessageSquare, User, Settings, PieChart, 
  ChevronRight, BrainCircuit, Users, History, LayoutGrid
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  recentChats: { id: string; title: string; unread?: boolean }[];
  onSelectChat: (id: string) => void;
  activeView: 'copilot' | 'agents' | 'conversations';
  onViewChange: (view: 'copilot' | 'agents' | 'conversations') => void;
}

export function Sidebar({ isOpen, onClose, recentChats, onSelectChat, activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'copilot', icon: BrainCircuit, label: 'CoPilot' },
    { id: 'agents', icon: Users, label: 'Agents' },
    { id: 'conversations', icon: MessageSquare, label: 'Conversations' },
  ];

  const handleMenuClick = (id: 'copilot' | 'agents' | 'conversations') => {
    onViewChange(id);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/5 z-[45] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-[256px] bg-[#f5f5f5] border-r border-black/10 z-[50] flex flex-col font-mono-io"
      >
        <div className="pt-20 px-6 flex flex-col gap-10 overflow-y-auto flex-1">
          {/* Top section: Menu and Logo */}
          <div className="flex flex-col gap-11">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 flex items-center justify-center">
                 <LayoutGrid className="w-6 h-6" />
               </div>
               <div className="flex flex-col">
                  <span className="text-sm font-normal tracking-widest text-black">NINJŌ</span>
               </div>
             </div>

             <div className="flex flex-col gap-5">
               {menuItems.map((item) => (
                 <button 
                  key={item.label}
                  onClick={() => handleMenuClick(item.id as any)}
                  className={cn(
                    "flex items-center gap-3.5 text-left transition-colors",
                    activeView === item.id ? "text-black font-semibold" : "text-zinc-500 hover:text-black"
                  )}
                 >
                   <item.icon className={cn("w-5 h-5 shrink-0", activeView === item.id && "text-[#FF8F40]")} />
                   <span className="text-[15px] font-normal uppercase tracking-tight">{item.label}</span>
                 </button>
               ))}
             </div>
          </div>

          {/* Recent section */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] text-zinc-400 font-mono-io tracking-tight uppercase">Recent CoPilot Chats</span>
            <div className="flex flex-col gap-4">
              {recentChats.map((chat) => (
                <button 
                  key={chat.id} 
                  onClick={() => onSelectChat(chat.id)}
                  className="group flex items-center justify-between text-[15px] text-zinc-600 line-clamp-1 font-mono-io tracking-tight text-left hover:text-black transition-colors w-full"
                >
                  <span className="truncate">{chat.title}</span>
                  {chat.unread && (
                    <span className="w-2 h-2 bg-[#FF8F40] rounded-full shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tokens section */}
          <div className="flex items-center gap-2.5 pt-4">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 bg-zinc-300 rounded-full" />
              <div 
                className="absolute inset-0 bg-zinc-400 rounded-full" 
                style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)', opacity: 0.5 }}
              />
            </div>
            <span className="text-[11px] font-normal text-zinc-500 uppercase">20% TOKENS USED</span>
          </div>

          {/* Bottom section: Profile and Settings */}
          <div className="flex flex-col gap-7 pt-10 pb-8">
            <button className="flex items-center gap-3.5 text-left text-zinc-500 hover:text-black transition-colors">
              <Settings className="w-5 h-5 shrink-0" />
              <span className="text-[15px] font-normal uppercase tracking-tight text-black">SETTINGS</span>
            </button>
            <button className="flex items-center gap-3.5 text-left text-black transition-colors">
               <div className="bg-[#b5e3ff] w-8 h-8 rounded-full flex items-center justify-center">
                 <span className="text-[11px] font-normal">FS</span>
               </div>
               <span className="text-[15px] font-normal uppercase tracking-tight">PROFILE</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
