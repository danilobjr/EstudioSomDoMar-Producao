var paginaGerente = require('./../app/gerentes/paginaGerente');

exports.index = function (req, res) {
    var paginas = paginaGerente.obterTodas();

    res.render('paginaIndex', { viewModel: paginas });
};

exports.editar = function (req, res) {
    var idPagina = req.params.id;
    var pagina = paginaGerente.obterPorId(idPagina);

    res.render('paginaAlteracao', { viewModel: pagina });
};

//exports.alterar = function (req, res) {
//    var resultado = { sucesso: false, mensagem: '' };
//    var idPagina = req.body.idPagina;

//    try {
//        var paginaAlterada = {
//            id: idPagina,
//            titulo: req.body.titulo,
//            subtitulo: req.body.subtitulo,
//            texto: {
//                paragrafos: {}
//            }
//        };

//        fotoGerente.incluir(novaFoto);
//        resultado.sucesso = true;
//        resultado.mensagem = 'Foto incluída com sucesso';
//    } catch (error) {
//        resultado.mensagem = 'Erro ao incluir foto: ' + error;
//    }

//    var fotos = {};
//    fotos.estudio = fotoGerente.obterPorTipo('estudio');
//    fotos.musicos = fotoGerente.obterPorTipo('musico');

//    res.render('fotoIndex', { viewModel: fotos, resultado: resultado });
//};