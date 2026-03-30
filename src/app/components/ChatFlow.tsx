import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, ArrowUp, Menu, Bell, ThumbsUp, ThumbsDown, 
  RefreshCcw, Copy, Wifi, Battery, Smartphone 
} from 'lucide-react';
import { InstagramCard, ProfileArtifact, ServiceSelection, FinalArtifact, SuccessBanner, AnalysisLoader } from './Artifacts';
import { IndividualConv } from './IndividualConv';
import { AuthBottomSheet } from './AuthBottomSheet';
import { FullProfileBottomSheet } from './FullProfileBottomSheet';
import AgentConfigurationSheet from './AgentConfigurationSheet';
import { WelcomeScreen } from './WelcomeScreen';
import { NinjoLogo } from './NinjoLogo';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  id: string;
  type: 'agent' | 'user';
  content: string | React.ReactNode;
  step?: number;
}

interface ChatFlowProps {
  onToggleSidebar: () => void;
}

export function ChatFlow({ onToggleSidebar }: ChatFlowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isActive, setIsActive] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAgentConfigOpen, setIsAgentConfigOpen] = useState(false);
  const [forceTextInput, setForceTextInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isAuthenticated && currentStep === 1) {
      processNextStep(2);
    }
  }, [isAuthenticated, currentStep]);

  const addAgentMessage = (content: string | React.ReactNode, step: number) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Math.random().toString(), type: 'agent', content, step }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (content: string) => {
    if (!isActive) setIsActive(true);
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(), type: 'user', content }
    ]);
  };

  const onStartChat = (text: string) => {
    setInputText('');
    addUserMessage(text);
    setIsTyping(true);
    setTimeout(() => {
      addAgentMessage(
        "Hey! I'm Ninjō, your AI Growth Operator. I help Instagram creators build AI agents that handle their DMs automatically.\n\nWhat's your current DM situation like? Are you drowning in messages, missing leads, or spending too much time on repetitive conversations?",
        0
      );
    }, 800);
  };

  const handleSendText = () => {
    if (!inputText.trim()) return;

    const text = inputText;
    setInputText('');
    addUserMessage(text);
    
    if ([0, 2, 9, 10, 13, 15, 17].includes(currentStep)) {
      setAnswers(prev => ({ ...prev, [currentStep]: text }));
    }

    if (!isActive) {
      setIsTyping(true);
      setTimeout(() => {
        addAgentMessage(
          "Hey! I'm Ninjō, your AI Growth Operator. I help Instagram creators build AI agents that handle your DM's automatically.\n\nWhat's your current DM situation like? Are you drowning in messages, missing leads, or spending too much time on repetitive conversations?",
          0
        );
      }, 800);
    } else {
      processNextStep(currentStep + 1);
    }
  };

  const handleChipSelect = (text: string) => {
    if (text === "Other" || text === "Type my own") {
      setForceTextInput(true);
      return;
    }
    addUserMessage(text);
    if ([0, 5, 7, 8, 9, 13, 17].includes(currentStep)) {
      setAnswers(prev => ({ ...prev, [currentStep]: text }));
    }
    processNextStep(currentStep + 1);
  };

  const processNextStep = (nextStep: number) => {
    setCurrentStep(nextStep);
    setForceTextInput(false);
    setInputText('');

    switch (nextStep) {
      case 1:
        addAgentMessage(
          <>
            Too many DMs, not enough hours in the day — classic growth bottleneck.
            <br /><br />
            I build AI agents that handle your Instagram DMs 24/7. They qualify leads, answer questions, and book calls using your exact voice and approach. Most creators see 80% fewer manual DMs within the first week.
            <br /><br />
            Want to build it now? You need an account — click the button that just appeared below. You'll get an activation link by email. When you're in, let me know.
          </>,
          1
        );
        break;
      case 2:
        addAgentMessage("Perfect. What's your Instagram account? Let's get started!", 2);
        break;
      case 3:
        const handle = answers[2] || "@youraccount";
        addAgentMessage(
          <>
            Got it! I've just scanned <strong>{handle}</strong>. 
            <br /><br />
            You have a solid aesthetic and your engagement with followers seems very high in recent posts. I can already see a clear educational pattern in your captions.
            <br /><br />
            Now, connect your Instagram account so I can do a deep dive into your content and style to build your custom Setter.
          </>, 
          3
        );
        break;
      case 4:
        addAgentMessage(
          <>
            Perfect! I've already analyzed your account. Here's a summary — edit anything you need and hit confirm.
            <br /><br />
            To view your full profile, please <span className="text-[#006CD2] underline cursor-pointer" onClick={() => setIsProfileOpen(true)}>click here</span>
          </>, 
          4
        );
        break;
      case 5:
        addAgentMessage("What is your main goal with Ninjō?", 5);
        break;
      case 6:
        addAgentMessage("Now tell me, what would you like to use Ninjō for?", 6);
        break;
      case 7:
        addAgentMessage("Great! Your AI Setter will close sales for you 🤖 What's the primary objective?", 7);
        break;
      case 8:
        addAgentMessage(
          <>
            On your IG posts and comments you sound <strong>Direct, Motivational and Educational</strong>, should we continue like this or change the approach?
          </>, 
          8
        );
        break;
      case 9:
        addAgentMessage("Do you have any key links the Setter should share ... Or should we create them for you?", 9);
        break;
      case 10:
        addAgentMessage("Tell me briefly what you sell, so the Setter understands.", 10);
        break;
      case 11:
        addAgentMessage("All done! I have everything I need to set up your Ninjō. 🎉", 11);
        setTimeout(() => {
          addAgentMessage(
            <>
              Your AI Growth Operator is ready to operate. 
              <br /><br />
              -&gt; to view full agent configuration, please <span className="text-[#006CD2] underline cursor-pointer" onClick={() => setIsAgentConfigOpen(true)}>click here</span>
            </>, 
            11.5
          );
        }, 1500);
        break;
      case 13:
        addAgentMessage("All DMs, or only when someone sends a specific keyword?", 13);
        break;
      case 14:
        addAgentMessage("Name for the agent? Default is '@marcopolo.agency - AI Agent'", 14);
        setTimeout(() => {
           addUserMessage("@marcopolo.agency - AI Agent");
           processNextStep(15);
        }, 1500);
        break;
      case 16:
        addAgentMessage(`Activating with: All DMs, name '@marcopolo.agency - AI Agent'. Confirm?`, 16);
        break;
      case 18:
        addAgentMessage("Your AI Growth Operator has been deployed! 🚀 It is now live and handling your DMs.", 18);
        break;
      default:
        break;
    }
  };

  const isInputEnabled = ([0, 2, 8, 9, 10, 13, 14, 17].includes(currentStep) || forceTextInput || !isActive) && !isTyping;
  const showChipsInInput = [0, 5, 6, 7, 8, 9, 13, 16].includes(currentStep) && isActive && !isTyping && !forceTextInput;

  const getChipOptions = () => {
    switch (currentStep) {
      case 0: return ["Drowning in messages", "Missing leads", "Repetitive conversations"];
      case 5: return ["Close more sales via DMs", "Get brand deals", "Grow my community", "All of the above"];
      case 6: return ["Scale my business", "Create my AI Setter", "Run ads", "Create content", "Full Growth Partner"];
      case 7: return ["Book calls", "Sell directly in DMs", "Send to checkout link"];
      case 8: return ["Continue like me", "Professional & formal", "Friendly & conversational", "Direct & urgent", "Other"];
      case 9: return ["Create Calendly", "Type my own"];
      case 13: return ["All DMs", "Only specific keywords"];
      case 16: return ["Confirm", "Edit settings"];
      default: return [];
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen font-mono-io relative overflow-hidden bg-[#fafafa]">
      <AnimatePresence>
        {isAuthOpen && (
          <div key="auth-wrapper" className="absolute inset-0 z-[100]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAuthOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.8 }}
              className="absolute inset-x-0 bottom-0 z-[101] bg-white rounded-t-[40px] shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
            >
              <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mt-4 mb-2 shrink-0" />
              <AuthBottomSheet 
                onConfirm={() => {
                  setIsAuthenticated(true);
                  setIsAuthOpen(false);
                  setMessages((prev) => [
                    ...prev,
                    { 
                      id: Math.random().toString(), 
                      type: 'agent', 
                      content: <SuccessBanner message="ACCOUNT CREATED SUCCESSFULLY!" /> 
                    }
                  ]);
                }} 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isProfileOpen && (
          <div key="profile-wrapper" className="absolute inset-0 z-[100]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProfileOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.8 }}
              className="absolute inset-x-0 bottom-0 z-[101] bg-white rounded-t-[40px] shadow-2xl flex flex-col h-[90vh] overflow-hidden"
            >
              <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mt-4 mb-2 shrink-0" />
              <div className="flex-1 overflow-y-auto">
                <FullProfileBottomSheet username={answers[2] || "@Lic.Juanmahuss"} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAgentConfigOpen && (
          <div key="agent-config-wrapper" className="absolute inset-0 z-[100]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAgentConfigOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.8 }}
              className="absolute inset-x-0 bottom-0 z-[101] bg-white rounded-t-[40px] shadow-2xl flex flex-col h-[90vh] overflow-hidden"
            >
              <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mt-4 mb-2 shrink-0" />
              <div className="flex-1 overflow-y-auto">
                <AgentConfigurationSheet username={answers[2] || "@Lic.Juanmahuss"} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTestOpen && (
          <div key="test-wrapper" className="absolute inset-0 z-[100]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTestOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.8 }}
              className="absolute inset-x-0 bottom-0 z-[101] bg-white rounded-t-[40px] shadow-2xl flex flex-col h-[80vh] overflow-hidden"
            >
              <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mt-4 mb-2 shrink-0" />
              <IndividualConv 
                onClose={() => setIsTestOpen(false)} 
                agentName={answers[2] || "@youraccount"}
                goal={answers[7] || "help you grow"}
                tone={answers[8] || "professional"}
                product={answers[10] || "services"}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ 
          opacity: isActive ? 0 : 1,
          background: isActive 
            ? "rgb(255, 255, 255)" 
            : "linear-gradient(180deg, #FAFAFA 0%, #FAFAFA 47.59%, #B5E3FF 84.14%, #FFCEB8 98.02%)"
        }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
         {!isActive && (
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
             <span className="text-[280px] font-bold">N</span>
           </div>
         )}
      </motion.div>

      <header className="flex items-center justify-between px-6 h-14 shrink-0 z-10 relative">
        {!isAuthenticated ? (
          <>
            <div className="p-1">
              <NinjoLogo />
            </div>
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="bg-black text-white px-5 py-2 rounded-full text-[14px] font-gt-america"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <button onClick={onToggleSidebar} className="p-1 hover:bg-zinc-100 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
               <div className="bg-[#EBEBEB] px-3 py-1.5 rounded-sm">
                 <span className="text-[10px] tracking-[0.15em] uppercase text-black font-mono-io">DAILY GROWTH REPORT</span>
               </div>
               <Bell className="w-5 h-5 text-black" />
            </div>
          </>
        )}
      </header>

      <div className={cn(
        "flex-1 overflow-y-auto z-10 relative transition-all duration-500",
        isActive ? (showChipsInInput ? "p-6 pb-[480px]" : "p-6 pb-44") : "p-0"
      )}>
        <AnimatePresence mode="wait">
          {!isActive && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-full"
            >
              <WelcomeScreen 
                onStart={onStartChat} 
                inputText={inputText}
                setInputText={setInputText}
              />
            </motion.div>
          )}

          {isActive && (
            <div key="chat" className="space-y-8">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex flex-col w-full",
                    msg.type === 'user' ? "items-end" : "items-start"
                  )}
                >
                  {msg.type === 'user' ? (
                    <div className="bg-[#FF8F40] text-white px-5 py-3.5 rounded-[20px] text-[16px] font-gt-america font-medium max-w-[85%]">
                      {msg.content}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 w-full">
                      <div className={cn(
                        "text-[16px] text-black font-mono-io leading-[1.6] max-w-[90%]",
                        typeof msg.content === 'string' && "whitespace-pre-wrap"
                      )}>
                        {msg.content}
                      </div>
                      
                      {typeof msg.content === 'string' && (
                        <div className="flex items-center gap-5 text-zinc-300">
                          <ThumbsUp className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                          <ThumbsDown className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                          <RefreshCcw className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                          <Copy className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                        </div>
                      )}
                    </div>
                  )}

                  {msg.type === 'agent' && (
                    <div className="w-full mt-4">
                      {msg.step === 1 && currentStep === 1 && (
                        <InstagramCard variant="account" onConnect={() => {
                          if (!isAuthenticated) {
                            setIsAuthOpen(true);
                          } else {
                            processNextStep(2);
                          }
                        }} />
                      )}

                      {msg.step === 2 && currentStep === 2 && (
                        <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono-io mt-2 pl-1">
                          Type your @handle below
                        </div>
                      )}

                      {msg.step === 3 && currentStep === 3 && (
                        <InstagramCard onConnect={() => {
                          addUserMessage("Ready, account connected");
                          setMessages((prev) => [
                            ...prev,
                            { 
                              id: Math.random().toString(), 
                              type: 'agent', 
                              content: <AnalysisLoader onComplete={() => processNextStep(4)} /> 
                            }
                          ]);
                        }} />
                      )}

                      {msg.step === 4 && currentStep === 4 && (
                        <ProfileArtifact 
                          username={answers[2] || "@youraccount"} 
                          onConfirm={() => {
                            addUserMessage(`Profile confirmed: ${answers[2] || "@youraccount"}`);
                            processNextStep(5);
                          }} 
                        />
                      )}
                      
                      {msg.step === 11.5 && (
                        <FinalArtifact
                          username={answers[2] || "@youraccount"}
                          goal={answers[7] || "Not specified"}
                          tone={answers[8] || "Not specified"}
                          product={answers[10] || "Not specified"}
                          onTest={() => setIsTestOpen(true)}
                          onDeploy={() => {
                            addUserMessage("Deploy");
                            processNextStep(13);
                          }}
                        />
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
        
        {isActive && isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-normal uppercase tracking-widest pl-1 mt-6"
          >
            Thinking
            <motion.span animate={{ opacity: [0.1, 1, 0.1] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
            <motion.span animate={{ opacity: [0.1, 1, 0.1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>.</motion.span>
            <motion.span animate={{ opacity: [0.1, 1, 0.1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>.</motion.span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {isActive && (
        <div className="absolute bottom-10 left-0 w-full px-6 z-20">
          <motion.div 
            layoutId="prompt-box"
            className="bg-white relative rounded-[24px] border border-[#F0F0F0] shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {showChipsInInput ? (
                <motion.div 
                  key="chips"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-5 flex flex-col gap-2"
                >
                  {getChipOptions().map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleChipSelect(opt)}
                      className="w-full bg-zinc-50 hover:bg-zinc-100 text-black border border-black/5 py-4 px-4 rounded-xl text-sm font-mono-io font-normal transition-all text-left flex items-center justify-between group"
                    >
                      <span>{opt}</span>
                      <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <Plus className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  ))}
                  {currentStep === 0 && (
                    <div className="text-[10px] text-zinc-400 font-normal uppercase tracking-widest text-center mt-2">
                      OR TYPE YOUR OWN BELOW
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div 
                  key="input"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-5 flex flex-col gap-[25px]"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && isInputEnabled && handleSendText()}
                    placeholder={
                      currentStep === 2 
                        ? "Please add your @handle" 
                        : isActive ? "Ask mode..." : "Say hi to Ninjō to get started..."
                    }
                    disabled={!isInputEnabled}
                    className="w-full bg-transparent text-[17px] font-gt-america text-zinc-900 outline-none placeholder:text-zinc-400 tracking-tight"
                  />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="w-9 h-9 flex items-center justify-center bg-zinc-50 rounded-full hover:bg-zinc-100 border border-black/5 transition-colors">
                         <Plus className="w-5 h-5 text-black" />
                      </button>
                      <div className="bg-[#edeaea] px-4 py-1.5 rounded-full flex items-center gap-2">
                        <span className="text-[15px] font-gt-america text-[#585858] tracking-tight">Ask mode</span>
                      </div>
                    </div>

                    <button
                      onClick={() => isInputEnabled && handleSendText()}
                      disabled={!isInputEnabled || !inputText.trim()}
                      className={cn(
                        "w-9 h-9 flex items-center justify-center rounded-full transition-all shadow-sm",
                        isInputEnabled && inputText.trim() ? "bg-black text-white" : "bg-zinc-200 text-zinc-400"
                      )}
                    >
                      <ArrowUp className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
}
