const dados = require('../../Config_Geral/Variaveis/dados_acesso.json');
<<<<<<< HEAD
const { elementos_Login } = require('./localizadores');
=======
const {elementos_Login} = require('./localizadores');
>>>>>>> 88e7ec151b33a07593826d2bb78d6413c570a9e1


async function loginGCONF(page) {

    await page.goto(dados.GCONF.url);

    await page.locator(elementos_Login.LOGIN.campo_usuario).fill(dados.GCONF.usuario);

    await page.locator(elementos_Login.LOGIN.campo_senha).fill(dados.GCONF.senha);

    await page.getByRole(
        elementos_Login.LOGIN.botao_acessar.role,
        { name: elementos_Login.LOGIN.botao_acessar.name }
    ).click();

}


async function loginInvalido(page, usuario, senha) {

    await page.goto(dados.GCONF.url);

    await page.locator(elementos_Login.LOGIN.campo_usuario).fill(usuario);

    await page.locator(elementos_Login.LOGIN.campo_senha).fill(senha);

    await page.getByRole(
        elementos_Login.LOGIN.botao_acessar.role,
        { name: elementos_Login.LOGIN.botao_acessar.name }
    ).click();

}


module.exports = {
    loginGCONF,
    loginInvalido
};