var servicoGerente = require('./../app/gerentes/servicoGerente');

exports.index = function (req, res) {
    var servicos = servicoGerente.obterTodos();
    res.render('servicoIndex', { viewModel: servicos });
};

exports.novo = function (req, res) {
    res.render('servicoNovo');
};

exports.incluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    try {
        var novoServico = {
            descricao: req.body.descricao,
            secao: req.body.secao
        };

        servicoGerente.incluir(novoServico);

        resultado.sucesso = true;
        resultado.mensagem = 'Serviço/equipamento incluído com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao incluir serviço/equipamento: ' + error;
    }

    var servicos = servicoGerente.obterTodos();

    res.render('servicoIndex', { viewModel: servicos, resultado: resultado });
};

exports.excluir = function (req, res) {
    var resultado = { sucesso: false, mensagem: '' };

    try {
        servicoGerente.excluirPorId(req.params.id);

        resultado.sucesso = true;
        resultado.mensagem = 'Serviço/Equipamento excluído com sucesso';
    } catch (error) {
        resultado.mensagem = 'Erro ao excluir serviço/equipamento: ' + error;
    }

    var servicos = servicoGerente.obterTodos();

    res.render('servicoIndex', { viewModel: servicos, resultado: resultado });
};