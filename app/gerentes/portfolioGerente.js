var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodasAsMusicas = function () {
        return contexto.portfolio.obterTodasAsMusicas();
    };

    var obterPorId = function (id) {
        return contexto.portfolio.obterPorId(id);
    };

    var obterPorSecao = function (secao) {
        return contexto.portfolio.obterPorSecao(secao);
    };

    var obterPorNomeEArtista = function (nome) {
        return contexto.portfolio.obterPorNomeEArtista(nome);
    };

    var incluir = function (novaMusica) {
        var musicaJahExiste = obterPorNomeEArtista(novaMusica.nome, novaMusica.artista);

        if (musicaJahExiste) {
            throw new Error('Música já existe');
        } else {
            return contexto.portfolio.incluir(novaMusica);
        }
    };

    var alterar = function (musicaAlterada) {
        return contexto.portfolio.alterar(musicaAlterada);
    };

    var excluirPorId = function (id) {
        var musicaExcluida = contexto.portfolio.excluirPorId(id);

        if (!musicaExcluida) {
            throw new Error('Música já excluída ou não encontrado');
        }

        return musicaExcluida;
    };

    //var alterarMusicas = function (idArtista, musicas) {
    //    return contexto.artistas.alterarMusicas(idArtista, musicas);
    //};

    //var alterarNomeArquivoImagemPerfil = function (idArtista, nomeArquivoImagemPerfil) {
    //    return contexto.artistas.alterarNomeArquivoImagemPerfil(idArtista, nomeArquivoImagemPerfil);
    //};

    //var alterarBackground = function (idArtista, corDeFundo, nomeArquivoImagemBackground) {
    //    return contexto.artistas.alterarBackground(idArtista, corDeFundo, nomeArquivoImagemBackground);
    //};


    return {
        obterTodasAsMusicas: obterTodasAsMusicas,
        obterPorSecao: obterPorSecao,
        obterPorId: obterPorId,
        incluir: incluir,
        alterar: alterar,
        //alterarMusicas: alterarMusicas,
        //alterarNomeArquivoImagemPerfil: alterarNomeArquivoImagemPerfil,
        //alterarBackground: alterarBackground,
        excluirPorId: excluirPorId
    };
} ();