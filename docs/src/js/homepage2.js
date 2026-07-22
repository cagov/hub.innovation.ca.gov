/* eslint import/no-unresolved: 'off' */
import HOMEPAGE2_TILES from './homepage2-data.js';

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
      return (
        `<a class="tile-link" href="${escapeHtml(t.url)}" ` +
        `data-index="${i}" ` +
        `data-topic="${escapeHtml(t.topic)}" ` +
        `data-type="${escapeHtml(t.type)}" ` +
        `data-title="${escapeHtml(titleLc)}" ` +
        `data-description="${escapeHtml(descLc)}" ` +
        `data-keywords="${escapeHtml(keywordsLc)}" ` +
        `data-topic-label="${escapeHtml(t.topicLabel)}" ` +
        `data-type-label="${escapeHtml(t.typeLabel)}">` +
        `<div class="content-tile">` +
        `<div class="content-tile-labels">` +
        `<span class="title-card-topic-label">${escapeHtml(t.topicLabel)}</span>` +
        `<div class="content-tile-header header-${escapeHtml(t.typeIcon)}">` +
        `<span class="title-card-format-label">${escapeHtml(t.typeLabel)}</span>` +
        `</div>` +
        `</div>` +
        `<div class="content-tile-title">${escapeHtml(t.title)}</div>` +
        `<p>${escapeHtml(t.description)}</p>` +
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
    sort: params.get('sort') || 'recommended',
  };
}

function writeStateToURL(state) {
  const params = new URLSearchParams();
  if (state.topics.size > 0) params.set('topic', [...state.topics].join(','));
  if (state.types.size > 0) params.set('type', [...state.types].join(','));
  if (state.search) params.set('search', state.search);
  if (state.sort && state.sort !== 'recommended') params.set('sort', state.sort);
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
  refs.sortEl.value = state.sort;
}

function readStateFromForm(refs) {
  return {
    topics: new Set(refs.topicInputs.filter((el) => el.checked).map((el) => el.value)),
    types: new Set(refs.typeInputs.filter((el) => el.checked).map((el) => el.value)),
    search: refs.searchEl.value.trim(),
    sort: refs.sortEl.value,
  };
}

function sortTiles(els, sortKey) {
  if (sortKey === 'title') {
    els.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
  } else if (sortKey === 'topic') {
    els.sort((a, b) => {
      const t = a.dataset.topicLabel.localeCompare(b.dataset.topicLabel);
      return t !== 0 ? t : a.dataset.title.localeCompare(b.dataset.title);
    });
  } else if (sortKey === 'type') {
    els.sort((a, b) => {
      const t = a.dataset.typeLabel.localeCompare(b.dataset.typeLabel);
      return t !== 0 ? t : a.dataset.title.localeCompare(b.dataset.title);
    });
  } else {
    els.sort((a, b) => Number(a.dataset.index) - Number(b.dataset.index));
  }
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

  sortTiles(visible, state.sort);
  if (searchTokens.length > 0) {
    // Stable sort: title/description matches rank above keyword-only matches,
    // preserving the selected sort order within each tier.
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

function setupResponsiveAccordions(detailsEls) {
  const isMobile = window.matchMedia(MOBILE_BREAKPOINT).matches;
  detailsEls.forEach((el) => {
    if (isMobile) {
      if (!el.dataset.userToggled) el.removeAttribute('open');
    } else {
      el.setAttribute('open', '');
    }
  });
}

function init() {
  const grid = document.getElementById('hp2-tile-grid');
  if (!grid) return; // not on the homepage2 page

  renderTiles(grid, HOMEPAGE2_TILES);

  const refs = {
    grid,
    count: document.getElementById('hp2-count'),
    noResults: document.getElementById('hp2-no-results'),
    searchEl: document.getElementById('hp2-search'),
    sortEl: document.getElementById('hp2-sort'),
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
  refs.sortEl.addEventListener('change', onChange);

  refs.clearBtn.addEventListener('click', () => {
    state = { topics: new Set(), types: new Set(), search: '', sort: 'recommended' };
    syncFormFromState(refs, state);
    applyFiltersAndSort(refs, state);
    writeStateToURL(state);
  });

  const detailsEls = [...document.querySelectorAll('details.filter-section')];
  detailsEls.forEach((el) => {
    el.addEventListener('toggle', () => {
      el.dataset.userToggled = '1';
    });
  });
  setupResponsiveAccordions(detailsEls);
  window.addEventListener(
    'resize',
    debounce(() => setupResponsiveAccordions(detailsEls), 200),
  );

  applyFiltersAndSort(refs, state);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
