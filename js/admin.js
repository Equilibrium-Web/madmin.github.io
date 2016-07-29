var sidebarOpen = false;

$(document).ready(function() {
  openNav();
});

$("body").on("swipeleft", function() {
  openNav();
});

$( window ).resize(function() {
  if (sidebarOpen) {
    $("#topMenu").css("width", $(document).width() - 250);
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
  sidebarOpen = false;
  $("#navToggle").text('Open Sidebar');
}
