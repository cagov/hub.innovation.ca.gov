// Highlights the heading in the group sidebar (group-navigation.njk) for the
// section currently being read: the last h2 scrolled to within a few lines of the
// top of the viewport, or the first h2 if none has been passed yet.
const headingLinks = [
  ...document.querySelectorAll('.group-nav-headings a[href^="#"]'),
];
const sections = headingLinks
  .map((link) => ({
    link,
    target: document.getElementById(link.getAttribute('href').slice(1)),
  }))
  .filter(({ target }) => target);

const updateCurrent = () => {
  // Close enough to the top that a heading jumped to from the sidebar counts,
  // but the heading after it (in all but very short sections) does not.
  const line = 100;
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;

  let current = sections[0];
  if (atBottom) {
    current = sections[sections.length - 1];
  } else {
    sections.forEach((section) => {
      if (section.target.getBoundingClientRect().top <= line) {
        current = section;
      }
    });
  }

  sections.forEach(({ link }) => {
    link.classList.toggle('group-nav-link-current', link === current.link);
  });
};

if (sections.length) {
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(() => {
        updateCurrent();
        ticking = false;
      });
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateCurrent();
}
