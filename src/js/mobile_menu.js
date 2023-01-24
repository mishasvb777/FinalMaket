let openMenu = document.querySelector('.header__menu');
let closeMenu = document.querySelector('.header__back');
let mobileMenu = document.querySelector('.body__mobileMenu');
let overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', function (){
  mobileMenu.classList.add('body__mobileMenu-open');
  overlay.style.display = 'block';
});

closeMenu.addEventListener('click', function (){
  mobileMenu.classList.remove('body__mobileMenu-open');
  overlay.style.display = 'none';
});

overlay.addEventListener('click', function(){
  mobileMenu.classList.remove('body__mobileMenu-open');
  overlay.style.display = 'none';
});



