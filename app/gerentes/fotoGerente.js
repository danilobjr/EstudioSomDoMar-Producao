var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodasAsFotos = function () {
        return contexto.fotos.obterTodas();
    };

    var obterFotosPorSecao = function (secao) {
        return contexto.fotos.obterPorSecao(secao);
    };

    var obterPorTitulo = function (titulo) {
        return contexto.fotos.obterPorTitulo(titulo);
    };

    var incluir = function (novaFoto) {
        var fotoJahExiste = obterPorTitulo(novaFoto.titulo);

        if (fotoJahExiste) {
            throw new Error('Foto já existe');
        } else {
            return contexto.fotos.incluir(novaFoto);
        }
    };

    var excluirPorId = function (id) {
        var fotoExcluida = contexto.fotos.excluirPorId(id);

        if (!fotoExcluida) {
            throw new Error('Foto já excluída ou não encontrada');
        }

        return fotoExcluida;
    };

    return {
        obterTodas: obterTodasAsFotos,
        obterPorSecao: obterFotosPorSecao,
        excluirPorId: excluirPorId,
        incluir: incluir
    };
} ();