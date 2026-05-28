---
name: Quiet Study
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#404945'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#717975'
  outline-variant: '#c0c8c4'
  surface-tint: '#396758'
  primary: '#154538'
  on-primary: '#ffffff'
  primary-container: '#2f5d4f'
  on-primary-container: '#a3d4c2'
  inverse-primary: '#a0d1bf'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626262'
  tertiary: '#5d322a'
  on-tertiary: '#ffffff'
  tertiary-container: '#784840'
  on-tertiary-container: '#fbbaaf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bceddb'
  primary-fixed-dim: '#a0d1bf'
  on-primary-fixed: '#002018'
  on-primary-fixed-variant: '#204f41'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#f7b7ac'
  on-tertiary-fixed: '#33110b'
  on-tertiary-fixed-variant: '#683a33'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  h1:
    fontFamily: Pretendard
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Pretendard
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Pretendard
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  post-title:
    fontFamily: Pretendard
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.75'
  meta:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
  label:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.12em
  slogan-italic:
    fontFamily: newsreader
    fontSize: 20px
    fontWeight: '400'
spacing:
  max-width-content: 760px
  side-rail-breakpoint: 1100px
  gutter: 24px
  margin-sm: 16px
  margin-md: 32px
  section-gap: 64px
---

## Brand & Style

This design system is built for a quiet, editorial, and contemplative reading experience. It draws heavily from **Minimalism** and **Modern Editorial** design, focusing on content clarity and a warm, intellectual atmosphere. The system rejects the high-velocity aesthetics of modern SaaS, opting instead for a "Digital Study" feel—static, intentional, and calm.

The emotional response should be one of "Deep Focus" (깊은 몰입). It prioritizes long-form reading through generous whitespace, high-quality typography, and a restrained color palette. Every element exists to support the text, with no unnecessary animations or decorative flourishes.

## Colors

The palette is rooted in organic, warm neutrals to prevent eye strain during long reading sessions.

**Light Mode (Default):**
- **Background:** A warm off-white (#FAFAF7) that mimics premium book paper.
- **Surface:** Pure white (#FFFFFF) used for floating elements or specific content blocks.
- **Text:** Deep charcoal (#1A1A1A) provides high contrast without the harshness of pure black.
- **Accent:** Deep Moss Green (#2F5D4F) used sparingly for focus states and primary actions.

**Dark Mode:**
- The background shifts to a warm deep black (#14140F), with text transitioning to a warm cream (#ECEAE3) to maintain the "paper-like" feel in low light.

## Typography

The typography system is the core of this design system. It uses **Pretendard** as the workhorse for Korean text to ensure maximum legibility across all platforms.

- **Body Text:** Set to 16px with a generous 1.75 line-height to facilitate effortless vertical scanning.
- **Editorial Flourish:** Use **Newsreader** (Serif) in italics for English-only slogans or pull-quotes to add a literary, editorial texture.
- **Technical Data:** Use **JetBrains Mono** for dates, view counts, and code blocks to provide a structured, "dev-blog" contrast to the prose.
- **Labels:** Small labels use uppercase with 0.12em tracking for a refined, archival look.

## Layout & Spacing

The design system follows a **Fixed-Width Single Column** model to optimize for reading comfort.

- **Content Column:** Centered with a maximum width of 760px. This ensures line lengths (measure) remain within the 45-75 character range ideal for readability.
- **Side Rails:** Auxiliary information (Table of Contents, Related Tags) is placed in the margins only when the viewport exceeds 1100px.
- **Header:** A thin, sticky navigation bar with a 1px hairline border bottom. It should feel transparent and unobtrusive.
- **Vertical Rhythm:** Use a consistent scale for vertical spacing (8px, 16px, 24px, 32px, 64px) to maintain a steady, calm flow between sections.

## Elevation & Depth

This system avoids shadows and depth-based layering. It is a strictly "flat" or "layered-on-plane" system.

- **Hierarchy:** Established through hairline borders (1px) and subtle shifts in background color between the page (#FAFAF7) and specific surfaces (#FFFFFF).
- **Interactions:** Depth is simulated through movement rather than shadows. On hover, list items or cards may "lift" slightly (e.g., `translateY(-2px)`) accompanied by a subtle title underline.
- **Focus States:** High visibility but minimal footprint. A 1.5px accent border with a 6px offset ensures keyboard navigation is clear without cluttering the static UI.

## Shapes

The shape language is **Sharp (0px)**. 

To maintain the architectural, editorial feel, use 90-degree corners for all UI elements including buttons, input fields, and code blocks. This reinforces the "grid-based" paper aesthetic and distinguishes the blog from the soft, rounded "bubble" aesthetics of social media apps.

## Components

### Buttons
- **Primary:** Filled with the accent color (#2F5D4F), text in white. No rounding.
- **Ghost:** Hairline border (#E8E6E1) with charcoal text. Background fills with a very subtle tint on hover.

### Post Lists
- Separated by 1px horizontal hairlines.
- Meta information (Date, Tag) in JetBrains Mono above the title.
- Title transitions from charcoal to accent color on hover with a 1px underline.

### Input Fields
- Underline style or fully boxed with 1px border.
- Placeholder text in Muted Gray (#6B6B6B).
- Focus state: The 1.5px accent ring with offset.

### Navigation (Header)
- Links should be simple text in Korean (e.g., 글, 소개, 태그).
- No icons or emojis are permitted in the navigation bar.

### Code Blocks
- Background: Surface color (#FFFFFF) in light mode, deeper black in dark mode.
- Font: JetBrains Mono at 14px.
- 1px border; no shadows.

### Dividers
- Use sparingly. Always 1px height, using the Divider/Border color (#E8E6E1).