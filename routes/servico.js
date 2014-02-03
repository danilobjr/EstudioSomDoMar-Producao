var servicoGerente = require('./../app/gerentes/servicoGerente');

exports.index = function (req, res) {
    var servicos = servicoGerente.obterTodos();
    res.render('servicoIndex', { viewModel: servicos });
};

exports.novo = function (req, res) {
    res.render('portfolioNovo');
};

exports.incluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    try {
        var novaMusica = {
            nome: req.body.nome,
            artista: req.body.artista,
            arquivoMusica: req.body.arquivoMusica,
            arquivoCapaAlbum: req.body.arquivoCapaAlbum[0] || req.body.arquivoCapaAlbum[1],
            secao: req.body.secao
        };

        portfolioGerente.incluir(novaMusica);

        resultado.sucesso = true;
        resultado.mensagem = 'Música incluída com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao incluir música: ' + error;
    }

    var portfolio = portfolioGerente.obterTodasAsMusicas();

    res.render('portfolioIndex', { viewModel: portfolio, resultado: resultado });
};

exports.excluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    try {
        portfolioGerente.excluirPorId(req.params.id);

        resultado.sucesso = true;
        resultado.mensagem = 'Música excluída com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao excluir música: ' + error;
    }

    var portfolio = portfolioGerente.obterTodasAsMusicas();

    res.render('portfolioIndex', { viewModel: portfolio, resultado: resultado });
};