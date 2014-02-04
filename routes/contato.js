var contatoGerente = require('./../app/gerentes/contatoGerente');

exports.enviarEmail = function (req, res) {

    console.log('in');
    var resultado = { sucesso: false, mensagem: '' };

    try {
        contatoGerente.enviarEmail(req.body.nome, req.body.email, req.body.mensagem);
        resultado.sucesso = true;
        resultado.mensagem = 'Email enviado com sucesso';
    } catch (erro) {
        console.error(erro);
        resultado.mensagem = 'Erro ao enviar email: ' + erro;
    }

    res.send(resultado);
    //var resultado = { sucesso: false, mensagem: '' };

    //try {
    //    var novaFoto = {
    //        titulo: req.body.titulo,
    //        secao: req.body.secao,
    //        imagemPequena: req.body.imagemPequena,
    //        imagemAmpliada: req.body.imagemAmpliada
    //    };

    //    fotoGerente.incluir(novaFoto);
    //    resultado.sucesso = true;
    //    resultado.mensagem = 'Foto incluída com sucesso';
    //} catch (error) {
    //    resultado.mensagem = 'Erro ao incluir foto: ' + error;
    //}

    //var fotos = {};
    //fotos.estudio = fotoGerente.obterPorSecao('estudio');
    //fotos.musicos = fotoGerente.obterPorSecao('musico');
    //fotos.home = fotoGerente.obterPorSecao('home');

    //res.render('fotoIndex', { viewModel: fotos, resultado: resultado });
};