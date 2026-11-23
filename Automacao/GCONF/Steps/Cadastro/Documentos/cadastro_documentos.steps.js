const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { loginGCONF } = require('../../../Recursos/login.js');
const { elementos_cadastro_aplicacoes } = require('../../../Recursos/localizadores.js');

const { Given, When, Then } = createBdd();

Given('que estou logado no GCONF e acesso a tela de {string}', async ({ page }, tela) => {
    await loginGCONF(page);
    await expect(page).not.toHaveURL(/login/);
    await page.locator(elementos_cadastro_aplicacoes.menu.menu_cadastro).click();
    await page.locator(elementos_cadastro_aplicacoes.menu.submenu_cadastro_documentos).click();
    await expect(page.locator(elementos_cadastro_aplicacoes.pesquisa.campo_codigo)).toBeVisible();
});

When('abro o modal de novo cadastro', async ({ page }) => {
    await page.locator(elementos_cadastro_aplicacoes.pesquisa.botao_novo).click();
    await expect(page.locator(elementos_cadastro_aplicacoes.cadastro.modal)).toBeVisible();
});

When('preencho os dados do documento com descrição {string}, sigla {string} e preço {string}', async ({ page }, descricao, sigla, preco) => {
    await page.locator(elementos_cadastro_aplicacoes.cadastro.campo_descricao).fill(descricao);
    await page.locator(elementos_cadastro_aplicacoes.cadastro.campo_sigla).fill(sigla);
    await page.locator(elementos_cadastro_aplicacoes.cadastro.campo_preco).fill(preco);
});

When('clico em salvar', async ({ page }) => {
    await page.locator(elementos_cadastro_aplicacoes.cadastro.botao_salvar).click();
});

When('saio do formulário', async ({ page }) => {
    await page.locator(elementos_cadastro_aplicacoes.cadastro.botao_fechar).click();
    await page.locator(elementos_cadastro_aplicacoes.cadastro.botao_descartar).click();
});

When('clico em buscar', async ({ page }) => {
    await page.locator(elementos_cadastro_aplicacoes.pesquisa.botao_buscar).click();
});

Then('o registro {string} deve ser exibido na listagem', async ({ page }, descricao) => {
    await expect(page.getByRole('cell', { name: descricao }).first()).toBeVisible({ timeout: 60000 });
});
