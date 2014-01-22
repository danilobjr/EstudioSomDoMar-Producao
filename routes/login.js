var loginGerente = require('./../app/gerentes/loginGerente');

exports.index = function (req, res) {
    //var videos = videoGerente.obterTodos();
    res.render('loginIndex', { _layoutFile: false });
};

exports.logar = function (req, res) {
    loginGerente.autenticar('anfrisiorocha@hotmail.com', req.body.senha, function (erro, usuario) { 
        if (usuario) {
            req.session.regenerate(function () {
                req.session.usuario = usuario;
                req.session.success = 'Autenticado como ' + usuario.nome;
                res.redirect('/admin');
            });
        } else {
            req.session.error = 'Autenticação falhou, por favor cheque seu nome de usuário e senha.';
            res.redirect('/login');
        }
    });
};