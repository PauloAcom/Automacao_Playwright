import { createBdd } from 'playwright-bdd';
import configuracoes from '../../Config_Geral/dados_acesso.json' with { type: 'json' };

const { Given, When, Then } = createBdd();

const GCONF = configuracoes.GCONF;

Given('Usuário Acessa o GCONF', async ({ page }) => {
    await page.goto(GCONF.url);
});

When('informo usuário e senha válidos', async ({ page }) => {
    await page.locator('#login').fill(GCONF.usuario);
    await page.locator('#senha').fill(GCONF.senha);
});
Then 
    await page.getByRole('button', { name: 'Acessar' }).click();