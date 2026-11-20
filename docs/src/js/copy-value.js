// Copy buttons on the styleguide Color page: each .sg-copy button copies its
// data-copy value and reports the result in the page's .sg-copy-status live
// region, including when the clipboard isn't available.
let clearTimer;

const announce = (message) => {
  const status = document.querySelector('.sg-copy-status');
  if (!status) return;
  status.textContent = message;
  clearTimeout(clearTimer);
  clearTimer = setTimeout(() => {
    status.textContent = '';
  }, 3000);
};

document.addEventListener('click', async (event) => {
  const button = event.target.closest('.sg-copy');
  if (!button) return;
  const value = button.dataset.copy;
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('no clipboard');
    await navigator.clipboard.writeText(value);
    announce(`Copied ${value}`);
  } catch (e) {
    announce("Couldn't copy. Select the value and copy it.");
  }
});
