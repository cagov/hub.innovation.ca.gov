/* eslint import/no-unresolved: 'off' */
import HOMEPAGE2_TILES from './homepage-data.js';

const MOBILE_BREAKPOINT = '(max-width: 900px)';
const SEARCH_MIN_LENGTH = 2;
const SEARCH_DEBOUNCE_MS = 150;

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const debounce = (fn, wait) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};

function renderTiles(grid, tiles) {
  grid.innerHTML = tiles
    .map((t, i) => {
      const titleLc = t.title.toLowerCase();
      const descLc = t.description.toLowerCase();
      const keywordsLc = (t.keywords || []).join(' ').toLowerCase();
      // Featured cards get a corner ribbon (drawn in CSS) plus a label for
      // screen readers, which can't see it.
      const featuredClass = t.featured === true ? ' featured' : '';
      const featuredLabel =
        t.featured === true ? '<span class="sr-only">Featured</span>' : '';
      return (
        `<a class="tile-link" href="${escapeHtml(t.url)}" ` +
        `data-index="${i}" ` +
        `data-topic="${escapeHtml(t.topic)}" ` +
        `data-type="${escapeHtml(t.type)}" ` +
        `data-title="${escapeHtml(titleLc)}" ` +
        `data-description="${escapeHtml(descLc)}" ` +
        `data-keywords="${escapeHtml(keywordsLc)}">` +
        `<div class="content-tile${featuredClass}">${featuredLabel}` +
        `<div class="content-tile-title">${escapeHtml(t.title)}</div>` +
        `<p>${escapeHtml(t.description)}</p>` +
        `<div class="content-tile-labels">` +
        `<span class="title-card-topic-label topic-${escapeHtml(t.topic)}">${escapeHtml(t.topicLabel)}</span>` +
        `<div class="content-tile-header header-${escapeHtml(t.typeIcon)}">` +
        `<span class="title-card-format-label">${escapeHtml(t.typeLabel)}</span>` +
        `</div>` +
        `</div>` +
        `</div></a>`
      );
    })
    .join('');
}

function readStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const topics = new Set();
  const types = new Set();
  if (params.has('topic')) {
    params.get('topic').split(',').filter(Boolean).forEach((v) => topics.add(v));
  }
  if (params.has('type')) {
    params.get('type').split(',').filter(Boolean).forEach((v) => types.add(v));
  }
  return {
    topics,
    types,
    search: params.get('search') || '',
  };
}

function writeStateToURL(state) {
  const params = new URLSearchParams();
  if (state.topics.size > 0) params.set('topic', [...state.topics].join(','));
  if (state.types.size > 0) params.set('type', [...state.types].join(','));
  if (state.search) params.set('search', state.search);
  const qs = params.toString();
  const url = window.location.pathname + (qs ? `?${qs}` : '');
  window.history.replaceState(null, '', url);
}

function syncFormFromState(refs, state) {
  refs.topicInputs.forEach((el) => {
    el.checked = state.topics.has(el.value);
  });
  refs.typeInputs.forEach((el) => {
    el.checked = state.types.has(el.value);
  });
  refs.searchEl.value = state.search;
}

function readStateFromForm(refs) {
  return {
    topics: new Set(refs.topicInputs.filter((el) => el.checked).map((el) => el.value)),
    types: new Set(refs.typeInputs.filter((el) => el.checked).map((el) => el.value)),
    search: refs.searchEl.value.trim(),
  };
}

function applyFiltersAndSort(refs, state) {
  const searchQuery = state.search.length >= SEARCH_MIN_LENGTH ? state.search.toLowerCase() : '';
  const searchTokens = searchQuery.split(/\s+/).filter(Boolean);
  const tileEls = [...refs.grid.querySelectorAll('.tile-link')];
  const visible = [];

  tileEls.forEach((el) => {
    const topicMatch = state.topics.size === 0 || state.topics.has(el.dataset.topic);
    const typeMatch = state.types.size === 0 || state.types.has(el.dataset.type);
    let searchMatch = true;
    let primaryMatch = true;
    if (searchTokens.length > 0) {
      const primaryText = `${el.dataset.title} ${el.dataset.description}`;
      const fullText = `${primaryText} ${el.dataset.keywords}`;
      searchMatch = searchTokens.every((tok) => fullText.indexOf(tok) !== -1);
      primaryMatch = searchTokens.every((tok) => primaryText.indexOf(tok) !== -1);
    }
    el.dataset.searchTier = primaryMatch ? '0' : '1';
    const show = topicMatch && typeMatch && searchMatch;
    el.hidden = !show;
    if (show) visible.push(el);
  });

  // Restore the order the tiles were authored in, since a previous search may
  // have reshuffled them.
  visible.sort((a, b) => Number(a.dataset.index) - Number(b.dataset.index));
  if (searchTokens.length > 0) {
    // Stable sort: title/description matches rank above keyword-only matches,
    // keeping the authored order within each tier.
    visible.sort((a, b) => Number(a.dataset.searchTier) - Number(b.dataset.searchTier));
  }
  visible.forEach((el) => refs.grid.appendChild(el));

  if (visible.length === 0) {
    refs.noResults.hidden = false;
    refs.count.textContent = 'No resources match your filters.';
  } else {
    refs.noResults.hidden = true;
    refs.count.textContent = `Showing ${visible.length} of ${tileEls.length} resources`;
  }
}

const isMobileView = () => window.matchMedia(MOBILE_BREAKPOINT).matches;

// The markup ships everything collapsed so a mobile load doesn't flash it open
// before this runs. On mobile the panel starts closed and Topic is the section
// waiting inside it; desktop expands the lot.
function setupResponsiveAccordions(refs) {
  const isMobile = isMobileView();
  if (isMobile) {
    if (!refs.panelEl.dataset.userToggled) refs.panelEl.removeAttribute('open');
    refs.sectionEls.forEach((el) => {
      if (el.dataset.userToggled) return;
      if (el === refs.topicEl) el.setAttribute('open', '');
      else el.removeAttribute('open');
    });
  } else {
    // Desktop shows everything expanded, so a collapse made there must not
    // follow the user into the mobile layout.
    [refs.panelEl, ...refs.sectionEls].forEach((el) => {
      delete el.dataset.userToggled;
      el.setAttribute('open', '');
    });
  }
}

// On mobile there's only room for one open section, so opening one closes the
// other. Desktop shows both, hence the guard.
function setupExclusiveSections(sectionEls) {
  sectionEls.forEach((el) => {
    el.addEventListener('toggle', () => {
      if (!el.open || !isMobileView()) return;
      sectionEls.forEach((other) => {
        if (other !== el) other.removeAttribute('open');
      });
    });
  });
}

function init() {
  const grid = document.getElementById('hp2-tile-grid');
  if (!grid) return; // not on the homepage

  renderTiles(grid, HOMEPAGE2_TILES);

  const refs = {
    grid,
    count: document.getElementById('hp2-count'),
    noResults: document.getElementById('hp2-no-results'),
    searchEl: document.getElementById('hp2-search'),
    clearBtn: document.getElementById('hp2-clear-all'),
    topicInputs: [...document.querySelectorAll('input[name="hp2-topic"]')],
    typeInputs: [...document.querySelectorAll('input[name="hp2-type"]')],
  };

  let state = readStateFromURL();
  syncFormFromState(refs, state);

  const onChange = () => {
    state = readStateFromForm(refs);
    applyFiltersAndSort(refs, state);
    writeStateToURL(state);
  };

  refs.topicInputs.forEach((el) => el.addEventListener('change', onChange));
  refs.typeInputs.forEach((el) => el.addEventListener('change', onChange));
  refs.searchEl.addEventListener('input', debounce(onChange, SEARCH_DEBOUNCE_MS));

  refs.clearBtn.addEventListener('click', () => {
    state = { topics: new Set(), types: new Set(), search: '' };
    syncFormFromState(refs, state);
    applyFiltersAndSort(refs, state);
    writeStateToURL(state);
  });

  const sectionEls = [...document.querySelectorAll('details.filter-section')];
  const disclosure = {
    panelEl: document.querySelector('details.filter-tools-panel'),
    sectionEls,
    topicEl: document.querySelector('details.filter-topic'),
  };
  [disclosure.panelEl, ...sectionEls].filter(Boolean).forEach((el) => {
    // Keyed off the summary click rather than the toggle event: toggling `open`
    // from script fires toggle too, which would mark our own collapse as the
    // user's and stop it collapsing on later mobile loads.
    const summary = el.querySelector(':scope > summary');
    if (summary) {
      summary.addEventListener('click', () => {
        el.dataset.userToggled = '1';
      });
    }
  });
  setupExclusiveSections(sectionEls);
  setupResponsiveAccordions(disclosure);
  window.addEventListener(
    'resize',
    debounce(() => setupResponsiveAccordions(disclosure), 200),
  );

  applyFiltersAndSort(refs, state);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
