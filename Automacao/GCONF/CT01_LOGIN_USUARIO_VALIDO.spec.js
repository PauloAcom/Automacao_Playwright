
const { test, expect } = require('@playwright/test');

const dados = require('../CONFIG_GERAL/LOGIN_GERAL.json');


test('Acessar o GCONF com usuário valido', async ({ page }) => {
    await page.goto (dados.url);

    await page.locator('#login').fill(dados.usuario);

    await page.locator('#senha').fill(dados.senha);

    await page.getByRole('button', { name: 'Acessar' }).click();

    await expect(page).not.toHaveURL(/login/);

});