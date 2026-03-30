import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../../imports/svg-2yu10lw4yv";

interface Story {
  id: string;
  label: string;
  content: string;
  imageUrl: string;
  type: string;
}

interface StorySequenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  stories: Story[];
  onApprove: () => void;
  onDiscard: () => void;
}

function StoryGalleryItem({ imageUrl, index }: { imageUrl: string, index: number }) {
  return (
    <div className="relative shrink-0 w-[200px] aspect-[9/16] rounded-[16px] overflow-hidden bg-zinc-100 group cursor-pointer transition-all hover:ring-2 hover:ring-black/10">
      <ImageWithFallback alt={`Slide ${index}`} className="absolute inset-0 object-cover size-full" src={imageUrl} />
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-[6px] border border-white/20">
         <p className="font-['MD_IO'] text-[10px] text-white uppercase tracking-tight font-medium">Slide {index + 1}</p>
      </div>
    </div>
  );
}

export function StorySequenceModal({ isOpen, onClose, title, stories, onApprove, onDiscard }: StorySequenceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-[2px]"
          />
          
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 h-[85vh] bg-white z-[101] rounded-t-[32px] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header / Top Gallery */}
            <div className="relative w-full h-[300px] bg-zinc-50 border-b border-[#f0f0f0] shrink-0">
              <div className="flex gap-4 overflow-x-auto no-scrollbar px-8 py-8 h-full items-center">
                {stories.map((story, idx) => (
                  <StoryGalleryItem key={story.id} imageUrl={story.imageUrl} index={idx} />
                ))}
                <div className="shrink-0 w-8" />
              </div>
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 size-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-zinc-100 text-black hover:bg-zinc-50 transition-all active:scale-95 z-20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Drag Handle */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-zinc-300 rounded-full opacity-50" />
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-10 pb-32">
              <div className="max-w-4xl mx-auto space-y-12">
                
                {/* 1. Gradient Insight Callout */}
                <div className="content-stretch flex gap-[15px] items-start p-[24px] relative rounded-[12px] border border-transparent" style={{ borderImage: "linear-gradient(150.609deg, rgb(151, 71, 255) 16.585%, rgb(255, 143, 64) 76.475%) 1" }}>
                   {/* Background simulation for the gradient border */}
                  <div className="absolute inset-0 rounded-[12px] border border-[#9747ff]/20 pointer-events-none" />
                  
                  <div className="bg-white overflow-clip relative shrink-0 size-[28px] mt-1">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                      <path d={svgPaths.pe80680} fill="url(#paint0_linear_modal)" />
                      <path d={svgPaths.p1cd967c0} stroke="white" strokeWidth="1.125" />
                      <path d={svgPaths.p3862b600} fill="white" />
                      <defs>
                        <linearGradient id="paint0_linear_modal" x1="-2.13406" x2="18.9436" y1="-0.826256" y2="22.5183" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9747FF" />
                          <stop offset="0.812465" stopColor="#FF8F40" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-['MD_IO'] text-[16px] leading-relaxed tracking-tight" style={{ 
                    backgroundImage: "linear-gradient(150.609deg, rgb(151, 71, 255) 16.585%, rgb(255, 143, 64) 76.475%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    This sequence about SaaS conversion will reach software founders and product managers, specifically tailored to your audience that regularly engages with your "Growth Hacks" series.
                  </p>
                </div>

                {/* 2. Target Audience Section */}
                <div className="space-y-4">
                  <p className="font-['MD_IO'] text-[11px] text-black tracking-widest uppercase">Target Audience</p>
                  <div className="bg-[#fafafa] border border-[#e0e0e0] rounded-[8px] p-[24px] space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="bg-[#18a805] px-4 py-2.5 rounded-[8px]">
                        <p className="font-['MD_IO'] text-[16px] text-white uppercase tracking-tight leading-tight">Founder<br/>Cohort</p>
                      </div>
                      <div className="flex items-start gap-4 text-black">
                        <span className="text-[64px] font-['MD_IO'] leading-none tracking-tighter">30%</span>
                        <p className="text-[11px] font-['MD_IO'] uppercase w-[80px] mt-2 leading-tight">Of total follower audience</p>
                      </div>
                    </div>
                    <p className="font-['MD_IO'] text-[14px] text-[#585858] leading-relaxed">
                      Followers who occasionally view content but rarely interact, showing minimal engagement (views, infrequent likes). This sequence is designed to "wake up" this segment.
                    </p>
                  </div>
                </div>

                {/* Grid for Agent & Interaction */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 3. Assigned Agent */}
                  <div className="space-y-4">
                    <p className="font-['MD_IO'] text-[11px] text-black tracking-widest uppercase">Assigned Agent</p>
                    <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
                      <div className="bg-white px-6 py-5 flex items-center justify-between cursor-pointer border-b border-[#e0e0e0]">
                        <p className="font-['MD_IO'] text-[14px] text-black uppercase">ANGIE</p>
                        <ChevronDown className="w-4 h-4 text-black" />
                      </div>
                      <div className="bg-[#e0e0e0] p-[24px]">
                        <div className="bg-[#f5f5f5] rounded-[4px] px-3 py-2 inline-flex items-center gap-2 border border-zinc-200">
                          <p className="font-['MD_IO'] text-[11px] text-[#585858]">Reply all comments</p>
                          <ChevronDown className="w-3 h-3 text-[#585858]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Expected Interaction */}
                  <div className="space-y-4">
                    <p className="font-['MD_IO'] text-[11px] text-black tracking-widest uppercase">Expected Interaction</p>
                    <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
                      <div className="bg-white">
                        {[
                          { label: "LIKES", value: "1.4K" },
                          { label: "COMMENTS", value: "243" },
                          { label: "AGENDAS", value: "5" }
                        ].map((row, i) => (
                          <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-[#e0e0e0] last:border-b-0">
                            <p className="font-['MD_IO'] text-[11px] text-black uppercase tracking-tight">{row.label}</p>
                            <p className="font-['MD_IO'] text-[18px] text-black">{row.value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-[#e0e0e0] px-6 py-4">
                        <p className="font-['MD_IO'] text-[11px] text-[#585858] uppercase">Based on previous CTA's</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sequence Breakdown */}
                <div className="space-y-8 pt-8">
                  <h3 className="font-['MD_IO'] text-[15px] text-black uppercase tracking-widest font-bold flex items-center gap-2">
                    Sequence breakdown
                    <div className="h-px flex-1 bg-zinc-100" />
                  </h3>
                  <div className="space-y-8">
                    {stories.map((story, idx) => (
                      <div key={story.id} className="flex gap-8 group">
                        <div className="shrink-0 w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center font-['MD_IO'] text-[18px] font-bold text-black border border-zinc-200 shadow-sm">
                           {idx + 1}
                        </div>
                        <div className="flex-1 space-y-3 pt-2">
                          <div className="flex items-center gap-3">
                            <span className="font-['MD_IO'] text-[12px] text-zinc-400 uppercase tracking-widest">{story.label}</span>
                            <div className="h-px w-8 bg-zinc-100" />
                          </div>
                          <p className="text-[18px] font-gt-america text-[#585858] leading-relaxed">
                            {story.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="p-8 bg-white/80 backdrop-blur-md border-t border-[#f0f0f0] shrink-0">
              <div className="max-w-4xl mx-auto flex items-center justify-end gap-4">
                <button 
                  onClick={onDiscard}
                  className="bg-white border border-[#d9d9d9] text-[#ff4043] rounded-full px-8 py-4 font-gt-america font-bold text-[16px] hover:bg-red-50 transition-all active:scale-95 shadow-sm"
                >
                  Discard
                </button>
                <button 
                  onClick={() => {
                    onApprove();
                    onClose();
                  }}
                  className="bg-black text-white rounded-full px-10 py-4 font-gt-america font-bold text-[16px] hover:bg-zinc-800 transition-all shadow-xl active:scale-95 flex items-center gap-2"
                >
                  Approve & Schedule
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
