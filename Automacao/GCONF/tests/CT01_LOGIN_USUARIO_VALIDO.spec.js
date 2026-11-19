const { test, expect } = require('@playwright/test');

const { loginGCONF } = require('../Recursos/login.js');

test('CT01 - Acessar GCONF com usuário válido', async ({ page }) => {

    await loginGCONF(page);

    await expect(page).not.toHaveURL(/login/);

});