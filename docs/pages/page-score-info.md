---
title: Performance, accessibility, and readability
description: How the California Office of Data & Innovation measures the pages of the Innovation Hub
---

The Office of Data & Innovation focuses on creating services that:

* Perform well on all devices
* Are accessible by all Californians
* Are easy to read

We grade every page on our website by these standards. Our widget scores a page every time we change it.

We measure these 3 areas because they’re important parts of the user experience. They’re also important to equitably delivering services to Californians.

## Performance

Low performance results in a poor experience for visitors. Slower websites have:

* [Higher bounce rates](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/)
* [Lower conversion rates](https://www.cloudflare.com/en-gb/learning/performance/more/website-performance-conversion-rates/)
* [Physical stress for visitors](https://www.neuronsinc.com/cases/ericsson)

MDN Web Docs talks about [why performance matters](https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance).

### Performance is an equity issue

Websites that load fast on all devices serve all Californians.

Cheaper mobile devices have slower processors. These devices take more time to load webpages with a lot of JavaScript. A page with a lot of JavaScript is 1,000% slower on a cheap phone versus a new laptop on the same internet connection. This is an example of [performance inequality](https://infrequently.org/series/performance-inequality/).

Faster websites help everyone. Even modern devices sometimes connect to slow networks.
Page speed is a search ranking factor

Search engines like Google use page loading time to rank search results. Google has used mobile page speed as a ranking factor since 2018.

### How we calculate our scores

We use [Lighthouse](https://developer.chrome.com/en/docs/lighthouse/performance/performance-scoring/) to give us a performance score for each page. It’s an open source web performance tool from Google. We installed it through the [performance-leaderboard-pagespeed-insights npm package](https://www.npmjs.com/package/performance-leaderboard-pagespeed-insights). We run it on Amazon Web Services Lambda against our production systems. Lighthouse’s criteria evolves with the web. Each release details the changes.

### How to improve your website

Start by measuring your website’s performance. There are a few options:

* [PageSpeed Insights](https://pagespeed.web.dev/)
* Lighthouse in Chrome’s developer tools
* Running your own [performance-leaderboard](https://www.npmjs.com/package/performance-leaderboard) scripts
* A software-as-a-service tool like [Calibre](https://calibreapp.com/), [Siteimprove](https://www.siteimprove.com/), or [SpeedCurve](https://www.speedcurve.com/)

Delivering too much JavaScript is a common cause of performance problems. Forcing every user to download, understand, and run a ton of code before fully showing the page can cause long delays.

Performance analysis tools like [WebPageTest](https://www.webpagetest.org/) and Lighthouse can recommend changes to improve performance. They’ll highlight the changes that will have the most impact on site speed. Following their guidelines will get you into the top tier of state website speed rankings.

Free courses like [Lightning-Fast Web Performance](https://www.webpagetest.org/learn/lightning-fast-web-performance/) offer deep dives into performance optimization.

## Accessibility

Everyone deserves access to information and services. Your group status or individual ability shouldn’t be a barrier to government services.

Accessibility is about removing barriers. Some people rely on assistive technology or experience things like color blindness. If your web services aren’t accessible, they may not work for people with disabilities.

All state websites must meet [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/) at Level AA. This addresses many common problems that stop webpages from working with assistive technologies.

Accessible websites help everyone, not just people with disabilities. For example, increasing color contrast helps people with poor eyesight read the website. It also makes it easier for everybody to read content. Similarly, making your website work on a screen reader helps people who need it read aloud. But websites that work for screen readers also work on a wider variety of devices.

### How we calculate our scores

We use Lighthouse’s accessibility audit for our scores. It spots many categories of bugs that make sites inaccessible. Our goal is a perfect score.

We use axe in our build system to run headless puppeteer tests on our pages. It uses [@axe-core/puppeteer](https://www.npmjs.com/package/@axe-core/puppeteer) to make sure there are no violations. If it detects an issue, the build does not go to production. Lighthouse and axe cover many of the same issues.

These tools can’t tell the whole story. We also test new pages using screen readers. We also navigate them without using the mouse to find other problems.

### How to improve your website

Many state departments already do well in accessibility. Our statewide audits find many perfect scores.

The most common challenge is introducing bugs during content updates or code changes. Automated tools help you check your site’s accessibility. You can catch regressions in real time with tools like SiteImprove or CalibreApp. Tools like axe and Lighthouse can catch issues before release.

## Readability

Readability measures how easy a page is to read. We use the [Automated Readability Index](https://en.wikipedia.org/wiki/Automated_readability_index) to grade our content. It measures the letters per word and words per sentence. The result is a grade level needed to understand the content.

Our widget gives a reading level of 6th grade or lower a score of 100. We aim for 6th grade because:

* 6th grade content is usually written in plain language. It’s clear to everyone, including readers with disabilities and limited English fluency. [State law](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=6219.&lawCode=GOV) requires departments to write in plain language.
* The familiar words of this reading level let people read with less effort.
( Kids who translate English content for their family can do so more easily at this level. 44% of Californians over the age of 5 speak a language other than English at home.
* Machine translation at this reading level is more accurate

Our tool can’t measure some aspects of readability. They include font, font size, space between lines, and space between characters. We thought about these things when we designed this website.

### How we calculate our scores

We turn Automated Readability Index grade levels into 0-100 scores.

<div class="twocolumn-table">

| **Reading level** | **Score** |
| 0-6 | 100 |
| 7 | 95 |
| 8 | 90 |
| 9 | 80 |
| 10 | 70 |
| 11 | 50 |
| 12 | 40 |
| 13 | 30 |
| 14 | 20 |
| 15 | 10 |
| 16+ | 0 |

</div>

### How to improve your website

Measure the reading level of webpage content in [Hemingway Editor](https://hemingwayapp.com/). It shows you places where you can make improvements.

Our content principle [Write in plain language](/content-design/principles/write-in-plain-language/) has guides about how to write content that is easy to understand.
