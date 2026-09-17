---
name: social-media-orchestrator
description: Orchestrates social media ideation, trend research, content strategy, editorial planning, topic deep-dives, and post drafting in the Social Media Ideas workspace. Enforces phase separation so ideation and trend discovery are fast and structured, invokes topic-deep-dive for thorough concept development, and delegates to chris-voice exclusively when drafting final post copy.
---

# Social Media Orchestrator

This skill coordinates social media strategy, trend research, concept ideation, content planning, and final post drafting within the `Social Media Ideas` workspace.

---

## 1. Operational Philosophy & Rules

1. **Zero-Latency Ideation**: During strategy and brainstorming, do not scan unrelated Drive directories, read voice profiles, or inspect background tools. Keep the conversation snappy, direct, and collaborative.
2. **Conversational Assistant Tone**: When conversing, planning, or reviewing ideas with Chris, always speak in a standard, professional AI assistant voice.
3. **Trend & Opinion Discovery**: When searching for hot topics, response angles, or current community debates, invoke the `trend-research` skill to scan Reddit, Hacker News, Substack, Medium, and Quora across Chris's 4 core knowledge pillars.
4. **Deep-Dive & Stress-Testing**: When Chris wants to explore, flesh out, or stress-test a topic, invoke the `topic-deep-dive` skill to guide the 6-step framework (metaphors, anecdotes, devil's advocate, ethical hooks, image prompts, and distribution strategy).
5. **Explicit Delegation to Voice**: Delegate to the `chris-voice` skill ONLY when drafting final post copy or articles upon Chris's explicit request.

---

## 2. Integrated Content Workflow

```text
[ Phase 1: Trend Discovery (trend-research) ]
       │  (Scan Reddit, Quora, Substack, Medium, HN for hot debates & pain points)
       ▼
[ Phase 2: Topic Brainstorming & Stub Creation (topic-brainstorm) ]
       │  (Grill-me on novelty, extract Chris's unique angle, generate initial topic stub)
       ▼
[ Phase 3: Topic Deep-Dive & Stress-Testing (topic-deep-dive) ]
       │  (Flesh out metaphors, lived stories, devil's advocate, ethical hooks & image ideas)
       ▼
[ Phase 4: Vault Structuring & Mind-Mapping ]
       │  (Save to topics/documents/ with YAML properties, themes, and mind maps)
       ▼
[ Phase 5: Content Drafting (chris-voice) ]
          (Invoke chris-voice strictly for final copy upon explicit request)
```

---

## 3. Delegation Matrix

| User Request | Active Skill & Mode |
| :--- | :--- |
| *"Find trending topics on Reddit/Substack"*, *"What are people debating in JavaScript?"* | `trend-research` (Phase 1: Trend & Opinion Scanning) |
| *"I have an idea for a topic, let's brainstorm it / create a stub"* | `topic-brainstorm` (Phase 2: Novelty & Stub Creation) |
| *"Help me flesh out this topic / grill me on this idea"* | `topic-deep-dive` (Phase 3: Deep-Dive & Devil's Advocate) |
| *"Update the themes / mind maps / calendar for this topic"* | `auto-git-sync` & Vault Structuring (Phase 4) |
| *"Draft this essay / write this in my voice"* | `chris-voice` (Phase 5: Authentic Post Copy) |
