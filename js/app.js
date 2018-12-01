const fundoNavBar = function() {
  if (!$('#navbarResponsive').is(':visible')) {
    $("#navbar").addClass("navbar-bg");
  } else {
    if ($(window).scrollTop() > $("#navbar").height()) {
      $("#navbar").addClass("navbar-bg");
    } else {
      $("#navbar").removeClass("navbar-bg");
    }
  }
}

const exibeBotao = function() {
  if ($(window).scrollTop() > ($("#header").height() / 2)) {
    $("#btnTopo").removeClass("d-none");
  } else {
    $("#btnTopo").addClass("d-none");
  }
}

const limparForm = function() {
  $("#contact-form").each(function() {
    this.reset();
  });
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

  $("#contact-form").submit(function(e) {
    e.preventDefault();
    var $submit = $("#contact-form-submit");
    $submit.prop('disabled', true);

    $.ajax({
      url: 'https://us-central1-apnesor-f32f1.cloudfunctions.net/sendContactForm',
      method: 'POST',
      data: $(this).serialize(),
      crossDomain: true,
      dataType: 'json'
    });

    swal("Mensagem enviada =)", "Retornaremos o contato o mais breve possível", "success");
    limparForm();
    $submit.attr('disabled', false);
  });
})

new WOW().init();
