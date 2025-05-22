
  // Fade-out effect on link click
document.querySelectorAll('a').forEach(link => {
  if (link.href && link.target !== '_blank') {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location = this.href;
      }, 300); // wait for fade-out
    });
  }
});

// Fade-in effect on page load
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 50);
});
