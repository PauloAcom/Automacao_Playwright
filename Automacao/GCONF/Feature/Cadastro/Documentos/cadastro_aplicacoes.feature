# language: pt
Funcionalidade: Cadastro de Documentos

  Cenário: CT03 - Cadastro de Aplicativo/Documento
    Dado que estou logado no GCONF e acesso a tela de "Aplicações/Documentos"
    Quando abro o modal de novo cadastro
    E preencho os dados do documento com descrição "NOVO DOCUMENTO", sigla "TESTE" e preço "142,36"
    E clico em salvar
    E saio do formulário
    E clico em buscar
    Então o registro "NOVO DOCUMENTO" deve ser exibido na listagem