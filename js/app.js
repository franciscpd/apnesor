$(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > $("#navbar").height()) {
      $("#navbar").addClass("navbar-bg");
    } else {
      $("#navbar").removeClass("navbar-bg");
    }
  });
});
