import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    preloadImages: false,
    loop: true,
    lazy: true,
    grabCursor: true
});