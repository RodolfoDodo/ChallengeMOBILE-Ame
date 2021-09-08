# ChallengeMOBILE-Ame


Este projeto foi desenvolvido via Javascript e nodeJS. E importe que seu ambiente tenha o nodeJS instalado

Automação de testes com CodeceptJS + Appium + BDD

Descriçao do projeto...

Este projeto está sendo executado com o appium e preciso insformar no arquivo codecept.config.js o caminho da sua APK para rodar o projeto localmente 

app: '/Users/rodolfolacerda/ProjetoGIT/ChallengeMobile/APK/product_registration.apk'

Informo o caminho certo da sua maquina

Instalar dependencias

git clone https://github.com/RodolfoDodo/ChallengeMOBILE-Ame.git

npm install

Rodar testes

npx codeceptjs run --steps

Rodas os testes gerando relatorio Allure

E importante que tenha o allure instalado em seu ambiente caso não tenha execute os seguinte comando

npm install -g allure-commandline --save-dev

Execute o camando para gerar o relatorio

npx codeceptjs run --plugins allure

Exibir o relatorio em seu ambiente 

allure serve output

Autor: Rodolfo Farley
