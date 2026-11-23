// Copy buttons: styleguide swatches (.sg-copy with data-copy) and code blocks
// (.code-block-copy, which copies its block's code). The result, including
// when the clipboard isn't available, goes to a .sg-copy-status live region,
// created on pages that don't already have one.
let clearTimer;

const statusRegion = () => {
  let status = document.querySelector('.sg-copy-status');
  if (!status) {
    status = document.createElement('p');
    status.className = 'sg-copy-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    document.body.append(status);
  }
  return status;
};

const announce = (message) => {
  const status = statusRegion();
  status.textContent = message;
  clearTimeout(clearTimer);
  clearTimer = setTimeout(() => {
    status.textContent = '';
  }, 3000);
};

document.addEventListener('click', async (event) => {
  const button = event.target.closest('.sg-copy');
  if (!button) return;
  const code = button.closest('.code-block')?.querySelector('pre code');
  const value = button.dataset.copy ?? (code ? code.textContent : '');
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('no clipboard');
    await navigator.clipboard.writeText(value);
    announce(button.dataset.copy ? `Copied ${value}` : 'Copied the code');
  } catch (e) {
    announce("Couldn't copy. Select the value and copy it.");
  }
});
