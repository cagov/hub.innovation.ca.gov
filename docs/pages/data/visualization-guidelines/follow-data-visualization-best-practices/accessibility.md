---
title: Accessibility
parentid: Follow data visualization best practices
parentidlink: /data/visualization-guidelines/follow-data-visualization-best-practices/
description: How to approach accessibility in data visualization
headerlabel: Guides and playbooks
headericon: book
---

Design visualizations that everyone can use and understand.

## Give text alternatives

* Include alt text for every visual element that conveys meaningful information. This includes elements like `<img>`, `<canvas>`, or `<svg>`. 
* Put the description or a data table in the visible body text near the chart. Mark the chart image itself as decorative.
* Start the description by naming the chart type followed by key insights. For example, “A line chart showing enrollment from 2020-2025. Enrollment increased each year, with the largest increase in 2024.”
* Don’t list every value of your data in alt text. Good alt text summarizes the main takeaways of the visualization. It doesn’t relay each data point exactly.

## Make sure text is legible and adaptable

* Keep static axis labels at least 12 pixels, and never use font-sizes below 10 pixels, as they are hard to read.
* Size web text in rem units so it scales on zoom.
* Make sure content remains usable when users zoom or enlarge text. Support 200% zoom without loss of function. Make charts work at 400% zoom without content overlapping.

## Label figures and structure headings

* Give each chart a title or reference so screen reader users can navigate them.
* Give chart titles and labels a heading level that matches its place in the page or dashboard. For example, if the chart is under an H2, make its title an H3.

## Don’t hide essential information

* Make sure screen readers can access important information without relying on interactivity.
* Repeat essential details in body text or a data table,
* Don’t put essential information only in tooltips. 

## Support translation and adaptability

Create content you can translate and reuse in different languages.

## Test before you share with users
* Check colors for:
    * Text and graphical contrast
    * Adjacent-color contracts
    * Color-blindness simulation
    * Grayscale consistency
* Test charts on mobile devices, with keyboard navigation, and with screen readers.
* Use accessibility tools (add links) to vet your palettes. Consider using the [ColorBrewer tool](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3), which has color-blind-safe palettes.

The [Accessibility checklist]() has more information.
