export default function ChipGroup({ options }: { options: string[] }) {
  return (
    <div className="flex flex-wrap gap-[8px] justify-start">
      {options.map((option, index) => (
        <button 
          key={index}
          className="bg-[#f0f0f0] px-[16px] py-[10px] rounded-[100px] border border-[#d0d0d0] hover:bg-[#e5e5e5] transition-colors"
        >
          <p className="font-['MD_IO:Regular',sans-serif] leading-[normal] text-[15px] text-black tracking-[-0.3px] whitespace-nowrap">
            {option}
          </p>
        </button>
      ))}
    </div>
  );
}
