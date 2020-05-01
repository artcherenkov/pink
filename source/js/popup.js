var form = document.querySelector("form");
var error = document.querySelector(".popup--error");
var success = document.querySelector(".popup--success");
var close_error = document.querySelector(".popup__button--error");
var close_success = document.querySelector(".popup__button--success");

var errorY = error.offsetTop - 40;
var successY = success.offsetTop - 40;

var fname = document.querySelector("[name=name]");
var fsurname = document.querySelector("[name=surname]");
var femail = document.querySelector("[name=email]");


var required = [fname, fsurname, femail];

required.forEach(el => 
  el.removeAttribute("required")
);

console.log(required);

var isError = false;

form.addEventListener("submit", function(e) {
  isError = false
  e.preventDefault();
  required.forEach(function(item) {
    item.classList.remove("input__text--invalid");
    if (!item.value) {
      isError = true;
      item.classList.add("input__text--invalid");
      error.classList.remove("visually-hidden");
      Scroll(errorY);
    }
  });

  if (!isError) {
    success.classList.remove("visually-hidden");
    Scroll(successY);
  }
});

close_error.addEventListener("click", function(e) {
  e.preventDefault();
  error.classList.add("visually-hidden");
});

close_success.addEventListener("click", function(e) {
  e.preventDefault();
  success.classList.add("visually-hidden");
  form.submit();
});

windowPageYOffset = 0;

function Scroll(scrollval) {
  windowPageYOffset = window.pageYOffset;
  if (windowPageYOffset == scrollval) {
    doneValue = true;
  }
  // scroll up
  else if (windowPageYOffset >= scrollval) {
    window.scrollBy(0, -(1 + ((windowPageYOffset - scrollval) / 10)));
  }
  // scroll down
  else {
    window.scrollBy(0, 1 + ((scrollval - windowPageYOffset) / 10));
  }
  if (windowPageYOffset != scrollval) {
    var setTimeoutScrollval = setTimeout('Scroll(' + scrollval + ')', 20);
  }
}
