import clsx from "clsx";
import svgPaths from "./svg-rmjsezmadd";
import imgUnsplashZEdCt0QrodE from "figma:asset/50f17b63fb23dc64a5c0679cf09d303ea5fc644f.png";

function Sequence({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-h-px min-w-px relative">
      <div className="h-[94.019px] relative rounded-[3.981px] shrink-0 w-[104.751px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[3.981px] size-full" src={imgUnsplashZEdCt0QrodE} />
      </div>
      <p className="flex-[1_0_0] font-['GT_America:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#585858] text-[14px] whitespace-pre-wrap">{children}</p>
    </div>
  );
}

function Frame1570StorySecuence({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[431px]">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function SeqTitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <button className="bg-[rgba(245,245,245,0)] cursor-pointer relative rounded-[4px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pr-[10px] py-[10px] relative">{children}</div>
      </div>
    </button>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <SeqTitle>{children}</SeqTitle>
    </div>
  );
}

function Frame1572Helper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 452.911 2">
          <path d="M0 1H452.911" id="Vector 33" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <Wrapper>
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[14px] text-left uppercase whitespace-nowrap">{text}</p>
      <div className="flex h-[9.064px] items-center justify-center relative shrink-0 w-[4.532px]" style={{ "--transform-inner-width": "178", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <HelperbuttonHelper />
        </div>
      </div>
    </Wrapper>
  );
}

function ConversationNavbarItem() {
  return (
    <button className="bg-[rgba(88,88,88,0.1)] content-stretch cursor-pointer flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#585858] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[13px] text-left tracking-[-0.26px] whitespace-nowrap">{`Approve & Schedule`}</p>
    </button>
  );
}
type HelperbuttonHelperProps = {
  additionalClassNames?: string;
};

function HelperbuttonHelper({ additionalClassNames = "" }: HelperbuttonHelperProps) {
  return (
    <div className={clsx("h-[4.532px] relative w-[9.064px]", additionalClassNames)}>
      <div className="absolute inset-[-7.8%_-3.9%_-15.6%_-3.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.77154 5.59268">
          <path d={svgPaths.p3cc81300} id="Vector 29" stroke="var(--stroke-0, #585858)" />
        </svg>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.28px] uppercase whitespace-nowrap">{text}</p>
      <div className="relative shrink-0 size-[13.559px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5589 13.5589">
          <path d={svgPaths.p154a8600} fill="var(--fill-0, #585858)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex items-center justify-center px-[10px] py-[7.5px] relative rounded-[2px] shrink-0">
      <ol className="block font-['MD_IO:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.28px] uppercase whitespace-nowrap" start="1">
        <li className="ms-[21px]">
          <span className="leading-[normal]">{text}</span>
        </li>
      </ol>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[28.13%_37.5%]">
      <div className="absolute inset-[-7.14%_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
          <g id="Group">
            <path d={svgPaths.p28cb4300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1a1fc80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p12135c40} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1dba5480} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pa866980} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2995ef80} id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3440c180} id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start pb-[80px] relative size-full">
      <div className="relative shrink-0 w-full" data-name="Sequence">
        <div className="content-stretch flex flex-col gap-[22px] items-start relative w-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
            <SeqTitle>
              <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[14px] text-left uppercase whitespace-nowrap">Friday 23 - IG Story sequence</p>
              <HelperbuttonHelper additionalClassNames="shrink-0" />
            </SeqTitle>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="overflow-x-auto overflow-y-clip size-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-start px-[15px] relative w-full">
                    <Frame1570StorySecuence>
                      <Wrapper3>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lsicon:drag-outline">
                              <Group />
                            </div>
                            <Text text="HOOK" />
                          </div>
                          <Text1 text="EDIT VISUALS" />
                        </div>
                        <Wrapper1>
                          <Wrapper2>
                            {`Your SaaS has users but nobody's paying?`}
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            {`The problem isn't your product.`}
                            <br aria-hidden="true" />
                            {`It's that you're selling features when you should be selling transformation.`}
                          </Wrapper2>
                        </Wrapper1>
                      </Wrapper3>
                    </Frame1570StorySecuence>
                    <Frame1570StorySecuence>
                      <Wrapper3>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lsicon:drag-outline">
                              <Group />
                            </div>
                            <Text text="EXPLICACIÓN" />
                          </div>
                          <Text1 text="EDIT VISUALS" />
                        </div>
                        <Wrapper1>
                          <Wrapper2>
                            {`Here's what's happening:`}
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            {`You're showing 3 tiers with 47 features listed.`}
                            <br aria-hidden="true" />
                            Your visitor spends 8 seconds, gets overwhelmed, and leaves.
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            Decision fatigue kills conversions.
                          </Wrapper2>
                        </Wrapper1>
                      </Wrapper3>
                    </Frame1570StorySecuence>
                    <Frame1570StorySecuence>
                      <Wrapper3>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lsicon:drag-outline">
                              <Group />
                            </div>
                            <Text text="GIRO" />
                          </div>
                          <Text1 text="EDIT VISUALS" />
                        </div>
                        <Wrapper1>
                          <Wrapper2>
                            The companies crushing it?
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            {`They're not selling plans.`}
                            <br aria-hidden="true" />
                            {`They're selling identities.`}
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            {`"Starter" = meh`}
                            <br aria-hidden="true" />
                            {`"For growing teams" = I'm growing ✨`}
                          </Wrapper2>
                        </Wrapper1>
                      </Wrapper3>
                    </Frame1570StorySecuence>
                    <Frame1570StorySecuence>
                      <Wrapper3>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lsicon:drag-outline">
                              <Group />
                            </div>
                            <Text text="OPORTUNIDAD" />
                          </div>
                          <Text1 text="GENERATE IMAGE" />
                        </div>
                        <Wrapper1>
                          <Wrapper2>
                            New rule: One clear recommendation.
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            {`Add a "Most popular" badge.`}
                            <br aria-hidden="true" />
                            Remove 60% of feature comparisons.
                            <br aria-hidden="true" />
                            Make ONE plan impossible to ignore.
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            Choice paralysis solved.
                          </Wrapper2>
                        </Wrapper1>
                      </Wrapper3>
                    </Frame1570StorySecuence>
                    <Frame1570StorySecuence>
                      <Wrapper3>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="lsicon:drag-outline">
                              <Group />
                            </div>
                            <Text text="CTA" />
                          </div>
                          <Text1 text="GENERATE IMAGE" />
                        </div>
                        <Wrapper1>
                          <Wrapper2>
                            {`I'll audit your pricing page for free.`}
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            {`DM me "PRICING" + your URL and I'll send you a 3-minute Loom with exactly what's killing your conversions.`}
                            <br aria-hidden="true" />
                            <br aria-hidden="true" />
                            Doing 5 this week 👆
                          </Wrapper2>
                        </Wrapper1>
                      </Wrapper3>
                    </Frame1570StorySecuence>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#d9d9d9] border-l-2 border-solid inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <div className="content-stretch flex items-center relative shrink-0">
              <ConversationNavbarItem />
            </div>
            <p className="decoration-solid font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff4043] text-[13px] tracking-[-0.26px] underline whitespace-nowrap">Discard</p>
          </div>
        </div>
      </div>
      <Frame1572Helper />
      <Sequence>
        <Wrapper>
          <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[14px] text-left uppercase whitespace-nowrap">Monday 26 - IG Story sequence</p>
          <div className="flex h-[9.064px] items-center justify-center relative shrink-0 w-[4.532px]" style={{ "--transform-inner-width": "188", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <HelperbuttonHelper />
            </div>
          </div>
        </Wrapper>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div className="content-stretch flex items-center relative shrink-0">
            <ConversationNavbarItem />
          </div>
          <p className="decoration-solid font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff4043] text-[13px] tracking-[-0.26px] underline whitespace-nowrap">Discard</p>
        </div>
      </Sequence>
      <Frame1572Helper />
      <Sequence>
        <Wrapper>
          <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[14px] text-left uppercase whitespace-nowrap">Wednesday 28 - IG Story sequence</p>
          <div className="flex h-[9.064px] items-center justify-center relative shrink-0 w-[4.532px]" style={{ "--transform-inner-width": "211", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <HelperbuttonHelper />
            </div>
          </div>
        </Wrapper>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div className="content-stretch flex items-center relative shrink-0">
            <ConversationNavbarItem />
          </div>
          <p className="decoration-solid font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff4043] text-[13px] tracking-[-0.26px] underline whitespace-nowrap">Discard</p>
        </div>
      </Sequence>
      <Frame1572Helper />
      <Sequence>
        <Text2 text="Friday 30 - IG Story sequence" />
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div className="content-stretch flex items-center relative shrink-0">
            <ConversationNavbarItem />
          </div>
          <p className="decoration-solid font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff4043] text-[13px] tracking-[-0.26px] underline whitespace-nowrap">Discard</p>
        </div>
      </Sequence>
      <Frame1572Helper />
      <Sequence>
        <Text2 text="Friday 30 - IG Story sequence" />
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div className="content-stretch flex items-center relative shrink-0">
            <ConversationNavbarItem />
          </div>
          <p className="decoration-solid font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff4043] text-[13px] tracking-[-0.26px] underline whitespace-nowrap">Discard</p>
        </div>
      </Sequence>
      <Frame1572Helper />
      <Sequence>
        <Text2 text="Friday 30 - IG Story sequence" />
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <div className="content-stretch flex items-center relative shrink-0">
            <ConversationNavbarItem />
          </div>
          <p className="decoration-solid font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff4043] text-[13px] tracking-[-0.26px] underline whitespace-nowrap">Discard</p>
        </div>
      </Sequence>
      <Frame1572Helper />
    </div>
  );
}