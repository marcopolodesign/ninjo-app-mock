import AgentMessage from './AgentMessage';
import UserBubble from './UserBubble';
import ChipGroup from './ChipGroup';
import ConnectCard from './ConnectCard';
import ProfileCard from './ProfileCard';
import ServiceCard from './ServiceCard';
import FinalCard from './FinalCard';

interface Message {
  type: 'user' | 'agent';
  text: string;
}

interface ChatInterfaceProps {
  messages: Message[];
}

export default function ChatInterface({ messages }: ChatInterfaceProps) {
  // Show demo conversation if no messages yet
  const showDemoConversation = messages.length === 0;

  if (showDemoConversation) {
    return (
      <div className="flex-1 overflow-y-auto px-[16px] pb-[200px] pt-[20px]">
        <div className="flex flex-col gap-[16px]">
          <AgentMessage text="Hola 👋 Soy tu ninjō. ¿Cómo te llamás y qué hacés?" />
          
          <UserBubble text="Juan, tengo una mentoría de negocios" />
          
          <AgentMessage text="¿Y cuál es tu @instagram?" />
          
          <UserBubble text="@tunegocio" />
          
          <AgentMessage text="¿Cuál es tu objetivo principal con ninjō?" />
          
          <ChipGroup 
            options={[
              "Cerrar más ventas por DMs",
              "Conseguir brand deals",
              "Crecer mi comunidad",
              "Todo junto"
            ]} 
          />
          
          <UserBubble text="Cerrar más ventas por DMs" />
          
          <AgentMessage text="Conectá tu cuenta de Instagram y voy a analizar tu perfil, tu audiencia y tu contenido." />
          
          <ConnectCard />
          
          <UserBubble text="listo" />
          
          <AgentMessage text="¡Perfecto! Ya analicé tu cuenta. Acá tenés un resumen — corregí lo que necesites y dale a confirmar." />
          
          <ProfileCard />
          
          <UserBubble text="Perfil revisado: @tunegocio" />
          
          <AgentMessage text="Ahora decime, ¿para qué te gustaría usar ninjō?" />
          
          <ServiceCard />
          
          <UserBubble text="🤖 Crear mi AI Setter" />
          
          <AgentMessage text="¡Genial! Tu AI Setter va a cerrar ventas por vos 🤖 ¿Cuál es el objetivo principal?" />
          
          <ChipGroup 
            options={[
              "Agendar llamadas",
              "Vender directamente en DMs",
              "Enviar al link de pago"
            ]} 
          />
          
          <UserBubble text="Agendar llamadas" />
          
          <AgentMessage text="¿Cómo querés que suene tu AI Setter?" />
          
          <ChipGroup 
            options={[
              "Profesional y formal",
              "Cercano y conversacional",
              "Directo y urgente"
            ]} 
          />
          
          <UserBubble text="Profesional y formal" />
          
          <AgentMessage text="¿Tenés algún link clave que el Setter deba compartir?" />
          
          <UserBubble text="sí, te mando el calendly" />
          
          <AgentMessage text="Contame brevemente qué vendés, para que el Setter lo entienda." />
          
          <UserBubble text="Mentoría de 10 semanas" />
          
          <AgentMessage text="¡Listo! Ya tengo todo lo que necesito para configurar tu ninjō. 🎉" />
          
          <AgentMessage text="Tu AI Growth Operator está listo para operar." />
          
          <FinalCard />
        </div>
      </div>
    );
  }

  // Show user's actual messages
  return (
    <div className="flex-1 overflow-y-auto px-[16px] pb-[200px] pt-[20px]">
      <div className="flex flex-col gap-[16px]">
        {messages.map((message, index) => (
          message.type === 'user' ? (
            <UserBubble key={index} text={message.text} />
          ) : (
            <AgentMessage key={index} text={message.text} />
          )
        ))}
      </div>
    </div>
  );
}