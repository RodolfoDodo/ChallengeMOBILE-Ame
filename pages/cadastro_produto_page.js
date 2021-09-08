const { I } = inject();

module.exports = {

  botoes: {
    adicionarProduto: '#br.com.pztec.estoque:id/Button1',
    retirarProduto: '#br.com.pztec.estoque:id/saida',
    adicionarProdutoEstoque: '#br.com.pztec.estoque:id/entrada'
  },

  campos: {
    codigo: '#br.com.pztec.estoque:id/txt_codigo',
    descricao: '#br.com.pztec.estoque:id/txt_descricao',
    embalagem: '#br.com.pztec.estoque:id/txt_unidade',
    quantidade: '#br.com.pztec.estoque:id/txt_quantidade',
    valorUnitario: '#br.com.pztec.estoque:id/txt_valunit',
    lote: '#br.com.pztec.estoque:id/txt_lote',
    valorEntradaEstoque: '#br.com.pztec.estoque:id/txt_qtdentrada',
    valorRetiradaEstoque: '#br.com.pztec.estoque:id/txt_qtdsaida'

  },

  buttonNew(){
    I.tap(this.botoes.adicionarProduto)
  },

  retirarProduto(){
    I.tap(this.botoes.retirarProduto)
  },

  adicionar(){
    I.tap(this.botoes.adicionarProdutoEstoque)
  },

  codigoProduto(codigo, descricao, embalagem, quantidade, valorUnitario, lote){
    I.fillField(this.campos.codigo, codigo)
    I.fillField(this.campos.descricao, descricao)
    I.fillField(this.campos.embalagem, embalagem)
    I.fillField(this.campos.quantidade, quantidade)
    I.fillField(this.campos.valorUnitario, valorUnitario)
    I.fillField(this.campos.lote, lote)
  },

  codigo(codigo){
    I.fillField(this.campos.codigo, codigo)
  },

  descricao(descricao){
    I.fillField(this.campos.descricao, descricao)
  },

  embalagem(embalagem){
    I.fillField(this.campos.embalagem, embalagem)
  },

  quantidade(quantidade){
    I.fillField(this.campos.quantidade, quantidade)
  },

  valorUnitario(valorUnitario){
    I.fillField(this.campos.valorUnitario, valorUnitario)
  },

  lote(lote){
    I.fillField(this.campos.lote, lote)
  },

  adicionarEstoque(estoque){
    I.fillField(this.campos.valorEntradaEstoque, estoque)
  },

  valorRetirada(retirada){
    I.fillField(this.campos.valorRetiradaEstoque, retirada)
  }

}