---
title: Distribution — what's the spread?
parentid: Choose the right chart
parentidlink: /data/visualization-guidelines/choose-the-right-chart/
description: Charts for showing the distribution of values
headerlabel: Guides and playbooks
headericon: book
---

Show the distribution of values. For example, wait times, income ranges, or heights of a group of people.

## Histogram

A histogram groups values into ranges (bins) and shows how many values fall into each bin. It’s best for showing the frequency distribution of a single variable.

![A blue histogram in the shape of a normalized distribution](/img/dataviz/choose-the-right-chart/histogram.png)


### Best practices

* Choose bin sizes carefully. Too few bins hide patterns, while too many create noise and make the chart hard to interpret.
* This recommendation is specific to histograms. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Scatterplot

A scatterplot plots each observation as a point against 2 axes. It’s best for showing all the values in a distribution, including outliers.

![A blue scatterplot of dots with a best fit line](/img/dataviz/choose-the-right-chart/scatterplot.png)

### Best practices

* The [Relationships section](/data/visualization-guidelines/choose-the-right-chart/relationships) has scatterplot best practices. They include adding trendlines, labeling outliers, and reducing opacity for overlapping points.
* For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Bar chart with error bars

A bar chart with error bars adds lines to each bar showing the uncertainty or variability around a value. It’s best for showing a statistic alongside its [margin of error](https://www.census.gov/data/academy/data-gems/2024/what-is-the-margin-of-error.html).

![A vertical bar chart with error bars at the top of each bar](/img/dataviz/choose-the-right-chart/bar-chart-error-bars.png)


### Best practices

* Describe what the error bars represent (for example, a confidence interval) in a note or legend.
* The [Comparison section](/data/visualization-guidelines/choose-the-right-chart/relationships) has bar chart best practices.
* For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Box plots

A box plot summarizes a distribution using its median, quartiles, and outliers. It’s best for comparing distributions across groups. Use a box plot when a chart is for a technical audience.

![A group of box plots with median lines, as well as lower and upper quartiles marked with whiskers](/img/dataviz/choose-the-right-chart/box-plot.png)


### Best practices

* Readers need statistical literacy to understand a box plot. Include a brief explanation or legend if you have a general audience.
* For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).
