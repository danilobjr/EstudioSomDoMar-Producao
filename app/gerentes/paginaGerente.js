var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodasAsPaginas = function () {
        return contexto.paginas.obterTodas();
    };

    var obterPaginaPorId = function (id) {
        return contexto.paginas.obterPorId(id);
    };

    //var obterPorTitulo = function (titulo) {
    //    return contexto.fotos.obterPorTitulo(titulo);
    //};

    //var incluir = function (novaFoto) {
    //    var fotoJahExiste = obterPorTitulo(novaFoto.titulo);
    //    
    //    if (fotoJahExiste) {
    //        throw new Error('Foto já existe');
    //    } else {
    //        return contexto.fotos.incluir(novaFoto);
    //    }
    //};

    //var excluirPorId = function (id) {
    //    var fotoExcluida = contexto.fotos.excluirPorId(id);

    //    if (!fotoExcluida) {
    //        throw new Error('Foto já excluída ou não encontrada');
    //    }

    //    return fotoExcluida;
    //};

    return {
        obterTodas: obterTodasAsPaginas,
        obterPorId: obterPaginaPorId
        //excluirPorId: excluirPorId,
        //incluir: incluir
    };
} ();