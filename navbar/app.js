const toggleBtn = document.querySelector('.toggle-btn');
const navbarAllLinks = document.querySelector('.navbar-all-links');

toggleBtn.addEventListener('click', function () {
  navbarAllLinks.classList.toggle('show-navbar-all-links');
});
