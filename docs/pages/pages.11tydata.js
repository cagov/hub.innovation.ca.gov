const TOPIC_LABELS = {
  'customer-experience': 'Customer experience',
  'content-design': 'Content design',
  data: 'Data',
  'human-centered-design': 'Human-centered design',
  'product-management': 'Product management',
};

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

module.exports = {
  layout: 'page',
  eleventyComputed: {
    permalink: (article) =>
      `${article.page.filePathStem.replace('/docs/pages', '')}/index.html`,
    // Top-level topic directory for a content page (e.g. "data"). Matches the
    // homepage topic-filter checkbox values, so it can drive a ?topic= link.
    topicslug: (data) => data.page.filePathStem.replace('/docs/pages/', '').split('/')[0],
    // Topic label shown beside the format label on content pages. Defaults to
    // the page's topic directory; a page may override via front matter.
    topiclabel: (data) => data.topiclabel || TOPIC_LABELS[data.topicslug] || '',
    // Slugified format label (e.g. "guides-and-playbooks"). Matches the
    // homepage format-filter checkbox values, so it can drive a ?type= link.
    formatslug: (data) => (data.headerlabel ? slugify(data.headerlabel) : ''),
  },
};
