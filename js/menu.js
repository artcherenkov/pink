var toggle=document.querySelector(".page-header__toggle"),DOM=[toggle,document.querySelector(".page-header__main-nav"),document.querySelector(".page-header"),document.querySelector(".page-main__slogan"),document.querySelector(".page-main__slogan-text")];DOM.forEach((e=>{e.classList.remove("menu-open--default"),e.classList.remove("menu-open")})),toggle.addEventListener("click",(function(e){e.preventDefault(),DOM.forEach((e=>{e.classList.toggle("menu-open")}))}));