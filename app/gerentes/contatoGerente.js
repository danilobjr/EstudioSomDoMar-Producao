var email = require('./../infra/email');

module.exports = function () {
    var enviarEmail = function (de, para, assunto, mensagem) {
        console.log('de: %s; para: %s; assunto: %s; mensagem: %s', de, para, assunto, mensagem);

        var callback = function (erro, resultado) {
            if (erro) {
                // TODO throw new Error()
            } else {
                // TODO return true
            }
        };

        email.enviar(de, para, assunto, mensagem, callback);
    };

    return {
        enviarEmail: enviarEmail
    };
} ();