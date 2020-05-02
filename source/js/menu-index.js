    var toggle = document.querySelector(".page-header__toggle");
    var DOM = [
      toggle,
      document.querySelector(".page-header__main-nav"),
      document.querySelector(".page-header"),
      document.querySelector(".app"),
      document.querySelector(".app__slogan"),
      document.querySelector(".app__slogan-text")
    ];

    DOM.forEach(element => {
      element.classList.remove("menu-open--default");
      element.classList.remove("menu-open");
    });

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      DOM.forEach(element => {
        element.classList.toggle("menu-open");
      });
    });
