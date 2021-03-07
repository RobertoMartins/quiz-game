<img style="width:100%" src="https://raw.githubusercontent.com/RobertoMartins/dsdeliver-sds2/main/backend/src/main/resources/home.png"/>

## Quiz Game 

Consiste em uma aplica��o web de perguntas e respostas. Os dados s�o fornecidos por uma API REST que foi implementada em java com SpringBoot. Para facilitar a execu��o, os dados s�o armazenados em um Banco de dados em memoria (h2) e o mesmo � populado a cada execu��o da api com o script chamado de 'data.sql' que se encontra na pasta resources do projeto.

## :hammer: Ferramentas & Tecnologias
![Java](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java)
![Spring](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![VSCode](https://img.shields.io/badge/-VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

Para mais detalhes da implementa��o acesse os repositorios do 
<a href="https://github.com/RobertoMartins/quiz-game/tree/master/quizgame-api">quizgame-api </a> e <a href="https://github.com/RobertoMartins/quiz-game/tree/master/front-end">front-end</a>
    
## :gear: Executando a aplica��o
A primeira coisa a se fazer, � baixar ou clonar o projeto em sua maquina.<br/>

```sh
  $ git clone https://github.com/RobertoMartins/quiz-game.git 
```

Para rodar o projeto � necessario executar as seguintes etapas:

### 1�- Executando o back-end
<p>Para executar o backend � necess�rio possuir o <a href="https://maven.apache.org/">Maven</a> instalado. Ele vai facilitar na constru��o e execu��o do projeto SpringBoot, e ir� baixar todas as dependencias necessaria em sua maquina.</p>

<p>Com o Maven instalado, acesse o diretorio clonado em sua maquina, e abra o terminal(cmd, shell e etc.) nesse local.</p>
Feito isso, digite o comando:

```sh
  $ cd quiz-game/quizgame-api # para acessar a pasta onde est� o projeto maven.
  $ mvn spring-boot:run # para executar o projeto maven e iniciar o Spring.
```

<p>Pronto, a api ser� iniciada, e ja pode ser acessada pelo fontend.</p>
<p>Caso prefira,  o projeto tamb�m pode ser executado em uma IDE de sua prefer�ncia</p>

### 2�- Executando o front-end

O frontend n�o precisa de nenhuma deped�ncia para funcionar, por�m pode utilizar o pacote `serve` para roda-lo no browser atrav�s de um servidor node.

Caso queira rodar este projeto direto no seu browser, basta clicar com o bot�o direito no arquivo `index.html` e, em seguida, selecionando a op��o `Abrir Com` e selecionando o navegador de sua prefer�ncia.

Caso queira executar com um servidor node, voc� precisar� ter o [NodeJS](https://nodejs.org) instalado na sua m�quina, e, ap�s isso, acesse o diretorio do frontend do projeto e digite os comandos:

```sh
  $ npm init -y # inicializando o package.json
  $ npm install serve -D # instalando o serve como depend�ncia de desenvolvimento
  $ npx serve . # rodando o servidor node
```

Pronto, a aplica��o ser� aberta no browser.
## :computer: ScreenShots 

<img style="width:100%"  src="https://raw.githubusercontent.com/RobertoMartins/dsdeliver-sds2/main/backend/src/main/resources/screenshots.png"/>

