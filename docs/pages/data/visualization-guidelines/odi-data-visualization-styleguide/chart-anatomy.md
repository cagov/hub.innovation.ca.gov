---
title: Chart anatomy
parentid: ODI's data visualization styleguide
parentidlink: /data/visualization-guidelines/odi-data-visualization-styleguide/
description: The parts of a chart and what each one uses
headerlabel: Guides and playbooks
headericon: book
---

<div class="styleguide">

Every chart should have the same parts. Include each one unless you have a reason not to.

<img src="/img/dataviz/styleguide/chart-anatomy-bar-chart.png" width="876" height="471" style="max-width: 100%; height: auto;" alt="Labeled diagram of a bar chart titled Three of four programs grew, with the subtitle People served by program, in thousands, 2024 and 2025. Numbered callouts point to its parts: 1 title, 2 subtitle, 3 legend (2025 in dark blue, 2024 in pale blue), 4 category labels (Medi-Cal enrollment, CalFresh applications, Unemployment claims, State park reservations), 5 data labels past the bar ends (Medi-Cal 82 and 76, CalFresh 64 and 60, Unemployment 48 and 55, State parks 27 and 22), 6 bars, 7 x-axis line, 8 x-axis ticks, 9 axis labels from 0 to 100, and 10 source.">

1. **Title.** States the takeaway when there is one. `Noto Serif Bold`, `24px`, blue {% hex "#0d4f8c" %}.
1. **Subtitle.** Describes what the chart shows: the measure, the place, and the time period. `Noto Sans Regular`, `16px`, dark gray {% hex "#1e1e1e" %}.
1. **Legend.** Names the color of each group, here the two years. Put it above the chart. `Noto Sans Regular`, `14px`, dark gray {% hex "#1e1e1e" %}.
1. **Category labels.** Name each bar or group. `Noto Sans SemiBold`, `14px`, dark gray {% hex "#1e1e1e" %}.
1. **Data labels.** Show the value on each bar, `8px` past its end. `Noto Sans Mono`, `14px`, dark gray {% hex "#1e1e1e" %}.
1. **Bars, lines, or other marks.** Use ODI chart colors. See [Color](/data/visualization-guidelines/odi-data-visualization-styleguide/color/).
1. **X-axis line.** A `1px` gray {% hex "#72717c" %} line along the bottom of the chart, from zero to the last tick. Bar charts have no gridlines: the data labels give the exact values.
1. **X-axis ticks.** A `6px` gray {% hex "#72717c" %} mark hanging below the axis line at each axis label.
1. **Axis labels.** The numbers along the value axis, `8px` below the ticks. `Noto Sans Mono`, `14px`, gray {% hex "#72717c" %}.
1. **Source and notes.** Name the data source and any notes below the chart. `Noto Sans Regular`, `12px`, dark gray {% hex "#1e1e1e" %}.

<h2 class="h3" id="a-chart-with-a-legend-a-tooltip-and-an-annotation">A chart with a legend, a tooltip, and an annotation</h2>

<img src="/img/dataviz/styleguide/chart-anatomy-scatterplot.png" width="876" height="481" style="max-width: 100%; height: auto;" alt="Labeled diagram of a scatterplot titled Teen birth rates rise with child poverty, with the subtitle Child poverty (2022) and teen births (2021–2023) by California county. Dots for 24 counties are colored by region: Bay Area in blue, Southern California in orange, San Joaquin Valley in teal. Bay Area counties sit lowest on both measures and San Joaquin Valley counties highest. Numbered callouts point to its parts: 1 legend, 2 y-axis title (Teen births per 1,000), rotated beside the axis, 3 y-axis labels from 0 to 20, 4 dots, 5 dashed gridlines, 6 an annotation line at the California rate of 8.9, 7 a tooltip on Los Angeles County reading child poverty 18.1% and teen births 7.6, 8 x-axis from 0 to 35, and 9 x-axis title (Children under 18 in poverty, percent). Source: California Department of Public Health, County Health Status Profiles 2025.">

1. **Legend.** Use one when a chart has several groups and labeling each mark would crowd it, as in a scatterplot, or when bars come in pairs, like this year and last year. Put it above the chart: `24px` below the subtitle and `16px` above the chart. Each item is a swatch in the group’s color (an `8px` dot for dots, a `12px` rounded square for bars, a `16px` line for lines), `8px` from its label, with `16px` between items. `Noto Sans Regular`, `14px`, dark gray {% hex "#1e1e1e" %}.
1. **Y-axis title.** Names the measure and its unit when both axes are numbers. Put it beside the value axis, reading from bottom to top, or above the value axis, `8px` above the chart. Either works: use the same one for every chart on a page or dashboard. `Noto Sans SemiBold`, `14px`, dark gray {% hex "#1e1e1e" %}.
1. **Y-axis labels.** Numbers along the value axis, `8px` left of the chart. `Noto Sans Mono`, `14px`, gray {% hex "#72717c" %}.
1. **Dots.** `8px`, in each color’s Main, with a `1px` white outline so overlapping dots stay distinct. The hovered dot keeps its size and gets a `2px` outline in its Line color, with a `2px` gap, and a `1px` gray {% hex "#72717c" %} vertical line runs through it from the top of the chart to the axis.
1. **Gridlines.** Light gray {% hex "#d4d4d8" %}, `1px`, dashed (`4px` dash, `4px` gap). Here the line at zero is the x-axis line.
1. **Annotation.** Marks a reference value, like the state average, or an event, like the start of a program. A `1px` gray {% hex "#72717c" %} line with a short label. `Noto Sans Regular`, `14px`, dark gray {% hex "#1e1e1e" %}.
1. **Tooltip.** Shows on hover or tap. Dark blue box {% hex "#00315f" %} with a `1px` light gray {% hex "#d4d4d8" %} border and white text, `8px` corners, `12px` padding, and a `6px` pointer centered on the side that faces the hovered mark. The name in `Noto Sans SemiBold`, `14px`, then each value in `Noto Sans Mono`, `14px`. Keep it to 2 or 3 lines, and never put essential information only in a tooltip.
1. **X-axis line, labels, and ticks.** A `1px` gray {% hex "#72717c" %} line at zero. Use one in time series, scatterplots, and other charts where the x-axis matters. A `6px` gray {% hex "#72717c" %} tick above each label. `Noto Sans Mono`, `14px`, gray {% hex "#72717c" %}.
1. **X-axis title.** Names the measure and its unit, `8px` below the axis labels, centered under the axis. `Noto Sans SemiBold`, `14px`, dark gray {% hex "#1e1e1e" %}.

Learn more in [Writing effective text](/data/visualization-guidelines/follow-data-visualization-best-practices/writing-effective-text/) and [Density and simplicity](/data/visualization-guidelines/follow-data-visualization-best-practices/density-and-simplicity/).

</div>
