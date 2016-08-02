var sidebarOpen = false;

$(document).ready(function() {
  toggleNav();
  $("body").append('<script src="./js/style.js"></script>');
  $("body").append('<script src="./js/prism.js"></script>');
});

$("body").on("swipeleft", function() {
  openNav();
});

$( window ).resize(function() {
  if (sidebarOpen) {
    $("#topMenu").css("width", $(document).width() - 250);
    $("#main").css("padding-left", 250 + ($(document).width() * 0.02));
  }
});

$(".openNav").click(function() {
  toggleNav();
});

function toggleNav() {
  $("body").toggleClass("navOpen");
  $("nav").toggleClass("open");
  $(".main").toggleClass("open");
  $(this).toggleClass("open");
}
