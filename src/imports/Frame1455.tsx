import clsx from "clsx";
import svgPaths from "./svg-2yu10lw4yv";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[35px] relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <button className={clsx("bg-[#fafafa] min-w-[250px] relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center min-w-[inherit] size-full">{children}</div>
    </button>
  );
}

function InsightSelectorBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <button className="bg-[#e0e0e0] cursor-pointer mb-[-35px] min-w-[250px] relative rounded-[8px] shrink-0 w-full z-[2]">
      <div className="flex flex-col justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[15px] pt-[52px] px-[15px] relative w-full">{children}</div>
      </div>
    </button>
  );
}
type InsightSelectorBackgroundImageProps = {
  text: string;
  text1: string;
};

function InsightSelectorBackgroundImage({ text, text1 }: InsightSelectorBackgroundImageProps) {
  return (
    <BackgroundImage>
      <div className="content-stretch flex font-['MD_IO:Regular',sans-serif] items-center justify-between leading-[normal] min-w-[inherit] not-italic px-[15px] py-[10px] relative text-black w-full">
        <p className="relative shrink-0 text-[11px] text-left tracking-[-0.22px] uppercase w-[66.771px]">{text}</p>
        <p className="relative shrink-0 text-[16px] text-right tracking-[-0.32px] whitespace-nowrap">{text1}</p>
      </div>
    </BackgroundImage>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[14.5px] not-italic relative shrink-0 text-[#585858] text-[11px] text-left tracking-[-0.22px] w-full">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start justify-center relative size-full">
      <div className="content-stretch flex gap-[10px] items-start px-[10px] py-[23px] relative rounded-[8px] shrink-0 w-[333px]">
        <div aria-hidden="true" className="absolute border border-[#9747ff] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name="NavBar Icon">
          <div className="absolute inset-[6.25%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20.9999">
              <g id="Group 1204">
                <path d={svgPaths.pe80680} fill="url(#paint0_linear_2013_1707)" id="Vector" />
                <path d={svgPaths.p1cd967c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.125" />
                <path d={svgPaths.p3862b600} fill="var(--fill-0, white)" id="Vector_3" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_1707" x1="-2.13406" x2="18.9436" y1="-0.826256" y2="22.5183">
                  <stop stopColor="#9747FF" />
                  <stop offset="0.812465" stopColor="#FF8F40" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <p className="bg-clip-text flex-[1_0_0] font-['MD_IO:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[14px] text-[transparent] tracking-[-0.28px]" style={{ backgroundImage: "linear-gradient(150.609deg, rgb(151, 71, 255) 16.585%, rgb(255, 143, 64) 76.475%)" }}>
          This post about forest brewing will reach outdoor enthusiasts and craft beer lovers, made specially to your audience that consults about coffee courses.
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11px] text-black tracking-[-0.22px] uppercase whitespace-nowrap">TARGET AUDIENCE</p>
        <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
          <button className="bg-[#fafafa] cursor-pointer min-w-[250px] relative rounded-[8px] shrink-0 w-full" data-name="Insight Selector">
            <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-col justify-center min-w-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start justify-center min-w-[inherit] p-[15px] relative w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="bg-[#18a805] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0">
                    <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-left text-white tracking-[-0.32px] uppercase w-[66.51px]">COURSE SEEKERS</p>
                  </div>
                  <div className="content-stretch flex font-['MD_IO:Regular',sans-serif] gap-[10px] items-start justify-end leading-[normal] not-italic relative shrink-0 text-black">
                    <p className="relative shrink-0 text-[48px] text-right tracking-[-0.96px] whitespace-nowrap">30%</p>
                    <p className="relative shrink-0 text-[11px] text-left tracking-[-0.22px] uppercase w-[66.771px]">OF TOTAL FOLLOWER AUDIENCE</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <BackgroundImageAndText text="Followers who occasionally view content but rarely interact, showing minimal engagement (views, infrequent likes)." />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11px] text-black tracking-[-0.22px] uppercase whitespace-nowrap">ASSIGNED AGENT</p>
        <BackgroundImage1>
          <div className="content-stretch flex flex-col items-start mb-[-35px] relative shrink-0 w-full z-[3]">
            <BackgroundImage additionalClassNames="cursor-pointer h-[61px]">
              <div className="content-stretch flex items-center justify-between min-w-[inherit] px-[15px] py-[17px] relative size-full">
                <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11px] text-black text-left tracking-[-0.22px] uppercase w-[66.771px]">ANGIE</p>
                <div className="h-[4.045px] relative shrink-0 w-[8.091px]">
                  <div className="absolute inset-[-8.74%_-4.37%_-17.48%_-4.37%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79768 5.10595">
                      <path d={svgPaths.p7431880} id="Vector 21" stroke="var(--stroke-0, black)" />
                    </svg>
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <InsightSelectorBackgroundImage1>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0">
                  <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[11px] text-left tracking-[-0.22px] whitespace-nowrap">Reply all comments</p>
                  <div className="h-[4.277px] relative shrink-0 w-[8.553px]">
                    <div className="absolute inset-[-8.27%_-4.13%_-16.53%_-4.13%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.26045 5.33733">
                        <path d={svgPaths.pf210500} id="Vector 19" stroke="var(--stroke-0, #585858)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InsightSelectorBackgroundImage1>
        </BackgroundImage1>
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11px] text-black tracking-[-0.22px] uppercase whitespace-nowrap">Expected interaction</p>
        <BackgroundImage1>
          <div className="content-stretch flex flex-col items-start mb-[-35px] relative shrink-0 w-full z-[3]">
            <div className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
              <InsightSelectorBackgroundImage text="LIKES" text1="1.4K" />
              <InsightSelectorBackgroundImage text="COMMENTS" text1="243" />
              <InsightSelectorBackgroundImage text="AGENDAS" text1="5" />
            </div>
          </div>
          <InsightSelectorBackgroundImage1>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <BackgroundImageAndText text="Based on previous CTA’s" />
            </div>
          </InsightSelectorBackgroundImage1>
        </BackgroundImage1>
      </div>
    </div>
  );
}