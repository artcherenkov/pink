var ph_toggle = document.querySelector(".page-header__toggle");
var main_nav = document.querySelector(".page-header__main-nav");
var ph = document.querySelector(".page-header");
var slogan = document.querySelector(".app__slogan");
var slogan_text = document.querySelector(".app__slogan-text");

ph_toggle.addEventListener("click", function () {
  ph_toggle.classList.toggle("page-header__toggle--close");
  main_nav.classList.toggle("page-header__main-nav--toggle-open");
  ph.classList.toggle("page-header--toggle-open");
  slogan.classList.toggle("app__slogan--toggle-open");
  slogan_text.classList.toggle("app__slogan-text--toggle-open");
});
