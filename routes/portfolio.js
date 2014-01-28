var portfolioGerente = require('./../app/gerentes/portfolioGerente');
    //util = require('util');

exports.index = function (req, res) {
    var portfolio = portfolioGerente.obterTodasAsMusicas();
    res.render('portfolioIndex', { viewModel: portfolio });
};

exports.novo = function (req, res) {
    res.render('portfolioNovo');
};

exports.incluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };
    
    try {
        var novaMusica = {
            nome: req.body.nome,
            artista: req.body.artista,
            arquivoMusica: req.body.arquivoMusica,
            arquivoCapaAlbum: req.body.arquivoCapaAlbum,
            secao: req.body.secao
        };

        portfolioGerente.incluir(novaMusica);
        
        resultado.sucesso = true;
        resultado.mensagem = 'Música incluída com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao incluir música: ' + error;
    }

    var portfolio = portfolioGerente.obterTodasAsMusicas();

    res.render('portfolioIndex', { viewModel: portfolio, resultado: resultado });
};

exports.excluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    try {
        portfolioGerente.excluirPorId(req.params.id);

        resultado.sucesso = true;
        resultado.mensagem = 'Música excluída com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao excluir música: ' + error;
    }

    var portfolio = portfolioGerente.obterTodasAsMusicas();

    res.render('portfolioIndex', { viewModel: portfolio, resultado: resultado });
};

//exports.exibir = function (req, res) {
//    var idArtista = req.params.id;
//    var artista = artistaGerente.obterPorId(idArtista);

//    res.render('artista', { _layoutFile: false, viewModel: artista});
//};

//exports.editar = function (req, res) {
//    var idArtista = req.params.id;
//    var artista = artistaGerente.obterPorId(idArtista);

//    res.render('artistaAlteracao', { viewModel: artista });
//};

//exports.alterarDadosPessoais = function (req, res) {
//    var idArtista = req.body.idArtista;
//    var artistaAlterado = {};
//    var resultado = { sucesso: false, mensagem: '' };
//    
//    try {
//        artistaAlterado = {
//            id: idArtista,
//            nome: req.body.nome,
//            site: req.body.site,
//            email: req.body.email,
//            telefones: [],
//            redesSociais: []
//        };
//        
//        if (util.isArray(req.body.telefone)) {
//            var telefones = req.body.telefone;
//            var tiposTelefone = req.body.tipoTelefone;
//            for (var i = 0; i < telefones.length; i++) {
//                artistaAlterado.telefones.push({
//                    numero: telefones[i],
//                    tipo: tiposTelefone[i]
//                });
//            }
//        } else {
//            artistaAlterado.telefones.push({
//                numero: req.body.telefone,
//                tipo: req.body.tipoTelefone
//            });
//        }

//        if (util.isArray(req.body.redeSocial)) {
//            var redesSociais = req.body.redeSocial;
//            var tiposRedeSocial = req.body.tipoRedeSocial;
//            for (var i = 0; i < redesSociais.length; i++) {
//                if (redesSociais[i]) {
//                    artistaAlterado.redesSociais.push({
//                        link: redesSociais[i],
//                        tipo: tiposRedeSocial[i]
//                    });
//                }
//            }
//        } else {
//            artistaAlterado.redesSociais.push({
//                link: req.body.redeSocial,
//                tipo: req.body.tipoRedeSocial
//            });
//        }
//        
//        artistaAlterado = artistaGerente.alterarDadosPessoais(artistaAlterado);

//        resultado.sucesso = true;
//        resultado.mensagem = 'Artista incluído com sucesso';
//    } catch (error) {
//        artistaAlterado = artistaGerente.obterPorId(idArtista);
//        resultado.mensagem = 'Erro ao incluir artista: ' + error;
//    }

//    res.render('artistaAlteracao', { viewModel: artistaAlterado, resultado: resultado });
//};

//exports.alterarMusicas = function (req, res) {
//    var idArtista = req.body.idArtista,
//        musicas = [],
//        resultado = { sucesso: false, mensagem: '' };

//    try {
//        if (util.isArray(req.body.nomeMusica)) {
//            var nomesDasMusicas = req.body.nomeMusica;
//            var arquivosMusicas = req.body.nomeArquivoMusica;
//            var arquivosImagensCD = req.body.nomeArquivoCapaAlbum;

//            for (var i = 0; i < nomesDasMusicas.length; i++) {
//                musicas.push({
//                    nome: nomesDasMusicas[i],
//                    arquivoMusica: arquivosMusicas[i],
//                    arquivoCapaAlbum: arquivosImagensCD[i]
//                });
//            }
//        } else {
//            musicas.push({
//                nome: req.body.nomeMusica,
//                arquivoMusica: req.body.nomeArquivoMusica,
//                arquivoCapaAlbum: req.body.nomeArquivoCapaAlbum
//            });
//        }

//        artistaGerente.alterarMusicas(idArtista, musicas);
//        resultado.sucesso = true;
//        resultado.mensagem = 'Músicas incluídas/alteradas com sucesso';
//    } catch (error) {
//        resultado.mensagem = 'Erro ao incluir/alterar músicas: ' + error;
//    }

//    var artistaAlterado = artistaGerente.obterPorId(idArtista);
//    res.render('artistaAlteracao', { viewModel: artistaAlterado, resultado: resultado });
//};

//exports.alterarImagemPerfil = function (req, res) {
//    var idArtista = req.body.idArtista,
//        nomeArquivoImagemPerfil = req.body.imagemPerfil,
//        resultado = { sucesso: false, mensagem: '' };

//    try {
//        artistaGerente.alterarNomeArquivoImagemPerfil(idArtista, nomeArquivoImagemPerfil);

//        resultado.sucesso = true;
//        resultado.mensagem = 'Imagem de perfil alterada com sucesso';
//    } catch (error) {
//        resultado.mensagem = 'Erro ao alterar imagem de perfil: ' + error;
//    }

//    var artistaAlterado = artistaGerente.obterPorId(idArtista);

//    res.render('artistaAlteracao', { viewModel: artistaAlterado, resultado: resultado });
//};

//exports.alterarBackground = function (req, res) {
//    var idArtista = req.body.idArtista,
//        corDeFundo = req.body.corFundo,
//        nomeArquivoImagemBackground = req.body.imagemBackground,
//        resultado = { sucesso: false, mensagem: '' };

//    try {
//        artistaGerente.alterarBackground(idArtista, corDeFundo, nomeArquivoImagemBackground);

//        resultado.sucesso = true;
//        resultado.mensagem = 'Background alterado com sucesso';
//    } catch (error) {
//        resultado.mensagem = 'Erro ao alterar background: ' + error;
//    }

//    var artistaAlterado = artistaGerente.obterPorId(idArtista);
//    res.render('artistaAlteracao', { viewModel: artistaAlterado, resultado: resultado });
//};

