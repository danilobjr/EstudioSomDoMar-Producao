var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodos = function () {
        return contexto.servicos.obterTodos();
    };

    //var obterPorId = function (id) {
    //    return contexto.portfolio.obterPorId(id);
    //};

    //var obterPorSecao = function (secao) {
    //    return contexto.portfolio.obterPorSecao(secao);
    //};

    //var incluir = function (novaMusica) {
    //    var musicaJahExiste = obterPorNomeEArtista(novaMusica.nome, novaMusica.artista);

    //    if (musicaJahExiste) {
    //        throw new Error('Música já existe');
    //    } else {
    //        return contexto.portfolio.incluir(novaMusica);
    //    }
    //};

    //var excluirPorId = function (id) {
    //    var musicaExcluida = contexto.portfolio.excluirPorId(id);

    //    if (!musicaExcluida) {
    //        throw new Error('Música já excluída ou não encontrado');
    //    }

    //    return musicaExcluida;
    //};

    return {
        obterTodos: obterTodos,
        //obterPorSecao: obterPorSecao,
        //obterPorId: obterPorId,
        //incluir: incluir,
        //excluirPorId: excluirPorId
    };
} ();