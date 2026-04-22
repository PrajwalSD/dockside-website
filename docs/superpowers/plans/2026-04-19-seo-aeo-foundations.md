# Dockside SEO and AEO Foundations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Dockside's search visibility and AI-retrieval readiness by strengthening structured data, crawlable discovery assets, internal linking, and answer-first landing content.

**Architecture:** Build a stronger machine-readable entity graph around Hachipoo Apps, Dockside, and blog content; add reusable breadcrumb schema support; expand AI-oriented discovery files; then publish a small set of high-intent pages that answer common shelf-app questions directly and link deeper into the product surface.

**Tech Stack:** Astro, MDX, `@astrolib/seo`, JSON-LD, Astro content collections, static text files

---

## File Structure

**Create**
- `src/components/seo/BreadcrumbJsonLd.astro` - reusable breadcrumb schema component for marketing and blog pages
- `src/content/post/what-is-a-mac-shelf-app.mdx` - answer-first category explainer targeting educational shelf-app intent
- `src/content/post/dockside-vs-yoink.mdx` - answer-first comparison page targeting alternative/comparison intent

**Modify**
- `src/components/seo/GlobalJsonLd.astro` - enrich organization and website graph with stronger entity signals
- `src/components/seo/DocksideJsonLd.astro` - deepen Dockside product schema and align it with visible product facts
- `src/components/blog/SinglePost.astro` - enrich `BlogPosting` with article section, keywords, and publisher logo
- `src/layouts/PageLayout.astro` - accept optional breadcrumb data and render page-level breadcrumb schema
- `src/layouts/MarkdownLayout.astro` - accept optional breadcrumb data and render breadcrumb schema for markdown/MDX landing pages
- `src/pages/[...blog]/index.astro` - pass breadcrumb data to blog post layout
- `src/pages/contact.astro` - strengthen support/community discovery with Reddit and changelog visibility
- `src/navigation.ts` - add community/discovery links and remove brittle hardcoded blog path
- `public/llms.txt` - expand retrieval-oriented site map for agents
- `public/robots.txt` - add explicit sitemap line if not emitted in source

**Validate**
- `src/config.yaml`
- `src/content.config.ts`
- `src/utils/permalinks.ts`

---

### Task 1: Reusable Breadcrumb Schema

**Files:**
- Create: `src/components/seo/BreadcrumbJsonLd.astro`
- Modify: `src/layouts/PageLayout.astro`
- Modify: `src/layouts/MarkdownLayout.astro`
- Modify: `src/pages/[...blog]/index.astro`

- [ ] **Step 1: Create the breadcrumb schema component**

```astro
---
import { SITE } from 'astrowind:config';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface Props {
  items?: BreadcrumbItem[];
}

const { items = [] } = Astro.props;
const base = String(SITE.site || '').replace(/\/$/, '');

const graph =
  items.length >= 2
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${base}${item.path}`,
        })),
      }
    : null;
---
{graph && <script type="application/ld+json" set:html={JSON.stringify(graph)} />}
```

- [ ] **Step 2: Add optional breadcrumb props to shared layouts**

```astro
export interface Props {
  metadata?: MetaData;
  breadcrumbs?: Array<{ name: string; path: string }>;
}
```

- [ ] **Step 3: Render breadcrumb schema in layouts only when data exists**

```astro
{breadcrumbs?.length ? <BreadcrumbJsonLd items={breadcrumbs} /> : null}
```

- [ ] **Step 4: Pass blog-post breadcrumbs from the blog entry page**

```astro
const breadcrumbs = [
  { name: 'Home', path: '/dockside-app' },
  { name: 'Blog', path: '/blog' },
  { name: post.title, path: Astro.url.pathname },
];
```

- [ ] **Step 5: Verify schema builds cleanly**

Run: `npm run build`
Expected: build succeeds and generated blog post HTML includes `BreadcrumbList`

---

### Task 2: Richer Organization and Product JSON-LD

**Files:**
- Modify: `src/components/seo/GlobalJsonLd.astro`
- Modify: `src/components/seo/DocksideJsonLd.astro`
- Validate: `src/config.yaml`

- [ ] **Step 1: Enrich organization schema with logo and additional official profiles**

```ts
{
  '@type': 'Organization',
  '@id': `${base}/#organization`,
  name: SITE.name,
  url: base,
  logo: {
    '@type': 'ImageObject',
    url: `${base}/favicon.svg`,
  },
  sameAs: [
    'https://x.com/HachipooApps',
    'https://discord.gg/vpqMjQns46',
    'https://github.com/PrajwalSD/Dockside',
    'https://www.reddit.com/r/DocksideApp/',
  ],
}
```

- [ ] **Step 2: Link the website node more explicitly to the organization**

```ts
{
  '@type': 'WebSite',
  '@id': `${base}/#website`,
  url: base,
  name: SITE.name,
  publisher: { '@id': `${base}/#organization` },
  about: { '@id': `${base}/dockside-app#software` },
}
```

- [ ] **Step 3: Deepen Dockside product schema with visible product facts only**

```ts
{
  '@type': 'SoftwareApplication',
  '@id': `${pageUrl}#software`,
  name: 'Dockside',
  operatingSystem: 'macOS 13.0 or later',
  applicationCategory: 'UtilitiesApplication',
  additionalType: 'https://schema.org/DesktopApplication',
  isAccessibleForFree: false,
  offers: {
    '@type': 'Offer',
    price: '5.99',
    priceCurrency: 'USD',
    category: 'lifetime license',
  },
  screenshot: [`${base}/IntroBannerWithoutIcon.png`],
  softwareHelp: `${base}/contact`,
}
```

- [ ] **Step 4: Keep every structured claim matched to visible copy on `/dockside-app`**

Run: compare schema fields against visible pricing, OS version, and product description on `/dockside-app`
Expected: no hidden or unverifiable claims

- [ ] **Step 5: Rebuild and inspect emitted JSON-LD**

Run: `npm run build`
Expected: generated `/dockside-app` HTML contains enriched `Organization`, `WebSite`, and `SoftwareApplication`

---

### Task 3: Richer BlogPosting Schema

**Files:**
- Modify: `src/components/blog/SinglePost.astro`
- Validate: `src/content.config.ts`

- [ ] **Step 1: Add publisher logo to the blog publisher node**

```ts
publisher: {
  '@type': 'Organization',
  name: SITE.name,
  url: base,
  logo: {
    '@type': 'ImageObject',
    url: `${base}/favicon.svg`,
  },
},
```

- [ ] **Step 2: Add article section and keywords from existing post fields**

```ts
...(post.category ? { articleSection: post.category.title } : {}),
...(post.tags?.length ? { keywords: post.tags.join(', ') } : {}),
```

- [ ] **Step 3: Preserve current behavior for image, author, and dates**

Run: inspect the final object in `SinglePost.astro`
Expected: no regressions to existing `BlogPosting` fields

- [ ] **Step 4: Build and inspect one generated post**

Run: `npm run build`
Expected: blog post HTML includes `BlogPosting` with `articleSection`, `keywords`, and publisher logo

---

### Task 4: Retrieval-Oriented Discovery Assets

**Files:**
- Modify: `public/llms.txt`
- Modify: `public/robots.txt`
- Modify: `src/navigation.ts`
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Expand `llms.txt` into a clearer routing document**

```txt
## Best starting points

- Product overview: https://hachipoo.com/dockside-app
- Features: https://hachipoo.com/features
- Integrations: https://hachipoo.com/integrations
- Usage tips: https://hachipoo.com/dockside-usage-tips
- Blog hub: https://hachipoo.com/blog
- Support and community: https://hachipoo.com/contact
- Releases / changelog: https://github.com/PrajwalSD/Dockside/releases
```

- [ ] **Step 2: Add “when to use which page” guidance for agents**

```txt
## Routing hints

- For pricing, trial, and download: use `/dockside-app`
- For automation and integrations: use `/integrations`
- For setup and practical workflows: use `/dockside-usage-tips`
- For support and community: use `/contact`, Discord, and Reddit
```

- [ ] **Step 3: Make `robots.txt` include the sitemap explicitly in source**

```txt
User-agent: *
Disallow:

Sitemap: https://hachipoo.com/sitemap-index.xml
```

- [ ] **Step 4: Add Reddit/changelog discovery links in footer/support areas**

```ts
{ text: 'Reddit', href: 'https://www.reddit.com/r/DocksideApp/', icon: 'tabler:brand-reddit' }
{ text: 'Changelog', href: 'https://github.com/PrajwalSD/Dockside/releases' }
```

- [ ] **Step 5: Build and inspect generated public artifacts**

Run: `npm run build`
Expected: `robots.txt` and `llms.txt` are emitted with the updated discovery guidance

---

### Task 5: Publish an Answer-First Educational Landing Page

**Files:**
- Create: `src/content/post/what-is-a-mac-shelf-app.mdx`
- Modify: `src/content.config.ts` (only if new metadata fields are needed)

- [ ] **Step 1: Write the page with a direct first-paragraph answer**

```mdx
---
title: 'What is a Mac shelf app?'
excerpt: 'A Mac shelf app gives you a temporary or persistent place to stage files, folders, screenshots, links, and text so you can keep working without cluttering the desktop.'
---

A **Mac shelf app** is a utility that gives you a place to temporarily or permanently hold files, folders, screenshots, links, and text while you work.
```

- [ ] **Step 2: Add query-shaped H2s**

```mdx
## What problem does a shelf app solve?
## How is a shelf app different from the Dock or Finder?
## Who should use a shelf app?
## How Dockside fits this category
```

- [ ] **Step 3: Add internal links to the core product graph**

```mdx
See **[Dockside for Mac](/dockside-app)**, **[All features](/features)**, and **[Dockside Usage Tips](/dockside-usage-tips)**.
```

- [ ] **Step 4: Build and inspect metadata/schema output**

Run: `npm run build`
Expected: page is discoverable in blog output with article metadata and internal product links

---

### Task 6: Publish an Answer-First Comparison Page

**Files:**
- Create: `src/content/post/dockside-vs-yoink.mdx`

- [ ] **Step 1: Open with a direct comparison summary**

```mdx
---
title: 'Dockside vs Yoink for Mac'
excerpt: 'Dockside and Yoink both help you stage files on Mac, but they differ in where they live, how persistent they feel, and how much workflow customization they offer.'
---

If you want a quick answer: **Yoink** is excellent for lightweight drag-and-drop staging, while **Dockside** is better if you want a shelf that can become part of a broader workflow beside the Dock.
```

- [ ] **Step 2: Structure the page for scannable AI-friendly extraction**

```mdx
## Quick answer
## Best for temporary staging
## Best for persistent workflows
## Best for screenshots, downloads, and automation
## Which one should you choose?
```

- [ ] **Step 3: Keep claims factual, attributable, and limited to visible product capabilities**

Run: manual review against Dockside feature pages and publicly visible Yoink positioning
Expected: no unsupported claims

- [ ] **Step 4: Add strong internal links back to the product and feature pages**

```mdx
Read **[Dockside for Mac](/dockside-app)**, **[All features](/features)**, and **[Integrations](/integrations)** for the full picture.
```

- [ ] **Step 5: Build and inspect generated output**

Run: `npm run build`
Expected: new comparison page is included in static output and links cleanly into the main conversion paths

---

## Self-Review

- **Spec coverage:** Covers schema depth, breadcrumb hierarchy, retrieval/discovery assets, internal linking support, and two high-intent answer-first content pages.
- **Placeholder scan:** No `TODO`, `TBD`, or “implement later” markers remain.
- **Type consistency:** Breadcrumb item shape is consistent across component and layout props; blog schema additions reuse existing post category/tags data.

