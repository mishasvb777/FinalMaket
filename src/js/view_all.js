let buttonViewAll = document.querySelector('.description__link-slider-brands');
let buttonViewAllRepair = document.querySelector('.description__link-slider-repair');

let brandsList = document.querySelector('.slider-brands__swiper');
let repairList = document.querySelector('.slider-repair');


buttonViewAll.addEventListener('click', function(){
  brandsList.classList.toggle('slider-brands__wrapper-view-all');
  buttonViewAll.classList.toggle('slider-brands__wrapper-view-all-button');
  let buttonTitle = 'Показать все' 
  if(buttonViewAll.textContent == buttonTitle){
    buttonViewAll.textContent = 'Скрыть';
  } else {
    buttonViewAll.textContent = buttonTitle;
  } 
});

buttonViewAllRepair.addEventListener('click', function(){
  repairList.classList.toggle('slider-brands__wrapper-view-repair');
  buttonViewAllRepair.classList.toggle('slider-brands__wrapper-view-all-button');
  let buttonTitle = 'Показать все' 
  if(buttonViewAllRepair.textContent == buttonTitle){
    buttonViewAllRepair.textContent = 'Скрыть';
  } else {
    buttonViewAllRepair.textContent = buttonTitle;
  } 
});