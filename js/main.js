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
addAd = document.querySelector('.add__ad');	// 2.получаем основную кнопку
addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide'); // 3.убираем класс скрывающий модалку
});
modalAdd.addEventListener('click', (event) => {	
  console.log(event);
  const target = event.target; // 4. перехватываем событие клика и его параметр, кт содержит информацию об области клика
  // если параметр отвечает услувию, то модалку закрываем
  if (target.classList.contains('modal__close') || 
  target.classList.contains('form__block')) {
    modalAdd.classList.add('hide');
  }
});
// start модалка

