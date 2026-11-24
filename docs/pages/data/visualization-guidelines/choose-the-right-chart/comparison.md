---
title: Comparison — how do these items compare?
parentid: Choose the right chart
parentidlink: /data/visualization-guidelines/choose-the-right-chart/
description: Charts for comparing items
headerlabel: Guides and playbooks
headericon: book
---

## Bar charts

A bar chart compares values across categories using the length of each bar. It’s best for comparing discrete categories or groups.

![A horizontal bar chart with 5 blue bars](/img/dataviz/choose-the-right-chart/bar-chart.png)

### Best practices

* Use horizontal bars when category labels are long. Avoid fitting longer labels under vertical bars by rotating them 45 degrees. Use a horizontal bar chart instead.

<picture>
  <source media="(min-width: 768px)" srcset="/img/dataviz/choose-the-right-chart/bar-chart-labels-desktop.png" width="1040" height="651">
  <img src="/img/dataviz/choose-the-right-chart/bar-chart-labels-mobile.png" width="480" height="985" style="max-width: 100%; height: auto;" alt="Two bar charts of the same data: California General Fund spending by agency, 2025–26, in billions of dollars. Education 103.1, Health and Human Services 87.1, Corrections and Rehabilitation 13.4, Legislative, Judicial, Executive 8.6, and General Government 6.3. Don't: a vertical bar chart with its long agency names rotated at an angle. Do: a horizontal bar chart with the names written level beside each bar.">
</picture>

* Use vertical bars when categories represent time, such as months.
* Start the value axis at 0 so the bar lengths stay proportional.
* Order bars from largest to smallest unless another order is more meaningful.
* Keep gaps between bars narrower than the bars themselves.
* On small screens, a horizontal bar chart is usually safer than a vertical column chart. It grows downward rather than sideways, making the chart easier to read. This layout works well for people on mobile.
* These recommendations are specific to bar charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Grouped bar charts

A grouped (clustered) bar chart places bars side by side in each category. This makes it easy to compare subcategories. It’s best for comparing 2-3 subcategories in each main category.

![A grouped vertical bar chart with 3 groups of blue and orange bars](/img/dataviz/choose-the-right-chart/grouped-bar-chart.png)

### Best practices

* Use when comparing 2-3 subcategories in each main category. More than 3 groups becomes hard to read. Consider small multiples instead.
* Group together the bars you most want people to compare most. This makes it easy for people to compare them.
* Use small gaps between bars within a group and larger gaps between groups.
* Avoid gruoped (clustered) bars for time series.
* These recommendations are specific to grouped bar charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).
