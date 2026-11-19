
const { test, expect } = require('@playwright/test');

test('Acessar o GCONF com usuário inválido', async ({ page }) => {
    await page.goto('https://gconf.srv978115.hstgr.cloud/login');

    await page.locator('#login').fill('UsuarioInvalido');

    await page.locator('#senha').fill('123456');

    await page.getByRole('button', { name: 'Acessar' }).click();

    await expect(page).toHaveURL(/login/);

});
