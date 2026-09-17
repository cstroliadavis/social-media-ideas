---
id: SOC-BLUESKY-021
topic_id: TOP-021
channel: bluesky
format: thread
status: draft
author: Chris Strolia-Davis
created: 2026-09-17
tags:
  - webdev
  - architecture
  - ai
  - web-standards
---

# BlueSky & LinkedIn Thread: The Mixture-of-Skills Architecture

## Post 1 (The Hook & Image)

We built frameworks because typing boilerplate and managing DOM quirks by hand took too long.

With AI coding agents, framework lock-in has become a liability rather than a productivity boost.

Here is why modular skill registries (Mixture-of-Skills) make more sense than runtime framework
dependencies 🧵👇

[Image: manual-vs-automated-software-dev.jpeg]

---

## Post 2 (The Grocery Cart Analogy)

Think about how we build web apps today.

Want one simple UI feature? You end up importing hundreds of megabytes of `node_modules`.

It feels like buying a 3lb steak pack, a 20lb bag of rice, and a dozen cans of beans just to cook
dinner for one. You pay for the bulk packaging, clutter your pantry, and keep extra burners roaring
for pans you never touch.

---

## Post 3 (The Design-Time Inversion)

AI shifts where framework complexity lives.

Historically, frameworks ran in the browser because human teams needed a runtime shim to avoid
writing repetitive boilerplate.

With AI agents, that intelligence moves upstream to design time.

The agent references a markdown skill package (ADF) and writes lean, zero-dependency native code
directly on open web standards.

---

## Post 4 (The Assembly Precedent)

When I mention moving away from heavy runtime frameworks, folks often ask: "Isn't vanilla code hard
to maintain?"

In the 1960s, systems programmers said the same thing about C compilers: "Hand-tuned assembly is
always better."

Compilers eventually won because higher abstractions save developer time. AI agents act as our
optimizing compilers; skills provide our architectural constraints.

---

## Post 5 (The 3-Tier Hierarchy)

How do you govern this across an engineering team?

1. **Canonical ADFs**: Open standards (W3C, A11y, OWASP).
2. **Org Methodologies**: Internal design tokens, auth flows, and logging conventions.
3. **App Blueprints**: Feature-specific schemas and local contracts.

Deterministic rules checked by local linters—no guessing or unvetted patterns.

---

## Post 6 (The Takeaway & Call to Action)

Framework upgrade cycles shouldn't eat six months of an engineering roadmap.

Try an isolated experiment on Monday: pick one utility component, define a skill rule, and generate
a zero-dependency native Web Component.

Full essay on Medium: [Link to article]
