'use strict';
let navbarScroll = document.getElementById('navbarScroll').classList;
let acrive_class = "bottom-menu-scroll--scrolled";

let logo = document.getElementById('logo').classList;
let logo_nohide = "logo--nohide";

function getSize() {
  let w = window.innerWidth;
  return w > 991
};

function getClassScroll() {
  window.addEventListener('scroll', e => {
    if (pageYOffset > 250) {
      navbarScroll.add(acrive_class);
      logo.add(logo_nohide);
    } else {
      navbarScroll.remove(acrive_class);
      logo.remove(logo_nohide);
    }

  })
};



if (getSize()) {
  getClassScroll();
}

// start проверка формы
function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    var range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
  }
}
function mask(e) {
  //console.log('mask',e);
  var matrix = this.placeholder,// .defaultValue
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function(a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function() {
  var input = document.querySelector("#online_phone");
  input.addEventListener("input", mask, false);
  input.focus();
  setCursorPosition(3, input);
});
// start проверка формы

// start модалка

const modalAdd = document.querySelector('.modal__add'), // 1.получаем модальное окно
      addAd = document.querySelector('.add__ad'), // 2.получаем основную кнопку
      modalBtnSubmit = document.querySelector('.modal__btn-submit'),	// 5.1 получаем кнопку формы
      formBlockWrapForm = document.querySelector('.form__block_wrap_form'), // 6.1 получаем форму, что ее очистить после закрытия
      markAttention = document.querySelector('.mark-attention');

addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide'); // 3.убираем класс скрывающий модалку
  modalBtnSubmit.disabled = true; // 5.2 отключаем кнопку формы

});

modalAdd.addEventListener('click', (event) => {	
  //console.log(event);
  const target = event.target; // 4.1 перехватываем событие клика и его параметр, кт содержит информацию об области клика
  
  if (target.classList.contains('modal__close') || 
  target.classList.contains('form__block')) {
    modalAdd.classList.add('hide'); // 4.2 если параметр отвечает услувию, то модалку закрываем
    formBlockWrapForm.reset(); // 6.2 очищаем форму при закрытии модалки
  }
});

//const elementsModalSubmit = formBlockWrapForm.elements; // 7.1  получаем все элементы формы
//console.log([...elementsModalSubmit].filter((elem) => {
  //return elem.tagName !== 'BUTTON' && elem.type !== 'submit' && elem.type !== 'reset'; // 7.3 отфильтровываем ненужные
//})); // 7.2 получаем все элементы формы в виде массива

// 7 тоже самое но короче
const elementsModalSubmit = [...formBlockWrapForm.elements] // 7.1  получаем все элементы формы
.filter(elem => elem.tagName !== 'BUTTON' && elem.type !== 'submit' && elem.type !== 'reset' && elem.tagName !== 'TEXTAREA'); // 7.3 отфильтровываем ненужные
console.log(elementsModalSubmit); // проверяем отфильтрованные

formBlockWrapForm.addEventListener ('input', () => { // 7.4 проверяем заполняем ли поля формы
  //console.log(1);
  const validForm = elementsModalSubmit.every(elem => elem.value); // 7.5 проверяем заполненны ли все поля
  console.log(validForm);
  modalBtnSubmit.disabled = !validForm; // 7.6 разблокируем кнопку
  markAttention.style.display = validForm ? 'none' : '' ; // 7.7 отключаем надпись если поля заполненны
})

// start модалка

