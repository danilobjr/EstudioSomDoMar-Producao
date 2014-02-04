var contexto = require('./../repository/contexto');

module.exports = function () {
    var obterTodos = function () {
        return contexto.servicos.obterTodos();
    };

    var obterPorDescricao = function (descricao) {
        return contexto.servicos.obterPorDescricao(descricao);
    };
    
    var obterPorSecao = function (secao) {
        return contexto.servicos.obterPorSecao(secao);
    };

    var incluir = function (novoServico) {
        var servicoJahExiste = obterPorDescricao(novoServico.descricao);

        if (servicoJahExiste) {
            throw new Error('Serviço/equipamento já existe');
        } else {
            return contexto.servicos.incluir(novoServico);
        }
    };

    var excluirPorId = function (id) {
        var servicoExcluido = contexto.servicos.excluirPorId(id);

        if (!servicoExcluido) {
            throw new Error('Serviço/equipamento já excluído ou não encontrado');
        }

        return servicoExcluido;
    };

    return {
        obterTodos: obterTodos,
        obterPorSecao: obterPorSecao,
        incluir: incluir,
        excluirPorId: excluirPorId
    };
} ();