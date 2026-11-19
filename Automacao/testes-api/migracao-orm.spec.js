
const { test, expect, request } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const baseURL = 'https://homolog.everest.srv978115.hstgr.cloud';

const resultados = [];

let api;

test.describe('Validação das consultas API - Migração ORM', () => {

  test.describe.configure({ mode: 'serial' });

  test.beforeAll(async () => {
    api = await request.newContext({
      baseURL,
      httpCredentials: {
        username: 'admin',
        password: 'evers',
        send: 'always'
      },
      ignoreHTTPSErrors: true
    });
  });

  const consultas = [
    {
      nome: 'Item embalagem',
      endpoint: '/api/componente/itemembalagem/busca/2019002?x-Pagina=1'
    },
    {
      nome: 'Centro custo conta',
      endpoint: '/api/componente/centrocustoconta/busca/2019002?x-Pagina=1'
    },
    {
      nome: 'Condição venda compra',
      endpoint: '/api/componente/condicaovendacompra/busca/2019002?x-Pagina=1'
    },
    {
      nome: 'Imagem usuário',
      endpoint: '/api/ads/user/image/1000?x-Entidade=2019002'
    },
    {
      nome: 'Usuário setor produção - listagem',
      endpoint: '/api/opo/usuariosetorproducao?x-Entidade=2019002&x-Pagina=1'
    },
    {
      nome: 'Usuário setor produção - por usuário',
      endpoint: '/api/opo/usuariosetorproducao/1000?x-Entidade=2019002'
    }
  ];

  for (const consulta of consultas) {

    test(`Consultar ${consulta.nome}`, async () => {

      const inicio = Date.now();

      const response = await api.get(consulta.endpoint);

      const tempoResposta = Date.now() - inicio;

      let dados;

      try {
        dados = await response.json();
      } catch {
        dados = await response.text();
      }

      const quantidadeRegistros = Array.isArray(dados)
        ? dados.length
        : null;

      console.log('\n-----------------------------------');
      console.log(`Consulta: ${consulta.nome}`);
      console.log(`Status HTTP: ${response.status()}`);
      console.log(`Tempo de resposta: ${tempoResposta} ms`);
      console.log(`Quantidade de registros: ${
        quantidadeRegistros !== null
          ? quantidadeRegistros
          : 'Não se aplica'
      }`);
      console.log('Dados retornados:');
      console.log(JSON.stringify(dados, null, 2));

      resultados.push({
        consulta: consulta.nome,
        endpoint: consulta.endpoint,
        statusHTTP: response.status(),
        tempoRespostaMs: tempoResposta,
        quantidadeRegistros,
        dadosRetornados: dados
      });

      expect(response.status()).toBe(200);

      expect(
        typeof dados === 'object' && dados !== null
      ).toBeTruthy();
    });
  }

  test.afterAll(async () => {

    const pastaResultados = path.join(__dirname, 'resultados');

    fs.mkdirSync(pastaResultados, { recursive: true });

    const arquivo = path.join(
      pastaResultados,
      'resultado-migracao-orm.json'
    );

    fs.writeFileSync(
      arquivo,
      JSON.stringify(resultados, null, 2),
      'utf8'
    );

    console.log('\n-----------------------------------');
    console.log('RELATÓRIO DE EXECUÇÃO');
    console.log(`Consultas executadas: ${resultados.length}`);
    console.log(
      `Consultas com HTTP 200: ${
        resultados.filter(r => r.statusHTTP === 200).length
      }`
    );
    console.log(`Arquivo gerado: ${arquivo}`);

    await api.dispose();
  });

});
