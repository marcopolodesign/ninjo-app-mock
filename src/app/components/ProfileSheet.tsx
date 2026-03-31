import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, User, CreditCard, BarChart2, SlidersHorizontal,
  Plug, Shield, Moon, Globe, Bell, Lock, Link, LogOut,
  ChevronRight, Smartphone
} from 'lucide-react';

interface ProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileSheet({ isOpen, onClose }: ProfileSheetProps) {
  const [haptic, setHaptic] = useState(true);

  const Section = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#1c1c1e] rounded-[12px] overflow-hidden divide-y divide-white/5">
      {children}
    </div>
  );

  const Row = ({
    icon: Icon,
    label,
    value,
    chevron = true,
    danger = false,
    right,
  }: {
    icon: React.ElementType;
    label: string;
    value?: string;
    chevron?: boolean;
    danger?: boolean;
    right?: React.ReactNode;
  }) => (
    <button className="w-full flex items-center gap-3.5 px-4 py-3.5 hover:bg-white/5 transition-colors text-left">
      <div className="w-7 h-7 rounded-[7px] bg-white/10 flex items-center justify-center shrink-0">
        <Icon className={`w-3.5 h-3.5 ${danger ? 'text-red-400' : 'text-zinc-300'}`} />
      </div>
      <span className={`flex-1 text-[15px] font-gt-america ${danger ? 'text-red-400' : 'text-white'}`}>{label}</span>
      {value && <span className="text-[14px] font-gt-america text-zinc-500 mr-1">{value}</span>}
      {right}
      {chevron && !right && <ChevronRight className="w-4 h-4 text-zinc-600 shrink-0" />}
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
              <span className="text-[17px] font-gt-america font-semibold text-white">Settings</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[13px] font-gt-america text-white">i</span>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto h-full pb-16">
              <div className="px-4 pt-2 pb-8 flex flex-col gap-5">

                {/* Email pill */}
                <div className="bg-[#1c1c1e] rounded-[12px] px-4 py-3.5">
                  <span className="text-[15px] font-gt-america text-white">mateoaldao@gmail.com</span>
                </div>

                {/* Account */}
                <Section>
                  <Row icon={User} label="Profile" />
                </Section>

                {/* Membership card */}
                <div className="bg-[#1c1c1e] rounded-[16px] p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-gt-america text-zinc-500 uppercase tracking-widest">Current plan</span>
                      <span className="text-[20px] font-gt-america font-semibold text-white">Max Plan</span>
                    </div>
                    <div className="bg-[#FF8F40] px-3 py-1 rounded-full">
                      <span className="text-[11px] font-gt-america font-semibold text-white uppercase tracking-wide">Active</span>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center justify-between text-[13px] font-gt-america">
                    <span className="text-zinc-400">Billing cycle</span>
                    <span className="text-white">Monthly · Apr 15</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] font-gt-america">
                    <span className="text-zinc-400">Seats</span>
                    <span className="text-white">1 of 1 used</span>
                  </div>
                  <button className="mt-1 w-full border border-white/10 rounded-[10px] py-2.5 text-[13px] font-gt-america text-zinc-300 hover:bg-white/5 transition-colors">
                    Manage Membership
                  </button>
                </div>

                {/* Usage card */}
                <div className="bg-[#1c1c1e] rounded-[16px] p-4 flex flex-col gap-4">
                  <span className="text-[11px] font-gt-america text-zinc-500 uppercase tracking-widest">Usage this month</span>

                  {/* Conversations */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[13px] font-gt-america">
                      <span className="text-zinc-400">Conversations handled</span>
                      <span className="text-white">1,240</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF8F40] rounded-full" style={{ width: '62%' }} />
                    </div>
                    <span className="text-[11px] font-gt-america text-zinc-600">62% of monthly limit</span>
                  </div>

                  {/* Leads */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[13px] font-gt-america">
                      <span className="text-zinc-400">Leads qualified</span>
                      <span className="text-white">318</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }} />
                    </div>
                    <span className="text-[11px] font-gt-america text-zinc-600">42% of monthly limit</span>
                  </div>

                  {/* Scheduled tasks */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[13px] font-gt-america">
                      <span className="text-zinc-400">Scheduled tasks run</span>
                      <span className="text-white">47</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '20%' }} />
                    </div>
                    <span className="text-[11px] font-gt-america text-zinc-600">20% of monthly limit</span>
                  </div>

                  <div className="h-px bg-white/10" />
                  <div className="flex items-center justify-between text-[13px] font-gt-america">
                    <span className="text-zinc-400">Resets in</span>
                    <span className="text-white">16 days</span>
                  </div>
                </div>

                {/* Operator */}
                <Section>
                  <Row icon={SlidersHorizontal} label="Capabilities" />
                  <Row icon={Plug} label="Connectors" />
                  <Row icon={Shield} label="Permissions" />
                </Section>

                {/* Preferences */}
                <Section>
                  <Row icon={Moon} label="Appearance" value="System" />
                  <Row icon={Globe} label="Speech language" value="EN" />
                  <Row icon={Bell} label="Notifications" />
                  <Row icon={Lock} label="Privacy" />
                  <Row icon={Link} label="Shared links" />
                </Section>

                {/* Haptic */}
                <Section>
                  <Row
                    icon={Smartphone}
                    label="Haptic feedback"
                    chevron={false}
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
                </Section>

                {/* Log out */}
                <Section>
                  <Row icon={LogOut} label="Log out" danger chevron={false} />
                </Section>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
