var fotoGerente = require('./../app/gerentes/fotoGerente');

exports.index = function (req, res) {
    var fotos = {};
    fotos.estudio = fotoGerente.obterPorSecao('estudio');
    fotos.musicos = fotoGerente.obterPorSecao('musico');
    fotos.home = fotoGerente.obterPorSecao('home');

    res.render('fotoIndex', { viewModel: fotos });
};

exports.nova = function (req, res) {
    res.render('fotoNova');
};

exports.incluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    try {
        var novaFoto = {
            titulo: req.body.titulo,
            secao: req.body.secao,
            imagemPequena: req.body.imagemPequena,
            imagemAmpliada: req.body.imagemAmpliada
        };

        fotoGerente.incluir(novaFoto);
        resultado.sucesso = true;
        resultado.mensagem = 'Foto incluída com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao incluir foto: ' + error;
    }

    var fotos = {};
    fotos.estudio = fotoGerente.obterPorSecao('estudio');
    fotos.musicos = fotoGerente.obterPorSecao('musico');
    fotos.home = fotoGerente.obterPorSecao('home');

    res.render('fotoIndex', { viewModel: fotos, resultado: resultado });
};

exports.excluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    try {
        fotoGerente.excluirPorId(req.params.id);

        resultado.sucesso = true;
        resultado.mensagem = 'Foto excluída com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao excluir foto: ' + error;
    }

    var fotos = {};
    fotos.estudio = fotoGerente.obterPorSecao('estudio');
    fotos.musicos = fotoGerente.obterPorSecao('musico');
    fotos.home = fotoGerente.obterPorSecao('home');

    res.render('fotoIndex', { viewModel: fotos, resultado: resultado });
};