const toggleBtn = document.querySelector('.navbar-toggler');
const toggleMenu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', function() {
    toggleMenu.classList.toggle("active");
});

