---
title: Writing effective text
parentid: Follow data visualization best practices
parentidlink: /data/visualization-guidelines/follow-data-visualization-best-practices/
description: Guidelines for writing effective titles, subtitles and labels
headerlabel: Guides and playbooks
headericon: book
---

## Titles and subtitles

### Write descriptive titles

* Use chart titles that clearly describe what the visualization shows.
* Don’t write chart titles that only describe the chart type. For example, the Revenue Bar Chart.
* If there are axes, write chart titles that describe what’s on each axis.
    * Bad example: Investment type
    * Good example: Types of investments by number of partnerships



### Use interpretive titles when there is a clear takeaway

* Declarative titles describe the information depicted in the chart. Interpretive titles state the finding or key takeaway.
* Use an interpretive title when you are showing a specific insight or takeaway.
* Use a declarative subtitle to describe what the visualization shows. For example: Three programs account for most applications, Application by program.

<picture>
  <source media="(min-width: 768px)" srcset="/img/dataviz/best-practices/titles-do-dont-desktop.png" width="1040" height="496">
  <img src="/img/dataviz/best-practices/titles-do-dont-mobile.png" width="480" height="994" style="max-width: 100%; height: auto;" alt="Two bar charts of the same data: Californians enrolled by safety net program, in millions. Medi-Cal 14.9, CalFresh 5.0, SSI/SSP 1.1, CalWORKs 0.9, and General Assistance 0.2. Don't: a chart titled with the general topic, Program enrollment. Do: a chart titled with the takeaway, Medi-Cal and CalFresh account for most enrollment, with the subtitle Californians enrolled by safety net program.">
</picture>

## Labels and annotations

### Use annotations to highlight what matters

* Call out important data points, anomalies, or milestones directly on the chart.
* Don't expect people to find important values on their own.

### Consider legends and their placement carefully

* When possible, label data series directly on the chart instead of using a separate legend. This reduces the reader’s cognitive work.
* Use legends when direct labels would make the visualization cluttered or hard to read.
* If a group of charts share a legend, position it so it is clear it applies to the entire group.
* Place legends where users expect them.

## Plain language

### Use plain language for text and labels

* Use titles and labels that your users are likely to understand.
* Don’t use database field names or technical units without defining them.
* Spell out what the axis represents and include units.
* Don’t assume people know an abbreviation. Use long-form units instead of abbreviations.
* For charts intended for the general public, aim for an 8th grade reading level or lower. Use tools like hemingwayapp.com to check the reading level of your text.

### Text formatting and capitalization
* Use sentence case, even in titles and column headings
* When writing out a URL, use lowercase letters. 
* If it’s the first word in a sentence, capitalize the first letter.

## Numbers

* Use whole numbers, unless a decimal is needed. 
    * This is especially important for percentages. If you round percentages that add up to 100, make sure you round up and down so that the whole numbers also add up to 100.
    * If a decimal is needed, keep it to one decimal point. 
* Do not add .0 to the end of a number. This is extra text that does not increase understanding. Just use the whole number.
* Use commas in numbers over 999. Example: 12,293 or 14,040,029
* Thousands
    * Write out the number. This is clear to people, even after translation.
    * When writing numbers with limited space (like labels in a chart), use a K instead of writing out the full number.
* Millions
    * For exact numbers where every digit is important, write out the whole number.
    * For round or approximate numbers, write out the word million. 
    * When writing numbers with limited space (like labels in a chart), use an M instead of writing out the full number.

## Dates and time

* When showing months in a time series, use 3 letter abbreviations for the month, like Jan, Feb, etc. Write out the full month name for July and May.
* When showing the year in a timeseries, write out the full year, (2026) instead of the abbreviation(‘26).
* Capitalize the suffix for time of day, and add a space before it. Example: 10:40 AM.

Learn more about [plain language](https://hub.innovation.ca.gov/content-design/principles/write-in-plain-language/) in our content principles.
