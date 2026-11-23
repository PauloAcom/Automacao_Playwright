// Generated from: Automacao\GCONF\Feature\Cadastro\Documentos\cadastro_aplicacoes.feature
import { test } from "playwright-bdd";

test.describe('Cadastro de Documentos', () => {

  test('CT03 - Cadastro de Aplicativo/Documento', async ({ Given, When, Then, And, page }) => { 
    await Given('que estou logado no GCONF e acesso a tela de "Aplicações/Documentos"', null, { page }); 
    await When('abro o modal de novo cadastro', null, { page }); 
    await And('preencho os dados do documento com descrição "NOVO DOCUMENTO", sigla "TESTE" e preço "142,36"', null, { page }); 
    await And('clico em salvar', null, { page }); 
    await And('saio do formulário', null, { page }); 
    await And('clico em buscar', null, { page }); 
    await Then('o registro "NOVO DOCUMENTO" deve ser exibido na listagem', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Automacao\\GCONF\\Feature\\Cadastro\\Documentos\\cadastro_aplicacoes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado que estou logado no GCONF e acesso a tela de \"Aplicações/Documentos\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Aplicações/Documentos\"","children":[{"start":46,"value":"Aplicações/Documentos","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Quando abro o modal de novo cadastro","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"E preencho os dados do documento com descrição \"NOVO DOCUMENTO\", sigla \"TESTE\" e preço \"142,36\"","stepMatchArguments":[{"group":{"start":45,"value":"\"NOVO DOCUMENTO\"","children":[{"start":46,"value":"NOVO DOCUMENTO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":69,"value":"\"TESTE\"","children":[{"start":70,"value":"TESTE","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":85,"value":"\"142,36\"","children":[{"start":86,"value":"142,36","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"E clico em salvar","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"E saio do formulário","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"E clico em buscar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Então o registro \"NOVO DOCUMENTO\" deve ser exibido na listagem","stepMatchArguments":[{"group":{"start":11,"value":"\"NOVO DOCUMENTO\"","children":[{"start":12,"value":"NOVO DOCUMENTO","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end