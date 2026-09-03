// Page directories whose topic is named differently from the directory. The
// /content-design/ pages keep their URLs, but the topic is called "Writing"
// everywhere it is shown or filtered on.
const TOPIC_SLUGS_BY_DIR = {
  'content-design': 'writing',
};

const TOPIC_LABELS = {
  'customer-experience': 'Customer experience',
  data: 'Data',
  'human-centered-design': 'Human-centered design',
  'product-management': 'Product management',
  writing: 'Writing',
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
    // Topic for a content page, from its top-level directory (e.g. "data").
    // Matches the homepage topic-filter checkbox values, so it can drive a
    // ?topic= link.
    topicslug: (data) => {
      const dir = data.page.filePathStem.replace('/docs/pages/', '').split('/')[0];
      return TOPIC_SLUGS_BY_DIR[dir] || dir;
    },
    // Topic label shown beside the format label on content pages. Defaults to
    // the page's topic directory; a page may override via front matter.
    topiclabel: (data) => data.topiclabel || TOPIC_LABELS[data.topicslug] || '',
    // Slugified format label (e.g. "guides-and-playbooks"). Matches the
    // homepage format-filter checkbox values, so it can drive a ?type= link.
    formatslug: (data) => (data.headerlabel ? slugify(data.headerlabel) : ''),
  },
};
