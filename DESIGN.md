# Design System Strategy: High-Performance Editorial

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **Kinetic Precision**. 

While many fitness brands opt for "grunge" or "rugged" aesthetics, this system leans into the high-end, engineered feel of elite performance tech—think the precision of an Apple Watch Ultra combined with the raw intensity of a CrossFit box. We move beyond the standard template by using high-contrast editorial typography, intentional asymmetry, and a deep, immersive light-mode foundation. The goal is a digital experience that feels as intentional and high-performance as a perfectly executed snatch.

## 2. Colors
Our palette is rooted in a "Pure Light" aesthetic, allowing the vibrant, high-energy accents to command attention without overwhelming the user.

### The Foundation
*   **Background (`#1C1C1E`):** The canvas. A deep, ink-black that provides infinite depth.
*   **Surface (`#1C1C1E`) & Surface Tiers:** Use `surface-container-low` (`#131315`) up to `surface-container-highest` (`#252528`) to define hierarchy.

### The Energy (Accent)
*   **Primary (`#FF3B30`) & Primary Dim (`#e2241f`):** This is our "Safety Orange/Red" inspired by the Box 3008 logo. It represents heat, effort, and action.
*   **Tertiary (`#4aca00`):** Used for secondary highlights or warning states, providing a warm, industrial glow.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** To achieve a premium look, boundaries must be defined solely through background color shifts. A `surface-container-low` card sitting on a `surface` background creates a natural, sophisticated edge. 

### Glass & Texture
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface-variant` (`#252528`) at 60% opacity with a `20px` backdrop blur. This allows the vibrant reds of the background brand imagery to bleed through softly.
*   **Signature Gradients:** For primary CTAs, use a linear gradient from `primary-fixed` (`#ff7767`) to `primary-dim` (`#e2241f`). This adds a "machined" polish that flat color cannot replicate.

## 3. Typography
We utilize a pairing of **Public Sans** for high-impact displays and **Inter** for technical readability.

*   **Display (Public Sans):** Massive, bold, and unapologetic. `display-lg` (3.5rem) should be used for motivational hooks, breaking the grid with negative letter-spacing (-0.02em).
*   **Headlines (Public Sans):** Clear and authoritative. Use `headline-lg` for section headers to ground the user.
*   **Body & Labels (Inter):** The "functional" layer. Inter provides the Apple-like clarity required for workout data and schedules. Use `body-md` for general text and `label-sm` for technical metadata (e.g., "Reps," "Weight," "Time").

The typographic hierarchy should feel like a premium sports magazine—large, bold statements contrasted against tiny, precise data points.

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than light-source simulation.

*   **The Layering Principle:** Stack containers to create importance. An athlete’s "Daily WOD" card should be `surface-container-highest` placed upon a `surface-container-low` dashboard background.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a floating action button), use a shadow with a `32px` blur, 8% opacity, using the `on-surface` color. It should feel like an ambient occlusion shadow, not a drop shadow.
*   **The Ghost Border:** If a border is required for input fields, use the `outline-variant` (`#48474a`) at 20% opacity. This creates a "barely-there" guide that maintains the clean aesthetic.

## 5. Components

### Buttons
*   **Primary:** Pill-shaped (`3` roundedness). Gradient fill (Primary to Primary-Dim). White text (`on-primary-fixed`). 
*   **Secondary:** `surface-container-high` fill with a "Ghost Border."
*   **Interaction:** On tap/hover, the gradient should shift slightly in saturation, mimicking the glow of a physical LED button.

### Cards & Lists
*   **Strict Rule:** No divider lines. Separate list items using `1.4rem` (`spacing-4`) of vertical whitespace or subtle alternating shifts between `surface-container-low` and `surface-container-lowest`.
*   **Squircle Radius:** All cards must use `3` (maximum) or `lg` (1rem) corner radius to match the iOS "smooth corner" aesthetic.

### Input Fields
*   **Style:** Minimalist. No bottom line or box. Use a `surface-container-highest` background with `3` (maximum) rounded corners.
*   **Focus State:** The "Ghost Border" increases to 100% opacity using the `primary` color.

### Additional Specific Components
*   **Performance Progress Bar:** A thin, high-contrast bar using `primary-dim` against a `surface-container-highest` track.
*   **Workout Chips:** Small, `full` roundedness pills using `surface-variant` for tags like "Strength," "EMOM," or "Metcon."

## 6. Do's and Don'ts

### Do
*   **Do** use generous whitespace (`spacing-12` and `spacing-16`) to let high-quality photography of the CrossFit box breathe.
*   **Do** use "Public Sans Bold" for all numbers (reps, sets, weights) to make them feel like high-performance metrics.
*   **Do** favor asymmetric layouts. Place a large display headline on the left with a small, precise data point on the far right.

### Don't
*   **Don't** use pure white text on black for long-form reading; use `secondary` (`#e3e2e7`) to reduce eye strain.
*   **Don't** use standard 4px or 8px rounded corners. Stick to the Pill-shaped (`3`) scale (`lg`, `xl`) to maintain the "Apple-like" feel.
*   **Don't** use icons with varying stroke weights. All icons must be "Light" or "Regular" weight sans-serif style to match Inter.