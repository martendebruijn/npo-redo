const zoekToggle = document.querySelector('.zoek-link'),
  zoekForm = document.querySelector('#js-zoekForm');
zoekToggle.addEventListener('click', function (e) {
  e.preventDefault();
  if (zoekToggle.getAttribute('aria-expanded') == 'false') {
    zoekForm.classList.remove('closed');
    zoekToggle.setAttribute('aria-expanded', 'true');
  } else {
    zoekForm.classList.add('closed');
    zoekToggle.setAttribute('aria-expanded', 'false');
  }
});
