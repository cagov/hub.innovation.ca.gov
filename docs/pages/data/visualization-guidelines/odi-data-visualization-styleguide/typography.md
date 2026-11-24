---
title: Typography
parentid: ODI's data visualization styleguide
parentidlink: /data/visualization-guidelines/odi-data-visualization-styleguide/
description: Fonts and sizes for every piece of chart text
headerlabel: Guides and playbooks
headericon: book
---

<div class="styleguide">

ODI charts use the Noto family. Noto Serif is for titles. Noto Sans is for everything else, and Noto Sans Mono is for numbers so digits line up.

All three fonts are free from [Google Fonts](https://fonts.google.com/?query=noto). In Python, use the family names exactly as written below, for example, `fontfamily="Noto Sans"` in matplotlib or `font_family="Noto Sans"` in Plotly.

{% include "styleguide/type-table.njk" %}

- Use sentence case for every piece of chart text.
- Don’t make any text smaller than `12px`.
- Keep chart text dark gray. Don’t color labels to match their bars or lines.

Learn more in [Accessibility](/data/visualization-guidelines/follow-data-visualization-best-practices/accessibility/) and [Writing effective text](/data/visualization-guidelines/follow-data-visualization-best-practices/writing-effective-text/).

</div>
