---
name: trend-research
description: Conducts targeted web research across tech news, breaking AI developments, Reddit communities, and opinion platforms (Reddit, Quora, Substack, Medium, Hacker News, X/Twitter). Discovers high-leverage topics across AI/LLMs/Agents, Software Architecture, Org Culture & Workplace Unity, ADHD & INTP Neurodiversity, and the Bahá'í Faith to formulate response articles, contrarian commentary, and fresh deep-dive pitches.
---

# Trend Research & Topic Brainstorming Skill

This skill searches the web, developer forums, and opinion ecosystems to identify trending debates, breaking industry shifts, and viral discussions across Chris's core areas of passion and expertise.

---

## 🧭 The Core Knowledge & Passion Pillars

Every research session maps trends directly into Chris's primary knowledge pillars:

1. **Pragmatic Architecture, Language Mechanics & Standards**:
   - Web standards, vanilla JS/TS, runtime mechanics (`this`, event loop, prototypes).
   - Anti-framework fatigue, sustainable web development, avoiding premature microservices/patterns.
   - SQL, database modeling, query tuning, relational vs non-relational trade-offs.
   - TDD, automated testing rigor, test design pressure.
2. **AI, LLMs, Autonomous Agents & Developer Tooling**:
   - Breaking AI news, frontier model releases, runtime agents, tool-use, multi-agent orchestration.
   - Practical AI integration vs. empty hype, AI agent architecture, LLM context engineering.
   - The impact of AI on software engineering craft, standards-driven AI code generation.
3. **Org Culture, Leadership, Workplace Unity & Enjoyment**:
   - Building workplace unity, psychological safety, and shared joy while simultaneously boosting productivity.
   - Developer tooling budgets, the cost of technical debt ("The Fast Food Fallacy").
   - Enterprise consulting lessons, right-sized solutions ("The $500 Aspirin").
   - Leadership authenticity vs surface charm ("The Charisma Trap"), tenure vs impact ("The Loyalty Trap").
4. **Neurodiversity, Mindset & Psychology (ADHD & INTP)**:
   - Thriving in technical leadership with ADHD: hyperfocus, friction management, non-linear thinking.
   - The INTP cognitive profile in engineering: deep systems curiosity, intellectual independence, introversion.
   - Solitude vs loneliness, deep authentic connection for introverts.
   - Therapy as proactive maintenance, emotional maturity in high-pressure engineering.
5. **Spirituality, Virtue & the Bahá'í Faith**:
   - Principles of the Bahá'í Faith: the oneness of humanity, independent investigation of truth, harmony of science and religion, consultation in decision-making.
   - True humility (self-forgetfulness) vs low self-esteem.
   - Disciplined/covenantal love vs ephemeral emotional state.

---

## 🔍 Research & Scanning Protocol

When activated (e.g., *"Search for trending topics on AI agents"*, *"What are people on Reddit saying about ADHD and software engineering?"*, *"Find discussions on the Bahá'í Faith or workplace unity"*):

### Step 1: Query Formulation & Multi-Source Search
Execute targeted web searches using `search_web` across specific communities and hubs:

- **Reddit Communities**:
  - **Tech & Architecture**: `site:reddit.com/r/programming OR site:reddit.com/r/javascript OR site:reddit.com/r/webdev OR site:reddit.com/r/experienceddevs`
  - **AI & Agents**: `site:reddit.com/r/LocalLLaMA OR site:reddit.com/r/ArtificialInteligence OR site:reddit.com/r/MachineLearning OR site:reddit.com/r/ChatGPTCoding`
  - **Workplace Culture & Management**: `site:reddit.com/r/humanresources OR site:reddit.com/r/management OR site:reddit.com/r/cscareerquestions`
  - **Neurodiversity & Personality**: `site:reddit.com/r/ADHD_Programmers OR site:reddit.com/r/adhd OR site:reddit.com/r/INTP`
  - **Bahá'í & Spirituality**: `site:reddit.com/r/bahai OR site:reddit.com/r/religion`
- **Developer News & Hacker News**:
  - `site:news.ycombinator.com (Hacker News)`
- **Long-Form Opinion & Essays**:
  - `site:medium.com ("software architecture" OR "AI agents" OR "workplace culture" OR "ADHD developers")`
  - `site:substack.com ("software engineering" OR "tech leadership" OR "neurodiversity" OR "spirituality")`
  - `site:quora.com ("Bahai faith" OR "INTP personality" OR "JavaScript architecture" OR "ADHD focus")`
- **Breaking News & Releases**:
  - Major AI announcements, model benchmarks, framework shifts, tech layoffs / organizational shifts.

### Step 2: Signal Filtering & Resonance Scoring
Filter raw search results against 3 criteria:
1. **High Emotional Charge / Active Debate**: Are people frustrated, confused, or deeply divided on this issue?
2. **Authority / Scar Tissue Alignment**: Does Chris have deep experience or a grounded personal philosophy on this?
3. **Fresh Angle / Anti-Hype**: Can we provide a nuanced, systems-thinking take or a fresh unifying perspective rather than repeating conventional platitudes?

---

## 💡 Topic Packaging Formats

When presenting brainstormed topics to Chris, structure each suggestion into one of three actionable formats:

### Format A: The "Contrarian Take / Response Essay"
- **Trending Hook / Debate**: What viral article, tweet, or Reddit thread is currently stirring controversy?
- **The Popular Consensus**: What is everyone saying?
- **Chris's Contrarian Angle**: Why the consensus misses the point (grounded in systems thinking or practical experience).
- **Proposed Working Title**: (e.g., *"Why AI Agents Won't Replace Senior Engineers—They Will Expose Bad Architecture"*).

### Format B: The "Timeless Antidote to Current Pain"
- **Current Symptom**: What specific friction or burnout are people complaining about on Reddit/HN?
- **Root Cause Analysis**: Why this is an organizational or psychological pattern rather than a tooling failure.
- **Pragmatic / Unifying Solution**: The durable principle, Bahá'í consultative model, or ADHD-friendly workflow that solves it.

### Format C: The "Thought Leader Deep-Dive"
- **Emerging Frontier**: What new paradigm (e.g., LLM tool orchestration, workplace unity metrics, neurodivergent leadership) needs senior perspective?
- **The Question Being Asked**: What are people searching for on Quora/Reddit that lacks deep, clear answers?
- **Core Lesson / Metaphor**: The physical or relatable analogy that demystifies it.

---

## 🔄 Handoff & Skill Collaboration

1. **Jumpstart Brainstorming**: Hand off trending discoveries directly to `topic-brainstorm` for a focused grill-me session to extract Chris's unique angle and generate an initial stub in `topics/documents/`.
2. **Immediate Elaboration**: If Chris already has a crystal-clear take, transition directly into `topic-deep-dive` to construct the full knowledge vault and multi-channel publication strategy.
3. **Vault Registration & Git Sync**: Register any new stubs or vaults in `topics/themes/` and auto-commit to Git.
