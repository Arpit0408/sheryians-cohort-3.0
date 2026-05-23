# Sheryians Coding School - Frontend Cohort 3.0
## HTML Comprehensive Study Notes & Practice Guide

This document contains a structured, high-yield summary of everything practiced in `index.html`. It serves as a master reference for modern, semantic, SEO-friendly, and accessible (A11y) HTML5 development.

---

## File Reorganization Summary
To make the codebase professional and ensure the HTML file renders correctly, we have renamed the generic image files to descriptive and relevant names:
1. **`image.webp`** -> **`developer_coding.webp`** (Used as the main developer coding hero image)
2. **`image (1).webp`** -> **`sales_chart.webp`** (Used as the sales bar chart under the `<figure>` block)

---

## Core Topics & Code Summary

### 1. The Invisible Power of `<head>` & SEO
The `<head>` section controls metadata, SEO, social sharing, performance preloading, and script execution strategies.

*   **Meta Tags & SEO Essentials:**
    *   `<meta charset="UTF-8">`: Declares character encoding.
    *   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures mobile responsiveness.
    *   `<link rel="canonical" href="...">`: Prevents duplicate content issues by pointing to the preferred URL.
*   **Social Media Optimization (OG & Twitter):**
    *   **Open Graph (OG):** `<meta property="og:title|description|image|url" content="...">` for rich sharing on platforms like WhatsApp, LinkedIn, and Facebook.
    *   **Twitter Cards:** `<meta name="twitter:card|title|image" content="...">` for rich sharing on X (Twitter).
*   **Performance Optimization (Resource Hints):**
    *   **`preconnect`:** Warms up DNS lookup and TCP handshake with external servers (e.g., Google Fonts, APIs).
    *   **`dns-prefetch`:** Per-resolution of DNS (lighter than preconnect, good fallback for older browsers).
    *   **`preload`:** Forces the browser to download critical high-priority resources early (e.g., critical CSS, fonts, hero image).
    *   **`prefetch`:** Low-priority fetching of resources/pages the user will likely visit next.
*   **Script Loading Strategies:**
    *   `<script src="..." defer>`: Downloads asynchronously, executes only after HTML parsing is complete. (Best for general JS).
    *   `<script src="..." async>`: Downloads and executes asynchronously as soon as available, blocking HTML parsing. (Best for independent analytics like Google Analytics).
    *   `<script type="module" src="...">`: Modern ES6 modules, automatically deferred.
*   **Schema Markup (Structured Data):**
    *   Uses JSON-LD (`<script type="application/ld+json">`) to provide machine-readable metadata directly to search engine crawlers to display rich results/snippets (e.g., reviews, articles, recipes).

---

### 2. HTML Basics: Elements & Semantics
*   **Paired vs. Void (Self-Closing) Tags:**
    *   *Paired:* Elements with opening and closing tags containing content (e.g., `<p>...</p>`).
    *   *Void:* Self-closing tags that do not contain child elements (e.g., `<br>`, `<hr>`, `<img>`).
*   **Block vs. Inline Elements:**
    *   *Block-Level:* Always starts on a new line and takes up the full width of the parent (e.g., `<div>`, `<p>`, `<table>`, `<form>`).
    *   *Inline:* Only takes up the width necessary for its content and does not start on a new line (e.g., `<span>`, `<a>`, `<strong>`, `<em>`).
*   **Semantic HTML:** Elements that describe their meaning to both the browser and developer (e.g., `<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`, `<aside>`). Highly recommended for SEO and screen reader accessibility.

---

### 3. Text-Level Semantics & Typography
These tags style inline text semantically rather than just visually:
*   `<strong>`: Represents strong importance, seriousness, or urgency (rendered bold).
*   `<em>`: Emphasizes a specific word or phrase, changing the tone of the sentence (rendered italic).
*   `<abbr title="Full Form">`: Represents an abbreviation (displays full form on hover).
*   `<mark>`: Represents text highlighted for reference or notation.
*   `<del>` & `<ins>`: Represents deleted text (strikethrough) and inserted text (underlined), useful for price drops.
*   `<sub>` & `<sup>`: Subscript (e.g., H₂O) and Superscript (e.g., E = mc²).
*   `<code>`, `<kbd>`, `<samp>`, `<var>`: Used for representing programming code, keyboard keys (e.g., <kbd>Ctrl</kbd> + <kbd>S</kbd>), sample computer output, and mathematical variables respectively.
*   `<wbr>`: Word Break Opportunity — tells the browser where it's safe to break a very long word/URL if the container shrinks.

---

### 4. Structured Lists
HTML supports three main types of lists:
1.  **Unordered Lists (`<ul>`):** For lists where item sequence does not matter (default bullets).
2.  **Ordered Lists (`<ol>`):** For lists where sequence is critical.
    *   *Attributes:* `type="1|A|a|I|i"`, `start="number"`, `reversed` (for count downs).
3.  **Description Lists (`<dl>`):** Ideal for dictionaries, metadata lists, or FAQs. Consists of Description Term (`<dt>`) and Description Details (`<dd>`).

---

### 5. Hyperlinks & Anchor Tags
Anchor tags (`<a>`) form the connective tissue of the web:
*   **External Links:** `target="_blank"` opens the link in a new tab. **CRITICAL SECURITY NOTE:** Always pair with `rel="noopener noreferrer"` to prevent the opened page from accessing your window object (`window.opener`).
*   **Internal Navigation:** `<a href="#id-name">` jumps to a specific element with `id="id-name"`.
*   **Action Utilities:**
    *   `mailto:hello@example.com` launches default mail client.
    *   `tel:+919876543210` initiates phone call on mobile.
    *   `download="filename.pdf"` triggers immediate file download instead of previewing.
*   **SEO Tip:** Always use descriptive, meaningful text (e.g., "Read our complete HTML guide") instead of lazy terms like "Click here".

---

### 6. Advanced Media & Responsive Images
Standard `<img src>` is not enough for modern web performance.
*   **Responsive Images (`srcset` & `sizes`):** Delivers different image files depending on device width or screen density, saving bandwidth.
*   **Modern Formats with fallback (`<picture>`):**
    ```html
    <picture>
        <source srcset="photo.avif" type="image/avif">
        <source srcset="photo.webp" type="image/webp">
        <img src="photo.jpg" alt="Fallback JPG image" loading="lazy">
    </picture>
    ```
*   **Semantic Figures:** Using `<figure>` to wrap an image/chart, and `<figcaption>` to add a user-readable, accessible caption below it.

---

### 7. Accessible & Semantic Tables
Tables should not just look like grids but be structured correctly for assistive technologies:
*   **Structure:** Wrap table headers in `<thead>`, rows in `<tbody>`, and summary/totals in `<tfoot>`.
*   **Accessibility (`scope`):** Use `<th scope="col">` for column headers and `<th scope="row">` for row headers to help screen readers read tabular data sequentially.
*   **Aesthetics:** Use `<caption>` to describe the table's purpose.

---

### 8. Interactive HTML5 Forms
Forms are crucial for user interaction.
*   **Grouping Fields:** Wrap related form controls in a `<fieldset>` and label the group using `<legend>`.
*   **Accessibility & Linking:** Every input must be linked to a `<label>` using the `for` and `id` attributes. This increases click target size and allows screen readers to speak the label.
*   **ARIA Enhancements:**
    *   `aria-required="true"`: Declares a field is mandatory to assistive tech.
    *   `aria-describedby="hint-id"`: Connects an input to an instruction/hint message (`id="hint-id"`) so it gets read aloud.

---

### 9. Less-Known but Super Powerful Native Features
HTML5 natively supports complex UI elements that previously required heavy JavaScript:
*   `<details>` & `<summary>`: Creates a native toggle/accordion without CSS or JavaScript.
*   `<dialog>`: Native dialog modal box. Open with `element.showModal()` and close with `element.close()`.
*   `<progress>`: Visual bar representing task progress (e.g., file uploading).
*   `<meter>`: Gauges a scalar value within a known range (e.g., disk usage, battery level).
*   `<datalist>`: Creates a searchable autocomplete dropdown list linked to a standard `<input>`.
*   `<output>`: Represents the result of a real-time calculation.
*   `<template>`: Holds inert HTML content that is not rendered on page load but can be cloned and instantiated later using JavaScript.
*   `<bdi>` (Bi-Directional Isolation): Isolates a text span from surrounding text to prevent corruption in mixed direction (RTL/LTR) text.

---

### 10. ARIA & Accessibility (A11y) Global Best Practices
*   **Roles:** Overrides or defines semantic meaning (e.g., `role="alert"` for instant screen-reader announcements, `role="status"` for non-disruptive feedback).
*   **`aria-label`:** Provides an invisible, screen-reader-only text label (e.g., `aria-label="Close dialog"` for an "X" button).
*   **`aria-live="polite"`:** Announces dynamic JavaScript DOM updates to screen-reader users without interrupting their current reading flow.
*   **`aria-hidden="true"`:** Hides decorative elements (like SVG icons, arrows) from assistive technology so they don't read junk out loud.
*   **Global Attributes:**
    *   `data-*`: Custom user-defined attributes to pass data from HTML to JavaScript. Accessible via element's `.dataset` API in JS.
    *   `tabindex="0"`: Puts a non-interactive element (like a custom div card) into normal keyboard navigation order. `tabindex="-1"` allows programmatic focus only.
    *   `contenteditable="true"`: Makes the text inside any element directly editable by the user in the browser.

---

### Quick Check: HTML Core Rules to Remember
1.  Always use Semantic tags over generic `<div>` tags whenever possible.
2.  Never skip the `alt` attribute on `<img>` tags (use empty `alt=""` for decorative assets).
3.  Always pair `target="_blank"` with `rel="noopener noreferrer"` for external links.
4.  Always link `<label for="...">` with standard input `id` attributes.
5.  Use `defer` for script loading unless there is a specific reason to use `async`.
