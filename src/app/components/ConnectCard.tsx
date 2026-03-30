export default function ConnectCard() {
  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[12px] p-[16px] flex items-center justify-between gap-[12px]">
      <div className="flex items-center gap-[12px] flex-1">
        <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#feda75] via-[#fa7e1e] to-[#d62976] rounded-[10px] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="white"/>
            <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14.67C10.53 14.67 9.33 13.47 9.33 12C9.33 10.53 10.53 9.33 12 9.33C13.47 9.33 14.67 10.53 14.67 12C14.67 13.47 13.47 14.67 12 14.67Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="8" y1="8" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#feda75"/>
                <stop offset="0.5" stopColor="#fa7e1e"/>
                <stop offset="1" stopColor="#d62976"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="font-['MD_IO:Regular',sans-serif] text-[16px] text-black">Instagram</p>
          <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">Conectá tu cuenta para continuar</p>
        </div>
      </div>
      <button className="bg-black text-white px-[16px] py-[8px] rounded-[8px] font-['MD_IO:Regular',sans-serif] text-[14px] whitespace-nowrap">
        Conectar
      </button>
    </div>
  );
}
