export default function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-[#FF8C42] px-[16px] py-[12px] rounded-[20px] max-w-[85%]">
        <p className="font-['MD_IO:Regular',sans-serif] leading-[22px] text-[17px] text-white tracking-[-0.34px]">
          {text}
        </p>
      </div>
    </div>
  );
}
