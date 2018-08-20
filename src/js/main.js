$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).ready(function () {
  var navbar = document.getElementById('navbar');
  var scroll_start = 0;
  var startchange = $('#offset');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
      } else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
      }
    });
  }
});



$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
