# HAVAKU Design System & Brand Guidelines

Welcome to the HAVAKU Design System. This document outlines the core visual identity, typography, color palette, and UI components used across the HAVAKU web application, ensuring a cohesive and premium brand experience.

## 1. Typography

The HAVAKU brand relies on a combination of elegant serif headings and clean, modern sans-serif body text to convey a luxury aesthetic.

### **Primary Serif: Cormorant Garamond**
Used exclusively for headings, elegant quotes, and premium accents.
- **Font Family**: `'Cormorant Garamond', serif`
- **Weights Used**: `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold)
- **CSS Utility**: `.font-serif`, `.section-heading`

### **Primary Sans-Serif: Manrope**
Used for all body text, UI elements, buttons, and small labels for optimal readability.
- **Font Family**: `'Manrope', sans-serif`
- **Weights Used**: `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold)
- **CSS Utility**: `.font-sans`, `.section-label`

---

## 2. Color Palette

The HAVAKU color palette is warm, sophisticated, and neutral, with carefully placed metallic and soft pink accents.

| Color Name | Hex Code | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Ivory** | `#FAF7F2` | `--ivory` | Global background color, light sections |
| **Soft Black** | `#1A1A1A` | `--soft-black` | Primary text, dark hero backgrounds, dark footers |
| **Champagne Gold** | `#C9A96E` | `--champagne-gold` | Primary accents, buttons, icons, dividers, links |
| **Warm White** | `#FFFDF9` | `--warm-white` | Card backgrounds, elevated surfaces |
| **Taupe** | `#7D6B5E` | `--taupe` | Secondary text, borders, subtle labels |
| **Blush Pink** | `#F2D6CF` | `--blush-pink` | Soft gradients, subtle backgrounds, image placeholders |
| **Rose Gold** | `#B76E79` | `--rose-gold` | Warm accents and complementary highlights |
| **Gold Dark** | `#A8853E` | `--champagne-gold-dark` | Hover states for primary buttons and interactions |
| **Gold Light** | `#E8D5A8` | `--champagne-gold-light` | Gradient pairings and soft highlights |

---

## 3. Core UI Components

The application utilizes global CSS classes (defined in `globals.css`) for consistent styling across pages.

### **Buttons**
- **`.btn-primary`**: Solid Champagne Gold background with Soft Black text. Features an uppercase Manrope font with a subtle upward translation and shadow on hover (`transform: translateY(-1px)`).
- **`.btn-outline`**: Transparent background with Champagne Gold borders and text. Reverses to a solid Gold background with Soft Black text on hover.
- **`.btn-outline-white`**: Used on dark backgrounds. Transparent with white borders, changing to a semi-transparent white background on hover.

### **Section Headers**
- **`.section-label`**: Small, uppercase tracking-wide text (`letter-spacing: 0.2em`) using Manrope and Champagne Gold color. Used as a pre-heading for sections.
- **`.section-heading`**: Large, elegant headings using Cormorant Garamond with a tight line-height (`1.15`).
- **`.gold-divider`**: A subtle, 50px wide, and 1.5px tall Champagne Gold horizontal line used to visually separate headings from body text.

### **Cards & Containers**
- **`.havaku-card`**: Uses `--warm-white` background, a subtle border radius (`4px`), and a soft black shadow. Features a subtle upward lift (`translateY(-4px)`) and increased shadow on hover.
- **`.img-placeholder`**: A soft gradient background combining Blush Pink and Light Champagne Gold, used while images load or as stylized empty states.

---

## 4. Animations & Micro-Interactions

Dynamic movement adds a layer of premium polish to the HAVAKU experience.

- **`.fade-in-up`**: A smooth entry animation that fades elements in completely while translating them upwards by `24px`. Driven by the `fadeInUp` keyframes (duration: 0.6s).
- **`.whatsapp-pulse`**: A continuous, expanding semi-transparent green ring effect applied to the floating WhatsApp CTA, encouraging user engagement.
- **`.scroll-strip`**: An infinite horizontal scrolling animation used for client logos or continuous image ribbons (`scroll-left`). It conveniently pauses on user hover.

---

## 5. Development Principles

1. **Inline vs. Global CSS**: While React inline styles and Tailwind utility classes are heavily used for structural layouts, strict brand constraints (fonts, colors, core buttons, and specific animations) are centralized in `src/app/globals.css`.
2. **Icons**: Primarily utilizing Lucide-React or inline SVG code snippets colored with brand variables.
3. **Responsive Design**: Fluid typography (`clamp()` strategies on headings) and Flex/Grid combinations are preferred over rigid media queries to ensure the UI scales gracefully on all devices.
