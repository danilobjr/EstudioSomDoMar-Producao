var emailjs = require("emailjs/email");

var server  = emailjs.server.connect({
   user:    "danilo.emailteste", 
   password:"daniloemailteste123456", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

// send the message and get a callback with an error or details of the message that was sent
exports.enviar = function (de, para, assunto, mensagem, callback) {
    var email = {
        from: de,
        to: para,
        subject: assunto,
        text: mensagem
    }

    server.send(email, function (erro, result) {
        if (erro) {
            callback(erro);
        } else {
            callback(undefined, result);
        }
    });
};