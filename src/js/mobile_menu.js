let openMenu = document.querySelector('.header__menu');
let closeMenu = document.querySelector('.header__back');
let mobileMenu = document.querySelector('.body__mobileMenu');

openMenu.addEventListener('click', function (){
  mobileMenu.classList.add('body__mobileMenu-open');
});

closeMenu.addEventListener('click', function (){
  mobileMenu.classList.remove('body__mobileMenu-open');
});

console.log(mobileMenu);


