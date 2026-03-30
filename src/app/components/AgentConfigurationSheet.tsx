import React from 'react';
import svgPaths from "../../imports/svg-1f1cq49emn";

function Frame28({ username }: { username: string }) {
  // Clean username for display (remove @ if present)
  const displayName = username.startsWith('@') ? username.substring(1) : username;
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-mono-io leading-[28px] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">{displayName} AI</p>
    </div>
  );
}

function Frame({ username }: { username: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative">
      <Frame28 username={username} />
      <p className="font-mono-io leading-[normal] min-w-full not-italic relative shrink-0 text-[#a5a5a5] text-[16px] w-[min-content]">{`Responde los DM's de ${username} en IG cómo si fuera ${username}`}</p>
    </div>
  );
}

function Frame22({ username }: { username: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame username={username} />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[50px] items-start pb-[10px] relative shrink-0 overflow-x-auto no-scrollbar">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Agent</p>
      <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] whitespace-nowrap">{`Conversation & Replies`}</p>
      <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] whitespace-nowrap">Contexto</p>
      <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] whitespace-nowrap">Follow ups</p>
      <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] whitespace-nowrap">Voice</p>
      <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] whitespace-nowrap">Sales Funnel</p>
      <div className="absolute bottom-0 h-0 left-0 w-[47px]">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 2">
            <path d="M0 1H47" id="Vector 11" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27({ username }: { username: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full px-[16px] pt-[30px]">
      <Frame22 username={username} />
      <Frame10 />
    </div>
  );
}

function RiPencilAi2Line() {
  return (
    <div className="h-[35px] relative shrink-0 w-[35px]" data-name="ri:pencil-ai-2-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="ri:pencil-ai-2-line">
          <rect height="34" rx="3.5" stroke="black" width="34" x="0.5" y="0.5" />
          <path d={svgPaths.p7a0be00} fill="#585858" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiPencilAi2Line1() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="ri:pencil-ai-2-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="ri:pencil-ai-2-line">
          <rect height="32" rx="3.5" stroke="black" width="32" x="0.5" y="0.5" />
          <path d={svgPaths.p3bf71280} fill="#585858" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-[272px]">
      <RiPencilAi2Line />
      <RiPencilAi2Line1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] relative w-full">
          <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Personalidad</p>
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[244px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full overflow-y-auto no-scrollbar">
        <div className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full whitespace-pre-wrap">
          <p className="mb-0 font-bold">Master Prompt to Train the Ninjō AI (WhatsApp - Landing version)</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 font-bold">Activation</p>
          <p className="mb-0">This AI activates from Ninjō’s official landing page. All conversations are initiated by interested leads, so the bot can reply immediately.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 font-bold">Style Guidelines</p>
          <p className="mb-0">Under no circumstance should links be formatted using markdown (e.g., text). Links must be sent as plain text only. If markdown is used, the AI will be fired immediately.</p>
          <p className="mb-0">This AI responds by default in English. However, if the user starts the conversation in Spanish, Portuguese, or any other language, it will automatically continue in that language. If the conversation is in Spanish, it will use a natural Argentine tone and vocabulary.</p>
          <p className="mb-0">No emojis in any message.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p>All responses should feel human, natural, and direct.</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
        <Frame5 />
        <Frame2 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-mono-io items-center justify-between leading-[normal] not-italic px-[10px] relative text-black w-full whitespace-nowrap">
          <p className="relative shrink-0 text-[16px]">Happy Path</p>
          <p className="decoration-solid relative shrink-0 text-[11px] underline">Add Case</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#585858] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[16px] text-black uppercase whitespace-nowrap">Title of happy path case</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex font-mono-io gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[11px] text-black uppercase whitespace-nowrap overflow-x-auto no-scrollbar">
      <p className="relative shrink-0">NURTURING</p>
      <p className="relative shrink-0">{`RESOURCE SENT `}</p>
      <p className="relative shrink-0">ASK FOR STORIES</p>
      <p className="relative shrink-0">REQUEST CALL OR PAYMENT</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative w-full">
        <Frame19 />
        <p className="font-mono-io leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{`Happy Path description `}</p>
        <Frame29 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
        <Frame7 />
        <Frame8 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-mono-io items-center justify-between leading-[normal] not-italic px-[10px] relative text-black w-full whitespace-nowrap">
          <p className="relative shrink-0 text-[16px]">Agent Type</p>
          <p className="decoration-solid relative shrink-0 text-[11px] underline">Editar</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#a5a5a5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[15px] relative w-full">
          <p className="font-mono-io leading-[normal] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis whitespace-nowrap">Individual</p>
          <div className="h-[6.187px] relative shrink-0 w-[12.374px]">
            <div className="absolute inset-[-5.71%_-2.86%_-11.43%_-2.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0811 7.24767">
                <path d={svgPaths.p2c60f300} id="Vector 16" stroke="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
        <Frame15 />
        <Frame3 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-mono-io items-center justify-between leading-[normal] not-italic px-[10px] relative text-black w-full whitespace-nowrap">
          <p className="relative shrink-0 text-[16px]">GPT Model</p>
          <p className="decoration-solid relative shrink-0 text-[11px] underline">Editar</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#a5a5a5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[15px] relative w-full">
          <p className="font-mono-io leading-[normal] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis whitespace-nowrap">GPT-4</p>
          <div className="h-[6.187px] relative shrink-0 w-[12.374px]">
            <div className="absolute inset-[-5.71%_-2.86%_-11.43%_-2.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0811 7.24767">
                <path d={svgPaths.p2c60f300} id="Vector 16" stroke="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[15px] items-start pb-[10px] pt-[20px] px-[10px] relative w-full">
        <Frame17 />
        <Frame4 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function Frame25({ username }: { username: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full px-[16px] pb-[60px]">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

export default function AgentConfigurationSheet({ username = "@Lic.Juanmahuss" }: { username?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full bg-white overflow-y-auto no-scrollbar">
      <Frame27 username={username} />
      <Frame25 username={username} />
    </div>
  );
}
