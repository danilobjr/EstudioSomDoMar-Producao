var contexto = require('./../repository/contexto'),
    hash = require('./../infra/pass');

module.exports = function () {
    var autenticar = function (nomeDeUsuario, senha, callback) {
        if (!module.parent) console.log('Autenticando %s:%s', nomeDeUsuario, senha);

        var usuario = contexto.usuario.obterPorEmail(nomeDeUsuario);
        var salt = undefined;

        console.log(usuario);

        if (usuario) {
            hash(senha, salt, function (erro, hash) {
                if (erro) {
                    return callback(erro);
                }

                if (hash == usuario.hash) {
                    return callback(null, usuario);
                }

                callback(new Error('Usuário e/ou senha inválido'));
            });
        } else {
            return callback(new Error('Usuário e/ou senha inválido'));
        }
    };

    return {
        autenticar: autenticar
    };
} ();