import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X } from 'lucide-react';

export function IndividualConv({ 
  onClose, 
  agentName = "@youragent", 
  goal = "help you", 
  tone = "friendly", 
  product = "services" 
}: { 
  onClose: () => void;
  agentName?: string;
  goal?: string;
  tone?: string;
  product?: string;
}) {
  const [messages, setMessages] = useState<{ type: 'agent' | 'user', text: string, time: string }[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial Greeting
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        { 
          type: 'agent', 
          text: `Hey! I'm your AI assistant for ${agentName}. I noticed you're interested in ${product}. How can I help you today?`, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }
      ]);
    }, 500);
    return () => clearTimeout(timer);
  }, [agentName, product]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { type: 'user' as const, text: input, time };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    // Auto-reply simulation based on tone and goal
    setTimeout(() => {
      let reply = "";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("how much")) {
        reply = `I'd love to give you more details about the pricing for ${product}. Since my goal is to ${goal}, would you like to hop on a quick call or should I send you a link?`;
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        reply = `Hi there! I'm here to ${goal}. Are you looking to scale your business or just exploring?`;
      } else {
        reply = `That's interesting! As an AI agent designed to be ${tone}, I'm focused on helping you ${goal}. What else would you like to know about ${product}?`;
      }

      setMessages(prev => [...prev, { 
        type: 'agent', 
        text: reply, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-white font-mono-io overflow-hidden">
      {/* Header Area */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-[17px] font-bold uppercase tracking-tight">AI Clone test conversation</span>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
           <X className="w-5 h-5 text-zinc-400" />
        </button>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={cn("flex flex-col w-full", msg.type === 'user' ? "items-end" : "items-start")}>
            <div className={cn(
              "p-4 rounded-[20px] max-w-[85%] relative",
              msg.type === 'user' 
                ? "bg-[#FF8F40] text-white font-gt-america" 
                : "bg-zinc-100 text-zinc-800 font-mono-io"
            )}>
              <p className="text-[14px] leading-relaxed tracking-tight">{msg.text}</p>
              <span className={cn(
                "text-[9px] mt-2 block opacity-60",
                msg.type === 'user' ? "text-white" : "text-zinc-400"
              )}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-zinc-100 bg-[#fafafa] pb-10">
        <div className="bg-white border border-zinc-300 rounded-[12px] flex items-center p-3 gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Write a message..."
            className="flex-1 bg-transparent outline-none text-sm font-gt-america"
          />
          <button onClick={handleSend} className="text-black hover:scale-110 transition-transform">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
