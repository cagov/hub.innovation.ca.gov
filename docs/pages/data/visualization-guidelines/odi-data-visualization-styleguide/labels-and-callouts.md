---
title: Labels and callouts
parentid: ODI's data visualization styleguide
parentidlink: /data/visualization-guidelines/odi-data-visualization-styleguide/
description: Where labels go, and how to style annotations and tooltips
headerlabel: Guides and playbooks
headericon: book
---

<div class="styleguide">

Labels say what the chart shows. Callouts point out what matters. Use as few as the chart needs, and keep them all dark gray. Learn how to word them in [Writing effective text](/data/visualization-guidelines/follow-data-visualization-best-practices/writing-effective-text/).

## Data labels

Data labels show the value of each bar, point, or slice.

- Put data labels just past the end of each bar, `8px` from the bar. `Noto Sans Mono`, `14px`, dark gray {% hex "#1e1e1e" %}.
- Label every bar or none. Don’t mix.
- When bars come in pairs, like this year next to last year, name the years in a legend above the chart and keep the values past the bar ends.
- In stacked bars, center each value in its part: white text on dark parts and dark gray text on light parts, whichever has at least 4.5:1 contrast. If a part is too narrow for its label, put the label `8px` past the end of the bar.
- Format numbers the same way across a chart: the same number of decimal places, and the unit once, in the subtitle or on the first label (like “$1.2M” or “12%”), not on every label.
- Round to what people need. “4.1%” is easier to read than “4.137%”.

<img src="/img/dataviz/styleguide/labels-data-labels.png" width="876" height="519" style="max-width: 100%; height: auto;" alt="Two bar charts of children under 18 in poverty. Left: Child poverty is highest in San Bernardino and Los Angeles, 2022, one bar per county with its value 8 pixels past the end: San Bernardino 18.2, Los Angeles 18.1, Riverside 13.3, San Diego 12.6, Orange 11.0. Right: Riverside had the biggest drop in child poverty, 2021 and 2022, with a legend above the chart naming 2022 in dark blue and 2021 in pale blue, and a pair of bars per county with values past the bar ends: San Bernardino 18.2 and 17.1, Los Angeles 18.1 and 18.4, Riverside 13.3 and 16.0, San Diego 12.6 and 12.3, Orange 11.0 and 11.0. Source: California Department of Public Health, County Health Status Profiles.">

## Direct labels and legends

- Label lines at their right end, `8px` past the last point, instead of using a legend.
- Use a legend when labels would crowd the chart, like a scatterplot with many dots, or when bars come in pairs, like this year and last year. Put it above the chart. See [Chart anatomy](/data/visualization-guidelines/odi-data-visualization-styleguide/chart-anatomy/).
- Never rotate category labels or data labels. Only the y-axis title may be rotated (see [Chart anatomy](/data/visualization-guidelines/odi-data-visualization-styleguide/chart-anatomy/)). If category labels are long, use horizontal bars or let the label wrap to two lines.
- Keep labels dark gray. Don’t color them to match their line or bar.

## Annotations

Use annotations to point out what matters, like when a law took effect or how a value compares to a goal. There are three kinds.

**1. Callout text.** A short note about one point or event.

- `Noto Sans Regular`, `14px`, dark gray {% hex "#1e1e1e" %}.
- If the note sits away from its point, add a leader line: `1px`, light gray {% hex "#bcbbc1" %}, ending `8px` from the point.
- Keep it to one or two short lines.

**2. Reference line.** A target, an average, or a date.

- A solid `1px` gray {% hex "#72717c" %} line, labeled at one end.
- Where the label crosses a gridline, put a white box behind it so the gridline stops there.

**3. Highlighted range.** A stretch of time or values that matters, like a recession or a program’s first year.

- A pale wash behind the chart, in the Background version of a color (see [Color](/data/visualization-guidelines/odi-data-visualization-styleguide/color/)), with a short label in its top-left corner. `Noto Sans Regular`, `14px`, dark gray {% hex "#1e1e1e" %}.
- Put it behind the data, never over it.
- Use one highlighted range per chart.

<img src="/img/dataviz/styleguide/labels-annotations.png" width="876" height="453" style="max-width: 100%; height: auto;" alt="Line chart titled Unemployment spiked in 2020 and recovered by 2022, showing California's monthly, seasonally adjusted unemployment rate from 2019 to 2023. Numbered markers show the three kinds of annotation: 1, callout text, Peak: 16.1% in April 2020; 2, a reference line labeled 2019 average: 4.1%; 3, a highlighted range labeled Recession, Feb–Apr 2020. Source: U.S. Bureau of Labor Statistics, Local Area Unemployment Statistics (series CAUR, via FRED). Recession dates: National Bureau of Economic Research.">

## Tooltips

Tooltips show details when someone hovers over or taps a mark.

- Dark blue box {% hex "#00315f" %} with a `1px` light gray {% hex "#d4d4d8" %} border, white text, `8px` corners, `12px` padding.
- A `6px` pointer centered on the side that faces the hovered mark.
- The name in `Noto Sans SemiBold`, `14px`, then each value in `Noto Sans Mono`, `14px`, both white.
- Show 2 or 3 lines at most.
- The hovered mark keeps its size. A dot gets a `2px` outline in its Line color, with a `2px` gap, and a `1px` gray {% hex "#72717c" %} vertical line runs through it from the top of the chart to the axis.
- Never put essential information only in a tooltip. Tooltips are hard to use on phones and with keyboards.

<img src="/img/dataviz/styleguide/labels-tooltip.png" width="876" height="183" style="max-width: 100%; height: auto;" alt="Close-up of a tooltip on a scatterplot. A hovered orange dot has a dark orange outline ring and a thin gray vertical line through it. Beside it, a dark blue box with a small pointer reads Los Angeles County, Child poverty: 18.1%, Teen births: 7.6.">

## Labels on small charts

On phones and in small multiples, there’s less room. Cut labels before you shrink them.

- Show fewer axis numbers, 3 to 5.
- Shorten category labels, or let them wrap to two lines.
- Use direct labels instead of a legend when you can.
- If data labels would overlap, drop them and add a data table.
- Don’t make any text smaller than `12px`. See [Typography](/data/visualization-guidelines/odi-data-visualization-styleguide/typography/).

Learn more in [Writing effective text](/data/visualization-guidelines/follow-data-visualization-best-practices/writing-effective-text/) and [Accessibility](/data/visualization-guidelines/follow-data-visualization-best-practices/accessibility/).

</div>
