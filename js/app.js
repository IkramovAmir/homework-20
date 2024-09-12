const bar = document.querySelector(".header__nav__btns-bar");
const headerBtnClose = document.querySelector(".header__btn-close");
const headerListClose = document.querySelector(".fa-x");

bar.addEventListener("click", function () {
    headerList.classList.add
    ("header__list-show");
    
})

headerListClose.addEventListener("click", function () {
    headerList.classList.remove
    ("header__list-show")
})