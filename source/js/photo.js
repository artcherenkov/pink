var ph_toggle = document.querySelector(".page-header__toggle");
var pm_slogantext = document.querySelector(".page-main__slogan-text");
var main_nav = document.querySelector(".page-header__main-nav");
var ph = document.querySelector(".page-header");
var pm_slogan = document.querySelector(".page-main__slogan");


ph_toggle.addEventListener("click", function () {
  ph_toggle.classList.toggle("page-header__toggle--close");
  main_nav.classList.toggle("page-header__main-nav--toggle-open");
  ph.classList.toggle("page-header--toggle-open");
  pm_slogantext.classList.toggle("page-main__slogan-text--toggle-open");
  pm_slogan.classList.toggle("page-main__slogan--toggle-open");
});
