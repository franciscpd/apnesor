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

const limparForm = function() {
  $("contact-form").each(function() {
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
    $("#contact-form-submit").prop('disabled', true);
    e.preventDefault();

    var email = {
      nome: this.nome.value,
      _replyto: this.email.value,
      email: this.email.value,
      telefone: this.telefone.value,
      mensagem: this.mensagem.value,
      _subject: 'Formulário de contato site'
    }

    $.ajax({
      url: 'https://formspree.io/secretaria@apnesor.ong.br',
      method: 'POST',
      data: email,
      dataType: 'json',
      success: function() {
        swal("Mensagem enviada =)", "Retornaremos o contato o mais breve possível", "success");
        limparForm();
      }
    });
  });
})

new WOW().init();
