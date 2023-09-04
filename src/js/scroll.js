const scrollUpButton = document.getElementById('scrollUpButton');
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 500) {
      scrollUpButton.style.display = 'block';
    } else {
      scrollUpButton.style.display = 'none';
    }
  });

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});