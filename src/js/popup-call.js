let btnOpenCall = document.querySelectorAll('.contacts__call');
let btnOrderCall = document.querySelectorAll('.contacts__chat');
let btnCloseCall = document.querySelectorAll('.header__back--request');
let overlay = document.querySelector('.overlay');
let mobileMenu = document.querySelector('.body__mobileMenu');
let popupCall = document.querySelector('.body__mobileMenu--request'); 
let orderCall = document.querySelector('.order-call');
let body = document.querySelector('.body');


for (let i = 0; i < btnOrderCall.length; i++){
  btnOrderCall[i].addEventListener('click', function (){
    popupCall.classList.toggle('open-popup');
    mobileMenu.classList.remove('body__mobileMenu-open');
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
  })  
}

for (let i = 0; i < btnOpenCall.length; i++){
  btnOpenCall[i].addEventListener('click', function (){
    orderCall.classList.toggle('open-popup');  
    mobileMenu.classList.remove('body__mobileMenu-open');  
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
  })  
}

for (let i = 0; i < btnCloseCall.length; i++){
  btnCloseCall[i].addEventListener('click', function(){
    popupCall.classList.remove('open-popup');
    orderCall.classList.remove('open-popup');
    overlay.style.display = 'none';
    body.style.overflow = 'scroll';
  })
}

overlay.addEventListener('click', function(){
  popupCall.classList.remove('open-popup');
  orderCall.classList.remove('open-popup');
  overlay.style.display = 'none';
  body.style.overflow = 'scroll';
})

