---
name: social-media-orchestrator
description: Orchestrates social media ideation, content strategy, editorial planning, topic deep-dives, and post drafting in the Social Media Ideas workspace. Enforces phase separation so ideation is fast and structured, invokes topic-deep-dive for thorough concept development, and delegates to chris-voice exclusively when drafting final post copy.
---

# Social Media Orchestrator

This skill coordinates social media strategy, concept ideation, content planning, and final post drafting within the `Social Media Ideas` workspace.

---

## 1. Operational Philosophy & Rules

1. **Zero-Latency Ideation**: During strategy and brainstorming, do not scan unrelated Drive directories, read voice profiles, or inspect background tools. Keep the conversation snappy, direct, and collaborative.
2. **Conversational Assistant Tone**: When conversing, planning, or reviewing ideas with Chris, always speak in a standard, professional AI assistant voice.
3. **Deep-Dive & Stress-Testing**: When Chris wants to explore, flesh out, or stress-test a topic, invoke the `topic-deep-dive` skill to guide the 6-step framework (metaphors, anecdotes, devil's advocate, ethical hooks, image prompts, and distribution strategy).
4. **Explicit Delegation to Voice**: Delegate to the `chris-voice` skill ONLY when drafting final post copy or articles upon Chris's explicit request.

---

## 2. Integrated Content Workflow

```text
[ Phase 1: Strategy & Ideation ]
       │  (Align on pillars, audience, and broad topics)
       ▼
[ Phase 2: Topic Deep-Dive & Stress-Testing (topic-deep-dive) ]
       │  (Flesh out metaphors, lived stories, devil's advocate, ethical hooks & image ideas)
       ▼
[ Phase 3: Vault Structuring & Mind-Mapping ]
       │  (Save to topics/documents/ with YAML properties, themes, and mind maps)
       ▼
[ Phase 4: Content Drafting (chris-voice) ]
          (Invoke chris-voice strictly for final copy upon explicit request)
```

---

## 3. Delegation Matrix

| User Request | Active Skill & Mode |
| :--- | :--- |
| *"Let's brainstorm 3 ideas on X"* | `social-media-orchestrator` (Phase 1: Rapid Ideation) |
| *"Help me flesh out this topic / grill me on this idea"* | `topic-deep-dive` (Phase 2: Deep-Dive & Devil's Advocate) |
| *"Update the themes / mind maps / calendar for this topic"* | `auto-git-sync` & Vault Structuring (Phase 3) |
| *"Draft this essay / write this in my voice"* | `chris-voice` (Phase 4: Authentic Post Copy) |
