import Swiper from 'swiper';
  // import Swiper styles
import 'swiper/css';

var hamburger = document.querySelector('.hamburger');
var navigation = document.querySelector('.hide-nav')



function activate() {
    hamburger.classList.toggle('show-hamburger');
    navigation.classList.toggle('show-nav')
    
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });