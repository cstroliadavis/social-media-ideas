---
name: topic-deep-dive
description: Guides a rigorous, step-by-step interview and research process to discover, flesh out, stress-test (devil's advocate), and package high-impact social media and essay topics. Elicits personal anecdotes/stories, develops authentic grounded metaphors, steel-mans counter-arguments, crafts curiosity-driven non-clickbait hooks, plans visual/image prompts, and aligns cross-platform distribution and SEO/algorithm strategy.
---

# Topic Deep-Dive & Idea Stress-Testing Skill

This skill guides an interactive, rigorous, and collaborative process to transform raw thoughts, experiences, and technical insights into deeply nuanced, resilient, and engaging content vaults in `topics/documents/` and `topics/themes/`.

---

## 🧭 The 6-Step Deep-Dive Framework

When activated (e.g., when adding a new topic, exploring an idea, or fleshing out an outline), guide the user step-by-step through these 6 phases:

```text
1. Topic Discovery & Passion Alignment
   ├── Passion, domain depth & learning frontiers
   └── Core premise / thesis statement
2. Story Banking & Personal Anecdotes
   ├── Lived experiences, project scars & epiphany moments
   └── Historical / ethical domain stories when personal anecdotes are lacking
3. Grounded Metaphor & Analogy Synthesis
   ├── Real-world tangible analogies (e.g., "The $500 Aspirin", "The Dull Chainsaw")
   └── Evaluation: Does this analogy clarify or distort?
4. Devil's Advocate & Intellectual Steel-Manning
   ├── Rigorous exploration of counter-arguments
   ├── Why reasonable people disagree or why certain pressures cause the opposing view
   └── Concession boundaries: What evidence would change your mind?
5. Multi-Channel Hooks & Ethical Curiosity Engineering
   ├── Curiosity gap without clickbait (intrigue grounded in authentic insight)
   ├── Platform hooks: Medium essay titles, YouTube video concepts, BlueSky threads
   └── Visual asset direction & Midjourney/DALL-E image generation prompts
6. Distribution Ecosystem, Algorithms & Cross-Linking
   ├── Interlinking between related documents and theme mind maps
   ├── SEO keywords & YouTube / TikTok discovery targeting
   └── Strategic bridge-building (reaching people who disagree or think differently)
```

---

## Phase 1: Topic Discovery & Passion Alignment

Help identify topics at the intersection of:
- **Deep Practical Experience**: Areas where the author has 20+ years of pattern recognition and scar tissue.
- **Current Curiosity / Frontier Knowledge**: Concepts where the author knows the fundamentals but is exploring new paradigms (e.g., AI runtime agents, modern type systems).
- **Misunderstood Dogmas**: Common industry misconceptions, cargo-cult practices, or toxic organizational tropes.

### Prompting Questions:
- *"What is a common practice or belief in our industry that quietly drives you crazy?"*
- *"What is a hard truth you learned only after failing or breaking something in production?"*
- *"What is the 1-sentence thesis you want someone to remember 6 months after reading this?"*

---

## Phase 2: Story Banking & Personal Anecdotes

Every compelling piece of writing needs human texture. Help draw out authentic stories:
1. **Lived Career Anecdotes**: Extract specific moments—late-night debugging, executive budget battles, consulting turnarounds, or architectural rewrites.
2. **Historical & Ethical Case Studies**: If a personal story isn't immediately available, research or propose verified industry examples, historical precedents, or public post-mortems.
3. **Hypothetical Parables**: Construct vivid, relatable scenarios (clearly demarcated as parables) that illuminate the dynamic without fabricating real-world events.

---

## Phase 3: Grounded Metaphor & Analogy Synthesis

Translate abstract technical, cultural, or spiritual concepts into sticky physical metaphors.

### Metaphor Criteria:
- **Familiarity**: Rooted in everyday human experiences (cooking, home repair, medical bills, physical tools).
- **Proportionality**: Must not exaggerate or trivialise the real problem.
- **Extensibility**: Does the metaphor hold up when examined under stress?

### Collaborative Workflow:
- Present 2–3 distinct metaphorical options with the pros/cons of each.
- Invite the author to refine, combine, or substitute their own preferred imagery.

---

## Phase 4: Devil's Advocate & Intellectual Steel-Manning (Grill-Me)

Never publish an essay that attacks a strawman. Stress-test the core premise relentlessly:
1. **Steel-Man the Counter-Perspective**: State the opposing argument in its strongest, most compelling form. Why do smart, rational people adopt the opposite approach?
2. **Legitimate External Pressures**: Acknowledge budget constraints, legacy systems, organizational politics, or timeline pressures that force compromises.
3. **Identify Nuances & Concession Boundaries**:
   - Explicitly define under what conditions the opposite argument is actually *correct*.
   - Define what new empirical evidence or telemetry would cause the author to change their stance.
   - Present this nuance directly in the document vault so readers see fair, balanced judgment.

---

## Phase 5: Multi-Channel Hooks & Ethical Curiosity Engineering

Transform the core thesis into platform-specific hooks that generate curiosity without resorting to deceitful clickbait.

### Hook Philosophy:
- **Anti-Clickbait Rule**: A clickbait hook promises a revelation and delivers a cliché. An **ethical curiosity hook** promises a surprising, counter-intuitive mechanism and delivers substantial, actionable depth.

### Channel Adaptation Matrix:
- **Medium / Substack (Anchor Essay)**: Provocative, thesis-driven title and subtitle that reframes an old debate.
- **BlueSky / Micro-Posts**: 5-post thread opening with a counter-intuitive observation or contrarian fact.
- **YouTube (Long-Form)**: High-concept title, thumbnail visual concept, and 15-second opening hook pacing.
- **Short-Form (Shorts / TikTok)**: 60-second talking-head hook opening with a tangible object or physical metaphor.
- **Visual Assets & Image Prompts**: Concrete prompts for AI image generation or suggestions for stock/demonstration visuals (e.g., conceptual photography, architectural diagrams).

---

## Phase 6: Distribution, Algorithm Reach & Knowledge Vault Integration

Ensure the piece reaches the right audience and permanently enriches the workspace:
1. **Algorithm & SEO Strategy**:
   - Target algorithmic discovery on YouTube/TikTok through search intent keywords and suggested video adjacency.
   - Design cross-content pathways so readers are guided naturally to related topics.
   - Build bridgeheads: Frame content so that people who initially disagree feel respected and intrigued rather than alienated.
2. **Obsidian Vault & Mind Map Integration**:
   - Create or update the document in `topics/documents/<slug>.md` with full YAML properties.
   - Cross-link into relevant `topics/themes/<theme>.md` files and update `topics/themes.md` and `topics/social.md`.
   - Update `calendar/pipeline.md` with target release windows.
   - Automatically trigger git sync to keep GitHub repository up to date.
