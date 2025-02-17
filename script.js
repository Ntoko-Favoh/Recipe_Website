// Menu toggle functionality
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const rotatingImage = document.querySelector('.rotating-image');
const swiper = document.querySelector('.swiper');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Initialize Swiper
const swiperInstance = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Menu toggle function
menuBtn.onclick = function() {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // If slider is active, close it when opening menu
    if (swiper.classList.contains('active')) {
        closeSlider();
    }
};

// Show swiper function
function openSlider() {
    swiper.classList.add('active');
    overlay.classList.add('active');
    
    // Close menu if it's open
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuBtn.classList.remove('active');
    }
}

// Hide swiper function
function closeSlider() {
    swiper.classList.remove('active');
    overlay.classList.remove('active');
}

// Event listeners
rotatingImage.addEventListener('click', openSlider);
overlay.addEventListener('click', closeSlider);

// Close menu and slider when clicking outside
document.addEventListener('click', (e) => {
    // Close menu if clicking outside menu and menu button
    if (!nav.contains(e.target) && 
        !menuBtn.contains(e.target) && 
        nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (swiper.classList.contains('active')) {
            closeSlider();
        }
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    }
});