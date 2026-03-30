import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ChevronDown, ChevronRight, RefreshCw, Toggle, AlertCircle } from 'lucide-react';

type IntegrationStatus = 'connected' | 'available' | 'coming_soon';

interface Feature {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface Integration {
  id: string;
  name: string;
  description: string;
  status: IntegrationStatus;
  color: string;
  logo: React.ReactNode;
  connectSteps: ConnectStep[];
  features: Feature[];
  lastSync?: string;
}

interface ConnectStep {
  type: 'info' | 'input' | 'oauth';
  label?: string;
  placeholder?: string;
  hint?: string;
  bullets?: string[];
}

// ─── Logos ────────────────────────────────────────────────────────────────────

function SlackLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
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

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function TelegramLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function N8NLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <text x="0" y="18" fontSize="18" fontWeight="bold" fontFamily="monospace">n8n</text>
    </svg>
  );
}

function HubSpotLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978V3.06A2.198 2.198 0 0 0 17.234.865h-.047a2.198 2.198 0 0 0-2.196 2.196v.046a2.198 2.198 0 0 0 1.267 1.978V7.93a6.232 6.232 0 0 0-2.962 1.301L6.23 4.073a2.46 2.46 0 0 0 .072-.573 2.47 2.47 0 1 0-2.47 2.47c.46 0 .886-.13 1.249-.352l7.014 5.088a6.234 6.234 0 0 0 .028 5.588L9.98 17.427a2.042 2.042 0 0 0-.589-.094 2.07 2.07 0 1 0 2.07 2.07 2.047 2.047 0 0 0-.307-1.082l2.085-1.583a6.253 6.253 0 0 0 9.608-5.274 6.258 6.258 0 0 0-4.683-6.134zm-1.024 9.48a3.41 3.41 0 1 1 0-6.82 3.41 3.41 0 0 1 0 6.82z"/>
    </svg>
  );
}

function GoHighLevelLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <rect x="2" y="2" width="8" height="8" rx="1.5"/>
      <rect x="14" y="2" width="8" height="8" rx="1.5"/>
      <rect x="2" y="14" width="8" height="8" rx="1.5"/>
      <rect x="14" y="14" width="8" height="8" rx="1.5"/>
    </svg>
  );
}

function ZapierLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <path d="M14.924 8.675l-2.8-2.8 1.414-1.414 2.8 2.8zm-5.848 0L6.276 5.875 4.862 7.289l2.8 2.8zm2.924 5.65l-2.8 2.8 1.414 1.414 2.8-2.8zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm.75-7.75h3.5v1.5h-3.5v3.5h-1.5v-3.5h-3.5v-1.5h3.5v-3.5h1.5v3.5z"/>
    </svg>
  );
}

function MakeLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828M5.636 18.364l2.828-2.828M15.536 8.464l2.828-2.828" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const INTEGRATIONS: Integration[] = [
  {
    id: 'slack',
    name: 'Slack',
    description: 'Send alerts, summaries, and reports to Slack channels',
    status: 'available',
    color: '#4A154B',
    logo: <SlackLogo />,
    lastSync: '2 min ago',
    connectSteps: [
      {
        type: 'info',
        bullets: [
          'Operator sends daily reports to a Slack channel',
          'Handoff alerts ping you instantly',
          'Lead summaries posted after each conversation',
        ],
      },
      { type: 'input', label: 'Workspace URL', placeholder: 'yourcompany.slack.com', hint: 'Found in your Slack workspace settings' },
      { type: 'input', label: 'Bot Token', placeholder: 'xoxb-...', hint: 'Create one at api.slack.com/apps' },
      { type: 'input', label: 'Default Channel', placeholder: '#operator-alerts', hint: 'Where reports and alerts will be posted' },
    ],
    features: [
      { id: 'daily_reports', label: 'Daily Reports', description: 'Post daily growth summary every morning', enabled: true },
      { id: 'handoff_alerts', label: 'Handoff Alerts', description: 'Ping channel when manual intervention needed', enabled: true },
      { id: 'lead_summaries', label: 'Lead Summaries', description: 'Post a summary after each qualified lead', enabled: false },
    ],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'Receive and respond to customer messages via WhatsApp',
    status: 'available',
    color: '#25D366',
    logo: <WhatsAppLogo />,
    lastSync: '5 min ago',
    connectSteps: [
      {
        type: 'info',
        bullets: [
          'Operator handles incoming WhatsApp DMs',
          'Seamless handoff to human when needed',
          'Auto-replies for after-hours messages',
        ],
      },
      { type: 'input', label: 'Phone Number ID', placeholder: '+1 (555) 000-0000', hint: 'Your WhatsApp Business number' },
      { type: 'input', label: 'API Access Token', placeholder: 'EAAxxxxx...', hint: 'From Meta Business Suite → WhatsApp API' },
    ],
    features: [
      { id: 'auto_reply', label: 'Auto Reply', description: 'Let Operator respond to new leads automatically', enabled: true },
      { id: 'after_hours', label: 'After-Hours Mode', description: 'Auto-reply when you are offline', enabled: true },
      { id: 'read_receipts', label: 'Read Receipts', description: 'Mark messages read when Operator processes them', enabled: false },
    ],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description: 'Connect your Telegram bot and automate responses',
    status: 'available',
    color: '#2AABEE',
    logo: <TelegramLogo />,
    connectSteps: [
      {
        type: 'info',
        bullets: [
          'Operator manages your Telegram bot conversations',
          'Send broadcast messages to subscribers',
          'Receive lead notifications directly in Telegram',
        ],
      },
      { type: 'input', label: 'Bot Token', placeholder: '123456:ABC-DEF...', hint: 'Get from @BotFather on Telegram' },
      { type: 'input', label: 'Notification Chat ID', placeholder: '-1001234567890', hint: 'Your personal or group chat ID for alerts' },
    ],
    features: [
      { id: 'bot_replies', label: 'Bot Auto-Replies', description: 'Operator handles incoming bot messages', enabled: true },
      { id: 'broadcasts', label: 'Broadcast Messages', description: 'Send bulk messages to subscribers', enabled: false },
      { id: 'lead_notify', label: 'Lead Notifications', description: 'Get a Telegram ping for every new lead', enabled: true },
    ],
  },
  {
    id: 'ghl',
    name: 'Go High Level',
    description: 'Sync contacts, pipelines, and automations with GHL',
    status: 'available',
    color: '#039BE5',
    logo: <GoHighLevelLogo />,
    connectSteps: [
      {
        type: 'info',
        bullets: [
          'New leads automatically added to GHL pipeline',
          'Conversation notes synced to contact records',
          'Trigger GHL workflows from Operator handoffs',
        ],
      },
      { type: 'input', label: 'API Key', placeholder: 'eyJhbGciOiJIUzI1NiJ9...', hint: 'Settings → API → API Keys in GHL' },
      { type: 'input', label: 'Location ID', placeholder: 'xxxxxxxxxxxxxxxx', hint: 'Your sub-account location ID' },
      { type: 'input', label: 'Pipeline ID', placeholder: 'xxxxxxxxxxxxxxxx', hint: 'The pipeline where new leads will be added' },
    ],
    features: [
      { id: 'sync_contacts', label: 'Sync Contacts', description: 'Push new leads to GHL automatically', enabled: true },
      { id: 'sync_notes', label: 'Sync Notes', description: 'Attach conversation summaries to contacts', enabled: true },
      { id: 'trigger_workflows', label: 'Trigger Workflows', description: 'Fire GHL automations on Operator events', enabled: false },
    ],
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'Sync CRM contacts, deals, and marketing data',
    status: 'available',
    color: '#FF7A59',
    logo: <HubSpotLogo />,
    connectSteps: [
      {
        type: 'info',
        bullets: [
          'Auto-create HubSpot contacts from qualified leads',
          'Log conversations as CRM activities',
          'Sync deal stages with Operator pipeline',
        ],
      },
      { type: 'input', label: 'Private App Token', placeholder: 'pat-na1-xxxxxxxx-xxxx...', hint: 'Settings → Integrations → Private Apps in HubSpot' },
      { type: 'input', label: 'Pipeline ID', placeholder: 'default', hint: 'The deal pipeline for new leads (leave "default" if unsure)' },
    ],
    features: [
      { id: 'create_contacts', label: 'Create Contacts', description: 'Auto-create contacts for qualified leads', enabled: true },
      { id: 'log_activities', label: 'Log Activities', description: 'Record conversations as CRM notes', enabled: true },
      { id: 'sync_deals', label: 'Sync Deals', description: 'Move deals through pipeline on Operator events', enabled: false },
    ],
  },
  {
    id: 'n8n',
    name: 'N8N',
    description: 'Trigger Ninjo workflows via N8N automation nodes',
    status: 'available',
    color: '#EA4B71',
    logo: <N8NLogo />,
    connectSteps: [
      {
        type: 'info',
        bullets: [
          'Fire N8N workflows from any Operator event',
          'Receive data from N8N into Operator conversations',
          'Build custom multi-step automations',
        ],
      },
      { type: 'input', label: 'Webhook URL', placeholder: 'https://your-n8n.app/webhook/...', hint: 'Create a Webhook node in N8N and paste its URL here' },
      { type: 'input', label: 'API Key (optional)', placeholder: 'n8n_api_...', hint: 'Required only if your N8N instance has auth enabled' },
    ],
    features: [
      { id: 'send_events', label: 'Send Events', description: 'Fire webhook on lead, handoff, and report events', enabled: true },
      { id: 'receive_data', label: 'Receive Data', description: 'Accept N8N payloads into Operator context', enabled: false },
    ],
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Automate Ninjo with 5,000+ apps via Zapier',
    status: 'coming_soon',
    color: '#FF4A00',
    logo: <ZapierLogo />,
    connectSteps: [],
    features: [],
  },
  {
    id: 'make',
    name: 'Make',
    description: 'Build visual automation workflows with Make (Integromat)',
    status: 'coming_soon',
    color: '#6D00CC',
    logo: <MakeLogo />,
    connectSteps: [],
    features: [],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function FeatureToggle({ feature, onChange }: { feature: Feature; onChange: (id: string, val: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex flex-col gap-0.5">
        <span className="text-[13px] font-mono-io text-black tracking-tight">{feature.label}</span>
        <span className="text-[11px] text-zinc-400 leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>{feature.description}</span>
      </div>
      <button
        onClick={() => onChange(feature.id, !feature.enabled)}
        className={`shrink-0 w-10 h-5.5 rounded-full transition-colors relative ${feature.enabled ? 'bg-[#FF8F40]' : 'bg-zinc-200'}`}
        style={{ height: '22px', width: '40px' }}
      >
        <motion.div
          animate={{ x: feature.enabled ? 19 : 2 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="absolute top-[3px] w-4 h-4 bg-white rounded-full shadow-sm"
        />
      </button>
    </div>
  );
}

function ConnectSheet({
  integration,
  onClose,
  onConnect,
}: {
  integration: Integration;
  onClose: () => void;
  onConnect: () => void;
}) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [connecting, setConnecting] = useState(false);

  const inputSteps = integration.connectSteps.filter(s => s.type === 'input');
  const infoStep = integration.connectSteps.find(s => s.type === 'info');
  const totalSteps = 1 + inputSteps.length; // info + each input
  const isLastStep = step === totalSteps - 1;

  const handleNext = () => {
    if (isLastStep) {
      setConnecting(true);
      setTimeout(() => {
        setConnecting(false);
        onConnect();
      }, 1200);
    } else {
      setStep(s => s + 1);
    }
  };

  const currentInput = step > 0 ? inputSteps[step - 1] : null;
  const canProceed = step === 0 || (currentInput && (values[currentInput.label ?? ''] ?? '').trim().length > 0);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/30 z-[80]"
      />

      {/* Sheet */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] z-[90] flex flex-col overflow-hidden"
        style={{ maxHeight: '80%' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 bg-zinc-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0f0f0] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0" style={{ backgroundColor: integration.color }}>
              {integration.logo}
            </div>
            <div>
              <p className="text-[15px] font-mono-io text-black tracking-tight">Connect {integration.name}</p>
              <p className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-widest">
                Step {step + 1} of {totalSteps}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-zinc-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        {/* Step progress */}
        <div className="px-5 pt-3 pb-0 shrink-0 flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#FF8F40]' : 'bg-zinc-100'}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <AnimatePresence mode="wait">
            {step === 0 && infoStep ? (
              <motion.div key="info" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                <p className="text-[14px] font-mono-io text-black tracking-tight">What you'll get</p>
                <div className="flex flex-col gap-3">
                  {infoStep.bullets?.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <p className="text-[13px] text-zinc-600 leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>{b}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : currentInput ? (
              <motion.div key={`input-${step}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-3">
                <label className="text-[14px] font-mono-io text-black tracking-tight">{currentInput.label}</label>
                <input
                  autoFocus
                  type="text"
                  placeholder={currentInput.placeholder}
                  value={values[currentInput.label ?? ''] ?? ''}
                  onChange={e => setValues(prev => ({ ...prev, [currentInput.label ?? '']: e.target.value }))}
                  className="w-full bg-[#f5f5f5] border border-[#e0e0e0] rounded-[10px] px-4 py-3 text-[14px] font-mono-io text-black placeholder:text-zinc-400 outline-none focus:border-[#FF8F40] transition-colors"
                />
                {currentInput.hint && (
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-zinc-400 leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>{currentInput.hint}</p>
                  </div>
                )}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-5 pb-8 pt-3 border-t border-[#f0f0f0] shrink-0 flex gap-3">
          {step > 0 && (
            <button
              onClick={() => setStep(s => s - 1)}
              className="flex-1 border border-[#d9d9d9] text-[13px] font-mono-io uppercase tracking-widest py-3 rounded-[10px] text-zinc-600 hover:border-zinc-400 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!canProceed || connecting}
            className="flex-1 bg-black text-white text-[13px] font-mono-io uppercase tracking-widest py-3 rounded-[10px] disabled:opacity-30 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
          >
            {connecting ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}>
                <RefreshCw className="w-4 h-4" />
              </motion.div>
            ) : isLastStep ? 'Connect' : 'Next'}
          </button>
        </div>
      </motion.div>
    </>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function ConnectionsView() {
  const [connectedMap, setConnectedMap] = useState<Record<string, boolean>>({});
  const [featuresMap, setFeaturesMap] = useState<Record<string, Feature[]>>(() => {
    const init: Record<string, Feature[]> = {};
    INTEGRATIONS.forEach(i => { init[i.id] = i.features.map(f => ({ ...f })); });
    return init;
  });
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sheetId, setSheetId] = useState<string | null>(null);

  const sheetIntegration = INTEGRATIONS.find(i => i.id === sheetId);

  const handleConnect = (id: string) => {
    setConnectedMap(prev => ({ ...prev, [id]: true }));
    setSheetId(null);
    setExpandedId(id);
  };

  const handleDisconnect = (id: string) => {
    setConnectedMap(prev => ({ ...prev, [id]: false }));
    setExpandedId(null);
  };

  const handleFeatureToggle = (integrationId: string, featureId: string, val: boolean) => {
    setFeaturesMap(prev => ({
      ...prev,
      [integrationId]: prev[integrationId].map(f => f.id === featureId ? { ...f, enabled: val } : f),
    }));
  };

  return (
    <div className="flex-1 h-full overflow-y-auto bg-white relative">

      {/* Header */}
      <div className="px-5 pt-6 pb-5 border-b border-[#f0f0f0]">
        <p className="text-[11px] font-mono-io uppercase tracking-widest text-[#FF8F40] mb-1">Ninjo</p>
        <h1 className="text-[22px] font-mono-io font-normal tracking-tight text-black leading-tight">Connections</h1>
        <p className="text-[13px] text-zinc-500 mt-1.5 leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
          Connect Ninjo to your platforms and automate your workflows.
        </p>
      </div>

      {/* Integration cards */}
      <div className="px-5 py-5 flex flex-col gap-3">
        {INTEGRATIONS.map((integration, idx) => {
          const isConnected = connectedMap[integration.id] ?? false;
          const status: IntegrationStatus = isConnected ? 'connected' : integration.status;
          const isExpanded = expandedId === integration.id;
          const features = featuresMap[integration.id] ?? [];

          return (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04, type: 'spring', damping: 24, stiffness: 200 }}
              className={`bg-white border rounded-[14px] overflow-hidden transition-colors ${
                isConnected ? 'border-[#FF8F40]/30' : 'border-[#e4e4e4]'
              }`}
            >
              {/* Card row */}
              <div className="p-4 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: integration.color }}
                >
                  {integration.logo}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[14px] font-mono-io tracking-tight text-black font-medium">{integration.name}</span>
                    {/* Status badge */}
                    {status === 'connected' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono-io uppercase tracking-widest text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                        <Check className="w-2.5 h-2.5" /> Connected
                      </span>
                    )}
                    {status === 'coming_soon' && (
                      <span className="text-[10px] font-mono-io uppercase tracking-widest text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">Soon</span>
                    )}
                  </div>
                  <p className="text-[12px] text-zinc-500 leading-snug line-clamp-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {integration.description}
                  </p>
                  {isConnected && integration.lastSync && (
                    <div className="flex items-center gap-1 mt-1">
                      <RefreshCw className="w-2.5 h-2.5 text-zinc-400" />
                      <span className="text-[10px] font-mono-io text-zinc-400 uppercase tracking-widest">Synced {integration.lastSync}</span>
                    </div>
                  )}
                </div>

                {/* Right action */}
                {integration.status !== 'coming_soon' && (
                  isConnected ? (
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : integration.id)}
                      className="shrink-0 flex items-center gap-1 text-[11px] font-mono-io uppercase tracking-widest text-zinc-500 hover:text-black transition-colors"
                    >
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  ) : (
                    <button
                      onClick={() => setSheetId(integration.id)}
                      className="shrink-0 text-[11px] font-mono-io uppercase tracking-widest px-3 py-1.5 rounded-full bg-black text-white hover:bg-zinc-800 transition-colors"
                    >
                      Connect
                    </button>
                  )
                )}
              </div>

              {/* Expanded: feature toggles + disconnect */}
              <AnimatePresence>
                {isExpanded && isConnected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 flex flex-col gap-4 border-t border-[#f0f0f0] pt-4">
                      <p className="text-[11px] font-mono-io uppercase tracking-widest text-zinc-400">Features</p>
                      <div className="flex flex-col gap-4">
                        {features.map(feature => (
                          <FeatureToggle
                            key={feature.id}
                            feature={feature}
                            onChange={(fid, val) => handleFeatureToggle(integration.id, fid, val)}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => handleDisconnect(integration.id)}
                        className="text-[11px] font-mono-io uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors text-left mt-1"
                      >
                        Disconnect {integration.name}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="px-5 pb-8 pt-2">
        <p className="text-[11px] font-mono-io text-zinc-400 uppercase tracking-widest text-center">More integrations coming soon</p>
      </div>

      {/* Connect sheet */}
      <AnimatePresence>
        {sheetId && sheetIntegration && (
          <ConnectSheet
            integration={sheetIntegration}
            onClose={() => setSheetId(null)}
            onConnect={() => handleConnect(sheetId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
