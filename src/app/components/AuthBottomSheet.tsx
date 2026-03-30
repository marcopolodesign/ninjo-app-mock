import React from 'react';
import { motion } from 'motion/react';

interface AuthBottomSheetProps {
  onConfirm: () => void;
}

export function AuthBottomSheet({ onConfirm }: AuthBottomSheetProps) {
  return (
    <div className="bg-white flex flex-col items-center pb-[40px] pt-[32px] px-[24px] relative rounded-t-[40px] w-full h-auto">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full max-w-[401px]">
        <p className="font-mono-io leading-tight min-w-full not-italic relative shrink-0 text-[24px] text-black text-center tracking-tight">
          Create your Ninjō account
        </p>
        
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          {[
            "Please enter your username...",
            "Please enter your full name...",
            "Please enter your password...",
            "Please confirm your password..."
          ].map((placeholder, idx) => (
            <div key={idx} className="bg-white content-stretch flex items-center p-[12px] relative rounded-[12px] shrink-0 w-full border border-[#a5a5a5]">
              <input
                type={placeholder.includes("password") ? "password" : "text"}
                placeholder={placeholder}
                className="font-gt-america leading-normal w-full outline-none text-[#585858] text-[15px] tracking-tight placeholder:text-[#a5a5a5] bg-transparent"
              />
            </div>
          ))}
        </div>

        <div className="content-stretch flex flex-col gap-[10px] w-full">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <div className="relative rounded-[4px] shrink-0 size-[18px] border border-[#a5a5a5] mt-0.5" />
            <p className="flex-[1_0_0] font-gt-america leading-tight min-h-px min-w-px not-italic relative text-[#a5a5a5] text-[14px] tracking-tight">
              <span className="">{`I agree with Ninjō’s `}</span>
              <span className="[text-decoration-skip-ink:none] decoration-solid text-[#585858] underline">Terms of service</span>
              <span className="">{` and `}</span>
              <span className="[text-decoration-skip-ink:none] decoration-solid text-[#585858] underline">Privacy Policy</span>
            </p>
          </div>

          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <div className="relative rounded-[4px] shrink-0 size-[18px] border border-[#a5a5a5]" />
            <p className="flex-[1_0_0] font-gt-america leading-tight min-h-px min-w-px not-italic relative text-[#a5a5a5] text-[14px] tracking-tight">
              Remember me
            </p>
          </div>
        </div>

        <button 
          onClick={onConfirm}
          className="bg-black relative rounded-[12px] shrink-0 w-full mt-2"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[15px] py-[14px] relative w-full">
              <p className="font-gt-america leading-normal not-italic relative shrink-0 text-[16px] text-white tracking-tight whitespace-nowrap uppercase">
                Create account
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
