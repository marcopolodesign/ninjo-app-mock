import React from 'react';
import { Play } from 'lucide-react';

interface Chat {
  id: string;
  title: string;
  unread?: boolean;
  isSimulation?: boolean;
}

interface AllChatsViewProps {
  chats: Chat[];
  onSelectChat: (id: string) => void;
}

export function AllChatsView({ chats, onSelectChat }: AllChatsViewProps) {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex flex-col divide-y divide-zinc-100">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className="flex items-center justify-between px-6 py-4 text-left hover:bg-zinc-50 transition-colors w-full"
          >
            <span className="flex items-center gap-2 text-[14px] font-gt-america tracking-tight text-zinc-700 truncate">
              {chat.isSimulation && <Play className="w-3 h-3 text-[#FF8F40] shrink-0" />}
              {chat.title}
            </span>
            {chat.unread && (
              <span className="w-2 h-2 bg-[#FF8F40] rounded-full shrink-0 ml-3" />
            )}
          </button>
        ))}
        {chats.length === 0 && (
          <p className="px-6 py-10 text-[13px] font-gt-america text-zinc-400 text-center">No chats yet.</p>
        )}
      </div>
    </div>
  );
}
