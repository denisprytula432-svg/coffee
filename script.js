// Находим нашу картинку-бургер, крестик и само меню
const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');
const mobileMenu = document.getElementById('mobile-menu');

// Клик по картинке .poloski — открывает меню
burgerOpen.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Клик по крестику — закрывает меню
burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Закрываем меню, если кликнули по любой ссылке внутри него
const menuLinks = document.querySelectorAll('.mobile-menu-links a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});