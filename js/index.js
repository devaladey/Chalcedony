const toggleBtn = document.querySelector('.navbar-toggler');
const toggleMenu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', function() {
    toggleMenu.classList.toggle("active");
    toggleBtn.classList.toggle('active');
});

const faqTopDiv = document.querySelectorAll('.faq-col-inner');

faqTopDiv.forEach(el=> {
    el.addEventListener('click', function(e) {
        if(e.target.classList.contains('faq-btn')) {
            if(this.nextElementSibling.style.display === "none") {
                this.nextElementSibling.style.display = "block";
                e.target.innerHTML = "-";
            } else {
                this.nextElementSibling.style.display = "none";
                e.target.innerHTML = "+";
            }
        }
    });
})

