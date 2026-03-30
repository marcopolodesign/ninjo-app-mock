import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ListFilter, Bell, ArrowLeft, Send } from 'lucide-react';
import svgPathsList from '../../imports/svg-f5pypiygoj';
import svgPathsDetail from '../../imports/svg-yhhju838t0';

interface Message {
  id: string;
  text: string;
  time: string;
  isMe: boolean;
  type?: 'default' | 'agent' | 'status';
}

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  platform: string;
  unread?: boolean;
  initials: string;
  messages: Message[];
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    name: 'Alex Turner',
    lastMessage: 'Quiero vivir de eso, como hasta el día de hoy...',
    time: '2h',
    platform: 'INSTAGRAM',
    unread: true,
    initials: 'A',
    messages: [
      { id: '1', text: 'perfecto loco, me alegra que quieras ver un poco de esto. vos alguna vez compraste o vendiste algún autito o sería todo nuevo?', time: '11:00', isMe: true },
      { id: '2', text: 'Buenas , sisi siempre estoy comprando y vendiendo vehículos', time: '11:01', isMe: false },
      { id: '3', text: 'bien ahí! y lo ves más como un ingreso extra o te gustaría hacerlo a largo plazo? contame un poco más de tus planes.', time: '11:02', isMe: true },
      { id: '4', text: 'Quiero vivir de eso, como hasta el día de hoy,igualmente tengo taller y me dedico al gnc. Pero quiero meterme de “lleno” en el compra y venta', time: '11:03', isMe: false },
      { id: '5', text: 'Me sirve', time: '11:04', isMe: false },
      { id: '6', text: 'joya! pasame tu número y te contactamos para charlarlo mejor. cualquier cosa, avisame!', time: '11:05', isMe: true },
    ]
  },
  {
    id: '2',
    name: 'Emily Ratajkowski',
    lastMessage: 'Siempre estoy buscando nuevas oportunidades para explorar...',
    time: '1h',
    platform: 'INSTAGRAM',
    unread: false,
    initials: 'C',
    messages: [
      { id: '1', text: 'Hi Emily, saw your latest post. Great content!', time: '12:00', isMe: true },
      { id: '2', text: 'Always looking for new opportunities to explore my creativity.', time: '12:15', isMe: false },
    ]
  },
  {
    id: '3',
    name: 'John Doe',
    lastMessage: 'Mis planes para el futuro incluyen diversificar...',
    time: '2h',
    platform: 'INSTAGRAM',
    unread: true,
    initials: 'D',
    messages: [
      { id: '1', text: 'What are your plans for the next quarter?', time: '09:00', isMe: true },
      { id: '2', text: 'Mis planes para el futuro incluyen diversificar mis inversiones.', time: '10:00', isMe: false },
    ]
  },
  {
    id: '4',
    name: 'Jane Smith',
    lastMessage: 'Estoy experimentando con un nuevo enfoque...',
    time: '3h',
    platform: 'INSTAGRAM',
    unread: false,
    initials: 'E',
    messages: []
  },
  {
    id: '5',
    name: 'Michael Johnson',
    lastMessage: 'Me gustaría empezar un podcast sobre...',
    time: '3h 5m',
    platform: 'INSTAGRAM',
    unread: true,
    initials: 'F',
    messages: []
  },
  {
    id: '6',
    name: 'Sara Connor',
    lastMessage: 'Estoy colaborando con artistas locales...',
    time: '45m',
    platform: 'INSTAGRAM',
    unread: false,
    initials: 'G',
    messages: []
  },
  {
    id: '7',
    name: 'David Beckham',
    lastMessage: 'Estoy trabajando en una iniciativa...',
    time: '10m',
    platform: 'INSTAGRAM',
    unread: false,
    initials: 'H',
    messages: []
  },
  {
    id: '8',
    name: 'Leo Messi',
    lastMessage: 'Everything ready for the next match.',
    time: '5m',
    platform: 'INSTAGRAM',
    unread: true,
    initials: 'L',
    messages: []
  },
  {
    id: '9',
    name: 'Elon Musk',
    lastMessage: 'Mars is the future.',
    time: '12h',
    platform: 'X',
    unread: false,
    initials: 'M',
    messages: []
  },
  {
    id: '10',
    name: 'Taylor Swift',
    lastMessage: 'New era starts now.',
    time: '1d',
    platform: 'INSTAGRAM',
    unread: false,
    initials: 'T',
    messages: []
  },
];

export function ConversationsInbox() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedConv = MOCK_CONVERSATIONS.find(c => c.id === selectedId);

  if (selectedId && selectedConv) {
    return (
      <ConversationDetail 
        conversation={selectedConv} 
        onBack={() => setSelectedId(null)} 
      />
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f5f5f5] animate-in fade-in duration-500">
      {/* Header */}
      <div className="px-4 py-4 space-y-4 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        {null}

        {/* Search & Filter */}
        <div className="flex gap-3">
          <div className="flex-1 bg-[#d9d9d9]/30 rounded-xl px-3 py-2.5 flex items-center gap-2 border border-black/5">
            <Search className="w-4 h-4 text-black/60" />
            <input 
              type="text" 
              placeholder="SEARCH" 
              className="bg-transparent border-none outline-none text-[12px] font-gt-america uppercase w-full placeholder:text-black/40"
            />
          </div>
          <button className="size-10 rounded-full border border-[#d9d9d9] flex items-center justify-center hover:bg-black/5 transition-colors">
             <ListFilter className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {['ALL', 'UNREAD', 'NEEDS ATTENTION'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-6 py-2 rounded-xl text-[12px] font-gt-america uppercase transition-all ${
                i === 0 ? 'bg-[#0088ff]/10 text-[#0088ff] font-medium' : 'bg-[#edeaea] text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        {MOCK_CONVERSATIONS.map((conv) => (
          <button 
            key={conv.id}
            onClick={() => setSelectedId(conv.id)}
            className="w-full bg-white border border-[#d9d9d9] rounded-2xl p-4 flex gap-3.5 hover:border-black/20 transition-all text-left group active:scale-[0.98]"
          >
            <div className="size-12 rounded-full border border-black/10 flex items-center justify-center bg-zinc-50 shrink-0 font-gt-america text-[13px]">
              {conv.initials}
            </div>
            <div className="flex-1 flex flex-col gap-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[16.5px] font-gt-america font-light tracking-tight">{conv.name}</span>
                <div className="flex items-center gap-1">
                  {conv.unread && (
                    <div className="size-2 bg-[#ff8f40] rounded-full mr-1" />
                  )}
                  <span className="text-[11px] text-black/40 font-gt-america">{conv.time}</span>
                </div>
              </div>
              <p className="text-[13.5px] text-[#585858] font-gt-america leading-tight line-clamp-2">
                {conv.lastMessage}
              </p>
              <div className="mt-2">
                <span className="bg-[#ffb5b7] text-[#570300] text-[9px] px-2 py-1 rounded font-medium font-gt-america">
                  {conv.platform}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ConversationDetail({ conversation, onBack }: { conversation: Conversation, onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-500">
      {/* Detail Header */}
      <div className="px-4 py-6 border-b border-[#d9d9d9] flex items-center gap-4 bg-white shrink-0">
        <button onClick={onBack} className="p-1 hover:bg-zinc-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-[17px] font-gt-america font-medium uppercase tracking-tight truncate">{conversation.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Mock Badge */}
        <div className="flex flex-col gap-2 items-start w-fit">
          <div className="border border-[#585858] rounded-xl px-3 py-2">
            <p className="text-[14px] text-[#585858] font-medium font-gt-america">Flip</p>
            <p className="text-[9px] text-[#a5a5a5]">11:00</p>
          </div>
        </div>

        {conversation.messages.length > 0 ? (
          conversation.messages.map((msg) => (
            <div key={msg.id} className={`flex w-full ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-4 flex flex-col gap-2 ${
                msg.isMe 
                  ? 'bg-[#ff8f40] text-white' 
                  : 'bg-white border border-[#585858] text-[#585858]'
              }`}>
                <p className="text-[14px] font-gt-america leading-normal">{msg.text}</p>
                <span className={`text-[9px] ${msg.isMe ? 'text-white/70' : 'text-[#a5a5a5]'}`}>{msg.time}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-[#a5a5a5] gap-2">
            <p className="text-sm font-gt-america">No messages yet</p>
          </div>
        )}

        {/* Example status badge from Figma */}
        {conversation.id === '1' && (
          <div className="flex items-center gap-2.5 bg-[#b5f6ac] px-3 py-1.5 rounded-full w-fit">
             <div className="size-4.5 rounded-full bg-white flex items-center justify-center">
                <div className="size-2 rounded-full bg-green-500" />
             </div>
             <p className="text-[11px] font-gt-america italic italic-medium text-black">Aura IG marcó el objetivo como cumplido</p>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 pb-8 bg-[#fafafa] border-t border-[#d9d9d9]">
        <div className="bg-white border border-[#585858] rounded-xl flex items-center px-4 py-3 gap-3">
          <input 
            type="text" 
            placeholder="Escribe un mensaje" 
            className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#585858] font-gt-america"
          />
          <button className="p-1 hover:scale-110 transition-transform">
            <Send className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
