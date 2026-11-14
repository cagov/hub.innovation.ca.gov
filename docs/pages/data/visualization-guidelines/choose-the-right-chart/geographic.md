---
title: Geographic — where is this happening?
parentid: Choose the right chart
parentidlink: /data/visualization-guidelines/choose-the-right-chart/
description: Maps for showing where things are happening
headerlabel: Guides and playbooks
headericon: book
---

Show data across geographic regions. For example, county-level data, regional comparisons, or the locations of points of interest.

## Choropleth maps

A choropleth map shades existing geographic regions according to a measurement. It’s best for showing how a rate or proportion varies across regions.

![A blue choropletch map of California with different counties filled in with different shades of blue](/img/dataviz/choose-the-right-chart/choropleth-map.png)

### Best practices

* Use rates or per capita measurement, not raw counts. Raw counts on a choropleth just reflect population density.
* This recommendation is specific to choropleth maps. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Dot/bubble maps

A dot or bubble map places markers at specific locations, sometimes sized by value. It’s best for showing count-based data at specific locations.

<div class="cagov-cluster-3">

![A map of California with small blue overlapping dots](/img/dataviz/choose-the-right-chart/dot-map.png)

![A map of California with different sized blue overlapping bubbles](/img/dataviz/choose-the-right-chart/bubble-map.png)

</div>

### Best practices

* If dots or bubbles overlap, don’t use full opacity. Layering transparent bubbles shows where points have more density.
* This recommendation is specific to dot/bubble maps. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Symbol maps

A symbol map uses icons to mark points of interest (POI) on a map.

![A map of California with blue marker symbols at various points of interest](/img/dataviz/choose-the-right-chart/symbol-map.png)

### Best practices

* Use different icons to distinguish between categories. 
* This recommendation is specific to symbol maps. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).
