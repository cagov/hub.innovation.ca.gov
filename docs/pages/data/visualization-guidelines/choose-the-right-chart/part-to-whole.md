---
title: Part-to-whole — what share of the total is this?
parentid: Choose the right chart
parentidlink: /data/visualization-guidelines/choose-the-right-chart/
description: Charts for showing the share of a total
headerlabel: Guides and playbooks
headericon: book
---

Show how parts contribute to a whole. This could be budget breakdowns, demographic composition, or category shares.

## Stacked bar charts

In a stacked bar chart, colored segments show how subcategories make up the total. It’s best for showing a small number of subcategories that make up a category. It shows the total and what makes up that total at the same time.

![3 stacked bar charts each with 3 sectors of unequal size](/img/dataviz/choose-the-right-chart/stacked-bar-chart.png)

### Best practices

* Use when you have 5 categories or fewer. Too many categories can make the chart difficult to read and compare.
* Place the most important category on the aligned baseline. This is the left side for horizontal bars and the bottom for vertical bars. Segments in the middle are hardest to compare.
* For 100% stacked bar charts, make sure segments total exactly 100% after rounding.
* Don’t default to combining smaller groups into an “Other” category. Showing smaller groups could reveal meaningful differences or insights. Using "Other" could hide them. If the chart becomes difficult to read, consider a different chart type.
* These recommendations are specific to stacked bar charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Treemaps

A treemap shows parts of a whole as nested rectangles sized by value. It’s best for categories with a wide range of sizes. They are less precise than bar charts, but good for showing overall composition at a glance. They are often used to show government budget categories.

![A treemap with large portions of blue and smaller portions of orange and teal](/img/dataviz/choose-the-right-chart/treemap.png)


### Best practices

* Add thin, clear borders between slices. Do not rely on color alone to distinguish categories.
* These recommendations are specific to treemaps. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Waffle (or grid) charts

A waffle chart fills a grid of cells to show a percentage or proportion. It’s best for showing simple percentages or proportions in a way that's easy to understand. For example, 7 out of 10 respondents.

![A waffle chart 10x10 grid with 78 filled in and 22 grayed out](/img/dataviz/choose-the-right-chart/waffle-chart.png)


### Best practices

* Use a 10×10 grid so each cell represents one percent. 
* Label the value directly on the chart.
* These recommendations are specific to waffle charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).


## Pie charts

A pie chart divides a circle into slices to show parts of a single total. It’s best for simple parts-of-a-whole relationships.

![A pie chart with 3 sectors of unequal size](/img/dataviz/choose-the-right-chart/pie-chart.png)

### Best practices
* Don't default to a pie chart. Use them sparingly.
* Limit categories to 2-3 slices.
* Ensure the categories sum to 100%.
* Avoid a separate legend. Label each slice directly with the category name and percentage. This avoids visual clutter and having to match colors to labels.
* Sort categories intentionally, for example from highest to lowest. Order slices largest to smallest, clockwise from 12 o’clock.
* Never use a pie chart for rates or data that exceed 100%.
* Never use multiple pies to compare groups. Use a stacked or grouped bar instead.
* Add thin, clear borders between slices. Do not rely on color alone to distinguish categories.
* These recommendations are specific to pie charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

Pie charts are widely used, but have well-documented limitations. People are not good at comparing angles and areas.

In most cases, a horizontal bar chart communicates the same information more clearly. People are good at comparing length

![A pie chart showing 8 race/ethnicity categories using illustrative data](/img/dataviz/choose-the-right-chart/enrollment-as-pie-chart.png)

![A bar chart showing 8 race/ethnicity categories using illustrative data](/img/dataviz/choose-the-right-chart/enrollment-as-bar-chart.png)

For example, bar charts are great for comparing different categories. You can easily see the relative size of each group by looking at the length of each bar. Bar charts also handle a larger number of categories well.

In contrast, pie charts tend to get cluttered when there are too many categories. Our eyes aren’t as good at judging angles or areas as they are at comparing bar lengths. For clearer, more accurate comparisons, bar charts are often the better choice.

## Donut charts

A donut chart is a pie chart with a hollow center, which leaves room for a large label or headline figure. It’s best for parts of a whole when you also want a prominent central label or total.

![A donut chart with 3 unequal categories and a label with $1.4B in the center](/img/dataviz/choose-the-right-chart/donut-chart.png)

### Best practices

* Follow the same guidance as pie charts. 
* Use the empty center to communicate a high-level takeaway about the chart.
* These recommendations are specific to donut charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).
