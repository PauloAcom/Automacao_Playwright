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

const modalCadastro = '//div[@aria-modal="true"]';

const elementos_cadastro_aplicacoes = {
    menu: {
        menu_cadastro:'//div[@aria-label="Cadastros"]',
        submenu_cadastro_documentos:'//div[contains(.,"Aplicações/Documentos") and @role="button"]'
    },

    pesquisa: {
        campo_codigo:'input[placeholder="Código"]',
        campo_descricao: 'input[placeholder="Descrição"]',
        botao_buscar: 'button[id = "bt_buscar"]',
        botao_novo: 'button[id = "bt_novo"]'
    },
    cadastro:{
        campo_descricao: modalCadastro + '//input[@id = "ds_documentofiscal"]',
        campo_sigla: modalCadastro + '//input[@id = "sigla"]',
        campo_preco: '//input[@id = "vl_preco"]',
        botao_salvar:'//button[@id="bt_salvar"]',
        botao_cancelar: '//button[@id="bt_cancelar"]',
        botao_fechar: '//button[@aria-label="Fechar"]',
        botao_descartar: '//button[text()="Descartar"]'
    }
};

module.exports = {elementos_Login, elementos_cadastro_aplicacoes};
