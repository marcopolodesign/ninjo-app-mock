import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Play } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  time: string;
  isMe: boolean; // true = user (operator/setter), false = AI (customer)
}

// Scripted customer replies — realistic DM prospect flow
const CUSTOMER_SCRIPT: string[] = [
  "Hola! Vi tu post y me interesó bastante, ¿de qué se trata exactamente?",
  "Ah okey, ¿y cómo funciona? ¿Es algo que puedo hacer solo o necesito ayuda?",
  "¿Y cuánto cuesta más o menos? ¿Hay algún plan o paquete?",
  "Mmm, suena bien. ¿Tenés casos de éxito o algo que me puedas mostrar?",
  "Sí, me interesa. ¿Cómo seguimos? ¿Podemos hablar por llamada?",
  "Dale, ¿qué horarios tenés disponibles?",
];

function getTime(): string {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
}

export function RoleplayChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [scriptIndex, setScriptIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const startRoleplay = () => {
    setStarted(true);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages([{
        id: '0',
        text: CUSTOMER_SCRIPT[0],
        time: getTime(),
        isMe: false,
      }]);
      setScriptIndex(1);
    }, 1200);
  };

  const sendMessage = () => {
    const text = inputText.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text,
      time: getTime(),
      isMe: true,
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    if (scriptIndex < CUSTOMER_SCRIPT.length) {
      setIsTyping(true);
      const delay = 800 + Math.random() * 1200;
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          text: CUSTOMER_SCRIPT[scriptIndex],
          time: getTime(),
          isMe: false,
        }]);
        setScriptIndex(i => i + 1);
      }, delay);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputText.trim()) sendMessage();
  };

  return (
    <div className="flex flex-col h-full bg-white">

      {/* Simulation banner */}
      <div className="shrink-0 bg-[#FF8F40]/10 border-b border-[#FF8F40]/20 text-[#FF8F40] text-[11px] font-mono-io uppercase tracking-widest px-4 py-2 text-center">
        Simulation Mode — AI acting as a customer
      </div>

      {/* Customer "profile" header */}
      <div className="px-4 py-3 border-b border-[#e8e8e8] flex items-center gap-3 shrink-0 bg-white">
        <div className="size-9 rounded-full bg-zinc-100 border border-black/10 flex items-center justify-center text-[13px] font-gt-america font-medium shrink-0">
          C
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] font-gt-america font-medium tracking-tight">Customer</span>
          <span className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-widest">Prospect · Instagram DM</span>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">

        {!started ? (
          /* Start screen */
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center flex-1 gap-5 pb-10"
          >
            <div className="w-14 h-14 rounded-full bg-orange-50 border border-[#FF8F40]/20 flex items-center justify-center">
              <Play className="w-6 h-6 text-[#FF8F40] ml-0.5" />
            </div>
            <div className="flex flex-col items-center gap-1.5 text-center max-w-[260px]">
              <p className="text-[15px] font-mono-io text-black tracking-tight">Ready to test your Operator?</p>
              <p className="text-[12px] font-mono-io text-zinc-400 leading-relaxed">
                The AI will act as a customer reaching out via DM. You respond as the operator/setter.
              </p>
            </div>
            <button
              onClick={startRoleplay}
              className="bg-black text-white text-[12px] font-mono-io uppercase tracking-widest px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Start Roleplay
            </button>
          </motion.div>
        ) : (
          <>
            {/* Timestamp label */}
            <div className="flex justify-center">
              <span className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-widest">Today</span>
            </div>

            {/* Message bubbles */}
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex w-full ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 flex flex-col gap-1.5 ${
                    msg.isMe
                      ? 'bg-[#ff8f40] text-white'
                      : 'bg-white border border-[#d9d9d9] text-[#585858]'
                  }`}>
                    <p className="text-[14px] font-gt-america leading-snug">{msg.text}</p>
                    <span className={`text-[9px] self-end ${msg.isMe ? 'text-white/60' : 'text-[#a5a5a5]'}`}>
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-[#d9d9d9] rounded-2xl px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {scriptIndex >= CUSTOMER_SCRIPT.length && !isTyping && messages.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center"
              >
                <span className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-widest bg-zinc-50 border border-zinc-200 rounded-full px-3 py-1">
                  End of simulation
                </span>
              </motion.div>
            )}
          </>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {started && (
        <div className="p-4 pb-8 bg-[#fafafa] border-t border-[#d9d9d9] shrink-0">
          <div className="bg-white border border-[#585858] rounded-xl flex items-center px-4 py-3 gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Reply as the operator..."
              className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#585858] font-gt-america"
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim()}
              className="p-1 hover:scale-110 transition-transform disabled:opacity-30"
            >
              <Send className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
