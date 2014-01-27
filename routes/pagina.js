var paginaGerente = require('./../app/gerentes/paginaGerente');

exports.index = function (req, res) {
    var paginas = paginaGerente.obterTodas();

    res.render('paginaIndex', { viewModel: paginas });
};