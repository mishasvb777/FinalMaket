let openMenu = document.querySelector('.header__menu');
let closeMenu = document.querySelector('.header__back');
let mobileMenu = document.querySelector('.body__mobileMenu');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('.body');

openMenu.addEventListener('click', function (){
  mobileMenu.classList.add('body__mobileMenu-open');
  overlay.style.display = 'block';
  body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', function (){
  mobileMenu.classList.remove('body__mobileMenu-open');
  overlay.style.display = 'none';
  body.style.overflow = 'scroll';
});

overlay.addEventListener('click', function(){
  mobileMenu.classList.remove('body__mobileMenu-open');
  overlay.style.display = 'none';
  body.style.overflow = 'scroll';
});



