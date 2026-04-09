# Ninjo — Product Vision & Architecture

> This file captures the CEO's product vision. It is the north star for all design and engineering decisions in this repo. Read it before making any significant product or UI changes.

---

## What Ninjo Is

Ninjō is not a chatbot. It is not a loose automation tool.

**Ninjō is an AI-native operating system for conversational revenue.**

The product must do three things extremely well:

1. Let the customer create their first agent fast
2. Deliver a visible first wow moment
3. Keep them coming back because the system surfaces value, alerts, improvements, and next steps

---

## The Four Critical Separations

Always keep these lanes distinct in the UI and logic:

| Lane | What it is |
|------|-----------|
| **Agent channel** | Where the DM agent lives and operates with leads (Instagram, WhatsApp, etc.) |
| **Operator handoff channel** | Where the human supervisor gets alerts, approvals, summaries (Slack, Telegram, Discord, WhatsApp, Ninjo app) |
| **Onboarding stage** | Entry → Goal → Login → Minimal context → Agent type |
| **Activation + ongoing stage** | Draft → Creation loop → Activate → Launch → Wow → Ongoing value → Expansion |

---

## The Two Entry Funnels

### Self-serve
Ads → Landing → Referral → Account creation → Goal → Build → Simulate → Activate → **Paywall** → Launch

### High-ticket assisted
Slack discovery → Guided sale → Goal → Build → Simulate → Activate (no product paywall block) → Launch

Both funnels converge at the same experience:

**Onboarding → Setup → Creation loop → Activation → Launch → First wow → Ongoing value → Expansion**

---

## The Correct Journey Order

1. **Entry** — One of the two funnels above
2. **Goal first** — Define the objective *before* login:
   - High-ticket appointment setting
   - Low-ticket closing
   - Onboarding
   - Community building / management
   > Goal comes before login because it orients the flow, defines the use case, and makes onboarding feel purposeful.
3. **Login / access**
4. **Minimal context** — Ask only what's needed to build the agent:
   - What they sell
   - Who they sell to
   - Current channel
   - Volume / traffic / DMs
   - Concrete goal
   > No more. Onboarding is not bureaucracy.
5. **Agent type** — This is a central product bifurcation:
   - **Human-supervised** — Human supervises, contact limits, handoff alerts
   - **Progressive Human/AI** — Starts more human, AI learns, gradually takes more steps
   - **Full AI end-to-end** — AI does everything, human intervenes only on exceptions
6. **First agent draft** — System creates the first version
7. **Creation loop** — User can role-play, run simulations, edit, re-test, repeat until satisfied. This builds trust and quality before activation.
8. **Activate** — Configure operating rules: contact limits, triggers, handoff logic
9. **Paywall (self-serve only)** — Appears at activation. By this point the user has seen the product work, so payment feels like unlocking, not friction.
10. **Launch** — Agent goes live on the agent channel
11. **Operator handoff channel setup** — Configured after activation and paywall
12. **First wow moment** — Measurable, tangible:
    - First booked call or first qualified lead (high-ticket)
    - First sale (low-ticket)
    - First completed activation (onboarding)
    - First meaningful engagement win (community)
13. **Ongoing value** — Daily summary, hot lead alerts, objection insights, attribution reports, funnel health, auto-improvements
14. **Expansion** — More context, more channels, more agents, more autonomy, new use cases

---

## Core System Components

### Agent Channel
Where the DM agent operates. Examples: Instagram, WhatsApp, Twitter DMs.
> Never mix this with the operator channel in the UI.

### Operator Handoff Channel
Where the human supervisor lives. Examples: WhatsApp, Slack, Discord, Telegram, Ninjo app.
Receives: notifications, approvals, summaries, handoffs, funnel updates.
> Ninjo is not just "putting a bot." It is execution + supervision combined.

### Operator Journey Engine
The brain of the product. Knows:
- What stage the user is in
- What's missing
- What actions are available
- What's blocked
- When to advance

> Without this, the product is just UI + prompts. With it, there is a genuinely guided experience.

### Cortex
The deterministic execution layer. Runs repeatable tasks, produces structured outputs, resolves concrete operational tasks.
> Not everything needs a reasoning agent. Cortex handles the predictable work.

### Sub-agents
For edge cases and open-ended work: unusual scenarios, research, complex decision support.
> Keeps complexity out of the main operator flow.

### Memory / Data Layer
Stores: user profile, business context, agent config, performance data, improvements.
> The agent gets smarter with more context. Memory is what makes it a system, not a tool.

---

## Alerts & Reports

### Required reports
- Daily summary
- Hot lead alerts
- Objection insights
- Attribution reports
- Funnel health
- Auto-improvements

### Required alerts
- Hot lead waiting
- Link sent, no booking
- Handoff required
- Conversation stalled
- Conversion drop
- New objection pattern

> These keep the operator coming back. They convert the product into an operating system, not a demon tool.

---

## Rich Content (Staging Rule)

| Stage | What to show |
|-------|-------------|
| **Setup** | Light options: follow-up draft, base assets, optional voice, optional stickers |
| **Expansion** | Full layer: follow-up automation, generative voice, pre-recorded audio, stickers, content assets |

**Rule:** What helps reach the first wow → can appear as an option in setup. What adds sophistication and retention → goes in expansion.

---

## Integrations (Progressive, Not Forced)

Never push integrations in onboarding. Surface contextually and progressively:
- CRM
- Calendly
- GoHighLevel
- Fathom
- Meta Ads / attribution

**When to suggest:**
- During setup, if the client already uses them
- After first value, in alerts or follow-ups

> First, let the client see value. Then offer more control, attribution, and automation.

---

## Paywall Logic

| Funnel | When |
|--------|------|
| Self-serve | At activation — user has already seen the product work |
| Assisted sale | Slack can activate without the product-led block |

---

## Product Principles

1. **Opinionated over flexible** — Guide more, allow less random exploration
2. **Progressive complexity** — Show only what's needed at each stage
3. **Runtime over setup** — The value is in operating, not configuring
4. **One interface** — One visible operator, not a zoo of screens
5. **Default to action** — Always push the next step

---

## This Repo's Context

- This web app is a **native app design mock**. Design decisions must reflect native mobile patterns (bottom sheets, native gestures, iOS/Android conventions), not web-centric patterns.
- The sidebar navigation drives the operator experience. Current views: Chats, Amplify (story sequences + post calendar), Explore, Profile.
- Design tokens, components, and layouts should feel like a native iOS/Android app.

## Deployment

- This project deploys to Vercel. After every `git push origin main`, use the `/vercel:status` skill to confirm the Vercel build passed before considering the task complete.
