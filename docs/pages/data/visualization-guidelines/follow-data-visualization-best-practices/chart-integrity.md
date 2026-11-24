---
title: Chart integrity
parentid: Follow data visualization best practices
parentidlink: /data/visualization-guidelines/follow-data-visualization-best-practices/
description: How to approach density and simplicity in data visualization
headerlabel: Guides and playbooks
headericon: book
---

Make sure visualizations accurately represent the data. Use formats that accurately communicate the relationships in the data.

## Avoid 3D charts

* Consider if a 3D chart is appropriate for your dataset. Do you have a third dimension that is important to show alongside the other 2? Or are you considering a 3D chart just for visual impact?
* Encode a genuine third dimension another way, such as with color or size.
* Don’t use 3D charts for pure visual interest. They can distort perception without adding information.

## Always start bar chart axes at 0

* Start bar chart axes at 0 so the size of each bar accurately represents its value. Do this even when the values are similar. 
* Don’t shorten the axes on bar charts to make small differences look larger. This is misleading.

<picture>
  <source media="(min-width: 768px)" srcset="/img/dataviz/best-practices/zero-baseline-do-dont-desktop.png" width="1060" height="495">
  <img src="/img/dataviz/best-practices/zero-baseline-do-dont-mobile.png" width="480" height="852" style="max-width: 100%; height: auto;" alt="Two bar charts of the same data: air quality index by Bay Area monitoring site, average daily AQI in 2020. Berkeley 49, Pleasanton 48, Oakland 47, Concord 45, and San Francisco 44. Don't: the axis starts at 42, so Berkeley's bar looks more than 3 times as long as San Francisco's. Do: the axis starts at 0, so the bars are close to the same length, showing the values differ only slightly.">
</picture>

## Adjust line and scatter chart axes carefully

* You don’t always have to start line charts and scatter plot axes at 0. You might want to make the nuances in trends more obvious than if you started the y-axis at 0.
* If the axis starts above 0, do leave enough space between the axis and the first data point. We recommend a gap of roughly a quarter to a third of the chart. 

## Use consistent time intervals

* Use consistent time intervals, like months, quarters, or years, on a time series chart.
* Don’t mix monthly and quarterly intervals without indicating the change.

## Avoid dual y-axes when possible

* Use 2 charts stacked on top of each other when 2 measures have different scales. 
* Clearly label dual y-axes if you must use them. Unclearly labeled dual y-axes can mislead by implying a relationship between unrelated scales.


![Don't: a line chart of California unemployment and employment, monthly from 2021 to 2024, with the 2 measures overlaid on separate y-axes. Unemployment rate, on the left axis from 0 to 10%, falls from about 8.7% in early 2021 to about 3.8% in mid-2022, then rises slowly to about 5.4% by the end of 2024. Employment, a dashed line on the right axis, rises from about 15.8 million to about 18.2 million. Because each axis has its own scale, the 2 lines cross in late 2021, which suggests a relationship that comes only from how the axes were set.](/img/dataviz/best-practices/dual-yaxes-dont.png)

![Do: the same data as 2 separate line charts stacked on top of each other, with matching gridlines and vertical gridlines at each year. The top chart shows the unemployment rate falling from about 8.7% in early 2021 to about 3.8% in mid-2022, then rising slowly to about 5.4% by the end of 2024. The bottom chart shows employment rising from about 15.8 million to about 18.2 million over the same years.](/img/dataviz/best-practices/dual-yaxes-do.png)
