---
title: Relationships — are these items connected and how?
parentid: Choose the right chart
parentidlink: /data/visualization-guidelines/choose-the-right-chart/
description: Charts for showing the relationship between items
headerlabel: Guides and playbooks
headericon: book
---

Explore how 2 variables are related. For example, does higher health care spending correlate with better health outcomes?

## Scatterplot

A scatterplot plots 2 variables against each other. Each point represents one observation. It’s best for showing if and how 2 variables are related.

![A blue scatterplot of dots with a best fit line](/img/dataviz/choose-the-right-chart/scatterplot.png)

### Best practices

* Add a trendline if you want to highlight the overall relationship. 
* Label notable outliers.
* Fill points with reduced opacity (10-30%) if dots overlap. 
  * Overlapping dots will show the density of areas (like a heatmap).
* These recommendations are specific to scatter plots. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Bubble charts

A bubble chart is a scatterplot with a third variable encoded as the size of each point. It’s best for showing the relationship between 3 variables at once.

![A blue chart with different sized transparent bubbles/circles](/img/dataviz/choose-the-right-chart/bubble-chart.png)

### Best practices

* Use sparingly, they can become cluttered. 
* Always include a size legend.
* Fill bubbles with reduced opacity (10-30%) if bubbles overlap.
* These recommendations are specific to bubble charts. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).
