import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { NinjoLogo } from './NinjoLogo';
import { ProfileSheet } from './ProfileSheet';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function OperatorIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7.83887 5.17969C8.10496 4.64746 8.8649 4.64763 9.13086 5.17969L11.0293 8.97656C11.2441 9.4069 11.5929 9.75579 12.0225 9.9707H12.0234L15.8203 11.8691C16.3526 12.1352 16.3526 12.895 15.8203 13.1611L12.0234 15.0596C11.6472 15.2476 11.3328 15.5384 11.1162 15.8965L11.0293 16.0537L9.13086 19.8506C8.86491 20.3826 8.10495 20.3827 7.83887 19.8506L5.94043 16.0537C5.72555 15.6235 5.37646 15.2744 4.94629 15.0596L1.14941 13.1611C0.617219 12.895 0.617221 12.1352 1.14941 11.8691L4.94629 9.9707C5.3762 9.75575 5.72552 9.40684 5.94043 8.97656L7.83887 5.17969Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11.0096 3.04921L12.625 2.24153C12.7461 2.18095 12.8444 2.08268 12.9049 1.9615L13.7127 0.346145C13.9434 -0.115382 14.6021 -0.115382 14.8328 0.346145L15.6405 1.96149C15.701 2.08268 15.7993 2.18095 15.9205 2.24153L17.5358 3.04921C17.9974 3.27998 17.9974 3.9386 17.5358 4.16936L15.9205 4.97708C15.7993 5.0376 15.701 5.13589 15.6405 5.25705L14.8328 6.87245C14.6021 7.33393 13.9434 7.33393 13.7127 6.87245L12.9049 5.25705C12.8444 5.13589 12.7461 5.0376 12.625 4.97708L11.0096 4.16936C10.5481 3.9386 10.5481 3.27998 11.0096 3.04921Z" fill="currentColor"/>
    </svg>
  );
}

export function AgentsIcon({ className }: { className?: string }) {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7.98357 7.12892L9.50769 6.36686C9.62201 6.3097 9.71474 6.21698 9.77184 6.10265L10.534 4.57854C10.7517 4.14309 11.3731 4.14309 11.5908 4.57854L12.3529 6.10264C12.41 6.21698 12.5027 6.3097 12.617 6.36686L14.1411 7.12892C14.5766 7.34664 14.5766 7.96806 14.1411 8.18579L12.617 8.94787C12.5027 9.00498 12.41 9.09771 12.3529 9.21202L11.5908 10.7362C11.3731 11.1716 10.7517 11.1716 10.534 10.7362L9.77184 9.21202C9.71474 9.09771 9.62201 9.00498 9.50769 8.94787L7.98357 8.18579C7.54812 7.96806 7.54812 7.34664 7.98357 7.12892Z" fill="currentColor"/>
      <path d="M3.32183 18.157C5.2413 16.0639 7.99864 14.7516 11.0625 14.7516C14.1263 14.7516 16.8836 16.0639 18.8032 18.157M3.32183 18.157C5.2413 20.2502 7.99864 21.5624 11.0625 21.5624C14.1263 21.5624 16.8836 20.2502 18.8032 18.157M3.32183 18.157C1.6083 16.2885 0.5625 13.7976 0.5625 11.0625C0.5625 5.2635 5.26351 0.5625 11.0625 0.5625C16.8614 0.5625 21.5625 5.2635 21.5625 11.0625C21.5625 13.7976 20.5166 16.2885 18.8032 18.157" stroke="currentColor" strokeWidth="1.125"/>
    </svg>
  );
}

export function ConversationsIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12.9 7.5C13.2 8.4 14.025 9 15 9C16.275 9 17.25 8.025 17.25 6.75C17.25 5.475 16.275 4.5 15 4.5C14.025 4.5 13.2 5.1 12.9 6H3.75C2.925 6 2.25 6.675 2.25 7.5V12H0V13.5H2.25V18C2.25 18.825 2.925 19.5 3.75 19.5H14.25C15.075 19.5 15.75 18.825 15.75 18V15H14.25V18H3.75V7.5H12.9ZM15 6C15.45 6 15.75 6.3 15.75 6.75C15.75 7.2 15.45 7.5 15 7.5C14.55 7.5 14.25 7.2 14.25 6.75C14.25 6.3 14.55 6 15 6Z" fill="currentColor"/>
      <path d="M21.75 6V1.5C21.75 0.675 21.075 0 20.25 0H9.75C8.925 0 8.25 0.675 8.25 1.5V4.5H9.75V1.5H20.25V12H11.1C10.8 11.1 9.975 10.5 9 10.5C7.725 10.5 6.75 11.475 6.75 12.75C6.75 14.025 7.725 15 9 15C9.975 15 10.8 14.4 11.1 13.5H20.25C21.075 13.5 21.75 12.825 21.75 12V7.5H24V6H21.75ZM9 13.5C8.55 13.5 8.25 13.2 8.25 12.75C8.25 12.3 8.55 12 9 12C9.45 12 9.75 12.3 9.75 12.75C9.75 13.2 9.45 13.5 9 13.5Z" fill="currentColor"/>
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4.125 17.25L1.5 22.5H6.75L4.125 17.25ZM19.5 11.25V12.75C20.3272 12.75 21 13.4235 21 14.25V18C21 18.8273 20.3272 19.5 19.5 19.5H7.5V21H19.5C21.1545 21 22.5 19.6545 22.5 18V14.25C22.5 12.5955 21.1545 11.25 19.5 11.25Z" fill="currentColor"/>
      <path d="M10.5 18.0008C10.3371 18.0007 10.1787 17.9476 10.0486 17.8495C9.91861 17.7514 9.82404 17.6136 9.77925 17.457L8.4345 12.7508H6V11.2508H9C9.16289 11.2509 9.32133 11.304 9.45136 11.4021C9.58139 11.5002 9.67596 11.6379 9.72075 11.7945L10.5 14.5208L12.7792 6.54454C12.8243 6.38815 12.9189 6.25064 13.0489 6.15276C13.1789 6.05489 13.3373 6.00195 13.5 6.00195C13.6627 6.00195 13.8211 6.05489 13.9511 6.15276C14.0811 6.25064 14.1757 6.38815 14.2208 6.54454L15.5655 11.2508H18V12.7508H15C14.8371 12.7507 14.6787 12.6976 14.5486 12.5995C14.4186 12.5014 14.324 12.3636 14.2792 12.207L13.5 9.48079L11.2208 17.457C11.176 17.6136 11.0814 17.7514 10.9514 17.8495C10.8213 17.9476 10.6629 18.0007 10.5 18.0008Z" fill="currentColor"/>
      <path d="M3 9.75V6C3 5.17275 3.67275 4.5 4.5 4.5H16.5V3H4.5C2.8455 3 1.5 4.3455 1.5 6V9.75C1.5 11.4045 2.8455 12.75 4.5 12.75V11.25C3.67275 11.25 3 10.5773 3 9.75Z" fill="currentColor"/>
      <path d="M20.25 6C21.4926 6 22.5 4.99264 22.5 3.75C22.5 2.50736 21.4926 1.5 20.25 1.5C19.0074 1.5 18 2.50736 18 3.75C18 4.99264 19.0074 6 20.25 6Z" fill="currentColor"/>
    </svg>
  );
}

function AmplifyIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M14 2.5L19.5 5.5V14.5L14 17.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 5.5H4C2.89543 5.5 2 6.39543 2 7.5V12.5C2 13.6046 2.89543 14.5 4 14.5H14" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 14.5V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ReportsIcon({ className }: { className?: string }) {
  return (
    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16.2997 0.761153C16.2997 0.754993 16.3047 0.75 16.3109 0.75H21.7388C21.745 0.75 21.75 0.754993 21.75 0.761153V6.34284C21.75 6.349 21.745 6.35399 21.7388 6.35399M21.7388 0.761067L14.9013 7.35275C14.8971 7.35708 14.8971 7.36397 14.9013 7.3683M21.157 10.7156C21.1508 10.7156 21.1459 10.7206 21.1459 10.7268L21.1458 13.5176C21.1458 13.804 21.0916 14.0876 20.9852 14.3522C20.8787 14.6171 20.7224 14.8577 20.5253 15.0604C20.3282 15.2631 20.0942 15.4237 19.8365 15.5332C19.5792 15.6426 19.3033 15.6984 19.0248 15.6984H14.4787C14.4746 15.6984 14.4709 15.7006 14.4689 15.7042L11.6422 20.7904C11.6392 20.7957 11.641 20.8024 11.6462 20.8055M9.63462 15.7096C9.63462 15.7034 9.62962 15.6984 9.62346 15.6984L2.871 15.6984C2.59251 15.6984 2.31668 15.6426 2.0593 15.5332C1.80169 15.4237 1.56763 15.2631 1.37052 15.0604C1.17341 14.8577 1.01714 14.6171 0.91066 14.3522C0.804277 14.0876 0.75 13.804 0.75 13.5176L0.750005 3.552C0.750005 3.26565 0.804277 2.98205 0.91066 2.71741C1.01714 2.45253 1.17341 2.21187 1.37052 2.0092C1.56763 1.80654 1.80169 1.64586 2.0593 1.53638C2.31668 1.42699 2.59251 1.37119 2.871 1.37119H12.0465C12.0527 1.37119 12.0577 1.36619 12.0577 1.36003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export type ViewType = 'operator' | 'reports' | 'agents' | 'conversations' | 'connections' | 'amplify' | 'all-chats';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  recentChats: { id: string; title: string; unread?: boolean; isSimulation?: boolean }[];
  onSelectChat: (id: string) => void;
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  onOpenConnections?: () => void;
}

export function Sidebar({ isOpen, onClose, recentChats, onSelectChat, activeView, onViewChange, onOpenConnections }: SidebarProps) {
  const menuItems: { id: ViewType; icon: React.ElementType; label: string }[] = [
    { id: 'operator', icon: OperatorIcon, label: 'Operator' },
    { id: 'reports', icon: ReportsIcon, label: 'Reports' },
    { id: 'conversations', icon: ConversationsIcon, label: 'Conversations' },
  ];

  const [showProfile, setShowProfile] = useState(false);

  const handleMenuClick = (id: ViewType) => {
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
          {/* Top section: Logo + nav items */}
          <div className="flex flex-col gap-11">
             <div className="w-[107px] h-[33px]"><NinjoLogo /></div>

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
                   <span className="text-[15px] font-normal font-mono-io uppercase tracking-tight">{item.label}</span>
                 </button>
               ))}

             </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-black/10 -mx-6 -mt-5" />

          {/* Recent section */}
          <div className="flex flex-col gap-5 -mt-4">
            <span className="text-[12px] text-zinc-400 font-mono-io tracking-tight uppercase">Recent Operator Chats</span>
            <div className="flex flex-col gap-3">
              {recentChats.slice(0, 5).map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => onSelectChat(chat.id)}
                  className="group flex items-center justify-between text-[13px] text-zinc-600 line-clamp-1 font-gt-america tracking-tight text-left hover:text-black transition-colors w-full"
                >
                  <span className="truncate flex items-center gap-1.5">
                    {chat.isSimulation && <Play className="w-3 h-3 text-[#FF8F40] shrink-0" />}
                    {chat.title}
                  </span>
                  {chat.unread && (
                    <span className="w-2 h-2 bg-[#FF8F40] rounded-full shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>

            {recentChats.length > 5 && (
              <button
                onClick={() => handleMenuClick('all-chats')}
                className="text-[11px] font-mono-io uppercase tracking-tight text-zinc-400 hover:text-black transition-colors text-left"
              >
                View All &rsaquo;
              </button>
            )}
          </div>

          {/* Bottom section: Profile */}
          <div className="flex flex-col gap-7 pt-10 pb-8">
            <button
              onClick={() => setShowProfile(true)}
              className="flex items-center gap-3.5 text-left text-black transition-colors"
            >
               <div className="bg-[#b5e3ff] w-8 h-8 rounded-full flex items-center justify-center">
                 <span className="text-[11px] font-normal">FS</span>
               </div>
               <span className="text-[15px] font-normal uppercase tracking-tight">PROFILE</span>
            </button>
          </div>
        </div>
      </motion.div>

      <ProfileSheet isOpen={showProfile} onClose={() => setShowProfile(false)} onOpenConnections={onOpenConnections} />
    </>
  );
}
