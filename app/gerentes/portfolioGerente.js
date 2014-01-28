var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodasAsMusicas = function () {
        return contexto.portfolio.obterTodasAsMusicas();
    };

    var obterPorNome = function (nome) {
        return contexto.portfolio.obterPorNome(nome);
    };

    var incluir = function (novaMusica) {
        var musicaJahExiste = obterPorNomeEArtista(novaMusica.nome, novaMusica.artista);

        if (musicaJahExiste) {
            throw new Error('Música já existe');
        } else {
            return contexto.portfolio.incluir(novaMusica);
        }
    };

    var excluirPorId = function (id) {
        var musicaExcluida = contexto.portfolio.excluirPorId(id);

        if (!musicaExcluida) {
            throw new Error('Música já excluída ou não encontrado');
        }

        return musicaExcluida;
    };

    //var obterPorId = function (id) {
    //    return contexto.artistas.obterPorId(id);
    //};

    //var alterarDadosPessoais = function (artistaAlterado) {
    //    return contexto.artistas.alterarDadosPessoais(artistaAlterado);
    //};

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
        //obterPorId: obterPorId,
        incluir: incluir,
        //alterarDadosPessoais: alterarDadosPessoais,
        //alterarMusicas: alterarMusicas,
        //alterarNomeArquivoImagemPerfil: alterarNomeArquivoImagemPerfil,
        //alterarBackground: alterarBackground,
        excluirPorId: excluirPorId
    };
} ();