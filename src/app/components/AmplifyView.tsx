import React, { useState } from 'react';
import { Plus, Info, X, ChevronDown, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { StorySequenceModal } from './StorySequenceArtifact';

const storySlides = [
  {
    id: 1,
    step: 'HOOK',
    label: '1. HOOK',
    copy: 'Your SaaS has users but nobody\'s paying?\n\nThe problem isn\'t your product.',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    id: 2,
    step: 'EXPLICACIÓN',
    label: '2. EXPLIC.',
    copy: 'You\'re showing 3 tiers with 47 features. Your visitor spends 8 seconds, gets overwhelmed, and leaves.',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    id: 3,
    step: 'GIRO',
    label: '3. GIRO',
    copy: 'The companies crushing it? They\'re not selling plans. They\'re selling identities.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    id: 4,
    step: 'OPORTUNIDAD',
    label: '4. OPOR.',
    copy: 'New rule: One clear recommendation. Add a "Most popular" badge. Remove 60% of feature comparisons.',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
  {
    id: 5,
    step: 'CTA',
    label: '5. CTA',
    copy: 'I\'ll audit your pricing page for free. DM me "PRICING" + your URL.',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
  },
];

const upcomingPosts = [
  {
    id: 'p1',
    title: 'POST: Forest brewing with friends!',
    type: 'IG POST',
    date: 'FRI 23 · 08:00',
    status: 'SCHEDULED',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100',
  },
  {
    id: 'p2',
    title: '5 TIPS FOR BREWING THE PERFECT FLAT WHITE AT HOME',
    type: 'IG STORY',
    date: 'FRI 23 · 10:00',
    status: 'SCHEDULED',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100',
  },
  {
    id: 'p3',
    title: 'POST: BREWING ON THE FOREST',
    type: 'IG POST',
    date: 'SAT 24 · 09:00',
    status: 'SCHEDULED',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100',
  },
  {
    id: 'p4',
    title: 'FRESHLY BREWED — Morning ritual edition',
    type: 'IG REEL',
    date: 'SUN 25 · 07:30',
    status: 'SCHEDULED',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100',
  },
  {
    id: 'p5',
    title: 'Why your audience loves slow mornings',
    type: 'IG POST',
    date: 'MON 26 · 08:00',
    status: 'SCHEDULED',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100',
  },
];

interface PostDetailSheetProps {
  post: typeof upcomingPosts[0] | null;
  onClose: () => void;
  isNew?: boolean;
  isOpen?: boolean;
}

function PostDetailSheet({ post, onClose, isNew = false, isOpen }: PostDetailSheetProps) {
  const [header, setHeader] = useState(isNew ? '' : (post?.title ?? ''));
  const [description, setDescription] = useState(
    isNew ? '' : "The problem isn't your product. It's that you're selling features when you should be selling transformation."
  );
  const [cta, setCta] = useState('');

  const visible = isNew ? (isOpen ?? false) : !!post;

  return (
    <AnimatePresence>
      {visible && <>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        key="sheet"
        className="fixed inset-x-0 bottom-0 z-50 flex flex-col bg-white rounded-t-2xl overflow-hidden"
        style={{ maxHeight: '92%' }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 bg-zinc-200 rounded-full" />
        </div>

        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-3 shrink-0">
          <span className="font-['MD_IO'] text-[22px] font-light tracking-tight text-zinc-500">New post</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 border border-zinc-200 rounded-lg px-2.5 py-1.5 text-zinc-500 hover:border-zinc-400 transition-colors">
                <span className="text-[11px] font-mono-io uppercase tracking-tight">Single Post</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex items-center gap-1.5 border border-zinc-200 rounded-lg px-2.5 py-1.5 text-zinc-500 hover:border-zinc-400 transition-colors">
                <span className="text-[11px] font-mono-io uppercase tracking-tight">Now</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
              <X className="w-4 h-4 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 pb-4">
          <div className="flex flex-col gap-4">

            {/* Story preview image */}
            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-zinc-100">
              {!isNew && post && (
                <img
                  src={post.imageUrl.replace('w=100', 'w=400')}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {isNew && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-zinc-200 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center">
                    <Upload className="w-4 h-4 text-zinc-400" />
                  </div>
                  <span className="text-[11px] font-mono-io uppercase tracking-tight text-zinc-400">Add image</span>
                </div>
              )}
              {!isNew && <div className="absolute inset-0 bg-black/30" />}
              {/* Username overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-zinc-300 overflow-hidden shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500" />
                </div>
                <span className="text-[10px] font-['MD_IO'] font-bold text-white">@thecoffemaster</span>
              </div>
              {/* Post copy on image */}
              {!isNew && (
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-[15px] font-gt-america font-semibold leading-tight line-clamp-2">{post?.title}</p>
                </div>
              )}
            </div>

            {/* Image section */}
            <div className="bg-zinc-50 rounded-2xl rounded-bl-lg rounded-br-lg pt-4 pb-2 px-3 flex flex-col gap-3">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono-io text-[15px] tracking-tight text-black">Image</span>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <span className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-tight">The story's image</span>
              </div>
              <button className="relative w-full h-28 rounded-xl overflow-hidden flex flex-col items-center justify-center gap-1.5 bg-zinc-200">
                {!isNew && post && (
                  <>
                    <img src={post.imageUrl.replace('w=100', 'w=400')} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/55" />
                  </>
                )}
                <div className="relative flex items-center gap-2 bg-black/20 rounded-full px-3 py-1.5">
                  <Upload className="w-3.5 h-3.5 text-white" />
                  <span className="text-[10px] font-mono-io uppercase tracking-tight text-white">Generate Image</span>
                </div>
                <span className="relative text-[10px] font-mono-io text-white">Or upload from device</span>
              </button>
            </div>

            {/* Header section */}
            <div className="bg-zinc-50 rounded-2xl rounded-bl-lg rounded-br-lg pt-4 pb-2 px-3 flex flex-col gap-3">
              <div className="flex items-center justify-between px-2">
                <span className="font-mono-io text-[15px] tracking-tight text-black">Header</span>
                <div className="flex items-center gap-1.5">
                  {['A', 'A'].map((a, i) => (
                    <button key={i} className="w-[22px] h-[22px] border border-zinc-400 rounded-sm flex items-center justify-center">
                      <span className={`font-mono-io text-zinc-500 ${i === 0 ? 'text-[7px]' : 'text-[10px]'}`}>{a}</span>
                    </button>
                  ))}
                  <button className="w-[22px] h-[22px] border border-zinc-400 rounded-sm flex items-center justify-center">
                    <span className="text-[9px] font-mono-io text-zinc-400">≡</span>
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <textarea
                  className="w-full text-[14px] font-gt-america text-black tracking-tight resize-none outline-none leading-snug"
                  rows={2}
                  value={header}
                  onChange={e => setHeader(e.target.value)}
                />
              </div>
            </div>

            {/* Description section */}
            <div className="bg-zinc-50 rounded-2xl rounded-bl-lg rounded-br-lg pt-4 pb-2 px-3 flex flex-col gap-3">
              <div className="flex items-center justify-between px-2">
                <span className="font-mono-io text-[15px] tracking-tight text-black">Description</span>
                <div className="flex items-center gap-1.5">
                  {['A', 'A'].map((a, i) => (
                    <button key={i} className="w-[22px] h-[22px] border border-zinc-400 rounded-sm flex items-center justify-center">
                      <span className={`font-mono-io text-zinc-500 ${i === 0 ? 'text-[7px]' : 'text-[10px]'}`}>{a}</span>
                    </button>
                  ))}
                  <button className="w-[22px] h-[22px] border border-zinc-400 rounded-sm flex items-center justify-center">
                    <span className="text-[9px] font-mono-io text-zinc-400">≡</span>
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <textarea
                  className="w-full text-[14px] font-gt-america text-black tracking-tight resize-none outline-none leading-snug"
                  rows={3}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
            </div>

            {/* CTA section */}
            <div className="bg-zinc-50 rounded-2xl rounded-bl-lg rounded-br-lg pt-4 pb-2 px-3 flex flex-col gap-3">
              <div className="flex items-center justify-between px-2">
                <span className="font-mono-io text-[15px] tracking-tight text-black">CTA</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-600" />
                  {['A', 'A'].map((a, i) => (
                    <button key={i} className="w-[22px] h-[22px] border border-zinc-400 rounded-sm flex items-center justify-center">
                      <span className={`font-mono-io text-zinc-500 ${i === 0 ? 'text-[7px]' : 'text-[10px]'}`}>{a}</span>
                    </button>
                  ))}
                  <button className="w-[22px] h-[22px] border border-zinc-400 rounded-sm flex items-center justify-center">
                    <span className="text-[9px] font-mono-io text-zinc-400">≡</span>
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <textarea
                  className="w-full text-[14px] font-gt-america text-zinc-400 tracking-tight resize-none outline-none leading-snug"
                  rows={2}
                  placeholder="If you want a CTA, enter it here. Else it won't show up"
                  value={cta}
                  onChange={e => setCta(e.target.value)}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Sticky footer */}
        <div className="shrink-0 px-5 py-4 border-t border-black/5 bg-white">
          {!isNew && post?.status === 'SCHEDULED' ? (
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col items-center justify-center bg-zinc-100 rounded-xl py-3 px-3 gap-0.5">
                <span className="text-[8px] font-mono-io uppercase tracking-widest text-zinc-400">Scheduled for</span>
                <span className="text-[12px] font-mono-io uppercase tracking-tight text-black font-semibold">{post.date}</span>
              </div>
              <button className="flex-1 bg-black text-white rounded-xl py-3.5 font-mono-io text-[13px] uppercase tracking-tight hover:bg-zinc-800 transition-colors">
                Post now
              </button>
            </div>
          ) : (
            <button className="w-full bg-black text-white rounded-xl py-3.5 font-mono-io text-[13px] uppercase tracking-tight hover:bg-zinc-800 transition-colors">
              Post now
            </button>
          )}
        </div>
      </motion.div>
      </>}
    </AnimatePresence>
  );
}

const whyStories = storySlides.map(s => ({
  id: String(s.id),
  label: s.step,
  content: s.copy,
  imageUrl: s.imageUrl.replace('w=200', 'w=400'),
  type: 'default',
}));

export function AmplifyView() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showWhySheet, setShowWhySheet] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof upcomingPosts[0] | null>(null);
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-white relative">
      <PostDetailSheet post={selectedPost} onClose={() => setSelectedPost(null)} />
      <PostDetailSheet post={null} isNew isOpen={showNewPost} onClose={() => setShowNewPost(false)} />
      <StorySequenceModal
        isOpen={showWhySheet}
        onClose={() => setShowWhySheet(false)}
        title="Friday 23 — IG Story"
        stories={whyStories}
        onApprove={() => setShowWhySheet(false)}
        onDiscard={() => setShowWhySheet(false)}
      />

      {/* ── Section A: Suggested Story Sequence ── */}
      <div className="flex flex-col px-5 pt-4 pb-3 border-b border-black/5 shrink-0">

        {/* Header */}
        <div className="flex items-center justify-between mb-3 shrink-0">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-mono-io uppercase tracking-tight text-zinc-400">
              Suggested Story Sequence
            </span>
            <span className="text-[13px] font-mono-io uppercase tracking-tight text-black font-semibold">
              Friday 23 — IG Story
            </span>
          </div>
          <button
            onClick={() => setShowWhySheet(true)}
            className="flex items-center gap-1 px-2 py-1 rounded-full border border-[#FF8F40]/30 text-[#FF8F40] hover:bg-orange-50 transition-colors"
          >
            <Info className="w-3 h-3" />
            <span className="text-[9px] font-mono-io uppercase tracking-tight">Why?</span>
          </button>
        </div>

        {/* Story slides strip */}
        <div className="overflow-x-auto no-scrollbar" style={{ height: 140 }}>
          <div className="flex gap-2 h-full pb-1">
            {storySlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className="shrink-0 relative rounded-xl overflow-hidden transition-all"
                style={{
                  width: 72,
                  height: '100%',
                  border: activeSlide === idx ? '2px solid #FF8F40' : '2px solid transparent',
                }}
              >
                {/* Background image */}
                <img
                  src={slide.imageUrl}
                  alt={slide.step}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Orange overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(255, 143, 64, 0.55)' }}
                />
                {/* Step label */}
                <div className="absolute inset-0 flex flex-col justify-between p-1.5">
                  <span className="text-[8px] font-mono-io uppercase tracking-tight text-white font-bold leading-tight bg-black/20 rounded px-1 py-0.5 self-start">
                    {slide.label}
                  </span>
                  <p className="text-[7px] font-gt-america text-white leading-tight line-clamp-3">
                    {slide.copy}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ── Section B: Upcoming Posts ── */}
      <div className="flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 shrink-0">
          <span className="text-[15px] font-mono-io uppercase tracking-tight text-black font-semibold">
            Upcoming Posts
          </span>
          <button onClick={() => setShowNewPost(true)} className="flex items-center gap-1 bg-[#FF8F40] text-white rounded-full px-2.5 py-1 hover:bg-orange-500 transition-colors">
            <Plus className="w-3 h-3" />
            <span className="text-[9px] font-mono-io uppercase tracking-tight">New Post</span>
          </button>
        </div>

        {/* Post list + Media grid */}
        <div className="px-5 pb-6">
          <div className="flex flex-col divide-y divide-black/5">
            {upcomingPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-3 py-3 cursor-pointer" onClick={() => setSelectedPost(post)}>
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-zinc-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-gt-america font-semibold text-black leading-tight truncate mb-1">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-[8px] font-mono-io uppercase tracking-tight px-1.5 py-0.5 rounded-sm"
                      style={{ background: 'rgba(255,143,64,0.12)', color: '#FF8F40' }}
                    >
                      {post.type}
                    </span>
                    <span className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-tight">
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Status */}
                <span className="shrink-0 text-[8px] font-mono-io uppercase tracking-tight text-zinc-400 bg-zinc-100 px-2 py-1 rounded-sm">
                  {post.status}
                </span>
              </div>
            ))}
          </div>

          {/* ── Media grid ── */}
          <div className="mt-6">
            <span className="text-[15px] font-mono-io uppercase tracking-tight text-black font-semibold">
              Media
            </span>
            <div className="flex flex-row flex-wrap mt-3 -mx-0.5">
              {[
                'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1464979681340-bdd28a61699e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1442512595331-e89e73853f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1498804103079-a6351b050096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
                'https://images.unsplash.com/photo-1507133750040-4a8f57021571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
              ].map((url, i) => (
                <div key={i} className="px-0.5 pb-1" style={{ width: '33.333%' }}>
                  <div className="aspect-square rounded-lg overflow-hidden bg-zinc-100">
                    <img src={url} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
