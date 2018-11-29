const fundoNavBar = function() {
  if ($(window).scrollTop() > $("#navbar").height()) {
    $("#navbar").addClass("navbar-bg");
  } else {
    $("#navbar").removeClass("navbar-bg");
  }
}

$(document).ready(function(){
  fundoNavBar();
});

$(function() {
  $(window).on("scroll", function() {
    fundoNavBar();
  });
});

new WOW().init();
