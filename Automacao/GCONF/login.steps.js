import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

import configuracoes from '../../Config_Geral/config_geral.json' with { type: 'json' };

const GCONF = configuracoes.GCONF;

Given('Usuário Acessa o GCONF', async ({ page }) => {await page.goto(GCONF.url);

});