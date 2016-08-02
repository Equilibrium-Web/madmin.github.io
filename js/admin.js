var sidebarOpen = false;

$(document).ready(function() {
  openNav();
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

function toggleNav() {
  if (sidebarOpen) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  $("#sideMenu").animate({
    left: "0px",
  }, 750, function() {
  });
  $("#topMenu").animate({
    width: $(document).width() - 250,
  }, 750, function() {
  });
  $("#main").animate({
    paddingLeft: 250 + ($(document).width() * 0.02),
  }, 750, function() {
  });
  sidebarOpen = true;
  $("#navToggle").text('Close Sidebar');
}

function closeNav() {
  $("#sideMenu").animate({
    left: "-250px",
  }, 1000, function() {
  });
  $("#topMenu").animate({
    width: "100%",
  }, 1000, function() {
  });
  $("#main").animate({
    paddingLeft: "2%",
  }, 1000, function() {
  });
  sidebarOpen = false;
  $("#navToggle").text('Open Sidebar');
}
