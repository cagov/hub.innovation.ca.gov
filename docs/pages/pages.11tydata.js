const TOPIC_LABELS = {
  'customer-experience': 'Customer experience',
  'content-design': 'Content design',
  data: 'Data',
  'human-centered-design': 'Human-centered design',
  'product-management': 'Product management',
};

module.exports = {
  layout: 'page',
  eleventyComputed: {
    permalink: (article) =>
      `${article.page.filePathStem.replace('/docs/pages', '')}/index.html`,
    // Topic label shown beside the format label on content pages. Defaults to
    // the page's top-level topic directory; a page may override via front matter.
    topiclabel: (data) => {
      if (data.topiclabel) return data.topiclabel;
      const stem = data.page.filePathStem.replace('/docs/pages/', '');
      const topDir = stem.split('/')[0];
      return TOPIC_LABELS[topDir] || '';
    },
  },
};
