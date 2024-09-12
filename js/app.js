const bar = document.querySelector(".header__nav__btns-bar");
const headerBtnClose = document.querySelector(".header__nav__btn-close");
const headerListClose = document.querySelector(".header__list-close");

bar.addEventListener("click", function () {
    headerList.classList.toggle
    ("header__list-show");
    
})

headerListClose.addEventListener("click", function () {
    headerList.classList.remove
    ("header__list-show")
})