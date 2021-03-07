<img style="width:100%" src="https://raw.githubusercontent.com/RobertoMartins/quiz-game/master/front-end/assets/images/cover-readme.png"/>

## Quiz Game 

Consiste em uma aplicação web de perguntas e respostas. Os dados são fornecidos por uma API REST que foi implementada em java com SpringBoot. Para facilitar a execução, os dados são armazenados em um Banco de dados em memoria (h2) e o mesmo é populado a cada execução da api com o script chamado de 'data.sql' que se encontra na pasta resources do projeto.

## :hammer: Ferramentas & Tecnologias
![Java](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java)
![Spring](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![VSCode](https://img.shields.io/badge/-VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

Para mais detalhes da implementação acesse os repositorios do 
<a href="https://github.com/RobertoMartins/quiz-game/tree/master/quizgame-api">quizgame-api </a> e <a href="https://github.com/RobertoMartins/quiz-game/tree/master/front-end">front-end</a>
    
## :gear: Executando a aplicação
A primeira coisa a se fazer, é baixar ou clonar o projeto em sua maquina.<br/>

```sh
  $ git clone https://github.com/RobertoMartins/quiz-game.git 
```

Para rodar o projeto é necessario executar as seguintes etapas:

### 1º- Executando o back-end
<p>Para executar o backend é necessário possuir o <a href="https://maven.apache.org/">Maven</a> instalado. Ele vai facilitar na construção e execução do projeto SpringBoot, e irá baixar todas as dependencias necessarias em sua maquina.</p>

<p>Com o Maven instalado, acesse o diretorio clonado em sua maquina, e abra o terminal(cmd, shell e etc.) nesse local.</p>
Feito isso, digite o comando:

```sh
  $ cd quiz-game/quizgame-api # para acessar a pasta onde está o projeto maven.
  $ mvn spring-boot:run # para executar o projeto maven e iniciar o Spring.
```

<p>Pronto, a api será iniciada, e ja pode ser acessada pelo frontend.</p>
<p>Caso prefira,  o projeto também pode ser executado em uma IDE de sua preferência</p>

### 2º- Executando o front-end

O frontend não precisa de nenhuma depedência para funcionar, porém pode utilizar o pacote `serve` para roda-lo no browser através de um servidor node.

Caso queira rodar este projeto direto no seu browser, basta clicar com o botão direito no arquivo `index.html` e, em seguida, selecionando a opção `Abrir Com` e selecionando o navegador de sua preferência.

Caso queira executar com um servidor node, você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, acesse o diretorio do frontend do projeto e digite os comandos:

```sh
  $ npm init -y # inicializando o package.json
  $ npm install serve -D # instalando o serve como dependência de desenvolvimento
  $ npx serve . # rodando o servidor node
```

Pronto, a aplicação será aberta no browser.
## :computer: ScreenShots 

<img style="width:100%"  src="https://raw.githubusercontent.com/RobertoMartins/quiz-game/master/front-end/assets/images/screenshots.png"/>

