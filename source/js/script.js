var ph_toggle = document.querySelector(".page-header__toggle");
var main_nav = document.querySelector(".page-header__main-nav");
var ph = document.querySelector(".page-header");
var slogan = document.querySelector(".app__slogan");

ph_toggle.addEventListener("click", function () {
  ph_toggle.classList.toggle("page-header__toggle--close");
  main_nav.classList.toggle("page-header__main-nav--toggle-open");
  ph.classList.toggle("page-header--toggle-open");
  slogan.classList.toggle("app__slogan--toggle-open");
});


$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});
