const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const hljs = require('highlight.js');

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
}).use(markdownItAnchor, { level: 2 });

// Copy icon (Material Symbols "content_copy"), shared with the styleguide
// swatches' copy buttons. docs/src/js/copy-value.js handles the click.
const COPY_ICON =
  '<svg class="sg-copy__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6t.713.288T5 7v13h10q.425 0 .713.288T16 21t-.288.713T15 22z"/></svg>';

/**
 * Encloses code in <pre> and <code> tags.
 * @param {String} codeHtml
 * Escaped or highlight.js-formatted code.
 * @returns {String} HTML
 */
const preWrap = (codeHtml) => `<pre><code class="hljs">${codeHtml}</code></pre>`;

/**
 * A code block in the ODI styleguide's code style (light blue, Noto Sans Mono,
 * wrapping lines) with a button that copies the whole block. The language is
 * kept as a data attribute, not shown.
 * @param {String} codeHtml
 * @param {String} language
 * The code block's language, if any.
 * @returns {String} HTML
 */
const codeWrap = (codeHtml, language = '') => `
  <div class="code-block"${language ? ` data-language="${language}"` : ''}>
    ${preWrap(codeHtml)}
    <button type="button" class="sg-copy code-block-copy" aria-label="Copy code">${COPY_ICON}</button>
  </div>
`;

/**
 * HTML that both displays and executes a JS code block.
 * @param {String} js
 * A Javascript code block.
 * @param {String} hljsHtml
 * An HTML string that's formatted by highlight.js.
 * @returns {String} HTML
 */
const scriptWrap = (js, hljsHtml) => `
  <script type="module">
    ${js}
  </script>
  ${codeWrap(hljsHtml, 'Javascript')}
`;

/**
 * HTML that both displays and demonstrates an HTML mark-up block.
 * @param {String} rawHtml
 * An HTML string that's NOT YET formatted by highlight.js.
 * @param {String} hljsHtml
 * The same HTML string that's formatted by highlight.js.
 * @returns {String} HTML
 */
const previewWrap = (rawHtml, hljsHtml, instructions) => `
  <cagov-code-preview data-instructions="${instructions.join(',')}">
    <div class="code-preview">
      <div class="code-preview-demo">
        ${rawHtml}
      </div>
      ${codeWrap(hljsHtml, 'HTML')}
    </div>
  </cagov-code-preview>
`;

/**
 * A default fallback for code blocks that break highlight.js.
 * This ensures the Markdown will still render.
 * @param {String} code
 * @returns {String} HTML
 */
const defaultWrap = (code) => {
  const escapedCode = md.utils.escapeHtml(code);
  return codeWrap(escapedCode);
};

// Here we override the default "fence" rule of markdown-it.
// This is where we tell our markdown engine to format code.
// https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer
md.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx];

  // info is the list of meta/labels supplied with the code block in markdown.
  const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
  const [lang, command, ...instructions] = info.split(/\s+/g);

  // This is the raw code block as supplied in the markdown.
  const rawCode = token.content;

  // If markdown supplies a language, try to highlight syntax.
  if (lang) {
    try {
      const hljsOptions = {
        language: lang,
        ignoreIllegals: true,
      };

      // Apply syntax highlighting.
      const highlightedCode = hljs.highlight(rawCode, hljsOptions).value;

      // This is a special JS preview block.
      if (command === 'script') {
        return scriptWrap(rawCode, highlightedCode);
      }

      // This is a special HTML demo block.
      if (command === 'preview') {
        return previewWrap(rawCode, highlightedCode, instructions);
      }

      // Remove the XML blurb when it's HTML. Highlight.js wrinkle.
      const languageName =
        lang.toLowerCase() === 'html' ? 'HTML' : hljs.getLanguage(lang).name;

      return codeWrap(highlightedCode, languageName);
    } catch (_) {
      return defaultWrap(rawCode);
    }
  }

  // Syntax highlighting is not possible, so just return a regular code block.
  return defaultWrap(rawCode);
};

/** Override table markup so we can apply a parent class. */
md.renderer.rules.table_open = () => '<div class="cagov-table"><table>';
md.renderer.rules.table_close = () => '</table></div>';

module.exports = md;
