# GoBananas Enterprise - Architecture Document

## Executive Summary

This document outlines the comprehensive architecture plan for restructuring the GoBananas Enterprise website to improve navigation, reduce CTA redundancy, and optimize for SEO while maintaining the existing neural network Vanta.js background and design system.

---

## Tech Stack (Existing - No Changes)

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 14 (App Router) | SSR/SSG for SEO, React ecosystem |
| **Language** | TypeScript | Type safety, enterprise-grade code |
| **Styling** | Tailwind CSS | Utility-first, design system tokens |
| **Animation** | Framer Motion | Smooth scroll, entrance animations |
| **3D Background** | Vanta.js (NET effect) | Neural network visualization |
| **Icons** | Lucide React | Consistent, lightweight icons |
| **Fonts** | Inter + JetBrains Mono | Professional typography |

---

## Site Map - Restructured

```
/                           # Homepage (Single-page with anchor sections)
|-- /#platform              # Anchor: Platform capabilities section
|-- /#how-it-works          # Anchor: How It Works section
|-- /#testimonials          # Anchor: Testimonials section
|-- /#industries            # Anchor: Industries we serve section
|
/use-cases                  # Use Cases page (separate page with filtering)
|-- /use-cases?industry=X   # Filtered by industry dropdown
|-- /use-cases/[id]         # Individual use case detail pages
|
/contact                    # Contact page (existing)
```

---

## Navigation Structure

### Desktop Navigation

```
+------------------------------------------------------------------+
| GoBananas Logo    Platform    How it Works    Use Cases [v]    [Request Demo] |
+------------------------------------------------------------------+
                                                    |
                                                    +-- Financial Services
                                                    +-- Healthcare
                                                    +-- Energy & Utilities
                                                    +-- Transportation
                                                    +-- Manufacturing
                                                    +-- Government
                                                    +-- Technology
                                                    +-- All Use Cases
```

### Mobile Navigation

```
+----------------------------------+
| GoBananas Logo           [Menu]  |
+----------------------------------+
        |
        +-- Platform (anchor link)
        +-- How it Works (anchor link)
        +-- Use Cases (expandable)
        |       +-- Financial Services
        |       +-- Healthcare
        |       +-- Energy & Utilities
        |       +-- Transportation
        |       +-- Manufacturing
        |       +-- Government
        |       +-- Technology
        |       +-- All Use Cases
        +-- [Request Demo] (primary CTA)
```

### Navigation Behavior

| Link | Desktop | Mobile | Action |
|------|---------|--------|--------|
| Platform | Visible | In menu | Smooth scroll to `/#platform` |
| How it Works | Visible | In menu | Smooth scroll to `/#how-it-works` |
| Use Cases | Dropdown | Expandable | Dropdown with industry links |
| Request Demo | Button | Button | Opens Calendly link |

---

## Page Structures

### Homepage (/) - Single Page with Anchors

```
+------------------------------------------------------------------+
|                          HEADER                                   |
|  Logo    Platform    How it Works    Use Cases [v]   [Request Demo] |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    HERO SECTION (Vanta.js BG)                     |
|  - Trust badges (Railway SOC2, MIT Founded, Enterprise Ready)     |
|  - H1: "Transform Legacy Systems"                                 |
|  - H2: "Into Modern Powerhouses" (gold gradient)                  |
|  - Subheadline: Platform description                              |
|  - Single CTA: "Request Demo"                                     |
|  - Trust line: Built on Claude Code SDK                           |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|              PLATFORM SECTION (id="platform")                     |
|  - H2: "The GoBananas Platform"                                   |
|  - Core capabilities grid (3 cards):                              |
|    1. Legacy Modernization                                        |
|    2. Codebase Extension                                          |
|    3. Technical Debt Reduction                                    |
|  - Platform differentiators                                       |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|           HOW IT WORKS SECTION (id="how-it-works")               |
|  - H2: "How the Platform Works"                                   |
|  - 3-step process: Analyze -> Plan -> Execute                     |
|  - Claude Code infrastructure mention                             |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|            TESTIMONIALS SECTION (id="testimonials")              |
|  - H2: "Trusted by Enterprise Leaders"                            |
|  - Rotating testimonial carousel                                  |
|  - Real client outcomes                                           |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|            INDUSTRIES SECTION (id="industries")                  |
|  - H2: "Industries We Serve"                                      |
|  - Industry grid with icons (links to /use-cases?industry=X)      |
|  - Financial Services, Healthcare, Transportation, etc.           |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|               USE CASES PREVIEW SECTION                          |
|  - H2: "Modernization in Action"                                  |
|  - 4 featured use case cards                                      |
|  - Link to full use cases page                                    |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    CONTACT CTA SECTION                           |
|  - H2: "Ready to Modernize?"                                      |
|  - Single CTA: "Request Demo"                                     |
|  - Brief supporting copy                                          |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                          FOOTER                                   |
|  - Logo, links, social                                            |
|  - NO CTA banner (removed redundancy)                             |
+------------------------------------------------------------------+
```

### Use Cases Page (/use-cases)

```
+------------------------------------------------------------------+
|                          HEADER                                   |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    USE CASES HERO                                 |
|  - H1: "Use Cases"                                                |
|  - Subheadline: Industry-specific modernization examples          |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    FILTER SECTION                                 |
|  - Industry dropdown filter                                       |
|  - Active filter display                                          |
|  - Results count                                                  |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                  USE CASES GRID                                   |
|  - Filterable cards by industry                                   |
|  - Each card links to /use-cases/[id]                            |
|  - Key metrics preview                                            |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    CONTACT CTA                                    |
|  - Single "Request Demo" CTA                                      |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                          FOOTER                                   |
+------------------------------------------------------------------+
```

---

## Component Architecture

### New/Modified Components

```
src/
  components/
    navigation/
      Header.tsx              # MODIFY: New nav structure with dropdown
      MobileMenu.tsx          # NEW: Mobile-optimized menu with accordion
      NavDropdown.tsx         # NEW: Use Cases dropdown component

    sections/
      Hero.tsx                # MODIFY: Remove "Talk to Sales" button
      Platform.tsx            # NEW: Platform capabilities section
      HowItWorks.tsx          # MODIFY: Add section ID for anchor
      Testimonials.tsx        # MODIFY: Extracted from SocialProof
      Industries.tsx          # NEW: Industry grid with links
      UseCasesPreview.tsx     # KEEP: Minor modifications
      ContactCTA.tsx          # MODIFY: Simplify to single CTA

    use-cases/
      UseCasesFilter.tsx      # NEW: Industry filter dropdown
      UseCaseCard.tsx         # MODIFY: Enhanced card component
      UseCaseGrid.tsx         # NEW: Filterable grid wrapper

    ui/
      Dropdown.tsx            # NEW: Reusable dropdown component
      SmoothScrollLink.tsx    # NEW: Anchor navigation handler

    Footer.tsx                # MODIFY: Remove CTA banner
```

### Component Hierarchy

```
RootLayout
  |-- Header
  |     |-- Logo
  |     |-- DesktopNav
  |     |     |-- SmoothScrollLink (Platform)
  |     |     |-- SmoothScrollLink (How it Works)
  |     |     |-- NavDropdown (Use Cases)
  |     |-- CTAButton (Request Demo)
  |     |-- MobileMenuToggle
  |     |-- MobileMenu (conditional)
  |           |-- SmoothScrollLink (Platform)
  |           |-- SmoothScrollLink (How it Works)
  |           |-- AccordionItem (Use Cases)
  |           |-- CTAButton (Request Demo)
  |
  |-- Main (page content)
  |
  |-- Footer
        |-- FooterLinks
        |-- SocialLinks
        |-- Copyright
```

---

## Navigation Implementation Details

### Smooth Scroll Behavior

```typescript
// For anchor links on same page
const handleAnchorClick = (e: React.MouseEvent, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  // Close mobile menu if open
  setMobileMenuOpen(false);
};

// For anchor links from different page
// Navigate to / first, then scroll after load
const handleCrossPageAnchor = (targetId: string) => {
  router.push(`/#${targetId}`);
};
```

### Dropdown Implementation

```typescript
interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

const useCasesDropdownItems: DropdownItem[] = [
  { label: 'Financial Services', href: '/use-cases?industry=financial' },
  { label: 'Healthcare', href: '/use-cases?industry=healthcare' },
  { label: 'Energy & Utilities', href: '/use-cases?industry=energy' },
  { label: 'Transportation', href: '/use-cases?industry=transportation' },
  { label: 'Manufacturing', href: '/use-cases?industry=manufacturing' },
  { label: 'Government', href: '/use-cases?industry=government' },
  { label: 'Technology', href: '/use-cases?industry=technology' },
  { label: 'All Use Cases', href: '/use-cases' },
];
```

---

## SEO Heading Structure

### Homepage

```html
<h1>Transform Legacy Systems</h1>
  <h2>Into Modern Powerhouses</h2>

<section id="platform">
  <h2>The GoBananas Platform</h2>
    <h3>Legacy Modernization</h3>
    <h3>Codebase Extension</h3>
    <h3>Technical Debt Reduction</h3>
</section>

<section id="how-it-works">
  <h2>How the Platform Works</h2>
    <h3>1. Analyze</h3>
    <h3>2. Plan</h3>
    <h3>3. Execute</h3>
</section>

<section id="testimonials">
  <h2>Trusted by Enterprise Leaders</h2>
</section>

<section id="industries">
  <h2>Industries We Serve</h2>
</section>

<section>
  <h2>Modernization in Action</h2>
</section>

<section>
  <h2>Ready to Modernize?</h2>
</section>
```

### Use Cases Page

```html
<h1>Use Cases</h1>

<section>
  <h2>Filter by Industry</h2>
</section>

<section>
  <h2>Transformation Outcomes</h2>
  <!-- Use case cards with h3 titles -->
  <article>
    <h3>[Use Case Title]</h3>
  </article>
</section>
```

---

## CTA Consolidation Strategy

### Before (Current - Multiple CTAs)

| Location | CTA Text | Action |
|----------|----------|--------|
| Header | "Schedule Discovery" | Calendly |
| Hero | "Request Demo" | Calendly |
| Hero | "Talk to Sales" | /contact |
| ContactCTA | "Book Your Call" | Calendly |
| ContactCTA | "Send Message" | /contact |
| Footer | "Start Conversation" | /contact |
| Case Studies | "Schedule Discovery Call" | Calendly |

### After (Consolidated - Single CTA)

| Location | CTA Text | Action |
|----------|----------|--------|
| Header | "Request Demo" | Calendly |
| Hero | "Request Demo" | Calendly |
| ContactCTA | "Request Demo" | Calendly |
| Use Cases Page | "Request Demo" | Calendly |

**Rationale**: Single, consistent CTA reduces decision fatigue and improves conversion clarity. "Request Demo" is chosen as the primary action because it implies value (seeing the product) without commitment pressure.

---

## Mobile Responsiveness Plan

### Breakpoints

| Breakpoint | Width | Navigation |
|------------|-------|------------|
| Mobile | < 768px | Hamburger menu with accordion |
| Tablet | 768px - 1024px | Condensed desktop nav |
| Desktop | > 1024px | Full desktop nav with dropdown |

### Mobile Menu Behavior

1. **Hamburger icon** toggles menu visibility
2. **Menu slides in** from right (or top)
3. **Use Cases accordion** expands/collapses on tap
4. **Links close menu** after navigation
5. **Overlay background** closes menu on tap outside

### Touch Interactions

- Dropdown on desktop: hover to open, click to navigate
- Dropdown on mobile: tap to expand accordion, tap link to navigate
- Smooth scroll: works on touch devices
- Fixed header: sticky on scroll for easy navigation access

---

## Vanta.js Background Integration

### Current Implementation (Preserved)

```typescript
// Hero.tsx - Vanta.js NET effect
useEffect(() => {
  const initVanta = async () => {
    const { default: VANTA } = await import('vanta/dist/vanta.net.min.js');
    const THREE = await import('three');

    vantaEffect = VANTA({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      color: 0x14b8a6,        // teal-500
      backgroundColor: 0x0f172a, // navy-900
      points: 5.0,
      maxDistance: 40.0,
      spacing: 30.0,
    });
  };
  // Lazy load on intersection
  // Cleanup on unmount
}, []);
```

### Performance Optimizations (Keep)

1. **Lazy loading**: Only init when hero is visible
2. **Connection check**: Skip on slow connections
3. **Cleanup**: Proper effect cleanup on unmount
4. **Opacity overlay**: For text readability

---

## Industry Categories Mapping

| Industry | Filter Key | Case Studies Count |
|----------|------------|-------------------|
| Financial Services | `financial` | 1 |
| Healthcare | `healthcare` | 1 |
| Energy & Utilities | `energy` | 4 |
| Transportation | `transportation` | 1 |
| Manufacturing | `manufacturing` | 1 |
| Government | `government` | 4 |
| Technology | `technology` | 4 |

### Filter Implementation

```typescript
// Case study categories mapping
const industryMapping = {
  'financial': ['Financial Services'],
  'healthcare': ['Healthcare', 'Government / Agricultural Policy'],
  'energy': ['Energy & Utilities'],
  'transportation': ['Transportation & Logistics'],
  'manufacturing': ['Manufacturing & Chemical / Enterprise'],
  'government': ['Government / Public Sector', 'Government / National Security', 'Government / Municipal Services'],
  'technology': ['Technology / Enterprise Software', 'Technology / AI & Automation', 'Technology / Data & Analytics'],
};
```

---

## Implementation Priority

### Phase 1: Navigation Restructure (High Priority)
1. Create NavDropdown component
2. Modify Header with new nav structure
3. Create MobileMenu with accordion
4. Implement SmoothScrollLink utility

### Phase 2: Homepage Sections (High Priority)
1. Add section IDs for anchor navigation
2. Create Platform section (consolidate from existing)
3. Modify Hero to single CTA
4. Extract Industries section

### Phase 3: Use Cases Enhancement (Medium Priority)
1. Add industry filter dropdown
2. Update URL params handling
3. Update filter UI

### Phase 4: CTA Consolidation (Medium Priority)
1. Update ContactCTA to single CTA
2. Remove Footer CTA banner
3. Standardize CTA text across site

### Phase 5: SEO Optimization (Lower Priority)
1. Review and fix heading hierarchy
2. Add meta descriptions per page
3. Implement JSON-LD structured data

---

## File Changes Summary

### Files to CREATE

| File | Purpose |
|------|---------|
| `src/components/navigation/NavDropdown.tsx` | Use Cases dropdown |
| `src/components/navigation/MobileMenu.tsx` | Mobile navigation |
| `src/components/sections/Platform.tsx` | Platform capabilities |
| `src/components/sections/Industries.tsx` | Industry grid |
| `src/components/ui/SmoothScrollLink.tsx` | Anchor navigation |

### Files to MODIFY

| File | Changes |
|------|---------|
| `src/components/Header.tsx` | New nav structure, dropdown integration |
| `src/components/sections/Hero.tsx` | Remove secondary CTA |
| `src/components/sections/SocialProof.tsx` | Add section ID, restructure |
| `src/components/sections/ContactCTA.tsx` | Single CTA only |
| `src/components/Footer.tsx` | Remove CTA banner |
| `src/app/page.tsx` | Add new sections |
| `src/app/use-cases/page.tsx` | Add filter dropdown |
| `src/components/case-studies/CaseStudiesClient.tsx` | Industry dropdown filter |

### Files to DELETE (or deprecate)

| File | Reason |
|------|--------|
| None | All existing files will be modified or kept |

---

## Design Tokens Reference

### Colors (from tailwind.config.ts)

```css
--navy-900: #0f172a;  /* Primary background */
--teal-500: #14b8a6;  /* Primary accent */
--gold-400: #B8860B;  /* Secondary accent */
--gray-50: #f9fafb;   /* Light backgrounds */
```

### Typography

```css
font-sans: Inter, system-ui;
font-mono: JetBrains Mono;
```

### Spacing

```css
section-padding-lg: py-16 md:py-24
container-max: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

---

## Accessibility Requirements

1. **Keyboard navigation**: Tab through nav items, Enter/Space to open dropdown
2. **ARIA labels**: Proper labeling for dropdown triggers and mobile menu
3. **Focus indicators**: Visible focus states for all interactive elements
4. **Skip links**: Add "Skip to content" for keyboard users
5. **Reduced motion**: Respect `prefers-reduced-motion` for animations

---

## Testing Checklist

- [ ] Desktop navigation dropdown works
- [ ] Mobile menu accordion expands/collapses
- [ ] Anchor links smooth scroll to sections
- [ ] Cross-page anchor links work (from /use-cases to /#platform)
- [ ] Industry filter updates URL and filters content
- [ ] Single CTA appears consistently
- [ ] Vanta.js background renders without errors
- [ ] Mobile responsive at all breakpoints
- [ ] Keyboard navigation works
- [ ] Screen reader accessible

---

## Agent Contracts

This architecture document serves as the contract for implementation. All agents should reference this document for:

1. **Navigation structure**: Header.tsx and MobileMenu.tsx specifications
2. **Component hierarchy**: Section organization and IDs
3. **CTA consolidation**: Consistent "Request Demo" text and Calendly link
4. **Filter implementation**: Industry mapping for use cases
5. **SEO heading structure**: Proper H1-H6 hierarchy per page
