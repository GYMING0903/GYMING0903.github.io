const now = new Date();
document.querySelector('#current-year').textContent = now.getFullYear();
document.querySelector('#updated-date').textContent = now.toLocaleDateString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric'
});
