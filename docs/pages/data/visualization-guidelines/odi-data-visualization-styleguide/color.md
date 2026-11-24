---
title: Color
parentid: ODI's data visualization styleguide
parentidlink: /data/visualization-guidelines/odi-data-visualization-styleguide/
description: ODI's chart colors, with hex and RGB values you can copy into your code
headerlabel: Guides and playbooks
headericon: book
---
{% from "styleguide/swatches.njk" import swatches, ramps, versions %}
<div class="styleguide">
<p class="sg-copy-status" role="status" aria-live="polite"></p>

Use color only when it helps people read the data. Start with one color, then a highlight, then multiple colors. [Color and contrast](/data/visualization-guidelines/follow-data-visualization-best-practices/color-and-contrast/) in Best practices explains how to choose.

## Categorical colors

Use categorical colors when the groups have no order, like regions or programs. Use them in this order. The first 6 are the default set. Use the extended set only when you need more than 6 colors. Past 6 or 7, small multiples are usually easier to read. If you have 2 categories, use blue and orange. If you have 3 categories, use blue, orange and teal.

{{ swatches(styleguideColors.categorical) }}

```python
# ODI categorical colors, in order
odi_default = ["#0d4f8c", "#e3881b", "#3baa91", "#e45d48", "#634eaf", "#5cb1d8"]
odi_extended = ["#3d6a7f", "#058a32", "#825a99"]
odi_all = odi_default + odi_extended
```

### Four versions of each color

Each color comes in 4 versions for different jobs.

- **Main fill:** The color itself. Use it for bars, areas, map regions, pie slices, and dots.
- **Paired:** A paler shade of the same color, used next to its Main. Use it when 2 things in a chart belong to the same group. For example, last year next to this year, or a subgroup inside its group.
- **Line:** For thin marks, like lines and outlines. Don’t use it for text.
- **Background:** A pale wash behind part of a chart, like a highlighted time period. Never use it for data.

<img src="/img/dataviz/styleguide/color-paired-bars.png" width="876" height="398" style="max-width: 100%; height: auto;" alt="Example bar chart titled Applications rose in all three programs, with the subtitle Applications by program, 2024 and 2025 (illustrative data). A legend above the chart shows 2025 in dark blue and 2024 in pale blue. Each program has a pair of bars with its value just past the end: CalFresh 710 in 2025 and 620 in 2024, Medi-Cal 590 and 540, Unemployment 360 and 300. A note below says darker bars are 2025 (Main fill) and paler bars are 2024 (Paired), and that because values are labeled, the paler shade doesn’t need 3:1 contrast.">

{{ versions(styleguideColors.versions) }}

```python
# Same order as the categorical colors
odi_main = ["#0d4f8c", "#e3881b", "#3baa91", "#e45d48", "#634eaf", "#5cb1d8", "#3d6a7f", "#058a32", "#825a99"]
odi_paired = ["#a3bbd3", "#f4cea1", "#98decd", "#eca995", "#bdb3e1", "#9edfff", "#abccde", "#a7d59a", "#d9c0e9"]
odi_line = ["#00315f", "#a35f0e", "#006c58", "#a63f44", "#523d9d", "#0d7caf", "#14546b", "#007c2d", "#6d4884"]
odi_background = ["#f1f6fb", "#faecda", "#eefaf7", "#fcefed", "#efecf8", "#ebf7ff", "#f0f7fc", "#f1f8ef", "#f9f4fb"]
```

### Label lighter colors

Orange, Teal, Sky, every Paired shade, and the gray for “Other” and “Unknown” are lighter than the 3:1 contrast that shapes need on a white background. They’re fine when the chart also gives the numbers. Use them only with data labels or a data table. If a chart has no data labels or data table, use the darker colors: 1, 4, 5, 7, 8, and 9. Dots in a scatterplot are the exception: use the Main colors in the usual order, even without labels.

Gridlines and grayed-out context are meant to sit in the background, so they don’t need 3:1.

## Sequential colors

Use a sequential palette when values run in one direction, like age bands or income ranges. Light means low and dark means high.

{{ ramps(styleguideColors.sequential) }}

- Use steps 1 to 5 by default.
- For 3 ranges, use 1, 3, and 5. For 4 ranges, use 2 to 5.
- For 6 ranges, add 6.
- For more than 6, group the data into fewer ranges. For continuous data, like a heat map, blend smoothly from 1 to 6.

## Diverging colors

Use a diverging palette when the data has a meaningful middle, like change above and below zero. The middle color is neutral.

{{ ramps(styleguideColors.diverging) }}

- Use steps 2 to 6 by default, with 4 in the middle.
- For 3 ranges, use 3, 4, and 5.
- For 7 ranges, add both 1 and 7.
- Keep the same number of steps on each side of the middle.

```python
# Sequential: use the 5-color list; the 6-color list only for 6 ranges
seq_blue_5 = ["#f1f6fb", "#c7d6e4", "#7fa1c2", "#3f73a4", "#00315f"]
seq_blue_6 = ["#f1f6fb", "#c7d6e4", "#7fa1c2", "#3f73a4", "#00315f", "#001936"]
seq_teal_5 = ["#eefaf7", "#98decd", "#3baa91", "#006c58", "#024a3b"]
seq_teal_6 = ["#eefaf7", "#98decd", "#3baa91", "#006c58", "#024a3b", "#011f17"]
seq_orange_5 = ["#fff4eb", "#f4cea1", "#e3881b", "#a35f0e", "#72420a"]
seq_orange_6 = ["#fff4eb", "#f4cea1", "#e3881b", "#a35f0e", "#72420a", "#472a06"]
seq_purple_5 = ["#efecf8", "#bdb3e1", "#8c7bcb", "#634eaf", "#42317f"]
seq_purple_6 = ["#efecf8", "#bdb3e1", "#8c7bcb", "#634eaf", "#42317f", "#332662"]

# Diverging: use the 5-color list (middle color in the center); the 7-color list only for 7 ranges
div_blue_orange_5 = ["#0d4f8c", "#a3bbd3", "#ededef", "#ecac67", "#a35f0e"]
div_blue_orange_7 = ["#00315f", "#0d4f8c", "#a3bbd3", "#ededef", "#ecac67", "#a35f0e", "#72420a"]
div_teal_coral_5 = ["#006c58", "#53cab0", "#ededef", "#eca995", "#a63f44"]
div_teal_coral_7 = ["#024a3b", "#006c58", "#53cab0", "#ededef", "#eca995", "#a63f44", "#68242d"]
```

## Neutrals and text

Use gray for “Other,” “Unknown,” and “No data.” Gray is never a category of its own. To highlight one bar or line, use one color and gray out the rest.

{{ ramps(styleguideColors.neutrals, true) }}

## Show increase and decrease

Use teal for an increase and orange for a decrease. Don’t use green and red for this. An increase isn’t always good. For example, an increase in unemployment is bad.

- Always add an up or down arrow icon and a sign: +4% or −2%.
- Color the arrow. Keep the number dark gray.
- If the same chart or table also shows status (on track, at risk, off track), show the arrows in dark gray so direction doesn’t look like a judgment.

<img src="/img/dataviz/styleguide/color-increase-decrease.png" width="616" height="133" style="max-width: 100%; height: auto;" alt="Two summary cards. Applications this month: 12,480, with a teal up arrow and +4% vs last month. Average wait time: 18 days, with an orange down arrow and −2 days vs last month. The numbers and text are dark gray; only the arrows are colored.">

{{ ramps(styleguideColors.direction, true) }}

## Show status

Use green, orange, and red to show whether something is on track. Green and red match the alert colors used across ODI websites. The orange is lighter than the website’s warning orange so it’s easier to see in charts.

- Always pair the color with an icon and a word, like “On track.” Never use color alone.
- Use status colors only for status. Don’t use them for categories or for increase and decrease.

<img src="/img/dataviz/styleguide/color-status.png" width="406" height="46" style="max-width: 100%; height: auto;" alt="Three status labels, each with an icon and a word: a green check mark with On track, an orange warning triangle with At risk, and a red exclamation mark in a circle with Off track.">

{{ ramps(styleguideColors.status, true) }}

## Choosing colors for groups of people

Colors can carry meaning people didn’t intend. When a chart shows groups of people, like race and ethnicity or gender:

- Use categorical colors in a neutral order. Use the order your data source uses, or alphabetical order.
- Don’t use skin tones.
- Don’t use pink for women and blue for men.
- Don’t use a light-to-dark sequential scale. It suggests a ranking.
- Use gray for “Other,” “Unknown,” and “Declined to state.”
- Use the same color for the same group in every chart on a page or dashboard.

Learn more in [Equity](/data/visualization-guidelines/follow-data-visualization-best-practices/equity/) and in the [Urban Institute’s Do No Harm Guide](https://www.urban.org/research/publication/do-no-harm-guide-centering-accessibility-data-visualization).

</div>
