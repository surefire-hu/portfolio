document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Inizializza Swiper
var swiper = new Swiper(".progetti-slider", {
    slidesPerView: 3,  
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,  
    grabCursor: true,      
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Offcanvas
const assumimiBtn = document.querySelector('.btn-box .btn');
const offcanvas = document.getElementById('offcanvas');
const closeOffcanvas = document.getElementById('closeOffcanvas');

assumimiBtn.addEventListener('click', (e) => {
    e.preventDefault();
    offcanvas.classList.add('active');
});

closeOffcanvas.addEventListener('click', () => {
    offcanvas.classList.remove('active');
});

// Chiudi offcanvas quando si clicca fuori
document.addEventListener('click', (e) => {
    if (!offcanvas.contains(e.target) && !assumimiBtn.contains(e.target)) {
        offcanvas.classList.remove('active');
    }
});

// Menu mobile
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Chiudi menu quando si clicca su un link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});