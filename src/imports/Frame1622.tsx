function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0 w-[401px]">
      <div aria-hidden="true" className="absolute border border-[#a5a5a5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['GT_America:Regular',sans-serif] leading-[32.976px] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">Please enter your username...</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0 w-[401px]">
      <div aria-hidden="true" className="absolute border border-[#a5a5a5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['GT_America:Regular',sans-serif] leading-[32.976px] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">Please enter your full name...</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0 w-[401px]">
      <div aria-hidden="true" className="absolute border border-[#a5a5a5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['GT_America:Regular',sans-serif] leading-[32.976px] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">Please enter your password...</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0 w-[401px]">
      <div aria-hidden="true" className="absolute border border-[#a5a5a5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['GT_America:Regular',sans-serif] leading-[32.976px] not-italic relative shrink-0 text-[#a5a5a5] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">Please confirm your password...</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <Frame />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[4px] shrink-0 size-[19.014px]">
        <div aria-hidden="true" className="absolute border border-[#a5a5a5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="flex-[1_0_0] font-['GT_America:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#a5a5a5] text-[16px] tracking-[-0.32px]">
        <span className="leading-[normal]">{`I agree with Ninjō’s `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] text-[#585858] underline">Terms of service</span>
        <span className="leading-[normal]">{` and `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] text-[#585858] underline">Privacy Policy</span>
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[4px] shrink-0 size-[19.014px]">
        <div aria-hidden="true" className="absolute border border-[#a5a5a5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="flex-[1_0_0] font-['GT_America:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#a5a5a5] text-[16px] tracking-[-0.32px]">Remember me</p>
    </div>
  );
}

function ConversationNavbarItem() {
  return (
    <div className="bg-black relative rounded-[12px] shrink-0 w-full" data-name="Conversation Navbar Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[20px] relative w-full">
          <p className="font-['GT_America:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap">Create account</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <ConversationNavbarItem />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-start relative shrink-0 w-[401px]">
      <p className="font-['MD_IO:Light',sans-serif] leading-[30px] min-w-full not-italic relative shrink-0 text-[25.91px] text-black text-center tracking-[-0.5182px] w-[min-content]">Create your Ninjō account</p>
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame2 />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="bg-white content-stretch flex items-center pb-[30px] pt-[80px] px-[30px] relative rounded-tl-[40px] rounded-tr-[40px] size-full">
      <Frame1 />
    </div>
  );
}