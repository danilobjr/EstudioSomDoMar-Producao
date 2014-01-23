var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodasAsFotos = function () {
        return contexto.fotos.obterTodas();
    };

    var obterFotosPorTipo = function (tipo) {
        return contexto.fotos.obterPorTipo(tipo);
    };

    //var incluir = function (novoVideo) {
    //    var videoJahExiste = obterPorTitulo(novoVideo.titulo);

    //    if (videoJahExiste) {
    //        throw new Error('Vídeo já existe');
    //    } else {
    //        return contexto.videos.incluir(novoVideo);
    //    }
    //};

    //var excluirPorVideoId = function (id) {
    //    var videoExcluido = contexto.videos.excluirPorId(id);

    //    if (!videoExcluido) {
    //        throw new Error('Vídeo já excluído ou não encontrado');
    //    }

    //    return videoExcluido;
    //};

    return {
        obterTodas: obterTodasAsFotos,
        obterPorTipo: obterFotosPorTipo
        //excluirPorId: excluirPorVideoId,
        //incluir: incluir
    };
} ();