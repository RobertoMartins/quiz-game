const URL = "http://localhost:8080/questions"
const question = document.getElementById("question");
const optionsText = Array.from(document.getElementsByClassName("option-text"));
const progress_text = document.getElementById("progress-text")



/*resultado da requisição em um array*/
let questions = [];
let optionsQuestion = [];
let currentQuestion = {}
let countQuestions = 0;
let availableQuestions = [];
let acceptingAnswers = false;


startGame = () => {
    questions = [...get(URL)];
    countQuestions = 0;
    availableQuestions = [...questions];
    getNewQuestion()

}



getNewQuestion = () => {
    if (availableQuestions.length === 0 || countQuestions >= questions.length) {
        return window.location.assign("./concluded.html");
    }

    countQuestions++
    question.innerText = countQuestions + 1 + ' - ' + currentQuestion.content;
    progress_text.innerText = countQuestions + '/' + questions.length;

    //passando os valores das alternativas da questão atual para o html
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = countQuestions + ' - ' + currentQuestion.content;

    optionsText.forEach(option => {
        option.innerText = currentQuestion.options[optionsText.indexOf(option)].content + ' ' +
            currentQuestion.options[optionsText.indexOf(option)].status

    });
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}


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

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    let data = request.responseText
    let questions = JSON.parse(data)
    return questions;
}

function iniciaModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('mostrar');
}