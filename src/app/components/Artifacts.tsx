import React, { useState, useEffect } from 'react';
import { 
  Instagram, Rocket, Bot, Megaphone, Palette, Zap, 
  ArrowRight, Pencil, MessageSquare, Send, Check, ChevronRight,
  User, Search, PenTool, Workflow, Target, Sparkles, Loader2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Common layout wrapper for the "Tech/Structured" artifacts.
 * Based on the Frame1567 design.
 */
interface TechContainerProps {
  title: string;
  children: React.ReactNode;
  footerButton?: {
    label: string;
    onClick: () => void;
    color?: string;
  };
}

export function TechContainer({ title, children, footerButton }: TechContainerProps) {
  return (
    <div className="bg-[#F5F5F5] rounded-[12px] w-full overflow-hidden flex flex-col font-mono-io mt-2">
      {/* Header */}
      <div className="px-3 pt-4 pb-2">
        <p className="text-[15px] tracking-tight text-black">{title}</p>
      </div>

      {/* Main Content Card */}
      <div className="p-2.5">
        <div className="bg-white rounded-[8px] p-5 flex flex-col gap-4 shadow-sm border border-black/[0.03]">
          {children}
        </div>
      </div>

      {/* Footer Button */}
      {footerButton && (
        <button 
          onClick={footerButton.onClick}
          className={cn(
            "w-full py-4 text-center text-[13px] font-medium tracking-tight uppercase transition-all",
            footerButton.color === 'blue' ? "bg-[#006CD2] text-white hover:bg-[#005bb3]" : "bg-black text-white hover:bg-zinc-800"
          )}
        >
          {footerButton.label}
        </button>
      )}
    </div>
  );
}

export function SuccessBanner({ message = "ACCOUNT CREATED SUCCESSFULLY!" }: { message?: string }) {
  return (
    <div className="flex items-center gap-[7px] py-2 px-1">
      <div className="shrink-0">
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.416554 3.06121L2.53234 5.17691L7.29269 0.416562" stroke="#18A805" strokeWidth="1.17822" />
        </svg>
      </div>
      <p className="font-mono-io font-normal text-[#18A805] text-[10px] uppercase tracking-tight whitespace-nowrap">
        {message}
      </p>
    </div>
  );
}

export function AnalysisLoader({ onComplete }: { onComplete: () => void }) {
  const [steps, setSteps] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setSteps(s => [true, s[1], s[2]]), 5000),
      setTimeout(() => setSteps(s => [s[0], true, s[2]]), 10000),
      setTimeout(() => {
        setSteps(s => [s[0], s[1], true]);
        setTimeout(onComplete, 1000);
      }, 15000)
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const Step = ({ label, isDone }: { label: string, isDone: boolean }) => (
    <div className="flex items-center gap-[15px] py-1">
      <div className="w-[12px] h-[12px] flex items-center justify-center shrink-0">
        {isDone ? (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M0.416554 3.06121L2.53234 5.17691L7.29269 0.416562" stroke="#18A805" strokeWidth="1.17822" />
          </svg>
        ) : (
          <Loader2 className="w-full h-full text-[#D9D9D9] animate-spin" />
        )}
      </div>
      <div className="flex items-center gap-2 flex-1">
        <span className={cn(
          "text-[13px] font-normal leading-[20px] transition-colors",
          isDone ? "text-black" : "text-[#585858]"
        )}>
          {label}
        </span>
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="shrink-0 opacity-40">
          <path d="M0.85 1.15L4.15 4.5L0.85 7.85" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f5f5f5] rounded-[12px] p-2.5 w-full font-mono-io mt-2">
      <div className="px-2.5 pt-4 pb-2">
        <p className="text-[16px] tracking-tight text-black">Analyzing IG profile...</p>
      </div>
      <div className="bg-white rounded-[8px] p-5 flex flex-col gap-[15px]">
        <SuccessBanner message="INSTAGRAM AUTH GRANTED" />
        <div className="flex flex-col gap-4">
          <Step label="Analyzing your niche & buyer personas" isDone={steps[0]} />
          <Step label="Understanding your tone of voice" isDone={steps[1]} />
          <Step label="Core pillars of content standardisation" isDone={steps[2]} />
        </div>
      </div>
    </div>
  );
}

export interface InstagramCardProps {
  onConnect: () => void;
  variant?: 'instagram' | 'account';
}

export function InstagramCard({ onConnect, variant = 'instagram' }: InstagramCardProps) {
  const isAccount = variant === 'account';
  
  return (
    <TechContainer 
      title={isAccount ? "System Access" : "Network Connection"}
      footerButton={{
        label: isAccount ? "CREATE ACCOUNT" : "CONNECT INSTAGRAM",
        onClick: onConnect,
        color: 'blue'
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black/5 flex items-center justify-center rounded-sm">
          {isAccount ? <Bot className="text-black w-5 h-5" /> : <Instagram className="text-black w-5 h-5" />}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-400 uppercase font-normal tracking-[0.1em]">
            {isAccount ? 'INITIALIZATION' : 'EXTERNAL API'}
          </span>
          <span className="text-sm font-normal uppercase tracking-tight">
            {isAccount ? 'New Profile Identity' : 'Instagram Business API'}
          </span>
        </div>
      </div>
      <p className="text-[11px] text-zinc-500 leading-relaxed">
        {isAccount 
          ? "Establish your unique AI operator credentials in our database to begin the DM automation engine."
          : "Securely link your professional Instagram account to allow Ninjō to read and respond to messages."}
      </p>
    </TechContainer>
  );
}

export interface ProfileArtifactProps {
  username: string;
  onConfirm: () => void;
}

export function ProfileArtifact({ username, onConfirm }: ProfileArtifactProps) {
  const [personas, setPersonas] = useState('Entrepreneurs 25–35 · Freelancers LATAM · University Students');
  const [tone, setTone] = useState('Direct · Motivational · Educational');
  const [pilars, setPilars] = useState('Results · Behind the scenes · Education · Success stories');
  const [editingField, setEditingField] = useState<string | null>(null);

  const stats = [
    { label: 'Followers', value: '24.8K', icon: User },
    { label: 'Avg Reach', value: '6.2K', icon: Target },
    { label: 'Engagement', value: '4.7%', icon: Zap },
    { label: 'Profile Rank', value: 'A+', icon: Sparkles },
  ];

  const EditableRow = ({ label, value, setter, fieldId }: { label: string, value: string, setter: (v: string) => void, fieldId: string }) => {
    const isEditing = editingField === fieldId;
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
            <span className="text-[10px] text-zinc-400 uppercase font-normal tracking-[0.05em]">{label}</span>
          </div>
          <button onClick={() => setEditingField(isEditing ? null : fieldId)}>
            <ChevronRight className={cn("w-3.5 h-3.5 text-zinc-300 transition-transform", isEditing && "rotate-90")} />
          </button>
        </div>
        {isEditing ? (
          <textarea
            autoFocus
            className="w-full text-[12px] leading-relaxed font-mono-io border-b border-black/10 py-2 outline-none bg-zinc-50 focus:bg-white min-h-[50px] resize-none"
            value={value}
            onChange={(e) => setter(e.target.value)}
            onBlur={() => setEditingField(null)}
          />
        ) : (
          <p className="text-[13px] leading-relaxed text-zinc-600 pl-3">{value}</p>
        )}
      </div>
    );
  };

  return (
    <TechContainer 
      title="Profile Analysis Engine"
      footerButton={{
        label: "CONFIRM AI CONFIGURATION",
        onClick: onConfirm,
        color: 'blue'
      }}
    >
      <SuccessBanner message="CONTENT ANALYSIS SUCCESSFUL" />

      <div className="grid grid-cols-2 gap-px bg-zinc-100 border border-zinc-100 overflow-hidden rounded-sm">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-3 flex flex-col gap-1">
            <span className="text-[9px] text-zinc-400 uppercase font-normal tracking-tight">{stat.label}</span>
            <span className="text-[14px] font-normal tracking-tight">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <EditableRow label="Target Personas" value={personas} setter={setPersonas} fieldId="personas" />
        <EditableRow label="Voice Tone" value={tone} setter={setTone} fieldId="tone" />
        <EditableRow label="Core Pillars" value={pilars} setter={setPilars} fieldId="pilars" />
      </div>
    </TechContainer>
  );
}

export interface FinalArtifactProps {
  username: string;
  goal: string;
  tone: string;
  product: string;
  onTest: () => void;
  onDeploy: () => void;
}

export function FinalArtifact({ username, goal, tone, product, onTest, onDeploy }: FinalArtifactProps) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <TechContainer 
        title="Onboarding Status"
        footerButton={{
          label: "CHAT WITH AGENT",
          onClick: onTest,
          color: 'blue'
        }}
      >
        <SuccessBanner message="AI PERSONA CONFIG SUCCESSFUL" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 flex items-center justify-center shrink-0">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M0.416554 3.06121L2.53234 5.17691L7.29269 0.416562" stroke="#18A805" strokeWidth="1.17822" />
              </svg>
            </div>
            <p className="text-[13px] text-zinc-600 flex-1">Analyzing your niche & tone</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 flex items-center justify-center shrink-0">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M0.416554 3.06121L2.53234 5.17691L7.29269 0.416562" stroke="#18A805" strokeWidth="1.17822" />
              </svg>
            </div>
            <p className="text-[13px] text-zinc-600 flex-1">Building qualification questions</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 flex items-center justify-center shrink-0">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M0.416554 3.06121L2.53234 5.17691L7.29269 0.416562" stroke="#18A805" strokeWidth="1.17822" />
              </svg>
            </div>
            <p className="text-[13px] text-zinc-600 flex-1">Creating DM conversation flow</p>
          </div>
        </div>
      </TechContainer>

      <TechContainer title="Operation Control">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-zinc-400 uppercase font-normal">CURRENT AGENT</span>
            <span className="text-sm font-normal uppercase">{username} (LIVE)</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-0.5">
               <span className="text-[9px] text-zinc-400 uppercase">Goal</span>
               <span className="text-[12px] truncate">{goal}</span>
            </div>
            <div className="flex flex-col gap-0.5">
               <span className="text-[9px] text-zinc-400 uppercase">Tone</span>
               <span className="text-[12px] truncate">{tone}</span>
            </div>
          </div>
          
          <button 
            onClick={onDeploy}
            className="w-full bg-black text-white py-4 rounded-lg text-[13px] font-bold uppercase flex items-center justify-center gap-2"
          >
            <Rocket className="w-4 h-4" />
            ACTIVATE AGENT ON INSTAGRAM
          </button>
        </div>
      </TechContainer>
    </div>
  );
}

// ServiceSelection remains for internal use, updated for style
export interface ServiceSelectionProps {
  onSelect: (service: string) => void;
}

export function ServiceSelection({ onSelect }: ServiceSelectionProps) {
  const services = [
    { id: 'scale', label: 'Scale my business', icon: Rocket },
    { id: 'setter', label: 'Create my AI Setter', icon: Bot },
    { id: 'ads', label: 'Run ads', icon: Megaphone },
    { id: 'content', label: 'Create content', icon: Palette },
  ];

  return (
    <TechContainer title="Module Selection">
      <div className="grid grid-cols-1 gap-2">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelect(service.label)}
            className="flex items-center justify-between p-3 border border-zinc-100 rounded-lg hover:bg-zinc-50 transition-all group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-black/5 rounded-md">
                <service.icon className="w-4 h-4 text-black" />
              </div>
              <span className="text-[13px] font-normal uppercase tracking-tight">{service.label}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </TechContainer>
  );
}
