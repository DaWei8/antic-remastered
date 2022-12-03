// import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';

var hamburger = document.querySelector('.hamburger');
var navigation = document.querySelector('.hide-nav');

var swiper = new Swiper(".carousel-content", {
  
  slidesPerView: 3,
  spaceBetween: 1,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".move-left i",
    prevEl: ".move-right i",
  },
});


function activate() {
    navigation.classList.toggle('show-nav');
    hamburger.classList.toggle('show-hamburger');
    
}