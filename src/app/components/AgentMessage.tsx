export default function AgentMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%]">
        <p className="font-['MD_IO:Regular',sans-serif] leading-[22px] text-[17px] text-black tracking-[-0.34px]">
          {text}
        </p>
      </div>
    </div>
  );
}
