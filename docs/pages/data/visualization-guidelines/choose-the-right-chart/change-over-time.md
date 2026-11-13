---
title: Change over time — how has this changed?
parentid: Choose the right chart
parentidlink: /data/visualization-guidelines/choose-the-right-chart/
description: Charts for showing changes over time
headerlabel: Guides and playbooks
headericon: book
---

Decide whether your data shows a value at a point in time, like the number of people enrolled on a given date. In this case, use a line or area chart.

Use a column chart when your data shows what happens during a time interval. For example, the number of new enrollments each month.

## Line charts

A line chart connects data points to show how values change across a continuous period. This is usually over time. It’s best for showing trends, patterns, or changes over time.

![A blue and orange line chart](/img/dataviz/choose-the-right-chart/line-chart.png)


### Best practices

* Limit line charts to 5–6 series. Beyond that, the overlapping lines can be hard to distinguish. This is sometimes called a “spaghetti chart.”

![A spaghetti chart representing 8 race/ethnicity categories with illustrative data about enrollment](/img/dataviz/choose-the-right-chart/before-spaghetti-chart.png)

* For more series, show the data as small multiples. This is a grid of small line charts, each with a single line and the same axes. You can highlight one line and gray out the others (statically or interactively).

![A small multiples chart series representing 8 race/ethnicity categories with illustrative data about enrollment](/img/dataviz/choose-the-right-chart/after-spaghetti-chart-small-multiples.png)

* You can also highlight one cateogory and gray out the rest if you want to focus on one category. Or combine some categories to reduce the number of lines.

* Don't show more than 7–10 points on a connected line chart. Remove points when they are close together (or altogether).

<picture>
  <source media="(min-width: 768px)" srcset="/img/dataviz/choose-the-right-chart/unemployment-line-markers-desktop.png" width="1040" height="651">
  <img src="/img/dataviz/choose-the-right-chart/unemployment-line-markers-mobile.png" width="480" height="985" style="max-width: 100%; height: auto;" alt="Two bar charts of the same data: California General Fund spending by agency, 2025–26, in billions of dollars. Education 103.1, Health and Human Services 87.1, Corrections and Rehabilitation 13.4, Legislative, Judicial, Executive 8.6, and General Government 6.3. Don't: a vertical bar chart with its long agency names rotated at an angle. Do: a horizontal bar chart with the names written level beside each bar.">
</picture>

* Turn point markers off by default. Show a marker on hover so the tooltip information aligns with the correct point on the line.

* Label lines at the right end rather than using a legend.

![A line chart representing 8 race/ethnicity categories with illustrative data about enrollment where only the Hispanic/Latino category is highlighted and the rest are grayed out, with labels directly on the lines and no legend](/img/dataviz/choose-the-right-chart/after-spaghetti-chart-focus-lines.png)

* These recommendations are specific to line charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Area charts

An area chart is a line chart with the space below the line filled to the x-axis. It’s best for showing volume or magnitude over time. Stacked area charts are useful when showing how parts contribute to a total over time.

![A blue and orange area chart](/img/dataviz/choose-the-right-chart/area-chart.png)

### Best practices

* Use them sparingly. Overlapping series can obscure data.
* Limit stacked area charts to a small number of categories (3–4 max).
* These recommendations are specific to area charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Slope charts

A slope chart shows the change in values between exactly two points by connecting each pair with a line. They’re best for showing a change between exactly 2 time points. For example, before and after a policy change.

![A slope chart with 3 blue lines and 1 orange line](/img/dataviz/choose-the-right-chart/slope-chart.png)

### Best practices

Label values at both the start and end points rather than relying on a legend.
Use a slope chart to highlight when the start-to-end change matters more than the path in between.
These recommendations are specific to slope charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).
