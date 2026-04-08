import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, Bell, Lock, LogOut, ChevronRight, Smartphone, Cable, ArrowLeft, BookOpen, Zap, Users, Sparkles } from 'lucide-react';

interface ProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConnections?: () => void;
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A"/>
      <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
      <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D"/>
      <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E"/>
      <path d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.042.031.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function NinjoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 21" fill="none">
      <path d="M7.83887 5.17969C8.10496 4.64746 8.8649 4.64763 9.13086 5.17969L11.0293 8.97656C11.2441 9.4069 11.5929 9.75579 12.0225 9.9707H12.0234L15.8203 11.8691C16.3526 12.1352 16.3526 12.895 15.8203 13.1611L12.0234 15.0596C11.6472 15.2476 11.3328 15.5384 11.1162 15.8965L11.0293 16.0537L9.13086 19.8506C8.86491 20.3826 8.10495 20.3827 7.83887 19.8506L5.94043 16.0537C5.72555 15.6235 5.37646 15.2744 4.94629 15.0596L1.14941 13.1611C0.617219 12.895 0.617221 12.1352 1.14941 11.8691L4.94629 9.9707C5.3762 9.75575 5.72552 9.40684 5.94043 8.97656L7.83887 5.17969Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

const HANDOFF_CHANNEL_ICONS: Record<string, React.ReactNode> = {
  slack: <SlackIcon />,
  whatsapp: <WhatsAppIcon />,
  discord: <DiscordIcon />,
  telegram: <TelegramIcon />,
  ninjo: <NinjoIcon />,
};

const HANDOFF_CHANNEL_COLORS: Record<string, string> = {
  slack: '#4A154B',
  whatsapp: '#25D366',
  discord: '#5865F2',
  telegram: '#2AABEE',
  ninjo: '#FF8F40',
};

export function ProfileSheet({ isOpen, onClose, onOpenConnections }: ProfileSheetProps) {
  const [haptic, setHaptic] = useState(true);
  const [showNinjoGo, setShowNinjoGo] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [handoffChannels, setHandoffChannels] = useState([
    { id: 'slack',    name: 'Slack',     enabled: true  },
    { id: 'whatsapp', name: 'WhatsApp',  enabled: true  },
    { id: 'discord',  name: 'Discord',   enabled: false },
    { id: 'telegram', name: 'Telegram',  enabled: false },
    { id: 'ninjo',    name: 'Ninjo App', enabled: true  },
  ]);

  const toggleChannel = (id: string) => {
    setHandoffChannels(prev => prev.map(ch => ch.id === id ? { ...ch, enabled: !ch.enabled } : ch));
  };

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#1c1c1e] rounded-[12px] overflow-hidden divide-y divide-white/5">
      {children}
    </div>
  );

  const InfoRow = ({ label, value, muted = false }: { label: string; value: string; muted?: boolean }) => (
    <div className="px-4 py-3.5 flex items-center justify-between">
      <span className="text-[13px] font-mono-io uppercase tracking-widest text-zinc-500">{label}</span>
      <span className={`text-[15px] font-gt-america ${muted ? 'text-zinc-400' : 'text-white'}`}>{value}</span>
    </div>
  );

  const ActionRow = ({
    icon: Icon,
    label,
    value,
    danger = false,
    onClick,
    right,
  }: {
    icon: React.ElementType;
    label: string;
    value?: string;
    danger?: boolean;
    onClick?: () => void;
    right?: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3.5 px-4 py-3.5 hover:bg-white/5 transition-colors text-left"
    >
      <div className="w-7 h-7 rounded-[7px] bg-white/10 flex items-center justify-center shrink-0">
        <Icon className={`w-3.5 h-3.5 ${danger ? 'text-red-400' : 'text-zinc-300'}`} />
      </div>
      <span className={`flex-1 text-[15px] font-gt-america ${danger ? 'text-red-400' : 'text-white'}`}>{label}</span>
      {value && <span className="text-[14px] font-gt-america text-zinc-500 mr-1">{value}</span>}
      {right}
      {!right && !danger && <ChevronRight className="w-4 h-4 text-zinc-600 shrink-0" />}
    </button>
  );


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0, height: (showNinjoGo || showLearn) ? '100%' : '90%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed bottom-0 left-0 right-0 z-[70] bg-[#111111] overflow-hidden"
            style={{ borderRadius: (showNinjoGo || showLearn) ? 0 : '24px 24px 0 0' }}
          >
            <AnimatePresence mode="wait">
              {showLearn ? (
                <motion.div
                  key="learn"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                  className="flex flex-col h-full"
                >
                  {/* Sub-page header */}
                  <div className="flex items-center gap-3 px-5 pt-14 pb-4 shrink-0">
                    <button
                      onClick={() => setShowLearn(false)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                    >
                      <ArrowLeft className="w-4 h-4 text-white" />
                    </button>
                    <div className="flex flex-col">
                      <span className="text-[17px] font-mono-io uppercase tracking-widest text-white leading-tight">Learning Library</span>
                      <span className="text-[12px] font-gt-america text-zinc-500 leading-tight">Tutorials & best practices</span>
                    </div>
                  </div>

                  {/* Sub-page content */}
                  <div className="overflow-y-auto flex-1 pb-16">
                    <div className="px-4 pt-2 pb-8 flex flex-col gap-5">

                      {/* Discord banner */}
                      <div className="bg-[#5865F2]/20 border border-[#5865F2]/30 rounded-[12px] p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-[10px] bg-[#5865F2] flex items-center justify-center shrink-0">
                          <DiscordIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-gt-america font-semibold text-white leading-snug">Join our client community</p>
                          <p className="text-[12px] font-gt-america text-zinc-400 leading-snug mt-0.5">Share strategies, get support</p>
                        </div>
                        <button className="shrink-0 bg-[#5865F2] px-3 py-2 rounded-[8px] text-[12px] font-mono-io uppercase tracking-wider text-white">
                          Join
                        </button>
                      </div>

                      {/* Category cards */}
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { icon: Zap, label: 'Quick Start', sub: 'Get running in 5 min' },
                          { icon: Users, label: 'Use Cases', sub: 'See how creators scale' },
                          { icon: Sparkles, label: 'Pro Tips', sub: 'Advanced strategies' },
                        ].map(({ icon: Icon, label, sub }) => (
                          <button
                            key={label}
                            className="bg-[#1c1c1e] rounded-[12px] p-3 flex flex-col gap-2 hover:bg-white/5 transition-colors text-left"
                          >
                            <div className="w-7 h-7 rounded-[7px] bg-[#FF8F40]/20 flex items-center justify-center">
                              <Icon className="w-3.5 h-3.5 text-[#FF8F40]" />
                            </div>
                            <div>
                              <p className="text-[13px] font-gt-america font-semibold text-white leading-snug">{label}</p>
                              <p className="text-[11px] font-gt-america text-zinc-500 leading-snug mt-0.5">{sub}</p>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Video tutorials */}
                      <div className="flex flex-col gap-3">
                        <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">Video Tutorials</span>
                        {[
                          { emoji: '🚀', duration: '4:32', title: 'Getting Started with Ninjō', desc: 'Set up your AI Growth Operator in minutes', bg: 'bg-orange-950/40' },
                          { emoji: '🤖', duration: '8:15', title: 'Training Your AI Setter', desc: 'Customize your AI to match your voice and close more deals', bg: 'bg-zinc-800/60' },
                          { emoji: '📈', duration: '12:08', title: 'Scaling with Meta Ads', desc: 'Let your AI Media Buyer optimize campaigns automatically', bg: 'bg-red-950/40' },
                        ].map(({ emoji, duration, title, desc, bg }) => (
                          <button
                            key={title}
                            className="bg-[#1c1c1e] rounded-[12px] overflow-hidden hover:bg-white/5 transition-colors text-left w-full"
                          >
                            <div className={`${bg} h-28 flex items-center justify-center relative`}>
                              <span className="text-4xl">{emoji}</span>
                              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded-[5px]">
                                <span className="text-[11px] font-mono-io text-white">{duration}</span>
                              </div>
                            </div>
                            <div className="px-3.5 py-3">
                              <p className="text-[14px] font-gt-america font-semibold text-white leading-snug">{title}</p>
                              <p className="text-[12px] font-gt-america text-zinc-500 mt-1 leading-snug">{desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              ) : showNinjoGo ? (
                <motion.div
                  key="ninjogo"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                  className="flex flex-col h-full"
                >
                  {/* Sub-page header */}
                  <div className="flex items-center gap-3 px-5 pt-14 pb-4 shrink-0">
                    <button
                      onClick={() => setShowNinjoGo(false)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                    >
                      <ArrowLeft className="w-4 h-4 text-white" />
                    </button>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 leading-tight">Handoff Channels</span>
                      <span className="text-[17px] font-mono-io uppercase tracking-widest text-white leading-tight">Ninjo Go®</span>
                    </div>
                  </div>

                  {/* Sub-page content */}
                  <div className="overflow-y-auto flex-1 pb-16">
                    <div className="px-4 pt-2 pb-8 flex flex-col gap-5">
                      <p className="text-[13px] font-gt-america text-zinc-400 leading-relaxed px-1">
                        Choose where Ninjo sends you hot lead alerts, handoff requests, and daily summaries. You can enable multiple channels.
                      </p>
                      <Card>
                        {handoffChannels.map((ch) => (
                          <button
                            key={ch.id}
                            className="w-full flex items-center gap-3.5 px-4 py-3.5 hover:bg-white/5 transition-colors text-left"
                          >
                            <div
                              className="w-7 h-7 rounded-[7px] flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${HANDOFF_CHANNEL_COLORS[ch.id]}22` }}
                            >
                              <span style={{ color: HANDOFF_CHANNEL_COLORS[ch.id] }}>
                                {HANDOFF_CHANNEL_ICONS[ch.id]}
                              </span>
                            </div>
                            <span className="flex-1 text-[15px] font-gt-america text-white">{ch.name}</span>
                            <button
                              onClick={(e) => { e.stopPropagation(); toggleChannel(ch.id); }}
                              className={`w-12 h-7 rounded-full transition-colors shrink-0 relative ${ch.enabled ? 'bg-[#FF8F40]' : 'bg-zinc-600'}`}
                            >
                              <motion.div
                                animate={{ x: ch.enabled ? 20 : 2 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
                              />
                            </button>
                          </button>
                        ))}
                      </Card>
                      <span className="text-[11px] font-mono-io text-zinc-500 px-1">
                        {handoffChannels.filter(c => c.enabled).length} of {handoffChannels.length} channels active
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="settings"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                  className="flex flex-col h-full"
                >
                  {/* Handle */}
                  <div className="flex justify-center pt-3 pb-1 shrink-0">
                    <div className="w-10 h-1 rounded-full bg-white/20" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3 shrink-0">
                    <button
                      onClick={onClose}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                    <span className="text-[17px] font-mono-io uppercase tracking-widest text-white">Settings</span>
                    <div className="w-8 h-8" />
                  </div>

                  {/* Scrollable content */}
                  <div className="overflow-y-auto h-full pb-16">
              <div className="px-4 pt-2 pb-8 flex flex-col gap-5">

                {/* Profile */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">Profile</span>
                  <Card>
                    <InfoRow label="Name" value="Mateo Aldao" />
                    <InfoRow label="Email" value="mateoaldao@gmail.com" muted />
                    <InfoRow label="Phone" value="+54 11 xxxx xxxx" muted />
                  </Card>
                </div>

                {/* Integrations */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">Integrations</span>
                  <Card>
                    <ActionRow
                      icon={Cable}
                      label="Connections"
                      onClick={() => { onClose(); onOpenConnections?.(); }}
                    />
                  </Card>
                </div>

                {/* Ninjo Go® entry */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">Handoff Channels</span>
                  <Card>
                    <button
                      onClick={() => setShowNinjoGo(true)}
                      className="w-full flex items-center gap-3.5 px-4 py-3.5 hover:bg-white/5 transition-colors text-left"
                    >
                      <div className="w-7 h-7 rounded-[7px] flex items-center justify-center shrink-0 bg-[#FF8F40]/20">
                        <span className="text-[#FF8F40]"><NinjoIcon /></span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[15px] font-gt-america text-white">Ninjo Go®</p>
                        <p className="text-[12px] font-gt-america text-zinc-500 mt-0.5">
                          {handoffChannels.filter(c => c.enabled).length} of {handoffChannels.length} active
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-600 shrink-0" />
                    </button>
                  </Card>
                </div>

                {/* Learn */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">Learn</span>
                  <Card>
                    <button
                      onClick={() => setShowLearn(true)}
                      className="w-full flex items-center gap-3.5 px-4 py-3.5 hover:bg-white/5 transition-colors text-left"
                    >
                      <div className="w-7 h-7 rounded-[7px] flex items-center justify-center shrink-0 bg-[#FF8F40]/20">
                        <BookOpen className="w-3.5 h-3.5 text-[#FF8F40]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[15px] font-gt-america text-white">Learning Library</p>
                        <p className="text-[12px] font-gt-america text-zinc-500 mt-0.5">Tutorials & best practices</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-600 shrink-0" />
                    </button>
                  </Card>
                </div>

                {/* Current Plan */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">Membership</span>
                  <div className="bg-[#1c1c1e] rounded-[12px] p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[22px] font-gt-america font-semibold text-white">Max Plan</span>
                      <div className="bg-[#FF8F40]/20 px-2.5 py-1 rounded-full">
                        <span className="text-[10px] font-mono-io uppercase tracking-widest text-[#FF8F40]">Active</span>
                      </div>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-gt-america text-zinc-400">Billing cycle</span>
                      <span className="text-[13px] font-gt-america text-white">Monthly · Apr 15</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-gt-america text-zinc-400">Tokens used</span>
                        <span className="text-[13px] font-gt-america text-white tabular-nums">20%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF8F40] rounded-full" style={{ width: '20%' }} />
                      </div>
                    </div>
                    <button className="mt-1 w-full border border-white/10 rounded-[10px] py-2.5 text-[12px] font-mono-io uppercase tracking-widest text-zinc-300 hover:bg-white/5 transition-colors">
                      Manage Membership
                    </button>
                  </div>
                </div>

                {/* Usage */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">Usage this month</span>
                  <div className="bg-[#1c1c1e] rounded-[12px] p-4 flex flex-col gap-3">
                    {[
                      { label: 'Messages sent by agent', value: '3,840' },
                      { label: 'Conversations handled', value: '1,240' },
                      { label: 'Assets created', value: '28' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-[13px] font-gt-america text-zinc-400">{label}</span>
                        <span className="text-[13px] font-gt-america text-white tabular-nums">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferences */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 px-1">Preferences</span>
                  <Card>
                    <ActionRow icon={Globe} label="Speech language" value="EN" />
                    <ActionRow icon={Bell} label="Notifications" />
                    <ActionRow
                      icon={Lock}
                      label="Privacy"
                      onClick={() => window.open('https://ninjo.ai/privacy', '_blank')}
                      right={null}
                    />
                  </Card>
                </div>

                {/* Haptic */}
                <Card>
                  <ActionRow
                    icon={Smartphone}
                    label="Haptic feedback"
                    right={
                      <button
                        onClick={(e) => { e.stopPropagation(); setHaptic(v => !v); }}
                        className={`w-12 h-7 rounded-full transition-colors shrink-0 relative ${haptic ? 'bg-blue-500' : 'bg-zinc-600'}`}
                      >
                        <motion.div
                          animate={{ x: haptic ? 20 : 2 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
                        />
                      </button>
                    }
                  />
                </Card>

                {/* Log out */}
                <Card>
                  <ActionRow icon={LogOut} label="Log out" danger />
                </Card>

              </div>
                </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
