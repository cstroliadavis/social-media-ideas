---
name: trend-research
description: Conducts targeted web research across current tech news, trending developer discussions, and opinion platforms (Reddit, Quora, Substack, Medium, Hacker News, Dev.to, X/Twitter) to discover high-leverage topics Chris is passionate and knowledgeable about. Synthesizes trending debates into response articles, contrarian takes, or deep-dive concept pitches aligned with his 4 content pillars.
---

# Trend Research & Topic Brainstorming Skill

This skill searches the web and opinion ecosystems to identify trending debates, common developer pain points, and viral discussions across Chris's core areas of expertise. It helps formulate high-impact response articles, contrarian commentary, or fresh deep-dive topic proposals.

---

## 🧭 The 4 Knowledge Pillars

Every research session maps trends directly into Chris's primary knowledge pillars:

1. **Pragmatic Architecture & Language Mechanics**:
   - Web standards, vanilla JS/TS, runtime mechanics (`this`, event loop, prototypes).
   - Anti-framework fatigue, sustainable web development, avoiding premature microservices/patterns.
   - SQL, database modeling, query tuning, relational vs non-relational trade-offs.
   - TDD, automated testing rigor, test design pressure.
2. **Org Culture, Leadership & Tech Economics**:
   - Developer tooling budgets, the cost of technical debt ("The Fast Food Fallacy").
   - Enterprise consulting lessons, right-sized solutions ("The $500 Aspirin").
   - Leadership authenticity vs surface charm ("The Charisma Trap"), tenure vs impact ("The Loyalty Trap").
3. **Relationships, Introversion & Mental Health**:
   - Solitude vs loneliness, deep authentic connection for introverts.
   - Therapy as proactive maintenance, emotional maturity in high-pressure engineering.
4. **Spirituality, Philosophy & Virtue**:
   - True humility (self-forgetfulness) vs low self-esteem.
   - Disciplined/covenantal love vs ephemeral emotional state.

---

## 🔍 Research & Scanning Protocol

When activated (e.g., *"Search for trending topics on React vs Vanilla"*, *"What are people debating on Reddit about TDD?"*, or *"Find me 3 trending topics to write about"*):

### Step 1: Query Formulation & Multi-Source Search
Execute targeted web searches using `search_web` across specific opinion and developer hubs:

- **Reddit & Communities**:
  - `site:reddit.com/r/programming OR site:reddit.com/r/javascript OR site:reddit.com/r/webdev`
  - `site:news.ycombinator.com (Hacker News)`
- **Long-Form Opinion & Essays**:
  - `site:medium.com ("software architecture" OR "clean code" OR "engineering leadership")`
  - `site:substack.com ("software engineering" OR "tech leadership" OR "culture")`
  - `site:quora.com ("JavaScript architecture" OR "software design patterns")`
- **Current Industry News & Releases**:
  - Framework releases, state of JS surveys, tech layoffs / budget shifts, AI code tooling debates.

### Step 2: Signal Filtering & Resonance Scoring
Filter the raw search results against 3 criteria:
1. **High Emotional Charge / Active Debate**: Are developers frustrated, confused, or divided on this issue? (e.g., framework fatigue, AI code quality, clean architecture dogma).
2. **Authority / Scar Tissue Alignment**: Does Chris have 20+ years of hard-won experience that offers a distinct, pragmatic perspective on this?
3. **Fresh Angle / Anti-Hype**: Can we provide a non-obvious, nuanced take rather than repeating the conventional consensus?

---

## 💡 Topic Packaging Formats

When presenting brainstormed topics to Chris, structure each suggestion into one of three actionable formats:

### Format A: The "Contrarian Take / Response Essay"
- **Trending Hook / Debate**: What viral article, tweet, or Reddit thread is currently stirring controversy?
- **The Popular Consensus**: What is everyone saying?
- **Chris's Contrarian Angle**: Why the consensus misses the point (grounded in systems thinking or practical experience).
- **Proposed Working Title**: (e.g., *"Why the 'Clean Code' Debate Misses the Point of Software Maintenance"*).

### Format B: The "Timeless Antidote to Current Pain"
- **Current Symptom**: What specific friction are developers complaining about today on Reddit/HN?
- **Root Cause Analysis**: Why this isn't a new problem (e.g., modern framework churn is just 2012 all over again).
- **Pragmatic Solution**: The durable principle, mental model, or architectural boundary that solves it.

### Format C: The "Thought Leader Deep-Dive"
- **Emerging Frontier**: What new paradigm (e.g., AI agent pipelines, local-first web apps) needs grounded senior perspective?
- **The Question Being Asked**: What are developers searching for on Quora/StackOverflow that lacks deep, clear answers?
- **Core Lesson / Metaphor**: The physical analogy that demystifies it.

---

## 🔄 Handoff & Skill Collaboration

When using `trend-research`:
1. **Jumpstart Brainstorming**: Hand off trending discoveries directly to `topic-brainstorm` for a focused grill-me session to extract Chris's unique angle and generate an initial stub.
2. **Immediate Elaboration**: If Chris already has a crystal-clear take, transition directly into `topic-deep-dive` to construct the full knowledge vault and multi-channel publication strategy.
3. **Vault Registration & Git Sync**: Register any new stubs or vaults in `topics/themes/` and auto-commit to Git.
