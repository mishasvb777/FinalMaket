let openMenu = document.querySelector('.header__menu');
let closeMenu = document.querySelector('.header__back');
let mobileMenu = document.querySelector('.body__mobileMenu');
let overlay = document.querySelector('.overlay');
let container = document.querySelector('.container');



openMenu.addEventListener('click', function (){
  mobileMenu.classList.add('body__mobileMenu-open');  
  overlay.style.display = 'block';
  container.style.display = 'none';
});

closeMenu.addEventListener('click', function (){
  mobileMenu.classList.remove('body__mobileMenu-open');
  overlay.style.display = 'none';
  container.style.display = 'block';
});

overlay.addEventListener('click', function(){
  mobileMenu.classList.remove('body__mobileMenu-open');
  overlay.style.display = 'none';
  container.style.display = 'block';
});



