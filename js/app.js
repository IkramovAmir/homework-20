const barBtn = document.querySelector(".header__nav__btns__btn-bar");
const headerListClose = document.querySelector(".header__nav__close");
const headerList = document.querySelector(".header__nav__list");

barBtn.addEventListener("click", function () {
  headerList.classList.toggle("header__nav__list-show");
});

headerListClose.addEventListener("click", function () {
  headerList.classList.remove("header__nav__list-show");
});
