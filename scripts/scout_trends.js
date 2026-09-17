#!/usr/bin/env node

/**
 * Scout Trends & High-Value Topics
 * 
 * Fetches, filters, and formats trending topics and discussions across:
 * 1. Practical Automation & Life Enhancement (Spreadsheet hacks, macro automation, Iron Triangle)
 * 2. AI/ML & Developer Tooling (Local agents, pragmatic AI vs hype, framework fatigue)
 * 3. Employment, Job Search & Economy (ATS barriers, layoffs, reclaiming personal agency)
 * 4. Constructive Middle Ground & Non-Zero-Sum Solutions (Depolarizing divisive issues)
 * 
 * Output: Markdown summary with direct source links, core debate points, and Chris's unique angle.
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const RSS_FEEDS = [
  // Hacker News Frontpage & Ask/Show
  { name: 'Hacker News Frontpage', url: 'https://news.ycombinator.com/rss', category: 'General Tech' },
  // Reddit Subreddits
  { name: 'Reddit r/programming', url: 'https://www.reddit.com/r/programming/.rss', category: 'Programming & Architecture' },
  { name: 'Reddit r/experienceddevs', url: 'https://www.reddit.com/r/experienceddevs/.rss', category: 'Engineering Culture & Career' },
  { name: 'Reddit r/LocalLLaMA', url: 'https://www.reddit.com/r/LocalLLaMA/.rss', category: 'AI & Local Models' },
  { name: 'Reddit r/ChatGPTCoding', url: 'https://www.reddit.com/r/ChatGPTCoding/.rss', category: 'AI Practical Tooling' },
  { name: 'Reddit r/ADHD_Programmers', url: 'https://www.reddit.com/r/ADHD_Programmers/.rss', category: 'Neurodiversity & Productivity' },
  { name: 'Reddit r/recruitinghell', url: 'https://www.reddit.com/r/recruitinghell/.rss', category: 'Job Search & Employment' }
];

const THEMATIC_KEYWORDS = {
  automation: ['automate', 'automation', 'macro', 'script', 'spreadsheet', 'excel', 'drudgery', 'workflow', 'manual', 'tedious', 'repetitive', 'efficiency'],
  pragmaticAi: ['agent', 'local model', 'copilot', 'llm', 'rag', 'context', 'hallucination', 'developer tool', 'scaffolding'],
  careerAndEconomy: ['layoff', 'job market', 'ats', 'interview', 'hiring', 'ghost job', 'recruiter', 'tenure', 'compensation', 'salary'],
  polarizationMiddleGround: ['controversial', 'debate', 'remote work', 'rto', 'open source', 'monetization', 'zero-sum', 'compromise', 'middle ground', 'consensus']
};

/**
 * Simple XML/RSS parser to extract title, link, and publication date
 */
function parseRssItems(xmlText, sourceName, category) {
  const items = [];
  const itemMatches = xmlText.match(/<item[\s\S]*?<\/item>/gi) || xmlText.match(/<entry[\s\S]*?<\/entry>/gi) || [];

  for (const itemBlock of itemMatches) {
    const titleMatch = itemBlock.match(/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
    const linkMatch = itemBlock.match(/<link[^>]*href=["']([^"']+)["']/i) || itemBlock.match(/<link[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/i);
    const dateMatch = itemBlock.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i) || itemBlock.match(/<updated[^>]*>([\s\S]*?)<\/updated>/i);

    if (titleMatch && linkMatch) {
      const title = titleMatch[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
      const link = linkMatch[1].trim();
      const date = dateMatch ? new Date(dateMatch[1]).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

      // Score relevance against thematic keywords
      const lowerTitle = title.toLowerCase();
      let matchedTrack = null;
      let matchCount = 0;

      for (const [track, keywords] of Object.entries(THEMATIC_KEYWORDS)) {
        const matches = keywords.filter(kw => lowerTitle.includes(kw));
        if (matches.length > matchCount) {
          matchCount = matches.length;
          matchedTrack = track;
        }
      }

      items.push({
        title,
        link,
        date,
        source: sourceName,
        category,
        matchedTrack,
        score: matchCount
      });
    }
  }

  return items;
}

/**
 * Main execution function
 */
async function runScout() {
  console.log('📡 Fetching feeds across tech, AI, career, and productivity communities...');
  const allDiscussions = [];

  for (const feed of RSS_FEEDS) {
    try {
      const res = await fetch(feed.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 SocialMediaScout/1.0'
        }
      });
      if (res.ok) {
        const text = await res.text();
        const parsed = parseRssItems(text, feed.name, feed.category);
        allDiscussions.push(...parsed);
      }
    } catch (err) {
      console.warn(`⚠️ Could not fetch feed ${feed.name}: ${err.message}`);
    }
  }

  // Filter and sort by relevance score
  const prioritized = allDiscussions
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  console.log(`✅ Discovered ${allDiscussions.length} total entries, found ${prioritized.length} high-resonance candidates.`);

  const today = new Date().toISOString().split('T')[0];
  const outputDir = join(process.cwd(), 'topics', 'scouts');
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const outputFilePath = join(outputDir, `scout-${today}.md`);

  let mdContent = `---
id: SCOUT-${today}
title: 'Morning Trend Scout: ${today}'
created: ${today}
tags:
  - trendscout
  - research
  - rawleads
---

# 📡 Morning Trend Scout: ${today}

Generated automated lead digest scanning RSS/forums for practical automation, developer pain
points, career dynamics, and non-zero-sum debates.

---

## 🎯 Top High-Resonance Discussion Leads

`;

  if (prioritized.length === 0) {
    mdContent += `*No keyword-matched discussions discovered in today's active window. Run manual web research via \`trend-research\` skill for deep real-time scraping.*\n`;
  } else {
    for (const item of prioritized.slice(0, 15)) {
      mdContent += `### [${item.title}](${item.link})\n\n`;
      mdContent += `- **Source:** ${item.source} (${item.category})\n`;
      mdContent += `- **Track Match:** \`${item.matchedTrack || 'general'}\`\n`;
      mdContent += `- **Potential Chris Angle:** Connect this discussion back to breaking the Iron\n  Triangle, pragmatic standards, or building consultative win-win alignment.\n\n`;
    }
  }

  mdContent += `\n---\n\n## 🔄 Next Steps\n\n- Run \`topic-deep-dive\` on any selected lead to build a full concept vault in \`topics/documents/\`.\n`;

  writeFileSync(outputFilePath, mdContent, 'utf-8');
  console.log(`📝 Scout report saved to: ${outputFilePath}`);
}

runScout();
