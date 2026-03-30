import svgPaths from "./svg-xp0ny6yv2j";
type NavBarIconProps = {
  className?: string;
  property1?: "Convos" | "Insights" | "Agentes" | "Flows" | "Contactos" | "Integraciones" | "Creadores" | "Expandir" | "Variant9" | "Variant10" | "Variant11" | "Variant12" | "Variant13";
};

function NavBarIcon({ className, property1 = "Insights" }: NavBarIconProps) {
  const isContactos = property1 === "Contactos";
  const isConvos = property1 === "Convos";
  const isCreadores = property1 === "Creadores";
  const isExpandir = property1 === "Expandir";
  const isFlows = property1 === "Flows";
  const isInsights = property1 === "Insights";
  const isVariant10 = property1 === "Variant10";
  const isVariant11 = property1 === "Variant11";
  const isVariant12 = property1 === "Variant12";
  const isVariant13 = property1 === "Variant13";
  const isVariant9 = property1 === "Variant9";
  return (
    <div className={className || "relative size-[24px]"}>
      {["Insights", "Convos", "Flows", "Contactos", "Creadores", "Expandir", "Variant10", "Variant11", "Variant12", "Variant13"].includes(property1) && (
        <div className={`absolute ${isVariant13 ? "-translate-x-1/2 -translate-y-1/2 left-1/2 size-[20px] top-1/2" : isVariant12 ? "-translate-x-1/2 -translate-y-1/2 h-[18.571px] left-1/2 top-1/2 w-[20px]" : isVariant11 ? "-translate-x-1/2 -translate-y-1/2 h-[21px] left-1/2 top-1/2 w-[19.494px]" : isVariant10 ? "-translate-x-1/2 -translate-y-1/2 h-[21px] left-1/2 top-1/2 w-[18.008px]" : isExpandir ? "inset-[15.63%_6.25%_9.38%_6.25%]" : isCreadores ? "inset-[9.38%_6.25%_3.13%_6.25%]" : isContactos ? "inset-[9.37%_12.5%_3.13%_12.5%]" : isFlows ? "inset-[10.94%_7.81%_4.69%_7.81%]" : isConvos ? "inset-[12.5%_6.25%_6.25%_6.25%]" : "inset-[46.88%_6.25%_6.25%_6.25%]"}`} data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isVariant13 ? "0 0 20 20" : isVariant12 ? "0 0 20 18.5714" : isVariant11 ? "0 0 19.4944 21" : isVariant10 ? "0 0 18.0081 21" : isExpandir ? "0 0 21 18" : isCreadores ? "0 0 21 21" : isContactos ? "0 0 18 21" : isFlows ? "0 0 20.2498 20.2498" : isConvos ? "0 0 21 19.5" : "0 0 21 11.25"}>
            <path d={isVariant13 ? svgPaths.p15810800 : isVariant12 ? svgPaths.p9328b00 : isVariant11 ? svgPaths.p9e04940 : isVariant10 ? svgPaths.p42a1880 : isExpandir ? svgPaths.p293235f1 : isCreadores ? svgPaths.p18e36200 : isContactos ? svgPaths.pb6edf00 : isFlows ? svgPaths.p3f003d00 : isConvos ? svgPaths.pd9f4000 : svgPaths.p2db71800} fill={isContactos ? "var(--fill-0, black)" : "var(--fill-0, #585858)"} id="Vector" />
          </svg>
        </div>
      )}
      {["Agentes", "Integraciones", "Variant9"].includes(property1) && (
        <div className={`absolute ${isVariant9 ? "inset-[6.25%_12.5%]" : property1 === "Integraciones" ? "inset-[12.5%_0_6.25%_0]" : "inset-[6.25%]"}`}>
          {["Integraciones", "Variant9"].includes(property1) && (
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isVariant9 ? "0 0 17.9997 21" : "0 0 24 19.5"}>
              <g id={isVariant9 ? "Group 1197" : "Group 1196"}>
                <path d={isVariant9 ? svgPaths.p102c0100 : svgPaths.p2eb72340} fill="var(--fill-0, #585858)" id="Vector" />
                <path d={isVariant9 ? svgPaths.p1067a700 : svgPaths.p318fbb00} fill="var(--fill-0, #585858)" id="Vector_2" />
              </g>
            </svg>
          )}
          {property1 === "Agentes" && (
            <div className="absolute inset-[-2.68%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.125 22.1249">
                <g id="Group 1204">
                  <path d={svgPaths.p2c0cc500} fill="var(--fill-0, #585858)" id="Vector" />
                  <path d={svgPaths.p14171e80} id="Vector_2" stroke="var(--stroke-0, #585858)" strokeWidth="1.125" />
                </g>
              </svg>
            </div>
          )}
        </div>
      )}
      {isInsights && (
        <>
          <div className="absolute inset-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9988">
              <path d={svgPaths.p317d4a00} fill="var(--fill-0, #585858)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[12.5%_31.25%_46.88%_6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9.75">
              <path d={svgPaths.p36c2ba80} fill="var(--fill-0, #585858)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-3/4 left-3/4 right-[6.25%] top-[6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d={svgPaths.p11517d70} fill="var(--fill-0, #585858)" id="Vector" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

export default function Menu({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[32px] items-start pb-[20px] pr-[20px] pt-[80px] relative w-[256px]"} data-name="Menu">
      <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-[143px]">
        <div className="content-stretch flex gap-[13px] h-[33.269px] items-center relative shrink-0 w-[127px]">
          <div className="h-[33.269px] relative shrink-0 w-[33.262px]" data-name="Sidebar toggle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2621 33.2688">
              <g id="Sidebar toggle">
                <path d={svgPaths.p218c4a72} fill="var(--fill-0, black)" id="Vector" />
                <path d={svgPaths.pc75dc80} fill="var(--fill-0, black)" id="Vector_2" />
              </g>
            </svg>
          </div>
          <div className="h-[30.938px] relative shrink-0 w-[60.496px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.4959 30.9388">
              <g id="Group 1184">
                <path d={svgPaths.p163bd200} fill="var(--fill-0, black)" id="Vector" />
                <path d={svgPaths.p7945a10} fill="var(--fill-0, black)" id="Vector_2" />
                <path d={svgPaths.p3d234700} fill="var(--fill-0, black)" id="Vector_3" />
                <path d={svgPaths.pe340880} fill="var(--fill-0, black)" id="Vector_4" />
                <path d={svgPaths.p20d11400} fill="var(--fill-0, black)" id="Vector_5" />
                <path d={svgPaths.p3d96f400} fill="var(--fill-0, white)" id="Vector_6" opacity="0" />
              </g>
            </svg>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
            <button className="content-stretch cursor-pointer flex gap-[14px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="NavBar Icon">
                <div className="absolute inset-[6.25%_12.75%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.882 21">
                    <g id="Group 1205">
                      <path d={svgPaths.p154a6cf0} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
                      <path d={svgPaths.p2adbc480} fill="var(--fill-0, black)" id="Vector_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">CoPilot</p>
              </div>
            </button>
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="NavBar Icon">
                <div className="absolute inset-[9.38%_6.25%_3.12%_6.25%]">
                  <div className="absolute inset-[-2.68%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.125 22.1249">
                      <g id="Group 1204">
                        <path d={svgPaths.p2c0cc500} fill="var(--fill-0, black)" id="Vector" />
                        <path d={svgPaths.p14171e80} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.125" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black uppercase whitespace-nowrap">Agents</p>
              </div>
            </div>
            <button className="content-stretch cursor-pointer flex gap-[14px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[24px]" data-name="NavBar Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_1_577)" id="NavBar Icon">
                    <path d={svgPaths.p88f3c00} id="Subtract" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_577">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">Conversations</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
          <div className="content-stretch flex flex-col font-['GT_America:Regular',sans-serif] gap-[21px] items-start leading-[normal] not-italic relative shrink-0 w-full">
            <p className="relative shrink-0 text-[#a5a5a5] text-[14px] tracking-[-0.28px] w-full">Recent Copilot chats</p>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-[#585858] text-[17px] text-ellipsis tracking-[-0.34px] w-full whitespace-nowrap">
              <p className="overflow-hidden relative shrink-0 w-full">{`What’s my average conversion rate given the `}</p>
              <p className="overflow-hidden relative shrink-0 w-full">Give me my last post impression metrics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[24.435px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4351 24.4351">
            <g id="Group 1222">
              <circle cx="12.2175" cy="12.2175" fill="var(--fill-0, #D9D9D9)" id="Ellipse 296" r="12.2175" />
              <path d={svgPaths.p19494700} fill="var(--fill-0, #A5A5A5)" id="Ellipse 295" />
            </g>
          </svg>
        </div>
        <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[13px] uppercase whitespace-nowrap">20% TOKENS USED</p>
      </div>
      <div className="content-stretch cursor-pointer flex flex-col gap-[31px] items-start pt-[296px] relative shrink-0 w-full">
        <button className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
          <NavBarIcon className="overflow-clip relative shrink-0 size-[24px]" property1="Integraciones" />
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">SETTINGS</p>
          </div>
        </button>
        <button className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
          <div className="bg-[#b5e3ff] content-stretch flex items-center justify-center p-[9.263px] relative rounded-[92.626px] shrink-0" data-name="Sidebar item">
            <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.968px] text-black text-left tracking-[-0.2594px] whitespace-nowrap">FS</p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">PROFILE</p>
          </div>
        </button>
      </div>
    </div>
  );
}