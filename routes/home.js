var paginaGerente = require('./../app/gerentes/paginaGerente'),
    videoGerente = require('./../app/gerentes/videoGerente'),
    artistaGerente = require('./../app/gerentes/artistaGerente'),
    fotoGerente = require('./../app/gerentes/fotoGerente'),
    portfolioGerente = require('./../app/gerentes/portfolioGerente'),
    usuarioGerente = require('./../app/gerentes/usuarioGerente');

exports.index = function (req, res) {
    var usuario = usuarioGerente.obterUsuario();

    var paginas = {};
    paginas.home = paginaGerente.obterPorDescricao('Home');
    paginas.estudio = paginaGerente.obterPorDescricao('Estúdio');
    paginas.portfolioJingles = paginaGerente.obterPorDescricao('Portfólio - Jingles');
    paginas.portfolioPessoal = paginaGerente.obterPorDescricao('Portfólio - Pessoal');

    var videos = videoGerente.obterTodos();
    var artistas = artistaGerente.obterTodos();

    var fotos = {};
    fotos.musicos = fotoGerente.obterPorSecao('musico');
    fotos.estudio = fotoGerente.obterPorSecao('estudio');
    fotos.home = fotoGerente.obterPorSecao('home');

    var portfolio = {};
    portfolio.lancamentos = portfolioGerente.obterPorSecao('lancamento');
    portfolio.outros = portfolioGerente.obterPorSecao('outro');
    portfolio.jingles = portfolioGerente.obterPorSecao('jingle');
    portfolio.pessoal = portfolioGerente.obterPorSecao('pessoal');

    res.render('index', { _layoutFile: false, viewModel: {
        perfil: usuario,
        paginas: paginas,
        artistas: artistas,
        videos: videos,
        fotos: fotos,
        portfolio: portfolio
    }
    });
};