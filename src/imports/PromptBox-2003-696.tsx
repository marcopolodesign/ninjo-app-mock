import svgPaths from "./svg-v0tf3xc857";

function TablerArrowUp() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="tabler:arrow-up">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="tabler:arrow-up">
          <rect fill="var(--fill-0, #F5F5F5)" height="35" rx="17.5" width="35" />
          <path d={svgPaths.p18030bc0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <TablerArrowUp />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[247.854px]">
      <Frame2 />
    </div>
  );
}

function TablerArrowUp1() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="tabler:arrow-up">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="tabler:arrow-up">
          <rect fill="var(--fill-0, #D9D9D9)" height="35" rx="17.5" width="35" />
          <path d={svgPaths.p17efcd40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1 />
      <TablerArrowUp1 />
    </div>
  );
}

export default function PromptBox() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-start p-[20px] relative rounded-[20px] size-full" data-name="PromptBox">
      <p className="font-['GT_America:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[17px] tracking-[-0.34px] whitespace-nowrap">Say hi to Ninjō to get started</p>
      <Frame />
    </div>
  );
}