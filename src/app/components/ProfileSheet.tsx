import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, Bell, Lock, LogOut, ChevronRight, Smartphone, Cable } from 'lucide-react';

interface ProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConnections?: () => void;
}

export function ProfileSheet({ isOpen, onClose, onOpenConnections }: ProfileSheetProps) {
  const [haptic, setHaptic] = useState(true);

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
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed bottom-0 left-0 right-0 z-[70] bg-[#111111] rounded-t-[24px] overflow-hidden"
            style={{ height: '90%' }}
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

                {/* Connections */}
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
        </>
      )}
    </AnimatePresence>
  );
}
