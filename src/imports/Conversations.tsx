import clsx from "clsx";
import svgPaths from "./svg-f5pypiygoj";

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[15px] py-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-2.68%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.125 22.1249">
        <g id="Group 1204">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage2Props = {
  text: string;
  text1: string;
};

function BackgroundImage2({ text, text1 }: BackgroundImage2Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['MD_IO:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.5px] text-black tracking-[-0.33px] whitespace-nowrap">{text}</p>
      <div className="h-[11px] relative shrink-0 w-[18.998px]" data-name="Ready/unread">
        <p className="absolute font-['MD_IO:Regular',sans-serif] inset-[0_0_0_42.1%] leading-[normal] not-italic text-[#ff8f40] text-[9px] tracking-[-0.18px] whitespace-nowrap">{text1}</p>
        <BackgroundImage />
      </div>
    </div>
  );
}
type ReadyUnreadBackgroundImageAndTextProps = {
  text: string;
};

function ReadyUnreadBackgroundImageAndText({ text }: ReadyUnreadBackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0 size-[11px]">
      <p className="absolute font-['MD_IO:Regular',sans-serif] inset-0 leading-[normal] not-italic text-[9px] text-black tracking-[-0.18px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['MD_IO:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.5px] text-black tracking-[-0.33px] whitespace-nowrap">{text}</p>
      <ReadyUnreadBackgroundImageAndText text={text1} />
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="bg-[#ffb5b7] content-stretch flex gap-[3px] items-center p-[5px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Group 1211">
            <path d={svgPaths.p18124880} fill="var(--fill-0, #570300)" id="Vector" />
            <path d={svgPaths.p1a202e00} fill="var(--fill-0, #570300)" id="Vector_2" />
            <path d={svgPaths.pddc00} fill="var(--fill-0, #570300)" id="Vector_3" />
          </g>
        </svg>
      </div>
      <p className="font-['MD_IO:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#570300] text-[8px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[100px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11px] text-black text-right tracking-[-0.22px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-[#edeaea] content-stretch flex items-center justify-center px-[30px] py-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.262px] text-black uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-[21.99%_67.57%_21.99%_0]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16162 6.16162">
        <g id="Group 1212">
          <circle cx="3.08081" cy="3.08081" fill="var(--fill-0, #FF8F40)" id="Ellipse 12" opacity="0.5" r="3.08081" />
          <circle cx="3.08081" cy="3.08057" fill="var(--fill-0, #FF8F40)" id="Ellipse 11" r="2.14355" />
        </g>
      </svg>
    </div>
  );
}
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
            <BackgroundImage3>
              <path d={svgPaths.p2c0cc500} fill="var(--fill-0, #585858)" id="Vector" />
              <path d={svgPaths.p14171e80} id="Vector_2" stroke="var(--stroke-0, #585858)" strokeWidth="1.125" />
            </BackgroundImage3>
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
type ReadyUnreadProps = {
  className?: string;
  property1?: "2h" | "Group 1213";
};

function ReadyUnread({ className, property1 = "2h" }: ReadyUnreadProps) {
  const isGroup1213 = property1 === "Group 1213";
  return (
    <div className={className || `relative ${isGroup1213 ? "h-[11px] w-[18.998px]" : "size-[11px]"}`}>
      <p className={`absolute font-["MD_IO:Regular",sans-serif] leading-[normal] not-italic text-[9px] tracking-[-0.18px] whitespace-nowrap ${isGroup1213 ? "inset-[0_0_0_42.1%] text-[#ff8f40]" : "inset-0 text-black"}`}>2h</p>
      {isGroup1213 && <BackgroundImage />}
    </div>
  );
}

export default function Conversations() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] isolate items-center relative size-full" data-name="Conversations">
      <div className="flex-[1_0_0] h-[956px] min-h-px min-w-px relative shadow-[-4px_4px_5.2px_0px_rgba(204,204,204,0.24)] z-[2]" data-name="Conversations Inner" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(rgb(250, 250, 250) 0%, rgb(250, 250, 250) 47.59%, rgb(181, 227, 255) 84.141%, rgb(255, 206, 184) 98.024%)" }}>
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-start px-[16px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[956px] items-start min-h-px min-w-px relative z-[1]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="relative shrink-0 w-full" data-name="Status bar - iPhone">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[24px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
                        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          9:41
                        </p>
                      </div>
                      <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Levels">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
                            <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
                                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
                              </svg>
                            </div>
                            <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
                                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
                              </svg>
                            </div>
                            <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
                                <g id="Frame">
                                  <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
                                  <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                                  <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between pr-[16px] relative w-full">
                    <div className="content-stretch flex items-center pr-[16px] relative shrink-0">
                      <button className="block cursor-pointer mr-[-16px] relative shrink-0 size-[54px]">
                        <div className="absolute inset-[0_0_0_-1.7%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9205 54">
                            <g id="Frame 1523">
                              <path d={svgPaths.p12e4f140} id="Vector 19" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.84091" />
                              <path d="M20.2942 27L0.920455 27" id="Vector 18" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.84091" />
                              <path d="M10.167 33.1364H0.920455" id="Vector 17" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.84091" />
                            </g>
                          </svg>
                        </div>
                      </button>
                      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] mr-[-16px] not-italic relative shrink-0 text-[17px] text-black uppercase whitespace-nowrap">Conversations</p>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0">
                      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[28px]">􀝖</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="bg-[#d9d9d9] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[7.664px] items-center px-[10px] py-[5px] relative size-full">
                        <BackgroundImage5>
                          <g id="proicons:search">
                            <path d={svgPaths.p24a4e880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </BackgroundImage5>
                        <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.262px] text-black uppercase whitespace-nowrap">Search</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[35.615px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6152 35.6152">
                    <g id="Frame 1523">
                      <rect height="34.8058" rx="17.4029" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="0.809437" width="34.8058" x="0.404719" y="0.404719" />
                      <path d={svgPaths.p3dcc1d80} id="Vector 19" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.21416" />
                      <path d={svgPaths.p157ccc80} id="Vector 18" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.21416" />
                      <path d="M20.8569 21.8547H14.7584" id="Vector 17" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.21416" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                <div className="bg-[rgba(0,136,255,0.3)] content-stretch flex items-center justify-center px-[30px] py-[10px] relative rounded-[10px] shrink-0">
                  <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#08f] text-[12.262px] uppercase whitespace-nowrap">All</p>
                </div>
                <BackgroundImageAndText text="UNREAD" />
                <BackgroundImageAndText text="NEEDS ATTENTION" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                    <BackgroundImage4>
                      <div className="content-stretch flex gap-[13px] items-start justify-end relative shrink-0 w-full">
                        <BackgroundImageAndText1 text="A" />
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.5px] items-start min-h-px min-w-px relative">
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                            <p className="font-['MD_IO:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.5px] text-black tracking-[-0.33px] whitespace-nowrap">Alex Turner</p>
                            <ReadyUnread className="relative shrink-0 size-[11px]" />
                          </div>
                          <p className="font-['GT_America:Regular',sans-serif] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[13.5px] text-black text-ellipsis tracking-[-0.27px] w-[min-content]">Quiero vivir de eso, como hasta el día de hoy,igualmente tengo taller y me dedico al gnc. Pero quiero meterme de “lleno” en el compra y venta</p>
                          <BackgroundImageAndText2 text="INSTAGRAM" />
                        </div>
                      </div>
                    </BackgroundImage4>
                    <BackgroundImage4>
                      <div className="content-stretch flex gap-[13px] items-start justify-end relative shrink-0 w-full">
                        <BackgroundImageAndText1 text="C" />
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.5px] items-start min-h-px min-w-px relative">
                          <BackgroundImage1 text="Emily Ratajkowski" text1="1h" />
                          <p className="font-['GT_America:Regular',sans-serif] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#a5a5a5] text-[13.5px] text-ellipsis tracking-[-0.27px] w-[min-content]">Siempre estoy buscando nuevas oportunidades para explorar mi creatividad y aprender sobre la industria. Me fascina el arte y la moda.</p>
                          <BackgroundImageAndText2 text="INSTAGRAM" />
                        </div>
                      </div>
                    </BackgroundImage4>
                    <BackgroundImage4>
                      <div className="content-stretch flex gap-[13px] items-start justify-end relative shrink-0 w-full">
                        <BackgroundImageAndText1 text="D" />
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.5px] items-start min-h-px min-w-px relative">
                          <BackgroundImage2 text="John Doe" text1="2h" />
                          <p className="font-['GT_America:Regular',sans-serif] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#a5a5a5] text-[13.5px] text-ellipsis tracking-[-0.27px] w-[min-content]">Mis planes para el futuro incluyen diversificar mis inversiones y seguir educándome en finanzas personales.</p>
                          <BackgroundImageAndText2 text="INSTAGRAM" />
                        </div>
                      </div>
                    </BackgroundImage4>
                    <BackgroundImage4 additionalClassNames="bg-white">
                      <div className="content-stretch flex gap-[13px] items-start justify-end relative shrink-0 w-full">
                        <BackgroundImageAndText1 text="E" />
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.5px] items-start min-h-px min-w-px relative">
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                            <p className="font-['GT_America:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a5a5a5] text-[13px] text-right tracking-[-0.26px] whitespace-nowrap">Jane Smith</p>
                            <ReadyUnreadBackgroundImageAndText text="3h" />
                          </div>
                          <p className="font-['GT_America:Regular',sans-serif] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#a5a5a5] text-[13.5px] text-ellipsis tracking-[-0.27px] w-[min-content]">Estoy experimentando con un nuevo enfoque en mi negocio. La innovación es clave para el crecimiento.</p>
                          <BackgroundImageAndText2 text="INSTAGRAM" />
                        </div>
                      </div>
                    </BackgroundImage4>
                    <BackgroundImage4>
                      <div className="content-stretch flex gap-[13px] items-start justify-end relative shrink-0 w-full">
                        <BackgroundImageAndText1 text="F" />
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.5px] items-start min-h-px min-w-px relative">
                          <BackgroundImage2 text="Michael Johnson" text1="3h 5m" />
                          <p className="font-['GT_America:Regular',sans-serif] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#a5a5a5] text-[13.5px] text-ellipsis tracking-[-0.27px] w-[min-content]">Me gustaría empezar un podcast sobre negocios sostenibles y el impacto social de las empresas.</p>
                          <BackgroundImageAndText2 text="INSTAGRAM" />
                        </div>
                      </div>
                    </BackgroundImage4>
                    <BackgroundImage4 additionalClassNames="bg-white">
                      <div className="content-stretch flex gap-[13px] items-start justify-end relative shrink-0 w-full">
                        <BackgroundImageAndText1 text="G" />
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.5px] items-start min-h-px min-w-px relative">
                          <BackgroundImage1 text="Sara Connor" text1="45m" />
                          <p className="font-['GT_America:Regular',sans-serif] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#a5a5a5] text-[13.5px] text-ellipsis tracking-[-0.27px] w-[min-content]">Estoy colaborando con artistas locales para crear una serie de eventos que promuevan la cultura y el arte en nuestra comunidad.</p>
                          <BackgroundImageAndText2 text="INSTAGRAM" />
                        </div>
                      </div>
                    </BackgroundImage4>
                    <BackgroundImage4 additionalClassNames="bg-white">
                      <div className="content-stretch flex gap-[13px] items-start justify-end relative shrink-0 w-full">
                        <BackgroundImageAndText1 text="H" />
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.5px] items-start min-h-px min-w-px relative">
                          <BackgroundImage1 text="David Beckham" text1="10m" />
                          <p className="font-['GT_America:Regular',sans-serif] leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#a5a5a5] text-[13.5px] text-ellipsis tracking-[-0.27px] w-[min-content]">Estoy trabajando en una iniciativa que combina deporte y educación para inspirar a la próxima generación de atletas.</p>
                          <BackgroundImageAndText2 text="INSTAGRAM" />
                        </div>
                      </div>
                    </BackgroundImage4>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[26px] top-0 w-[256px] z-[1]" data-name="Menu">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[20px] pr-[20px] pt-[80px] relative w-full">
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
              <div className="h-[30.939px] relative shrink-0 w-[60.496px]">
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
                  <BackgroundImageAndText3 text="CoPilot" />
                </button>
                <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="NavBar Icon">
                    <div className="absolute inset-[9.38%_6.25%_3.12%_6.25%]">
                      <BackgroundImage3>
                        <path d={svgPaths.p2c0cc500} fill="var(--fill-0, black)" id="Vector" />
                        <path d={svgPaths.p14171e80} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.125" />
                      </BackgroundImage3>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black uppercase whitespace-nowrap">Agents</p>
                  </div>
                </div>
                <button className="content-stretch cursor-pointer flex gap-[14px] items-center relative shrink-0 w-full">
                  <BackgroundImage5>
                    <g clipPath="url(#clip0_2011_357)" id="NavBar Icon">
                      <path d={svgPaths.p88f3c00} id="Subtract" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2011_357">
                        <rect fill="white" height="24" width="24" />
                      </clipPath>
                    </defs>
                  </BackgroundImage5>
                  <BackgroundImageAndText3 text="Conversations" />
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
              <BackgroundImageAndText3 text="SETTINGS" />
            </button>
            <button className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
              <div className="bg-[#b5e3ff] content-stretch flex items-center justify-center p-[9.263px] relative rounded-[92.626px] shrink-0" data-name="Sidebar item">
                <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.968px] text-black text-left tracking-[-0.2594px] whitespace-nowrap">FS</p>
              </div>
              <BackgroundImageAndText3 text="PROFILE" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}