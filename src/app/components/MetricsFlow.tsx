import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Plus, ThumbsUp, ThumbsDown, RefreshCcw, Copy, Bell, ArrowRight } from 'lucide-react';
import { MetricsSummary, PostPerformance, PostPreviewCard, ContentSuggestion } from './MetricsArtifact';
import { StorySequenceModal } from './StorySequenceArtifact';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PromptBox } from './PromptBox';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Message {
  id: string;
  type: 'agent' | 'user';
  content: string | React.ReactNode;
  step?: string;
}

export type PathType = 'A' | 'B' | 'C' | null;
export type StepType = 
  | 'entry'
  | 'A1' | 'A2' | 'A2B' | 'A2C'
  | 'B1' | 'B2' | 'B3A' | 'B3B' | 'B3C' | 'B3D'
  | 'C1' | 'C2' | 'C3';

interface MetricsFlowProps {
  username?: string;
  firstMessage?: string;
  messages: Message[];
  currentPath: PathType;
  currentStep: StepType;
  onUpdate: (data: { messages: Message[], currentPath: PathType, currentStep: StepType }) => void;
  hasOtherReadyChat?: boolean;
  onNavigateToOther?: () => void;
}

export function MetricsFlow({ 
  username = '@yourbusiness', 
  firstMessage = '',
  messages,
  currentPath,
  currentStep,
  onUpdate,
  hasOtherReadyChat,
  onNavigateToOther
}: MetricsFlowProps) {
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(!!firstMessage && messages.length === 0);
  const [inputText, setInputText] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);
  const [artifactShown, setArtifactShown] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [activeStories, setActiveStories] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // No longer adding artifact as a message
  useEffect(() => {
    if (hasOtherReadyChat && !artifactShown && messages.length >= 3) {
      setArtifactShown(true);
    }
  }, [hasOtherReadyChat, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Show first user message if provided and no messages exist yet
    if (firstMessage && messages.length === 0) {
      setIsInitialLoading(true);
      const initialUserMsg: Message = {
        id: Math.random().toString(),
        type: 'user',
        content: firstMessage
      };
      onUpdate({
        messages: [initialUserMsg],
        currentPath,
        currentStep
      });
      // Process the first message to identify intent
      setTimeout(() => {
        processFlow(firstMessage, [initialUserMsg], currentStep, currentPath);
        setIsInitialLoading(false);
      }, 400); 
    } else if (messages.length === 0) {
      setIsInitialLoading(false);
      // Show entry message on mount if no messages
      setTimeout(() => {
        addAgentMessage("What would you like to review today?", 'entry', [], 'entry', null);
      }, 500);
    }
  }, [firstMessage]);

  const addAgentMessage = (content: string | React.ReactNode, step: string, currentMsgs: Message[], stepVal: StepType, pathVal: PathType) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMsgs: Message[] = [
        ...currentMsgs,
        { id: Math.random().toString(), type: 'agent', content, step }
      ];
      onUpdate({
        messages: newMsgs,
        currentStep: stepVal,
        currentPath: pathVal
      });
      setIsTyping(false);
    }, 1200);
  };

  const addUserMessage = (content: string) => {
    const newMsgs: Message[] = [
      ...messages,
      { id: Math.random().toString(), type: 'user', content }
    ];
    onUpdate({
      messages: newMsgs,
      currentStep,
      currentPath
    });
    return newMsgs;
  };

  const handleChipSelect = (text: string) => {
    if (text === 'Other...') {
      setShowManualInput(true);
      return;
    }
    const updatedMsgs = addUserMessage(text);
    processFlow(text, updatedMsgs, currentStep, currentPath);
    setShowManualInput(false);
  };

  const processFlow = (userInput: string, currentMsgs: Message[], step: StepType, path: PathType) => {
    const text = userInput.toLowerCase();
    setShowManualInput(false); 
    
    let nextStep = step;
    let nextPath = path;

    // Entry point logic - Identify intent
    if (step === 'entry') {
      const isYesterday = text.includes('yesterday') || text.includes('metrics') || text.includes('last day');
      const isLastPost = text.includes('post') || text.includes('performance') || text.includes('latest');
      const isStorySequence = text.includes('story') || text.includes('brand content') || text.includes('sequence');

      if (isYesterday) {
        nextPath = 'A';
        nextStep = 'A1';
        addAgentMessage('Checking your account... one second.', 'A1-typing', currentMsgs, nextStep, nextPath);
        setTimeout(() => {
          const updatedWithResult: Message[] = [
            ...currentMsgs,
            {
              id: Math.random().toString(),
              type: 'agent',
              content: <MetricsSummary username={username} />,
              step: 'A1'
            }
          ];
          onUpdate({
            messages: updatedWithResult,
            currentPath: nextPath,
            currentStep: nextStep
          });
          setTimeout(() => {
            addAgentMessage('Would you like to dive deeper into anything specific?', 'A1-followup', updatedWithResult, nextStep, nextPath);
          }, 500);
        }, 1500);
      } else if (isLastPost) {
        nextPath = 'B';
        nextStep = 'B1';
        addAgentMessage('Looking for your last post... one second.', 'B1-typing', currentMsgs, nextStep, nextPath);
        setTimeout(() => {
          const updatedWithResult: Message[] = [
            ...currentMsgs,
            {
              id: Math.random().toString(),
              type: 'agent',
              content: <PostPreviewCard />,
              step: 'B1'
            }
          ];
          onUpdate({
            messages: updatedWithResult,
            currentPath: nextPath,
            currentStep: nextStep
          });
          setTimeout(() => {
            addAgentMessage('Is this the one?', 'B1-confirm', updatedWithResult, nextStep, nextPath);
          }, 500);
        }, 1500);
      } else if (isStorySequence) {
        nextPath = 'C';
        nextStep = 'C1';
        addAgentMessage('Analyzing your recent performance to identify high-intent topics... one second.', 'C1-typing', currentMsgs, nextStep, nextPath);
        
        const mockStories = [
          {
            id: '1',
            label: 'HOOK',
            content: "Your SaaS has users but nobody's paying?\n\nThe problem isn't your product.\nIt's that you're selling features when you should be selling transformation.",
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
            type: 'default'
          },
          {
            id: '2',
            label: 'EXPLICACIÓN',
            content: "Here's what's happening:\n\nYou're showing 3 tiers with 47 features listed.\nYour visitor spends 8 seconds, gets overwhelmed, and leaves.\n\nDecision fatigue kills conversions.",
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=400',
            type: 'default'
          },
          {
            id: '3',
            label: 'GIRO',
            content: "The companies crushing it?\n\nThey're not selling plans.\nThey're selling identities.\n\n\"Starter\" = meh\n\"For growing teams\" = I'm growing ✨",
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400',
            type: 'default'
          },
          {
            id: '4',
            label: 'OPORTUNIDAD',
            content: "New rule: One clear recommendation.\n\nAdd a \"Most popular\" badge.\nRemove 60% of feature comparisons.\nMake ONE plan impossible to ignore.\n\nChoice paralysis solved.",
            imageUrl: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&q=80&w=400',
            type: 'default'
          },
          {
            id: '5',
            label: 'CTA',
            content: "I'll audit your pricing page for free.\n\nDM me \"PRICING\" + your URL and I'll send you a 3-minute Loom with exactly what's killing your conversions.\n\nDoing 5 this week 👆",
            imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=400',
            type: 'default'
          }
        ];

        setTimeout(() => {
          const updatedWithResult: Message[] = [
            ...currentMsgs,
            {
              id: Math.random().toString(),
              type: 'agent',
              content: "I've drafted a 5-story sequence based on your most saved content from last week. This sequence is designed to move users from education to conversion.",
              step: 'C1-text'
            }
          ];
          onUpdate({
            messages: updatedWithResult,
            currentPath: nextPath,
            currentStep: nextStep
          });
          
          setActiveStories(mockStories);
          setTimeout(() => {
            setIsStoryModalOpen(true);
          }, 1000);

          setTimeout(() => {
            addAgentMessage('What do you think? I can approve and schedule them for you.', 'C1-followup', updatedWithResult, nextStep, nextPath);
          }, 1500);
        }, 2000);
      } else {
        addAgentMessage("I can help you analyze your business. What would you like to review today?", 'entry', currentMsgs, 'entry', null);
      }
    }
    // PATH C steps
    else if (step === 'C1') {
      if (text.includes('approve') || text.includes('schedule')) {
        nextStep = 'C2';
        addAgentMessage('Scheduling your sequence for Friday at 10:00 AM. I\'ll notify you when it\'s live! 🚀', 'C2', currentMsgs, nextStep, nextPath);
      } else if (text.includes('discard')) {
        nextStep = 'C3';
        addAgentMessage('Sequence discarded. Let me know if you want to try a different topic.', 'C3', currentMsgs, nextStep, nextPath);
      }
    }
    // PATH A steps
    else if (step === 'A1') {
      if (text.includes('saves') || text.includes('bookmarks')) {
        nextStep = 'A2';
        addAgentMessage(
          "High saves usually indicate educational content or something with practical value — something people want to see again. Yesterday you published an educational carousel. This format tends to generate more saves than likes because it solves a specific problem.\n\nTip: create more of this format this week.",
          'A2',
          currentMsgs,
          nextStep,
          nextPath
        );
      } else if (text.includes('publish') || text.includes('today') || text.includes('post today')) {
        nextStep = 'A2B';
        addAgentMessage('Based on your recent best performance, today you should publish:', 'A2B-intro', currentMsgs, nextStep, nextPath);
        setTimeout(() => {
          const updatedWithResult: Message[] = [
            ...currentMsgs,
            {
              id: Math.random().toString(),
              type: 'agent',
              content: <ContentSuggestion />,
              step: 'A2B'
            }
          ];
          onUpdate({
            messages: updatedWithResult,
            currentPath: nextPath,
            currentStep: nextStep
          });
          setTimeout(() => {
            addAgentMessage('Would you like me to draft the full script?', 'A2B-followup', updatedWithResult, nextStep, nextPath);
          }, 500);
        }, 1500);
      } else if (text.includes('best') || text.includes('top') || text.includes('popular')) {
        nextStep = 'A2C';
        addAgentMessage('Your best post from yesterday was:', 'A2C-intro', currentMsgs, nextStep, nextPath);
        setTimeout(() => {
          const updatedWithResult: Message[] = [
            ...currentMsgs,
            {
              id: Math.random().toString(),
              type: 'agent',
              content: (
                <div className="bg-white border border-zinc-200 rounded-xl p-4 space-y-3">
                  <div className="w-full aspect-square bg-zinc-100 rounded-lg flex items-center justify-center">
                    <span className="text-zinc-400 text-sm">Post preview</span>
                  </div>
                  <p className="text-sm text-zinc-600 line-clamp-2">
                    5 proven strategies to scale your business...
                  </p>
                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span>Reach 3,240</span>
                    <span>Saves 38</span>
                    <span>Engagement 6.2%</span>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-full inline-block">
                    <span className="text-xs font-medium">🏆 Top post of the day</span>
                  </div>
                </div>
              ),
              step: 'A2C'
            }
          ];
          onUpdate({
            messages: updatedWithResult,
            currentPath: nextPath,
            currentStep: nextStep
          });
          setTimeout(() => {
            addAgentMessage('Would you like to replicate this format?', 'A2C-followup', updatedWithResult, nextStep, nextPath);
          }, 500);
        }, 1500);
      }
    }
    // PATH B steps
    else if (step === 'B1') {
      if (text.includes('yes') || text.includes('yeah') || text.includes('yep')) {
        nextStep = 'B2';
        addAgentMessage('Here is the full analysis:', 'B2-intro', currentMsgs, nextStep, nextPath);
        setTimeout(() => {
          const updatedWithResult: Message[] = [
            ...currentMsgs,
            {
              id: Math.random().toString(),
              type: 'agent',
              content: <PostPerformance username={username} />,
              step: 'B2'
            }
          ];
          onUpdate({
            messages: updatedWithResult,
            currentPath: nextPath,
            currentStep: nextStep
          });
          setTimeout(() => {
            addAgentMessage('What would you like to do with this?', 'B2-followup', updatedWithResult, nextStep, nextPath);
          }, 500);
        }, 1500);
      }
    }
    else if (step === 'B2') {
      if (text.includes('why') || text.includes('how')) {
        nextStep = 'B3A';
        addAgentMessage(
          "Three reasons why this post worked:\n\n1. The hook in the first line generates curiosity before the 'see more'\n2. The carousel format makes people swipe — more time on the post, better distribution\n3. The topic is specific and actionable — that's why people save it",
          'B3A',
          currentMsgs,
          nextStep,
          nextPath
        );
      } else if (text.includes('similar') || text.includes('another')) {
        nextStep = 'B3B';
        addAgentMessage("I'll replicate the format. Tell me the topic and I'll draft it.", 'B3B', currentMsgs, nextStep, nextPath);
      } else if (text.includes('boost') || text.includes('ad')) {
        nextStep = 'B3C';
        addAgentMessage('This post has great engagement — it is an ideal candidate for boosting. What is your goal?', 'B3C', currentMsgs, nextStep, nextPath);
      } else if (text.includes('next') || text.includes('future')) {
        nextStep = 'B3D';
        addAgentMessage('Based on this post and your audience, the next one should be:', 'B3D-intro', currentMsgs, nextStep, nextPath);
        setTimeout(() => {
          const updatedWithResult: Message[] = [
            ...currentMsgs,
            {
              id: Math.random().toString(),
              type: 'agent',
              content: <ContentSuggestion />,
              step: 'B3D'
            }
          ];
          onUpdate({
            messages: updatedWithResult,
            currentPath: nextPath,
            currentStep: nextStep
          });
        }, 1500);
      }
    }
    // Handle text input for B3B
    else if (step === 'B3B' && userInput.trim()) {
      addAgentMessage('Perfect. Here is your script:', 'B3B-result', currentMsgs, nextStep, nextPath);
      setTimeout(() => {
        const updatedWithResult: Message[] = [
          ...currentMsgs,
          {
            id: Math.random().toString(),
            type: 'agent',
            content: (
              <div className="bg-white border border-zinc-200 rounded-xl p-5 space-y-3">
                <div className="space-y-2">
                  <div className="bg-zinc-50 p-3 rounded-lg">
                    <p className="text-xs text-zinc-500 mb-1">Slide 1: Hook</p>
                    <p className="text-sm">"Did you know that 80% of entrepreneurs..."</p>
                  </div>
                  <div className="bg-zinc-50 p-3 rounded-lg">
                    <p className="text-xs text-zinc-500 mb-1">Slides 2-4: Development</p>
                    <p className="text-sm">Key points about: {userInput}</p>
                  </div>
                  <div className="bg-zinc-50 p-3 rounded-lg">
                    <p className="text-xs text-zinc-500 mb-1">Slide 5: CTA</p>
                    <p className="text-sm">"Save this post to apply it later..."</p>
                  </div>
                </div>
              </div>
            ),
            step: 'B3B-final'
          }
        ];
        onUpdate({
          messages: updatedWithResult,
          currentPath: nextPath,
          currentStep: nextStep
        });
      }, 1500);
    }
  };

  const handleSendText = () => {
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    const updatedMsgs = addUserMessage(text);
    processFlow(text, updatedMsgs, currentStep, currentPath);
    setShowManualInput(false);
  };

  const getChipOptions = (): string[] => {
    let options: string[] = [];
    switch (currentStep) {
      case 'entry':
        options = ["📊 Yesterday's metrics", "📸 How was my last post?"];
        break;
      case 'A1':
        options = ['Why did saves increase?', 'What to publish today?', 'See top performing post'];
        break;
      case 'A2':
        options = ['What to publish this week?'];
        break;
      case 'A2B':
        options = ['Yes, draft it', 'I prefer another topic'];
        break;
      case 'A2C':
        options = ['Yes, create similar', 'No, see something else'];
        break;
      case 'B1':
        options = ['Yes, that is the one', 'No, show me the previous one'];
        break;
      case 'B2':
        options = ['Why did it work?', 'Create a similar post', 'Boost with an ad', 'See suggested next post'];
        break;
      case 'B3A':
        options = ['Create another with a different topic'];
        break;
      case 'B3C':
        options = ['Get more followers', 'Generate link traffic', 'Get direct messages'];
        break;
      case 'C1':
        options = ['Approve & Schedule', 'Discard'];
        break;
      default:
        options = [];
        break;
    }

    if (options.length > 0) {
      return [...options, 'Other...'];
    }
    return [];
  };

  const showChips = 
    getChipOptions().length > 0 && 
    !isTyping;

  const showTextInput = true; // Always show free-text prompt box

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-6 pb-44 space-y-6">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'flex flex-col w-full',
              msg.type === 'user' ? 'items-end' : 'items-start'
            )}
          >
            {msg.type === 'user' ? (
              <div className="bg-[#FF8F40] text-white px-5 py-3.5 rounded-[20px] text-[16px] font-gt-america font-medium max-w-[85%]">
                {msg.content}
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-full max-w-[90%]">
                {/* Agent Message Content */}
                <div className="flex flex-col gap-4">
                  {typeof msg.content === 'string' ? (
                    <>
                      <div className="text-[16px] text-black font-mono-io leading-[1.6] whitespace-pre-wrap">
                        {msg.content}
                      </div>
                      <div className="flex items-center gap-5 text-zinc-300">
                        <ThumbsUp className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                        <ThumbsDown className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                        <RefreshCcw className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                        <Copy className="w-[18px] h-[18px] cursor-pointer hover:text-black transition-colors" />
                      </div>
                    </>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-normal uppercase tracking-widest pl-1"
          >
            Thinking
            <motion.span animate={{ opacity: [0.1, 1, 0.1] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
            <motion.span animate={{ opacity: [0.1, 1, 0.1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>.</motion.span>
            <motion.span animate={{ opacity: [0.1, 1, 0.1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>.</motion.span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input bar and Options */}
      <div className="absolute bottom-10 left-0 w-full px-6 z-20 flex flex-col gap-3">
        {/* Persistent "Other chat ready" artifact above inputs */}
        <AnimatePresence>
          {artifactShown && hasOtherReadyChat && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-orange-50 border border-orange-200 rounded-[24px] p-4 flex items-center justify-between gap-4 w-full shadow-lg"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Bell className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <p className="text-[14px] font-gt-america font-medium text-black truncate">
                    Your other conversation is ready
                  </p>
                  <p className="text-[12px] font-gt-america text-[#8e8e8e]">
                    Switch to view the analysis results.
                  </p>
                </div>
              </div>
              <button 
                onClick={onNavigateToOther}
                className="size-10 rounded-full bg-white flex items-center justify-center border border-[#d9d9d9] hover:border-black transition-all shrink-0 shadow-sm"
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Horizontal Chips / Options */}
        <AnimatePresence>
          {showChips && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex gap-2 overflow-x-auto no-scrollbar pb-1"
            >
              {getChipOptions().filter(opt => opt !== 'Other...').map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChipSelect(opt)}
                  className="whitespace-nowrap bg-white border border-[#d9d9d9] hover:border-black/20 text-[#585858] hover:text-black px-4 py-2 rounded-full text-[14px] font-gt-america transition-all shadow-sm flex items-center gap-2"
                >
                  {opt}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <PromptBox
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onSend={handleSendText}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey && !isTyping && inputText.trim()) {
              handleSendText();
            }
          }}
          placeholder="Ask anything or use an option above..."
          disabled={isTyping}
        />
      </div>

      <StorySequenceModal 
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        title="Friday 23 - IG Story sequence"
        stories={activeStories}
        onApprove={() => handleChipSelect('Approve & Schedule')}
        onDiscard={() => {
          setIsStoryModalOpen(false);
          handleChipSelect('Discard');
        }}
      />
    </div>
  );
}
