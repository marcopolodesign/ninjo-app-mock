import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

interface MetricsSummaryProps {
  username: string;
}

export function MetricsSummary({ username }: MetricsSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="bg-zinc-900 text-white px-5 py-3 flex items-center gap-2">
        <span className="text-sm">📊</span>
        <span className="text-sm font-mono-io">Yesterday's Summary · {username}</span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-zinc-500 font-mono-io">Reach</p>
            <p className="text-lg font-semibold font-gt-america">4,821</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              ↑ 12% vs average
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-zinc-500 font-mono-io">Impressions</p>
            <p className="text-lg font-semibold font-gt-america">7,340</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              ↑ 8%
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-zinc-500 font-mono-io">New followers</p>
            <p className="text-lg font-semibold font-gt-america">+23</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              ↑ 3%
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-zinc-500 font-mono-io">DMs received</p>
            <p className="text-lg font-semibold font-gt-america">14</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              ↑ 5%
            </p>
          </div>
        </div>

        {/* Engagement breakdown */}
        <div className="pt-3 border-t border-zinc-100">
          <p className="text-xs text-zinc-500 font-mono-io mb-3">Engagement</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="text-sm font-mono-io">Likes:</span>
              <span className="text-sm font-gt-america font-medium">312</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-mono-io">Comments:</span>
              <span className="text-sm font-gt-america font-medium">28</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-mono-io">Saves:</span>
              <span className="text-sm font-gt-america font-medium bg-yellow-50 px-2 rounded">41 ⭐</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-mono-io">Shares:</span>
              <span className="text-sm font-gt-america font-medium">17</span>
            </div>
          </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-xs font-mono-io text-green-800">
            Great day. Saves are above average — this content is resonating with your audience.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface PostPerformanceProps {
  username?: string;
}

export function PostPerformance({ username = '@tunegocio' }: PostPerformanceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="bg-zinc-900 text-white px-5 py-3 flex items-center gap-2">
        <span className="text-sm">📊</span>
        <span className="text-sm font-mono-io">Performance · Last Post</span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-xs text-zinc-500 font-mono-io">Reach</p>
              <p className="text-xs text-green-600">↑ 15% vs your average</p>
            </div>
            <p className="text-lg font-semibold font-gt-america">3,240</p>
            <p className="text-xs text-zinc-400">Average: 2,800</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-zinc-500 font-mono-io">Impressions</p>
            <p className="text-lg font-semibold font-gt-america">5,100</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-xs text-zinc-500 font-mono-io">Engagement rate</p>
              <p className="text-xs text-green-600">↑ Above average</p>
            </div>
            <p className="text-lg font-semibold font-gt-america">6.2%</p>
            <p className="text-xs text-zinc-400">Average: 4.1%</p>
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-100 grid grid-cols-2 gap-3">
          <div className="flex justify-between">
            <span className="text-sm font-mono-io">Likes:</span>
            <span className="text-sm font-gt-america font-medium">198</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-mono-io">Comments:</span>
            <span className="text-sm font-gt-america font-medium">24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-mono-io">Saves:</span>
            <span className="text-sm font-gt-america font-medium bg-yellow-50 px-2 rounded">41 🏆</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-mono-io">Shares:</span>
            <span className="text-sm font-gt-america font-medium">12</span>
          </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-xs font-mono-io text-green-800">
            This post is performing above your average. Saves are unusually high — a sign of high-value content.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface PostPreviewCardProps {
  timeAgo?: string;
}

export function PostPreviewCard({ timeAgo = '6 hours ago' }: PostPreviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="bg-zinc-900 text-white px-5 py-3 flex items-center gap-2">
        <span className="text-sm">📸</span>
        <span className="text-sm font-mono-io">Your Last Post · {timeAgo}</span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3">
        {/* Thumbnail placeholder */}
        <div className="w-full aspect-square bg-zinc-100 rounded-lg flex items-center justify-center">
          <span className="text-zinc-400 text-sm font-mono-io">Post preview</span>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-gt-america text-zinc-600 line-clamp-2">
            3 mistakes entrepreneurs make before scaling their business...
          </p>
          <p className="text-xs text-zinc-400 font-mono-io">Posted: {timeAgo}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface ContentSuggestionProps {
  onConfirm?: () => void;
}

export function ContentSuggestion({ onConfirm }: ContentSuggestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm space-y-3"
    >
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-xs text-zinc-500 font-mono-io">Format:</span>
          <span className="text-sm font-gt-america font-medium">Carousel</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-zinc-500 font-mono-io">Suggested Topic:</span>
        </div>
        <p className="text-sm font-gt-america">"3 mistakes entrepreneurs make before scaling"</p>
        
        <div className="flex justify-between">
          <span className="text-xs text-zinc-500 font-mono-io">Best Time:</span>
          <span className="text-sm font-gt-america font-medium">6:30 PM</span>
        </div>
        
        <div className="pt-2">
          <p className="text-xs text-zinc-500 font-mono-io mb-1">Estimated Hashtags:</p>
          <p className="text-xs font-gt-america text-blue-600">
            #entrepreneurship #mentorship #personalgrowth
          </p>
        </div>
      </div>
    </motion.div>
  );
}
