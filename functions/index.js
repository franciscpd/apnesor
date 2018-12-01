const functions = require('firebase-functions');
const sendgrid = require('@sendgrid/mail');
const cors = require('cors')({origin: true});
const hbs = require('handlebars');
const html2Text = require('html-to-text');
const path = require('path');
const fs = require('fs');

let { apikey } = functions.config().mail;

sendgrid.setApiKey(apikey);

const templatesPath = path.resolve('./resources/mail');

exports.sendContactForm = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    const file = fs.readFileSync(path.join(templatesPath, 'received.hbs'), 'utf-8');

    let hbsTemplate = hbs.compile(file)({
      nome: req.body['nome'],
      email: req.body['email'],
      telefone: req.body['telefone'],
      mensagem: req.body['mensagem']
    });

    let email = {
      from: `${req.body['nome']} <${req.body['email']}>`,
      to: 'secretaria@apnesor.ong.br',
      subject: 'Contato via site',
      text: html2Text.fromString(hbsTemplate),
      html: hbsTemplate
    };

    sendgrid.send(email);
    res.sendStatus(200);

    return true;
  });
});
