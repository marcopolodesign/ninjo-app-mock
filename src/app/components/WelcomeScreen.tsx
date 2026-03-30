import React from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-zc2zz9h8fn";
import { Plus, ArrowUp } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (text: string) => void;
  inputText: string;
  setInputText: (text: string) => void;
}

export function WelcomeScreen({ onStart, inputText, setInputText }: WelcomeScreenProps) {
  const [placeholder, setPlaceholder] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(100);

  const prefix = "I'm a ";
  const messages = [
    "chiropractor and I sell courses for...",
    "consultant and I sell strategy sessions for...",
    "digital creator focused on wellness and I sell courses for..."
  ];

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % messages.length;
      const fullSuffix = messages[i];
      const fullText = prefix + fullSuffix;

      if (isDeleting) {
        // Deleting characters
        if (placeholder === prefix) {
          // Finished deleting up to "I'm a ", move to next
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(100);
        } else {
          setPlaceholder(placeholder.substring(0, placeholder.length - 1));
          setTypingSpeed(40);
        }
      } else {
        // Typing characters
        if (placeholder === fullText) {
          // Finished typing, pause before deleting
          setTypingSpeed(2000); // Pause at end
          setIsDeleting(true);
        } else {
          setPlaceholder(fullText.substring(0, placeholder.length + 1));
          setTypingSpeed(100);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, loopNum, typingSpeed, messages]);

  const features = [
    { title: "Close sales", role: "AI DATA ANALYST", desc: "Close sales on autopilot, in your voice, running 24/7" },
    { title: "Publish brand", role: "AI CONTENT MANAGER", desc: "Tailor made graphics, using your brand DNA" },
    { title: "Advertise", role: "AI MEDIA BUYER", desc: "Create ads that convert, with AI-driven precision" },
    { title: "Analyze", role: "AI MEDIA BUYER", desc: "Understand buyer personas, funnels, and impacting audience" },
    { title: "Strategize", role: "AI MARKETING STRATEGIST", desc: "Mix metrics with content, leading to engaging content" },
    { title: "Write", role: "AI COPYWRITER", desc: "Write story sequences, posts, and entire campaigns" },
  ];

  return (
    <div className="flex flex-col gap-[30px] items-center justify-start pt-[60px] pb-[40px] px-6 relative w-full overflow-y-auto h-full scrollbar-hide">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 items-center text-center w-full">
        <p className="font-mono-io leading-normal text-[11px] text-black tracking-[-0.02em] uppercase opacity-60">
          Ninjo • ai growth operator
        </p>
        <p className="font-mono-io leading-[1.1] text-[32px] text-black tracking-[-0.05em] max-w-[300px]">
          Your AI Sales Team, built for creators
        </p>
        <p className="font-gt-america leading-relaxed text-[#585858] text-[16px] max-w-[340px] opacity-80">
          Your full AI team that scales creator businesses — from DMs to ads to content, on autopilot.
        </p>
      </div>

      {/* Prompt Container */}
      <motion.div 
        layoutId="prompt-box"
        className="bg-white relative rounded-[20px] w-full border border-orange-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-5 mt-4"
      >
        <div className="flex flex-col gap-[25px] items-start w-full">
          <input 
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && inputText.trim() && onStart(inputText)}
            placeholder={placeholder}
            className="font-gt-america text-[17px] text-black tracking-tight w-full bg-transparent outline-none placeholder:text-[#585858]/60"
          />
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-[10px] items-center">
              <div className="w-9 h-9 bg-zinc-50 rounded-full flex items-center justify-center border border-black/5 hover:bg-zinc-100 transition-colors cursor-pointer">
                <Plus className="w-5 h-5 text-black" />
              </div>
              <div className="bg-[#edeaea] px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors cursor-pointer">
                <p className="font-gt-america text-[15px] text-[#585858] tracking-tight">Ask mode</p>
              </div>
            </div>
            <button 
              onClick={() => inputText.trim() && onStart(inputText)}
              className="w-9 h-9 bg-zinc-200 rounded-full flex items-center justify-center transition-all hover:bg-black group"
            >
              <ArrowUp className="w-5 h-5 text-black group-hover:text-white" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-x-[12px] gap-y-[24px] w-full mt-6">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col gap-2.5 p-4 rounded-xl bg-gradient-to-b from-white/30 to-white border border-white/20 shadow-sm">
            <div className="flex flex-col">
              <p className="font-gt-america text-[19px] text-black tracking-tight leading-tight">{f.title}</p>
              <p className="font-mono-io text-[#a5a5a5] text-[10px] tracking-wider uppercase mt-0.5">{f.role}</p>
            </div>
            <p className="font-gt-america leading-snug text-[#585858] text-[12px] tracking-tight opacity-90">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
