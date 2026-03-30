export default function FinalCard() {
  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[12px] overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a8f5e] px-[16px] py-[12px]">
        <p className="font-['MD_IO:Regular',sans-serif] text-[15px] text-white tracking-[-0.3px]">
          🥷 Tu ninjō está listo · @tunegocio · AI Growth Operator
        </p>
      </div>
      
      {/* Body */}
      <div className="p-[16px] flex flex-col gap-[12px]">
        <div className="flex gap-[12px]">
          <p className="font-['MD_IO:Regular',sans-serif] text-[16px] text-black">1.</p>
          <div className="flex-1">
            <p className="font-['MD_IO:Regular',sans-serif] text-[16px] text-black">
              <span className="text-[#585858]">Objetivo —</span> Agendar llamadas
            </p>
          </div>
        </div>
        
        <div className="flex gap-[12px]">
          <p className="font-['MD_IO:Regular',sans-serif] text-[16px] text-black">2.</p>
          <div className="flex-1">
            <p className="font-['MD_IO:Regular',sans-serif] text-[16px] text-black">
              <span className="text-[#585858]">Tono —</span> Profesional y formal
            </p>
          </div>
        </div>
        
        <div className="flex gap-[12px]">
          <p className="font-['MD_IO:Regular',sans-serif] text-[16px] text-black">3.</p>
          <div className="flex-1">
            <p className="font-['MD_IO:Regular',sans-serif] text-[16px] text-black">
              <span className="text-[#585858]">Producto —</span> Mentoría de 10 semanas
            </p>
          </div>
        </div>
        
        {/* Button */}
        <button className="bg-[#007AFF] text-white py-[14px] rounded-[8px] w-full font-['MD_IO:Regular',sans-serif] text-[16px] mt-[8px]">
          Ir al Dashboard
        </button>
      </div>
    </div>
  );
}
