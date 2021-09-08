Feature: Produto

  Eu como usuario do Produto desejo realizar as seguintes testes

  Background: Cadastro de um Produto
    Given que acesso o cadastro de produto
    And informo o codigo do produto
      | codigo | descricao      | embalagem | quantia | valorunitario | lote |
      | 005    | Feijao Carioca | Primo     | 150     | 10            | 6    |
    When que clico no botao "SAVE"

  @Adicionar
  Scenario: Adicionar uma nova quantia em estoque de um produto
    Given que solicito para adicionar uma quantidade de produto
    And informo uma nova quantia de entrada no estoque "10"
    When que clico no botao "SAVE"
    Then o valor em estoque atual deve ser de "160.0"

  @retirada
  Scenario: Retirar um valor do estoque de um produto
    Given que solicito para retirar uma quantidade de produto
    And informo um novo valor para retirada no estoque "50"
    When que clico no botao "SAVE"
    Then o valor em estoque atual deve ser de "100.0"



  @excluir
  Scenario: Excluir um produto Cadastrado
    When que clico no botao "DELETE"
    And confirmo a exclusao "YES"

  Scenario Outline: Editar um produto cadastrado
    When que clico no botao "EDIT"
    And informo todos os dados de um novo produto "<codigo>" "<descricao>" "<embalagem>" "<quantia>" "<valorunitario>" "<lote>"
    When que clico no botao "SAVE"

    Examples:
      | codigo | descricao        | embalagem | quantia | valorunitario | lote |
      | 001    | Arroz Sempre bom | Primo     | 10      | 35            | 10   |