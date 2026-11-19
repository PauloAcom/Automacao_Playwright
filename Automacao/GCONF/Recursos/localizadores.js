const elementos_Login = {

    LOGIN: {
        campo_usuario: '#login',
        campo_senha: '#senha',
        botao_acessar: {
            role: 'button',
            name: 'Acessar'
        }
    }

};

const elementos_cadastro_aplicacoes = {

    pesquisa: {
        campo_codigo: '#codigo',
        campo_descricao: '#descricao',
        botao_buscar: {
            role: 'button',
            name: 'Buscar'
        },
        botao_limpar: {
            type: 'button',
            name: 'Limpar'
        },
    cadastro:{

    }
    }
};

module.exports = {elementos_Login, elementos_cadastro_aplicacoes};
