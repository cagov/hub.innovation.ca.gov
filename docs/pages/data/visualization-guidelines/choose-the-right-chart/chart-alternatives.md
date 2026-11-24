---
title: Chart alternatives — should I use a chart at all?
parentid: Choose the right chart
parentidlink: /data/visualization-guidelines/choose-the-right-chart/
description: Alternatives to traditional charts and graphs
headerlabel: Guides and playbooks
headericon: book
---

Sometimes a data table or simple statistic might communicate better than a chart. Ask if a chart is the right format for your data or if another format is more appropriate.

## Key performance indicator (KPI)

A KPI displays a single key number prominently. It’s best for giving high-level understanding when one number conveys the insight.

![A large number, 1248, labeled "Applications submitted", 12% increase from last month](/img/dataviz/choose-the-right-chart/kpi.png)

### Best practices
* Include a label that explains what the number measures. 
* When helpful, add context such as a comparison to target or a trend over time.
* These recommendations are specific to KPI’s. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Statistic with icon

A statistic with an icon pairs a single number with an icon that explains what it measures. It’s best for sharing a single value with visual context for what the number measures.

![A large number, 3.2m, labeled "residents reached", next to three user icons](/img/dataviz/choose-the-right-chart/stat-with-icon.png)

### Best practices

* Choose an icon that reinforces the meaning of the number. 
* Keep the number prominent with the icon secondary.
* These recommendations are specific to statistics with icons. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

## Progress bar

A progress bar shows how far a value has advanced toward a target. It’s best for showing the status of something, especially if it goes from 0 to 100% completion.

![A progress bar filled and labeled 62%](/img/dataviz/choose-the-right-chart/progress-bar.png)

### Best practices
* Label both the current value and the target.
* Use white or a light color for the empty part of the progress bar (or one close to the background if using dark mode). Use an accent color to show the completed part.
* These recommendations are specific to progress bars. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).


## Data table

A table presents values directly in rows and columns. It’s best for showing raw data values.

![An illustratoin of a spreadsheet data table](/img/dataviz/choose-the-right-chart/data-table.png)

### Best practices

Use clear, consistent formatting to make tables easier to scan, read, and compare.

#### Align text and numbers differently for easy scanning

* Left-align text, as it’s easier to read.
* Right-align numbers in columns so decimal points line up.
* Don’t center-align numbers, as it makes comparison harder.

#### Format values consistently

* Use consistent number formatting. Use the same number of decimal places and units throughout.
* Don’t mix formats in the same view. For example, don’t show some percentages with one decimal place and others with 2.

#### Reduce visual clutter

* Use gridlines sparingly. Light gridlines or alternating light fills (zebra striping) can help people follow values across a table. Heavy gridlines, like black, add visual clutter.
* Don’t use borders around every cell in a table. It adds visual noise.
* Remove any unnecessary characters, spaces, or indentations from text.

#### Use column headers

* Use short, descriptive headers that explain the values in each column.
* Include units in the header when they apply to the entire column.
* Don’t repeat units in every cell when they can be stated once in the header.

These recommendations are specific to data tables. For guidance on accessibility, color, and other topics, visit [Data visualization best practices](/data/visualization-guidelines/best-practices).

