const fundoNavBar = function() {
  if ($(window).scrollTop() > $("#navbar").height()) {
    $("#navbar").addClass("navbar-bg");
  } else {
    $("#navbar").removeClass("navbar-bg");
  }
}

const exibeBotao = function() {
  if ($(window).scrollTop() > ($("#header").height() / 2)) {
    $("#btnTopo").removeClass("d-none");
  } else {
    $("#btnTopo").addClass("d-none");
  }
}

$(document).ready(function(){
  fundoNavBar();
  exibeBotao();
});

$(function() {
  $(window).on("scroll", function() {
    fundoNavBar();
    exibeBotao();
  });
})

new WOW().init();
