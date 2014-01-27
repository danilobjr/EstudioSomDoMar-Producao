var paginaGerente = require('./../app/gerentes/paginaGerente'),
    videoGerente = require('./../app/gerentes/videoGerente'),
    artistaGerente = require('./../app/gerentes/artistaGerente'),
    fotoGerente = require('./../app/gerentes/fotoGerente');

exports.index = function (req, res) {
    var paginas = {
        home: paginaGerente.obterPorDescricao('Home'),
        estudio: paginaGerente.obterPorDescricao('Estúdio'),
        portfolioJingles: paginaGerente.obterPorDescricao('Portfólio - Jingles'),
        portfolioPessoal: paginaGerente.obterPorDescricao('Portfólio - Pessoal')
    };

    var videos = videoGerente.obterTodos();
    var artistas = artistaGerente.obterTodos();

    var fotos = {};
    fotos.musicos = fotoGerente.obterPorTipo('musico');
    fotos.estudio = fotoGerente.obterPorTipo('estudio');

    res.render('index', { _layoutFile: false, viewModel: {
        paginas: paginas,
        artistas: artistas,
        videos: videos,
        fotos: fotos
    }
    });
};