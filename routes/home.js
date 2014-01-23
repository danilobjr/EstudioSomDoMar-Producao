var videoGerente = require('./../app/gerentes/videoGerente'),
    artistaGerente = require('./../app/gerentes/artistaGerente'),
    fotoGerente = require('./../app/gerentes/fotoGerente');

exports.index = function (req, res) {
    var videos = videoGerente.obterTodos();
    var artistas = artistaGerente.obterTodos();

    var fotos = {};
    fotos.musicos = fotoGerente.obterPorTipo('musico');
    fotos.estudio = fotoGerente.obterPorTipo('estudio');

    res.render('index', { _layoutFile: false, viewModel: {
                artistas: artistas,
                videos: videos,
                fotos: fotos
            }
        });
};