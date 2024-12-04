![alt text](https://pluspng.com/img-png/angular-logo-png-javascript-logo-png-img-500-500-free-transparent-angular-900x500.jpg)

## Descrição 

- Este projeto tem como objetivo atender ao desafio da UNITEC, contendo as funcionalidades de Java Script, NodeJS, AngularCLI, Type Script.

## Funcionalidades
 - Componentização para reaproveitamento de código.
 - Integração com APIs externas para fornecimento de dados.
 - Interface responsiva e adaptada para diferentes dispositivos.
 - Gerenciamento de estado usando serviços do Angular.

### Versão do Angula
(https://github.com/angular/angular-cli) version 16.0.0.

### Instalação
- Para instalação do Angular é necessario primeiro certificar se a maquina possui o Node.js e npm (Node Package Manager)
##### Para que serve o Node js e o NPM? 
- O Node.js é um ambiente de execução que permite rodar JavaScript no servidor. No contexto do Angular, ele é usado principalmente para executar o Angular CLI 
- O npm é o gerenciador de pacotes incluído com o Node.js. Ele é essencial no Angular por causa do gerenciamento de dependências
##### Como Instalar o Angular?
- Para instalá-lo globalmente no sistema vamos colocar esse codico no Pompt de Comando:
`npm install -g @angular/cli` Essa seria a versão mais recente.
- Para instalar uma versão específica do Angular CLI, como a versão 16, você pode usar o seguinte comando: `npm install -g @angular/cli@16`
Esse comando instala globalmente a versão 16 do Angular CLI.
- Apos a instalação podemos verificar a versão baixada usando: `ng version`


### Comandos pra executar o frontend do angular

 - O comando `ng new` no Angular, cria um projeto inicial com uma estrutura pronta e organizada, já configurada para ser executada. Ele configura as dependências necessárias, cria a estrutura de diretórios e arquivos básicos, e instala todas as bibliotecas essenciais para rodar um aplicativo Angular.
 - Para rodar a aplicação localmente usamos o `ng serve`
 - Por padrão o projeto vai esta acessível em: http://localhost:4200
 - `Npm install` ele Instala as dependências necessárias para o projeto. 
 - È usado o  `code .` Para abrir o projeto no Visual Studio Code diretamente, sem precisar buscar o diretório manualmente pelo explorador de arquivos. È necessario usar o caminho onde esta seu projeto.

 ### Comandos Comuns Dentro do Angular CLI
 - `ng g c nome-do-componente`: Cria um diretório com o nome nome-do-componente Arquivos básicos para o componente, como nome-do-componente.component.ts, nome-do-componente.component.html, nome-do-componente.component.css e o arquivo de teste nome-do-componente.component.spec.ts.
 - `ng g s nome-do-serviço`: cria um arquivo nome-do-serviço.service.ts e um arquivo de teste nome-do-serviço.service.spec.ts.
 - `ng serve`: Por padrão, a aplicação será acessível em http://localhost:4200. Que pode tambem adicionar a flag --open para abrir automaticamente o navegador:
 - `ng test`: Isso inicia o Karma, que executa os testes e exibe os resultados no terminal. Ele também suporta "live-reload", o que significa que, sempre que você alterar o código, os testes serão automaticamente reexecutados.
 - `ng e2e`: Esse comando executa os testes em um navegador real, verificando se o aplicativo funciona conforme esperado, do início ao fim, como um usuário final faria.






 




 
