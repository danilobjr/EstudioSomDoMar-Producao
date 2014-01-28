var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodasAsMusicas = function () {
        return contexto.portfolio.obterTodasAsMusicas();
    };

    var excluirPorId = function (id) {
        var musicaExcluida = contexto.portfolio.excluirPorId(id);

        if (!musicaExcluida) {
            throw new Error('Música já excluída ou não encontrado');
        }

        return musicaExcluida;
    };

    //var obterPorNome = function (nome) {
    //    return contexto.artistas.obterPorNome(nome);
    //};

    //var obterPorId = function (id) {
    //    return contexto.artistas.obterPorId(id);
    //};

    //var incluir = function (novoArtista) {
    //    var artistaJahExiste = obterPorNome(novoArtista.nome);
    //    
    //    if (artistaJahExiste) {
    //        throw new Error('Artista já existe');
    //    } else {

    //        // propriedades padrão na criação de um novo artista
    //        novoArtista.imagens = {
    //            background: {
    //                cor: '#ffffff'
    //            }
    //        };
    //        
    //        return contexto.artistas.incluir(novoArtista);
    //    }
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
        //incluir: incluir,
        //alterarDadosPessoais: alterarDadosPessoais,
        //alterarMusicas: alterarMusicas,
        //alterarNomeArquivoImagemPerfil: alterarNomeArquivoImagemPerfil,
        //alterarBackground: alterarBackground,
        excluirPorId: excluirPorId
    };
} ();