var contexto = require('./../repository/contexto'),
    hash = require('./../infra/pass').hash;

module.exports = function () {
    var autenticar = function (nomeDeUsuario, senha, callback) {
        //if (!module.parent) console.log('Autenticando %s:%s', nomeDeUsuario, senha);

        var usuario = contexto.usuario.obterPorEmail(nomeDeUsuario);

        if (usuario) {
            var senhaCriptografada = hash(senha);

            console.log('usuario.senha');
            console.log(usuario.senha);
            console.log('senhaCriptografada');
            console.log(senhaCriptografada);

            if (senhaCriptografada == usuario.senha) {
                return callback(null, usuario);
            }

            callback(new Error('Usuário e/ou senha inválido'));
        } else {
            return callback(new Error('Usuário e/ou senha inválido'));
        }
    };

    return {
        autenticar: autenticar
    };
} ();