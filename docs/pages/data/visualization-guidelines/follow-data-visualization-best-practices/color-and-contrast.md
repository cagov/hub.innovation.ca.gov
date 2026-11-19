---
title: Color and contrast
parentid: Follow data visualization best practices
parentidlink: /data/visualization-guidelines/follow-data-visualization-best-practices/
description: Guidelines for using color and contrast in data visualization
headerlabel: Guides and playbooks
headericon: book
---

## Use color intentionally

Work through color assignments in this order: single color → highlight → multiple.

**Single color:** If there is one category and nothing needs to be emphasized, use one color. 

For example, a bar chart may show the category region along the y-axis. The position and labels distinguish the regions, so different colors are not needed.

![A horizontal bar chart with each bar blue that compares the average daily PM2.5 by county, data from 2020](/img/dataviz/best-practices/single-color-bar-chart.png)

**Highlight:** To draw attention to one sub-category or value, use one accent color and gray out the rest.

![A vertical bar chart with each bar dark gray and one blue bar in September that compares the average daily PM2.5 by month, data from 2020](/img/dataviz/best-practices/highlight-color-bar-chart.png)

**Multiple colors:** Use multiple colors when color is needed to distinguish between categories or values. For example, separate lines in a line chart may need different colors to tell them apart.

![A line chart with four different colors that compares the average daily PM2.5 by month for four California counties, data from 2020](/img/dataviz/best-practices/multiple-colors-line-chart.png)

When using multiple colors, choose the type of color scale based on what the colors represent:
* **Sequential:** Use a sequential scale (light to dark of a single hue) when values run in one direction. 
    * When the data has an inherent sequence, put it in order. 
    * For example, age bands, income brackets, population density, or low to high rating.
* **Categorical:** Use distinct colors when categories are truly separate, with no inherent order.
    * Use a distinct color for each category.
    * Limit the palette to 5-7 colors.
    * Unordered categories might be regions, departments, or physical attributes.

![Two grouped bar charts, one with age bucket subcategories that uses sequential color scales in shades of blue; the other grouped bar chart has program subcategories without an order and uses a categorical palette of blue, orange, teal and red](/img/dataviz/best-practices/sequential-categorical-grouped-bar-charts.png)

* **Diverging:** Use a diverging scale (2 hues from a neutral midpoint) when the data has a meaningful center. For example, a change above and below 0, profit/loss, or deviation from the average.

![A likert scale bar chart that uses a diverging color scale with negative parts of the stacked bar in orange and positive parts in green, with a neutral middle](/img/dataviz/best-practices/diverging-likert-scale-chart.png)

## Use color to represent meaning

* Use color to encode a meaningful category or value.
* Use consistent colors across visualizations. Use the same color to represent the same category across related charts.
* Don’t use color decoratively to make a chart “look nice.” 

## Never rely on color alone
* Pair colors with a legend or label describing the data mapped to that color.
* Don’t rely on color alone to convey meaning, to make sure your labels are accessible to people with color blindness or low vision. Always pair color with labels, patterns or position.
* In descriptions, refer to data by its label rather than its color. For example, use “California” instead of “the blue line”.

## Choose dark neutral colors for labels
* Use black or dark gray for data labels.
* Don’t match a line label to its series color unless lines are so close that not doing so would be unclear. However, be sure that the color you use for the text label is accessible to readers. Consider using the same hue as the line but darkening it for better legibility.

## Don’t use rainbow scales
* Don’t use rainbow or spectral scales. They have no natural order and can create misleading differences between values. They can also be difficult for people with color vision deficiencies to interpret.
* Use a sequential or diverging scale that interpolates between 1-2 hues.

<figure>
  <img src="/img/dataviz/best-practices/rainbow-color-nature.webp" width="1979" height="904" style="max-width: 100%; height: auto;" alt="Three versions of the same three photos: the Earth from space, an apple, and a portrait of Marie Skłodowska-Curie. Panel a: the original black and white photos. Panel b, labeled jet: the photos colored with a rainbow scale. Her face turns bright red against a blue background, and the Earth breaks into patches of red, yellow and light blue. Panel c, labeled batlow: the photos colored with a scale that runs from dark blue through brown to pale pink. Light and shadow fall where they do in the original, and the photos are easy to recognize.">
  <figcaption>The same photos colored with a rainbow scale (b) and with a perceptually uniform scale (c), where each step looks like the same amount of change. The rainbow adds sharp edges and bright spots that aren't in the original photos (a). The perceptually uniform scale keeps the light and dark areas true to the original. Source: Fabio Crameri, Grace E. Shephard and Philip J. Heron, <a href="https://www.nature.com/articles/s41467-020-19160-7">“The misuse of colour in science communication,”</a> Nature Communications, 2020.</figcaption>
</figure>