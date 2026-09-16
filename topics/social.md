# Social Media & Multi-Platform Distribution Hub

This document tracks how deep-dive knowledge documents from `topics/documents/` are repurposed across target social media channels into tailored formats and campaigns.

---

## 🗺️ Multi-Channel Distribution Graph

```mermaid
graph LR
    DOCS["📚 Master Document Vaults\n(topics/documents/)"]

    subgraph PLATFORMS["🚀 Social Media Outlets"]
        MEDIUM["✍️ Medium\n(Long-Form Anchor Essays)"]
        SUBSTACK["💌 Substack\n(Newsletters & In-Depth Breakdowns)"]
        YOUTUBE["🎥 YouTube\n(Long-Form & Code Breakdowns)"]
        SHORTS["📱 YouTube Shorts / TikTok\n(60s Visual Hooks)"]
        BLUESKY["🧵 BlueSky\n(Micro-Threads & Discussions)"]
    end

    DOCS --> MEDIUM
    DOCS --> SUBSTACK
    DOCS --> YOUTUBE
    DOCS --> SHORTS
    DOCS --> BLUESKY
```

---

## 📁 Channel Hubs & Repurposing Registry

### 1. Medium & Substack (Anchor Essays & Newsletters)
- **Folder**: `topics/social/medium/`, `topics/social/substack/`
- **Format**: 1,200–2,000 word comprehensive narrative essays with full context, code examples, and diagrams.
- **Pipeline**:
  - `alone-but-not-lonely.md`: Solitude vs Loneliness personal essay.
  - `the-500-dollar-aspirin.md`: Enterprise architecture & consulting lessons.
  - `what-the-heck-is-this.md`: Visual deep dive into JS execution context.
  - `the-fast-food-fallacy.md`: Technical debt and engineering quality breakdown.

### 2. YouTube (Long-Form & Deep-Dives)
- **Folder**: `topics/social/youtube/`
- **Format**: 8–15 minute structured video breakdowns, slide/diagram walkthroughs, and code architectural reviews.
- **Pipeline**:
  - `what-the-heck-is-this.md`: Interactive visual slides explaining call sites.
  - `why-tdd-matters.md`: Live refactoring demo proving test pressure on design.
  - `the-charisma-trap.md`: Talking head essay on leadership and tech talent.

### 3. YouTube Shorts & TikTok (Short-Form Micro Videos)
- **Folder**: `topics/social/tiktok/`, `topics/social/youtube/`
- **Format**: 45–60 second vertical videos featuring 1 hook, 1 relatable metaphor, and 1 actionable conclusion.
- **Pipeline**:
  - `the-loyalty-trap.md`: Tenure vs. Impact in 60 seconds.
  - `the-500-dollar-aspirin.md`: "Why enterprise software is like a hospital bill".
  - `humility-is-not-low-self-esteem.md`: "The difference between confidence and arrogance".

### 4. BlueSky (Micro-Posts & Discussion Threads)
- **Folder**: `topics/social/bluesky/`
- **Format**: 5–7 post threads summarizing counter-intuitive points and ending with an open question.
- **Pipeline**:
  - All documents have active BlueSky thread outlines.
