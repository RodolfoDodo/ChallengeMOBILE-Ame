const { I, cadastro_produto_page } = inject();
// Add in your custom step files

Given('informo o codigo do produto', (table) => {
  
  // escondo o teclado para não atrapalhar os dados na tela
  I.hideDeviceKeyboard();

  const cells = table.rows[1].cells;

  cadastro_produto_page.codigo(cells[0].value)

  cadastro_produto_page.descricao(cells[1].value)

  cadastro_produto_page.embalagem(cells[2].value)

  cadastro_produto_page.quantidade(cells[3].value)

  cadastro_produto_page.valorUnitario(cells[4].value)

  cadastro_produto_page.lote(cells[5].value)

});

Given('que acesso o cadastro de produto', () => {
  cadastro_produto_page.buttonNew()
});

Given('informo todos os dados de um novo produto {string} {string} {string} {string} {string} {string}', (codigo, descricao, embalagem, quantidade, valorUnitario, lote) => {
  I.hideDeviceKeyboard();
  cadastro_produto_page.codigoProduto(codigo, descricao, embalagem, quantidade, valorUnitario, lote)
  I.wait(5)
});

Given('que clico no botao {string}', (botao) => {
  I.tap(botao)
});

Given('o valor em estoque atual deve ser de {string}', (valorEstoque) => {
  I.waitForText(valorEstoque, 5)
});

Given('confirmo a exclusao {string}', (confirmar) => {
  I.tap(confirmar)
});

Given('informo uma nova quantia de entrada no estoque {string}', (valorEntrada) => {
  cadastro_produto_page.adicionarEstoque(valorEntrada)
});

Given('informo um novo valor para retirada no estoque {string}', (valorRetirada) => {
  cadastro_produto_page.valorRetirada(valorRetirada)
});


Given('que solicito para retirar uma quantidade de produto', () => {
  cadastro_produto_page.retirarProduto()
});

Given('que solicito para adicionar uma quantidade de produto', () => {
  cadastro_produto_page.adicionar()
});