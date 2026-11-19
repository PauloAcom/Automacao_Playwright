const { test, expect } = require('@playwright/test');

const { loginGCONF } = require('../Recursos/login.js');

test('CT03 - Cadastro de Aplicativo/Documento', async ({ page }) => {

    await loginGCONF(page);
    await expect(page).not.toHaveURL(/login/);
    
    await page.getByRole('button', { name: 'Cadastros' }).click();

    await page.getByRole('button', { name: 'Aplicações/Documentos' }).click();

    await page.waitForTimeout(5000);

    

});