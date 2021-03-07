const URL = "http://localhost:8080/questions"
const question = document.getElementById("question");
const optionsText = Array.from(document.getElementsByClassName("option-text"));
const progress_text = document.getElementById("progress-text")
const loader = document.getElementById("loader");
const game = document.getElementById("game");



/*um array para armazenar o resultado da requisição */
let questions = [];
let currentQuestion = {}
let countQuestions = 0;
let availableQuestions = []; //array onde as questoes disponiveis são armazenadas
let acceptingAnswers = false;

/*função chamada no momento em que a pagina 'questions.html' é carregada*/
startGame = () => {
    questions = [...get(URL)];
    countQuestions = 0;
    availableQuestions = [...questions];
    getNewQuestion()
    setTimeout(() => {
        game.classList.remove("hidden");
        loader.classList.add("hidden");
    }, 1000)

}


/*funcao para carregar uma nova pergunta*/
getNewQuestion = () => {
    if (availableQuestions.length === 0 || countQuestions >= questions.length) {
        return window.location.assign("./concluded.html");
    }

    countQuestions++
    question.innerText = countQuestions + 1 + ' - ' + currentQuestion.content;
    progress_text.innerText = countQuestions + '/' + questions.length;

    /* A lista questões ja vem do backend de forma aleatoria a cada requisição
    caso essa funcionalidade nao seja implementada, as questões ainda serão acessadas de forma aleatoria
    no front-end por meio do index aleatorio.
    o indice da questão atual é gerado de forma aleatoria*/

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = countQuestions + ' - ' + currentQuestion.content;

    //passando os valores das alternativas da questão atual para o html
    optionsText.forEach(option => {
        option.innerText = currentQuestion.options[optionsText.indexOf(option)].content
    });
    availableQuestions.splice(questionIndex, 1); //removendo a questão ja carregada e respondida do vetor de questoes disponiveis

    acceptingAnswers = true;
}

/*Adicionando um evento de clique para cada elemento das altenativas da questão
Caso o status da alternativa for "RIGHT" o componente irá ficar verde e em seguida
será caregada uma nova pergunta. Caso contrario, o modal (overlay) é mostrado para iniciar
o jopgo novamente*/


optionsText.forEach(option => {
    option.addEventListener("click", e => {

        if (!acceptingAnswers) return;

        acceptingAnswers = false;

        let selectedOption = currentQuestion.options[optionsText.indexOf(e.target)]

        const classToApply = selectedOption.status;
        if (classToApply === 'RIGHT') {
            option.parentElement.classList.add(classToApply);

            setTimeout(() => {
                option.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 500)

        } else {
            option.parentElement.classList.add(classToApply);
            setTimeout(() => {
                option.parentElement.classList.remove(classToApply);
            }, 1000)
            iniciaModal('modal-lose')
            return
        }
    });


});

/*função para fazer a requisição ao backend
como usei apenas JS puro, utilizei uma forma não tão recomendada de se fazer requisição
apenas para essa aplicação simples. Se estivesse utilizando algum framework frontend, provavelmente 
iria fazer o uso de uma outra lib para requisiçoes ajax, ex: axios*/

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    let data = request.responseText
    let questions = JSON.parse(data)
    return questions;

}

/*Função para mostrar o modal, caso a resposta escolhida pelo usuario seja errada.*/
function iniciaModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('mostrar');
}