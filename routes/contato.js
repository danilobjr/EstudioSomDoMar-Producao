var contatoGerente = require('./../app/gerentes/contatoGerente');

exports.enviarEmail = function (req, res) {

    try {
        contatoGerente.enviarEmail('Danilo', 'Anfrísio', 'Teste', 'Corpo do Email');
        // TODO
    } catch (erro) {
        // TODO 
    }
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