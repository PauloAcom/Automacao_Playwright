const { test, expect } = require('@playwright/test');

const { loginInvalido } = require('../Recursos/login');

test('CT02 - Acessar GCONF com usuário inválido', async ({ page }) => {

    await loginInvalido(page, 'UsuarioInvalido', '123456');

    await expect(page).toHaveURL(/login/);

});