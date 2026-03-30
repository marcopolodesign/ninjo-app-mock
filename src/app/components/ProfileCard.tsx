export default function ProfileCard() {
  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[12px] overflow-hidden">
      {/* Header */}
      <div className="bg-[#2d2d2d] px-[16px] py-[12px]">
        <p className="font-['MD_IO:Regular',sans-serif] text-[15px] text-white tracking-[-0.3px]">
          @tunegocio — análisis de perfil
        </p>
      </div>
      
      {/* Body */}
      <div className="p-[16px] flex flex-col gap-[16px]">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-[12px]">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">Seguidores</p>
            <p className="font-['MD_IO:Regular',sans-serif] text-[17px] text-black">24.8K</p>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">Alcance promedio</p>
            <p className="font-['MD_IO:Regular',sans-serif] text-[17px] text-black">6.2K</p>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">Engagement</p>
            <p className="font-['MD_IO:Regular',sans-serif] text-[17px] text-black">4.7%</p>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">Perfil de compra</p>
            <p className="font-['MD_IO:Regular',sans-serif] text-[17px] text-black">Alto</p>
          </div>
        </div>
        
        {/* Buyer personas */}
        <div className="flex flex-col gap-[8px]">
          <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">Buyer personas</p>
          <div className="flex flex-wrap gap-[8px]">
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Emprendedores 25–35</p>
            </div>
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Freelancers LATAM</p>
            </div>
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Estudiantes universitarios</p>
            </div>
          </div>
        </div>
        
        {/* Tono de voz */}
        <div className="flex flex-col gap-[8px]">
          <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">Tono de voz</p>
          <div className="flex flex-wrap gap-[8px]">
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Directo</p>
            </div>
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Motivacional</p>
            </div>
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Educativo</p>
            </div>
          </div>
        </div>
        
        {/* Pilares de contenido */}
        <div className="flex flex-col gap-[8px]">
          <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">Pilares de contenido</p>
          <div className="flex flex-wrap gap-[8px]">
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Resultados</p>
            </div>
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Behind the scenes</p>
            </div>
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Educación</p>
            </div>
            <div className="bg-[#f0f0f0] px-[12px] py-[6px] rounded-[100px]">
              <p className="font-['MD_IO:Regular',sans-serif] text-[14px] text-black">Casos de éxito</p>
            </div>
          </div>
        </div>
        
        {/* Button */}
        <button className="bg-[#2d2d2d] text-white py-[14px] rounded-[8px] w-full font-['MD_IO:Regular',sans-serif] text-[16px] mt-[8px]">
          Confirmar perfil
        </button>
      </div>
    </div>
  );
}
