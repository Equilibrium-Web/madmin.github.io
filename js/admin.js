var sidebarOpen = false;

$(document).ready(function() {
  openNav();
});

$("body").on("swipeleft", function() {
  openNav();
});

function toggleNav() {
  if (sidebarOpen) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  $("#sideBar").animate({
    left: "0px",
  }, 750, function() {
  });
  sidebarOpen = true;
}

function closeNav() {
  $("#sideBar").animate({
    left: "-250px",
  }, 750, function() {
  });
  sidebarOpen = false;
}
