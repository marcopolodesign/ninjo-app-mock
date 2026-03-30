import svgPaths from "./svg-grhyrmqqnv";

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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <TablerArrowUp />
      <button className="bg-[#edeaea] content-stretch cursor-pointer flex items-center justify-center p-[10px] relative rounded-[100px] shrink-0" data-name="Mode Chip">
        <p className="font-['GT_America:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[15px] text-left tracking-[-0.3px] whitespace-nowrap">Ask mode</p>
      </button>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[247.854px]">
      <Frame10 />
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <TablerArrowUp1 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start p-[20px] relative w-full">
        <p className="font-['GT_America:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[17px] tracking-[-0.34px] whitespace-nowrap">Say hi to Ninjō get started...</p>
        <Frame3 />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pb-[35px] pr-[16px] w-[424px]" data-name="Nav Bar">
      <Container />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Frame">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
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
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Status bar - iPhone">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[24px] relative w-full">
            <Time />
            <Levels />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[54px]">
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
  );
}

function Frame1() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.262px] text-black uppercase whitespace-nowrap">DAILY GROWTH REPORT</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame1 />
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">􀝖</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[16px] relative w-full">
          <Frame8 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function SidebarToggle() {
  return (
    <div className="h-[210.677px] relative shrink-0 w-[205.635px]" data-name="Sidebar toggle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.635 210.677">
        <g id="Sidebar toggle">
          <path d={svgPaths.p21d49b80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p34203780} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-10px)] opacity-5 top-[calc(50%-51px)]">
      <SidebarToggle />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[477px] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center pb-[60px] pr-[16px] pt-[168px] relative size-full">
          <p className="font-['MD_IO:Light',sans-serif] leading-[30px] not-italic relative shrink-0 text-[25.91px] text-black text-center tracking-[-0.5182px] w-[384.832px]">{`All set! Your free trial is activated and will be billed on {date}`}</p>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[956px] items-start relative shrink-0 w-[424px] z-[1]">
      <NavBar />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function HomeNormal() {
  return (
    <div className="content-stretch flex h-[956px] isolate items-start overflow-clip px-[16px] relative shadow-[-4px_4px_5.2px_0px_rgba(204,204,204,0.24)] shrink-0 w-[440px] z-[2]" data-name="Home - Normal" style={{ backgroundImage: "linear-gradient(rgb(250, 250, 250) 0%, rgb(250, 250, 250) 47.59%, rgb(181, 227, 255) 84.141%, rgb(255, 206, 184) 98.024%)" }}>
      <Frame25 />
    </div>
  );
}

function SidebarToggle1() {
  return (
    <div className="h-[33.269px] relative shrink-0 w-[33.262px]" data-name="Sidebar toggle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2623 33.2688">
        <g id="Sidebar toggle">
          <path d={svgPaths.p218c4a72} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pc75dc80} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
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
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[13px] h-[33.269px] items-center relative shrink-0 w-[127px]">
      <SidebarToggle1 />
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[6.25%_12.75%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.882 21">
        <g id="Group 1205">
          <path d={svgPaths.p154a6cf0} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d={svgPaths.p2adbc480} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NavBarIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="NavBar Icon">
      <Group3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">CoPilot</p>
    </div>
  );
}

function Frame14() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[14px] items-center relative shrink-0">
      <NavBarIcon />
      <Frame11 />
    </button>
  );
}

function Group2() {
  return (
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
  );
}

function NavBarIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="NavBar Icon">
      <Group2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black uppercase whitespace-nowrap">Agents</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <NavBarIcon1 />
      <Frame12 />
    </div>
  );
}

function NavBarIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="NavBar Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_505)" id="NavBar Icon">
          <path d={svgPaths.p88f3c00} id="Subtract" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_505">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">Conversations</p>
    </div>
  );
}

function Frame18() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[14px] items-center relative shrink-0 w-full">
      <NavBarIcon2 />
      <Frame13 />
    </button>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame14 />
      <Frame20 />
      <Frame18 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-[143px]">
      <Frame17 />
      <Frame23 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-[#585858] text-[17px] text-ellipsis tracking-[-0.34px] w-full whitespace-nowrap">
      <p className="overflow-hidden relative shrink-0 w-full">{`What’s my average conversion rate given the `}</p>
      <p className="overflow-hidden relative shrink-0 w-full">Give me my last post impression metrics</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col font-['GT_America:Regular',sans-serif] gap-[21px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="relative shrink-0 text-[#a5a5a5] text-[14px] tracking-[-0.28px] w-full">Recent Copilot chats</p>
      <Frame21 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
        <Frame22 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[24.435px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4351 24.4351">
        <g id="Group 1222">
          <circle cx="12.2175" cy="12.2175" fill="var(--fill-0, #D9D9D9)" id="Ellipse 296" r="12.2175" />
          <path d={svgPaths.p19494700} fill="var(--fill-0, #A5A5A5)" id="Ellipse 295" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <Group4 />
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[13px] uppercase whitespace-nowrap">20% TOKENS USED</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_0_6.25%_0]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 19.5">
        <g id="Group 1196">
          <path d={svgPaths.p2eb72340} fill="var(--fill-0, #585858)" id="Vector" />
          <path d={svgPaths.p318fbb00} fill="var(--fill-0, #585858)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">SETTINGS</p>
    </div>
  );
}

function Frame24() {
  return (
    <button className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="NavBar Icon">
        <Group1 />
      </div>
      <Frame15 />
    </button>
  );
}

function SidebarItem() {
  return (
    <div className="bg-[#b5e3ff] content-stretch flex items-center justify-center p-[9.263px] relative rounded-[92.626px] shrink-0" data-name="Sidebar item">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.968px] text-black text-left tracking-[-0.2594px] whitespace-nowrap">FS</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-left uppercase whitespace-nowrap">PROFILE</p>
    </div>
  );
}

function Frame28() {
  return (
    <button className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <SidebarItem />
      <Frame16 />
    </button>
  );
}

function Frame29() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[31px] items-start pt-[296px] relative shrink-0 w-full">
      <Frame24 />
      <Frame28 />
    </div>
  );
}

export default function HomeNormalMode() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] isolate items-center relative size-full" data-name="Home - Normal Mode">
      <HomeNormal />
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[26px] pb-[20px] pr-[20px] pt-[80px] top-0 w-[256px] z-[1]" data-name="Menu">
        <Frame26 />
        <Frame27 />
        <Frame30 />
        <Frame29 />
      </div>
    </div>
  );
}