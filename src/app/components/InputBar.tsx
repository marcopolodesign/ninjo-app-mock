import { useState } from 'react';
import svgPaths from '../../imports/svg-y4hswji1zk';

interface InputBarProps {
  onSendMessage: (message: string) => void;
}

export default function InputBar({ onSendMessage }: InputBarProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pb-[35px] pr-[16px] w-full z-10">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
        <div className="content-stretch flex flex-col gap-[30px] items-start p-[20px] relative w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Say hi to Ninjō get started..."
            className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[17px] tracking-[-0.34px] w-full bg-transparent outline-none placeholder:text-[#585858]"
          />
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                <button className="relative shrink-0 size-[35px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                    <g>
                      <rect fill="var(--fill-0, #F5F5F5)" height="35" rx="17.5" width="35" />
                      <path d={svgPaths.p18030bc0} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </button>
                <button className="bg-[#edeaea] content-stretch cursor-pointer flex gap-2 items-center justify-center px-[12px] py-[10px] relative rounded-[100px] shrink-0">
                  <span className="text-[#585858] font-['MD_IO:Regular',sans-serif]">+</span>
                  <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[15px] text-left tracking-[-0.3px] whitespace-nowrap">Ask mode</p>
                  <span className="text-[#585858] font-['MD_IO:Regular',sans-serif]">↑</span>
                </button>
              </div>
            </div>
            <button 
              onClick={handleSend}
              className="relative shrink-0 size-[35px]"
            >
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                <g>
                  <rect fill="var(--fill-0, #D9D9D9)" height="35" rx="17.5" width="35" />
                  <path d={svgPaths.p17efcd40} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
