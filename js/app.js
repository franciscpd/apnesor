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
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("btnTopo").style.display = "block";
    } else {
        document.getElementById("btnTopo").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
new WOW().init();


