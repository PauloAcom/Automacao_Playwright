
{
  "baseURL": "https://homolog.everest.srv978115.hstgr.cloud",
  "endpoints": [
    {
      "nome": "Item Embalagem",
      "metodo": "GET",
      "url": "/api/componente/itemembalagem/busca/2019002?x-Pagina=1",
      "statusEsperado": 200
    },
    {
      "nome": "Centro Custo Conta",
      "metodo": "GET",
      "url": "/api/componente/centrocustoconta/busca/2019002?x-Pagina=1",
      "statusEsperado": 200
    },
    {
      "nome": "Condicao Venda Compra",
      "metodo": "GET",
      "url": "/api/componente/condicaovendacompra/busca/2019002?x-Pagina=1",
      "statusEsperado": 200
    },
    {
      "nome": "Usuario Imagem - GET",
      "metodo": "GET",
      "url": "/api/ads/user/image/1000?x-Entidade=2019002",
      "statusEsperado": 200
    },
    {
      "nome": "Usuario Imagem - PUT",
      "metodo": "PUT",
      "url": "/api/ads/user/image/1000?x-Entidade=2019002",
      "statusEsperado": 200
    },
    {
      "nome": "Usuario Setor Producao - Listagem",
      "metodo": "GET",
      "url": "/api/opo/usuariosetorproducao?x-Entidade=2019002&x-Pagina=1",
      "statusEsperado": 200
    },
    {
      "nome": "Usuario Setor Producao - Por Usuario",
      "metodo": "GET",
      "url": "/api/opo/usuariosetorproducao/1000?x-Entidade=2019002",
      "statusEsperado": 200
    }
  ]
}
