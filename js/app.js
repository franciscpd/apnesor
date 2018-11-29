$(document).ready(function(){
  fundoNavBar();
});

$(function() {
  const fundoNavBar = function() {
    if ($(window).scrollTop() > $("#navbar").height()) {
      $("#navbar").addClass("navbar-bg");
    } else {
      $("#navbar").removeClass("navbar-bg");
    }
  }

  $(window).on("scroll", function() {
    fundoNavBar();
  });
});

new WOW().init();
