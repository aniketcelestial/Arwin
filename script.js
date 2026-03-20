const footerTime = document.getElementById('footerTime');
 
function updateClock() {
  const now  = new Date();
  const hh   = String(now.getHours()).padStart(2, '0');
  const mm   = String(now.getMinutes()).padStart(2, '0');
  const ss   = String(now.getSeconds()).padStart(2, '0');
  footerTime.textContent = `HTML5 · CSS3 · Vanilla JS  —  ${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);
 
 
// ── Toast helper ──────────────────────────
const toast = document.getElementById('toast');
let toastTimer = null;
 
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}
 
 
// ── Card interactions ─────────────────────
const cards      = document.querySelectorAll('.card');
const heroNumber = document.getElementById('heroNumber');
 
const cardMessages = [
  'Semantics matter!',
  'Works on every screen.',
  'Speed is a feature.',
];
 
cards.forEach((card) => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.index, 10);
 
    // Toggle active state
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
 
    // Update hero number + highlight
    heroNumber.textContent = String(idx + 1).padStart(2, '0');
    heroNumber.classList.add('highlight');
    setTimeout(() => heroNumber.classList.remove('highlight'), 600);
 
    // Show toast
    showToast(cardMessages[idx]);
  });
});
 
 
// ── CTA button ────────────────────────────
const ctaBtn = document.getElementById('ctaBtn');
 
ctaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showToast('You clicked Explore More!');
});
 
 
// ── Keyboard shortcut: press "R" to reset ─
document.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') {
    cards.forEach(c => c.classList.remove('active'));
    heroNumber.textContent = '01';
    showToast('Reset!');
  }
});
 
 
// ── Console welcome message ───────────────
console.log('%c HELLO WORLD ', 'background:#e63030;color:#f5f0e8;font-size:1.2rem;font-family:monospace;padding:4px 12px;');
console.log('%c Built with HTML5 · CSS3 · Vanilla JS', 'color:#f5c400;font-family:monospace;');
