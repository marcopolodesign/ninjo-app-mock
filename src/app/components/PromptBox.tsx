import React, { useState, useRef, useEffect } from 'react';
import svgPaths from '../../imports/svg-v0tf3xc857';

interface PromptBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function PromptBox({ 
  value, 
  onChange, 
  onSend, 
  onKeyDown, 
  placeholder = "Say hi to Ninjō to get started",
  disabled 
}: PromptBoxProps) {
  const [isActive, setIsActive] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus when activated
  useEffect(() => {
    if (isActive && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isActive]);

  // Handle click outside to reset state if empty
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (!value.trim()) {
          setIsActive(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [value]);

  const handleContainerClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleBlur = () => {
    if (!value.trim()) {
      setIsActive(false);
    }
  };

  const PlusButton = () => (
    <button 
      className="relative flex items-center justify-center size-[46px] rounded-full bg-[#F5F5F5] hover:bg-[#efefef] transition-colors cursor-pointer shrink-0"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <svg className="size-[24px]" fill="none" viewBox="0 0 35 35">
        <path 
          d={svgPaths.p18030bc0} 
          stroke="black" 
          strokeLinecap="round" 
          strokeWidth="2.5" 
        />
      </svg>
    </button>
  );

  const SendButton = () => (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        if (value.trim()) onSend();
      }}
      disabled={disabled || (!value.trim() && isActive)}
      className={`relative flex items-center justify-center size-[46px] rounded-full transition-all duration-300 shrink-0 ${
        value.trim() 
          ? 'bg-black cursor-pointer hover:bg-zinc-800' 
          : 'bg-[#D9D9D9] cursor-default'
      }`}
    >
      <svg className="size-[24px]" fill="none" viewBox="0 0 35 35">
        <path 
          d={svgPaths.p17efcd40} 
          stroke={value.trim() ? "white" : "black"} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2.5" 
        />
      </svg>
    </button>
  );

  return (
    <div 
      ref={containerRef}
      onClick={handleContainerClick}
      className={`bg-white transition-all duration-300 flex relative rounded-[32px] border border-[#d9d9d9] shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-text w-full ${
        isActive 
          ? 'flex-col p-6 pb-4 min-h-[140px] items-stretch gap-4' 
          : 'flex-row p-4 min-h-[78px] items-center gap-3'
      }`}
      data-name="PromptBox"
    >
      {!isActive ? (
        // INACTIVE STATE: Horizontal row [ Text ] [ + ] [ Send ]
        <>
          <div className="flex-1 overflow-hidden px-2">
            <p className="font-gt-america leading-tight not-italic relative text-[#585858] text-[18px] tracking-[-0.34px] truncate">
              {value || placeholder}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <PlusButton />
            <SendButton />
          </div>
        </>
      ) : (
        // ACTIVE STATE: Vertical layout with expanded text area
        <>
          <div className="w-full flex-1">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={onChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && value.trim()) {
                  e.preventDefault();
                  onSend();
                }
                onKeyDown?.(e);
              }}
              onBlur={handleBlur}
              placeholder={placeholder}
              disabled={disabled}
              className="w-full h-full font-gt-america text-black text-[18px] tracking-[-0.34px] outline-none bg-transparent resize-none leading-[1.4] placeholder:text-[#585858]"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <PlusButton />
            <SendButton />
          </div>
        </>
      )}
    </div>
  );
}
