var usuarioGerente = require('./usuarioGerente'),
    email = require('./../infra/email');

module.exports = function () {
    var enviarEmail = function (nomeRemetente, emailRemetente, mensagem) {
        var usuario = { email: 'danilobjr@gmail.com' }; //usuarioGerente.obterUsuario();
        var assuntoMensagem = '[Estúdio Som do Mar - CONTATO]';

        console.log('de: %s; para: %s; assunto: %s; mensagem: %s', nomeRemetente, usuario.email, assuntoMensagem, mensagem);

        var callback = function (erro, resultado) {
            if (erro) {
                throw new Error(erro);
                console.log('erro');
                console.log(erro);
            } else {
                console.log('resultado');
                console.log(resultado);
                return true;
            }
        };


        email.enviar(nomeRemetente, usuario.email, assuntoMensagem, mensagem, callback);
    };

    return {
        enviarEmail: enviarEmail
    };
} ();