---
title: Usability
parentid: Follow data visualization best practices
parentidlink: /data/visualization-guidelines/follow-data-visualization-best-practices/
description: How to approach usability in data visualization
headerlabel: Guides and playbooks
headericon: book
---

Design visualizations so they are easy to use.

## Maintain consistency

Apply consistent visual patterns. This helps people learn how to interpret common categories across charts.

## Sort data by default

* Sort categories in an order that helps people interpret the data.
* Order bar charts or ordinal elements from largest to smallest.
* Use the natural order of categories that have them, like age groups or dates.

## Test with users

* Test visualizations with the people who will use them.
* Check whether users can understand the information and complete intended tasks.
* Refine visualizations based on real feedback and user testing.

## Ensure content works across devices and contexts

* Test your visualizations on mobile and tablet devices. 
* If you can’t design a responsive layout that looks good on both desktop and mobile, tell your users. For example, add a message for mobile users that the dashboard is designed for desktop.

<hr class="homepage-divider">

### For interactive visualizations

## Ensure visualizations are performant

* Optimize data sources, code, and APIs. Make sure visualizations respond to user interactions. For example, ensure a visualization updates after applying a filter.
* Show a “loading icon” instead of showing a blank chart when users need to wait for data to update.
* Don’t make users wait more than ~800 milliseconds for data to load.
