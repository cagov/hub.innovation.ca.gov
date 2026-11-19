---
title: Density and simplicity
parentid: Follow data visualization best practices
parentidlink: /data/visualization-guidelines/follow-data-visualization-best-practices/
description: How to approach density and simplicity in data visualization
headerlabel: Guides and playbooks
headericon: book
---

Even accurate and clear data becomes ineffective if it is hard to read or interact with. Legibility ensures people can easily scan and interpret information. Remove anything that does not help readers understand the data. Focus attention where it matters most.

## Design for decisions

Ask , “Does this word, chart, or color help someone act on the data?”

## Remove unnecessary chart elements or defaults

* Remove background colors, drop shadows, borders, boxes around legends, and unnecessary data markers.
* Don’t rely on a chart tool’s default settings. Make sure each element helps communicate the data.
* Don’t use different colors for bars or lines unless the colors communicate meaning. 
* Label chart elements directly when possible instead of using a legend.  This reduces back-and-forth scanning.

## Keep gridlines minimal

* Remove vertical gridlines when they are not needed to interpret the data.
* Keep gridlines light. Use 10 at most, at round-number intervals.
* Don’t use heavy or dark gridlines that compete with the data.

## Sort data in a meaningful order

* Order your categorical data to make the data easier to compare. For example, sort bar charts or pie charts from largest to smallest. 
* Don’t use alphabetical order of categories unless there is a good reason for it. For example, to help users find a category or compare the same categories across charts. 

<picture>
  <source media="(min-width: 768px)" srcset="/img/dataviz/best-practices/bar-sorting-do-dont-desktop.png" width="1040" height="510">
  <img src="/img/dataviz/best-practices/bar-sorting-do-dont-mobile.png" width="480" height="954" style="max-width: 100%; height: auto;" alt="Two bar charts of the same data: unemployment rate in California’s five largest counties, 2024 annual average. Los Angeles 5.8%, Riverside 5.3%, San Bernardino 5.1%, San Diego 4.3%, and Orange 3.9%. Don't: bars in alphabetical order, so the bar lengths go up and down. Do: bars ordered from largest to smallest, so Los Angeles is at the top and the lengths step down to Orange.">
</picture>
