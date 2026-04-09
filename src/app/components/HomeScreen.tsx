import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Bell, Plus, ArrowUp, X, Sparkles, Mic, Link as LinkIcon, ArrowLeft } from 'lucide-react';
import { Sidebar, type ViewType } from './Sidebar';
import { MetricsFlow, type Message, type StepType, type PathType } from './MetricsFlow';
import { ReportsView } from './ReportsView';
import { RoleplayChat } from './RoleplayChat';
import { useAuth } from '../hooks/useAuth';
import { NewChatIcon } from './NewChatIcon';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PromptBox } from './PromptBox';
import { ConversationsInbox } from './ConversationsInbox';
import { ConnectionsView } from './ConnectionsView';
import { AmplifyView } from './AmplifyView';
import { AllChatsView } from './AllChatsView';

import NinjoLogo from '../../imports/Frame1443-2003-674';

import { NotificationDrawer } from './NotificationDrawer';

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  currentStep: StepType;
  currentPath: PathType;
  isReady?: boolean;
  unread?: boolean;
  type?: 'normal' | 'simulation';
  channel?: 'instagram' | 'whatsapp' | 'x' | 'telegram';
}

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

export function HomeScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [autoOpenResultTaskId, setAutoOpenResultTaskId] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 'report-daily-1',
      chatId: '',
      title: 'Daily Growth Analysis',
      type: 'report',
      timestamp: new Date(),
      reportTaskId: 'default-1',
    },
  ]);
  const [isActive, setIsActive] = useState(false);
  const [inputText, setInputText] = useState('');
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<ViewType>('operator');
  const [deepLinkConversationId, setDeepLinkConversationId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      title: "What’s my average conversion rate?",
      messages: [],
      currentStep: 'entry',
      currentPath: null,
      isReady: true,
      unread: false
    },
    {
      id: '2',
      title: "Give me my last post impression metrics",
      messages: [],
      currentStep: 'entry',
      currentPath: null,
      isReady: true,
      unread: false
    },
    {
      id: '3',
      title: "Lucas Herrera · ready to book a call",
      messages: [],
      currentStep: 'entry',
      currentPath: null,
      isReady: true,
      unread: true,
      channel: 'whatsapp',
    }
  ]);
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(prev => [{
        id: 'hot-lead-notif-1',
        chatId: '',
        title: 'Carlos Mendez · Hot Lead',
        type: 'handoff' as const,
        timestamp: new Date(),
        leadName: 'Carlos Mendez',
        reason: 'Asked for pricing · Ready to sign',
        targetView: 'inbox' as const,
        inboxConversationId: 'hot-lead-carlos',
      }, ...prev]);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const suggestions = [
    {
      title: 'Analyze my sales',
      role: 'AI DATA ANALYST',
      description: 'Analyze performance, identify leaks, and optimize conversion',
      imageUrl: 'https://images.unsplash.com/photo-1586448317606-cb1ec00298fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      title: 'Generate brand content',
      role: 'AI CONTENT MANAGER',
      description: 'Create tailor-made graphics using your brand DNA',
      imageUrl: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      title: 'Audit my ad campaigns',
      role: 'AI MEDIA BUYER',
      description: 'Review ROAS, CTR, and find conversion opportunities',
      imageUrl: 'https://images.unsplash.com/photo-1759215524600-7971d6a4dac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      title: 'Research my audience',
      role: 'AI MEDIA BUYER',
      description: 'Deep dive into buyer personas and engagement patterns',
      imageUrl: 'https://images.unsplash.com/photo-1629787177096-9fbe3e2ef6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      title: 'Draft a growth strategy',
      role: 'AI MARKETING STRATEGIST',
      description: 'Mix metrics with content for high-impact engagement',
      imageUrl: 'https://images.unsplash.com/photo-1621618765466-a0e74bd22170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      title: 'Write a social post',
      role: 'AI COPYWRITER',
      description: 'Draft story sequences, posts, and campaign copy',
      imageUrl: 'https://images.unsplash.com/photo-1739969492827-f916ade672df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    }
  ];

  const activeConversation = conversations.find(c => c.id === activeChatId);

  const handleStart = (message?: string) => {
    const finalMessage = typeof message === 'string' ? message : inputText.trim();
    if (!finalMessage && !isActive) return;

    const newId = Math.random().toString(36).substring(7);
    const newConv: Conversation = {
      id: newId,
      title: finalMessage || 'New Chat',
      messages: [],
      currentStep: 'entry',
      currentPath: null,
      isReady: false,
      unread: false
    };

    setConversations(prev => [newConv, ...prev]);
    setActiveChatId(newId);
    setInputText('');
    setIsActive(true);

    // Simulate other conversation becoming ready after a delay
    setTimeout(() => {
      setConversations(prev => {
        const otherIdx = prev.findIndex(c => c.id !== newId && !c.isReady);
        if (otherIdx !== -1) {
          const updated = [...prev];
          const chat = updated[otherIdx];
          updated[otherIdx] = { ...chat, isReady: true, unread: true };
          
          setNotifications(prevNotifs => [
            {
              id: Math.random().toString(),
              chatId: chat.id,
              title: chat.title,
              type: 'ready',
              timestamp: new Date()
            },
            ...prevNotifs
          ]);
          return updated;
        }
        return prev;
      });
    }, 6000);
  };

  const handleUpdateConversation = (id: string, data: Partial<Conversation>) => {
    setConversations(prev => prev.map(c => 
      c.id === id ? { ...c, ...data } : c
    ));
  };

  const handleNewChat = () => {
    setIsActive(false);
    setActiveChatId(null);
    setInputText('');
    setIsSidebarOpen(false);
  };

  const handleNewRoleplay = () => {
    const newId = Math.random().toString(36).substring(7);
    const simConv: Conversation = {
      id: newId,
      title: 'TestDrive Session',
      messages: [],
      currentStep: 'entry',
      currentPath: null,
      isReady: false,
      unread: false,
      type: 'simulation',
    };
    setConversations(prev => [simConv, ...prev]);
    setActiveChatId(newId);
    setActiveView('operator');
    setIsActive(true);
    setIsSidebarOpen(false);
  };

  const handleSelectChat = (id: string) => {
    setActiveChatId(id);
    setIsActive(true);
    setIsSidebarOpen(false);
    // Clear unread and notifications for this chat
    setConversations(prev => prev.map(c => 
      c.id === id ? { ...c, unread: false, isReady: true } : c
    ));
    setNotifications(prev => prev.filter(n => n.chatId !== id));
  };

  const hasUnread = notifications.length > 0;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && inputText.trim()) {
      handleStart();
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#f4f4f4] overflow-hidden font-mono-io selection:bg-orange-200">
      <div className="relative mx-auto w-full max-w-[440px] h-screen bg-white shadow-2xl flex flex-col overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          recentChats={conversations.map(c => ({ id: c.id, title: c.title, unread: c.unread, isSimulation: c.type === 'simulation', channel: c.channel }))}
          onSelectChat={handleSelectChat}
          activeView={activeView}
          onViewChange={(view) => {
            setActiveView(view);
            if (view === 'operator') handleNewChat();
            if (view !== 'conversations') setDeepLinkConversationId(null);
            setIsSidebarOpen(false);
          }}
          onOpenConnections={() => {
            setActiveView('connections');
            setIsSidebarOpen(false);
          }}
        />

        <motion.main
          initial={false}
          animate={{ x: isSidebarOpen ? '256px' : 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="flex-1 h-full overflow-hidden bg-white relative z-30 shadow-[-10px_0_30px_rgba(0,0,0,0.05)]"
        >
          <div className="flex flex-col h-full relative">
            {/* Gradient background */}
            <motion.div 
              className="absolute inset-0 z-0 pointer-events-none"
              animate={{ 
                opacity: isActive ? 0 : 1,
                background: isActive 
                  ? 'rgb(255, 255, 255)' 
                  : 'linear-gradient(180deg, #FAFAFA 0%, #FAFAFA 47.59%, #B5E3FF 84.14%, #FFCEB8 98.02%)'
              }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                  <NinjoLogo />
                </div>
              )}
            </motion.div>

            {/* Header */}
            <header className="flex items-center justify-between px-6 h-14 shrink-0 z-10 relative">
              <button onClick={() => setIsSidebarOpen(prev => !prev)} className="flex items-center gap-4 p-1 hover:bg-zinc-100 transition-colors rounded-lg">
                {isSidebarOpen ? <ArrowLeft className="w-6 h-6 shrink-0" /> : <Menu className="w-6 h-6 shrink-0" />}
                {activeView !== 'operator' && (
                  <span className="font-['MD_IO'] text-[18px] leading-none uppercase tracking-tight text-black">
                    {activeView === 'conversations' ? 'Conversations' : activeView === 'reports' ? 'Reports' : activeView === 'amplify' ? 'Amplify' : activeView === 'all-chats' ? 'All Chats' : 'Agents'}
                  </span>
                )}
              </button>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleNewChat}
                  className="p-2 hover:bg-zinc-100 transition-colors rounded-full"
                >
                  <NewChatIcon className="w-[18px] h-[18px] text-black" />
                </button>
                <button 
                  onClick={() => setIsNotificationsOpen(true)}
                  className="p-2 hover:bg-zinc-100 transition-colors rounded-full relative"
                >
                  <Bell className="w-5 h-5 text-black" />
                  {hasUnread && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                  )}
                </button>
              </div>
            </header>

            <NotificationDrawer
              isOpen={isNotificationsOpen}
              onClose={() => setIsNotificationsOpen(false)}
              notifications={notifications}
              onSelectChat={handleSelectChat}
              onSelectInboxConversation={(id) => {
                setDeepLinkConversationId(id);
                setActiveView('conversations');
                setIsNotificationsOpen(false);
              }}
              onViewReportResult={(taskId) => {
                setAutoOpenResultTaskId(taskId);
                setActiveView('reports');
                setIsNotificationsOpen(false);
              }}
            />

            {/* Content */}
            <AnimatePresence mode="wait">
              {activeView === 'all-chats' ? (
                <motion.div
                  key="all-chats-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 h-full overflow-hidden relative"
                >
                  <AllChatsView
                    chats={conversations.map(c => ({ id: c.id, title: c.title, unread: c.unread, isSimulation: c.type === 'simulation' }))}
                    onSelectChat={(id) => { handleSelectChat(id); setActiveView('operator'); }}
                  />
                </motion.div>
              ) : activeView === 'amplify' ? (
                <motion.div
                  key="amplify-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 h-full overflow-hidden relative"
                >
                  <AmplifyView />
                </motion.div>
              ) : activeView === 'conversations' ? (
                <motion.div
                  key={`conversations-view-${deepLinkConversationId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 h-full overflow-hidden relative"
                >
                  <ConversationsInbox initialConversationId={deepLinkConversationId ?? undefined} />
                </motion.div>
              ) : activeView === 'reports' ? (
                <motion.div
                  key="reports-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 h-full overflow-hidden relative"
                >
                  <ReportsView
                    onViewConversation={(id) => {
                      if (id) setDeepLinkConversationId(id);
                      setActiveView('conversations');
                    }}
                    onGoToAmplify={() => setActiveView('amplify')}
                    onGoToTestDrive={handleNewRoleplay}
                    autoOpenResultTaskId={autoOpenResultTaskId}
                    onAutoOpenConsumed={() => setAutoOpenResultTaskId(null)}
                  />
                </motion.div>
              ) : !isActive ? (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex-1 flex flex-col relative z-10"
                >
                  {/* Welcome message */}
                  <div className="flex flex-col items-center justify-center px-6 pt-12 pb-8">
                    <h1 className="text-[25.91px] font-['MD_IO'] font-light leading-[30px] tracking-[-0.5182px] text-center max-w-[384px] text-black">
                      How will you make your business better today?
                    </h1>
                  </div>

                  {/* Suggestion cards (Manus structure) */}
                  <div className="flex-1 flex flex-col justify-end pb-4">
                    <div className="px-6 flex items-center justify-between mb-3">
                      <h2 className="text-[15px] font-gt-america font-medium text-[#585858]">Get started</h2>
                      <button className="text-[#a5a5a5] hover:text-black">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto no-scrollbar pb-2">
                      <div className="flex gap-3 px-6 w-max">
                        {suggestions.map((suggestion, idx) => (
                          <motion.button
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => {
                              if (suggestion.title === 'Generate brand content') {
                                handleStart('Generate a sequence of stories for my IG account');
                              } else {
                                handleStart(suggestion.title);
                              }
                            }}
                            className="bg-white border border-[#d9d9d9] rounded-[22px] p-4 flex items-center gap-3.5 text-left hover:border-zinc-400 transition-colors group shadow-sm w-[280px]"
                          >
                            <div className="w-[60px] h-[60px] rounded-xl overflow-hidden shrink-0 bg-zinc-100">
                              <ImageWithFallback 
                                src={suggestion.imageUrl}
                                alt={suggestion.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex flex-col gap-0.5 overflow-hidden">
                              <p className="text-[16px] font-gt-america font-semibold text-black leading-tight truncate">
                                {suggestion.title}
                              </p>
                              <p className="text-[12px] font-gt-america text-[#8e8e8e] leading-snug line-clamp-2">
                                {suggestion.description}
                              </p>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Input bar (Figma PromptBox Design) */}
                  <div className="px-6 pb-9 relative z-10">
                    <PromptBox
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onSend={() => handleStart()}
                      onKeyDown={handleKeyDown}
                      placeholder="Say hi to Ninjō to get started"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={activeChatId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-1 overflow-hidden relative"
                >
              {activeConversation && (
                    activeConversation.type === 'simulation' ? (
                      <RoleplayChat key={activeConversation.id} />
                    ) : (
                      <MetricsFlow
                        username={user?.username}
                        messages={activeConversation.messages}
                        currentStep={activeConversation.currentStep}
                        currentPath={activeConversation.currentPath}
                        firstMessage={activeConversation.messages.length === 0 ? activeConversation.title : ''}
                        onUpdate={(data) => handleUpdateConversation(activeConversation.id, data)}
                        hasOtherReadyChat={conversations.some(c => c.id !== activeChatId && c.unread)}
                        onNavigateToOther={() => {
                          const otherReady = conversations.find(c => c.id !== activeChatId && c.unread);
                          if (otherReady) handleSelectChat(otherReady.id);
                        }}
                      />
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.main>
      </div>
    </div>
  );
}