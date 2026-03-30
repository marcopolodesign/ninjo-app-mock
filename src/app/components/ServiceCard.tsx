export default function ServiceCard() {
  const services = [
    { emoji: '🚀', title: 'Escalar mi negocio', subtitle: 'Plan de crecimiento completo' },
    { emoji: '🤖', title: 'Crear mi AI Setter', subtitle: 'Automatizar ventas en DMs' },
    { emoji: '📢', title: 'Correr anuncios', subtitle: 'Campañas en Meta Ads' },
    { emoji: '🎨', title: 'Crear contenido', subtitle: 'Stories, reels y carousels' },
    { emoji: '⚡', title: 'Full Growth Partner', subtitle: 'Todo junto, la experiencia completa' },
  ];

  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[12px] overflow-hidden">
      {/* Header */}
      <div className="bg-[#2d2d2d] px-[16px] py-[12px]">
        <p className="font-['MD_IO:Regular',sans-serif] text-[15px] text-white tracking-[-0.3px]">
          ¿Qué servicio necesitás?
        </p>
      </div>
      
      {/* Body */}
      <div className="divide-y divide-[#e0e0e0]">
        {services.map((service, index) => (
          <button 
            key={index}
            className="w-full px-[16px] py-[14px] flex items-center gap-[12px] hover:bg-[#f9f9f9] transition-colors text-left"
          >
            <span className="text-[24px]">{service.emoji}</span>
            <div className="flex flex-col gap-[2px] flex-1">
              <p className="font-['MD_IO:Regular',sans-serif] text-[16px] text-black">
                {service.title}
              </p>
              <p className="font-['MD_IO:Regular',sans-serif] text-[13px] text-[#585858]">
                {service.subtitle}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
