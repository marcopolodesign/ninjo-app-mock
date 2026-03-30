import React, { useState } from 'react';

function Header({ username, activeTab, setActiveTab }: { username: string, activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full px-[16px] pt-[30px]">
      <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <p className="font-mono-io leading-[28px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{username}</p>
        </div>
        <div className="h-[37px] shrink-0 w-[201.159px]" />
      </div>
      
      <div className="content-stretch flex gap-[20px] items-start pb-[10px] relative shrink-0 w-full overflow-x-auto no-scrollbar">
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-solid inset-0 pointer-events-none" />
        
        <button 
          onClick={() => setActiveTab('persona')}
          className={cn(
            "font-mono-io leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-nowrap transition-colors",
            activeTab === 'persona' ? "text-black" : "text-[#a5a5a5]"
          )}
        >
          AI Persona Config
        </button>
        
        <button 
          onClick={() => setActiveTab('buyer')}
          className={cn(
            "font-mono-io leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-nowrap transition-colors",
            activeTab === 'buyer' ? "text-black" : "text-[#a5a5a5]"
          )}
        >
          Buyer Personas
        </button>

        <div 
          className="absolute bottom-0 h-[2px] bg-black transition-all duration-300" 
          style={{ 
            width: activeTab === 'persona' ? '158px' : '140px',
            left: activeTab === 'persona' ? '0px' : '178px'
          }}
        />
      </div>
    </div>
  );
}

function SectionHeader({ title, action = "Add New" }: { title: string, action?: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-mono-io items-center justify-between leading-[normal] not-italic px-[10px] relative text-black w-full whitespace-nowrap">
          <p className="relative shrink-0 text-[16px]">{title}</p>
          <p className="decoration-solid relative shrink-0 text-[13px] underline cursor-pointer">{action}</p>
        </div>
      </div>
    </div>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[5px] relative rounded-[8px] shrink-0">
      <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[13px] text-black whitespace-nowrap">{text}</p>
    </div>
  );
}

function PersonaTab() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full px-[16px] py-[10px]">
      <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
          <SectionHeader title="Tone of voice" />
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative w-full">
              <div className="bg-[#f5f5f5] relative rounded-[8px] shrink-0 w-full p-[5px]">
                <p className="font-mono-io text-[13px] text-black">Lots of stretched words: “Yessss”, “Sooo good”, “Heeey”</p>
              </div>
              <Chip text="Emojis as emphasis (✨🌿🙏🔥💕)" />
              <div className="bg-[#f5f5f5] relative rounded-[8px] shrink-0 w-full p-[5px]">
                <p className="font-mono-io text-[13px] text-black">Affirmation style: “Exactly!”, “Totally!”, “Preach!”</p>
              </div>
              <div className="bg-[#f5f5f5] relative rounded-[8px] shrink-0 w-full p-[5px]">
                <p className="font-mono-io text-[13px] text-black">Soft encouragement: “You got this 💫”, “I’m here for it 💜”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
          <SectionHeader title="Common Phrases" />
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="content-start flex flex-wrap gap-[10px] items-start p-[20px] relative w-full">
              <Chip text="Hey love! 🫀" />
              <Chip text="Hi, this is Tracyy, how are you?" />
              <Chip text="So glad you asked!" />
              <Chip text="Hey beautiful soul 🌿✨" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
          <SectionHeader title="Recurring Emojis" action="Edit" />
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
              <p className="font-mono-io leading-[20px] not-italic overflow-hidden relative shrink-0 text-[25px] text-black text-ellipsis w-full">💪👋❤️😂🔥👏🙌</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuyerTab() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full px-[16px] py-[10px]">
      <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
          <SectionHeader title="Target Audience Segments" />
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[15px] p-[20px] relative w-full">
              <div className="flex flex-col gap-1">
                <p className="font-mono-io text-[14px] text-black">Entrepreneurs (25-35)</p>
                <p className="font-mono-io text-[11px] text-[#a5a5a5]">High intent, looking for automation solutions to scale.</p>
              </div>
              <div className="w-full h-px bg-black/[0.05]" />
              <div className="flex flex-col gap-1">
                <p className="font-mono-io text-[14px] text-black">Content Creators</p>
                <p className="font-mono-io text-[11px] text-[#a5a5a5]">Focused on brand deals and audience engagement efficiency.</p>
              </div>
              <div className="w-full h-px bg-black/[0.05]" />
              <div className="flex flex-col gap-1">
                <p className="font-mono-io text-[14px] text-black">Freelance Service Providers</p>
                <p className="font-mono-io text-[11px] text-[#a5a5a5]">Interested in lead qualification to save time on discovery calls.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
          <SectionHeader title="Psychographic Profile" action="Edit" />
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[10px] p-[20px] relative w-full">
              <div className="bg-[#f5f5f5] p-3 rounded-lg">
                <p className="font-mono-io text-[12px] text-zinc-600 leading-relaxed">
                  Pain points: "I feel like a slave to my DMs", "I'm losing thousands in missed opportunities", "I can't hire a human setter yet".
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-3 rounded-lg">
                <p className="font-mono-io text-[12px] text-zinc-600 leading-relaxed">
                  Desires: Passive income, time freedom, professional appearance, seamless tech stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
          <SectionHeader title="Qualification Criteria" />
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-3 p-[20px] relative w-full">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="font-mono-io text-[13px]">Currently making $3k+/mo</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="font-mono-io text-[13px]">Inbound volume &gt; 10 DMs/day</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="font-mono-io text-[13px]">Has a clear digital offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export function FullProfileBottomSheet({ username = "@Lic.Juanmahuss" }: { username?: string }) {
  const [activeTab, setActiveTab] = useState('persona');

  return (
    <div className="content-stretch flex flex-col items-start relative size-full bg-white overflow-hidden">
      <Header 
        username={username} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <div className="flex-1 overflow-y-auto w-full no-scrollbar pb-20">
        {activeTab === 'persona' ? <PersonaTab /> : <BuyerTab />}
      </div>
    </div>
  );
}
