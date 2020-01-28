const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const controlsElement = document.getElementById('controls')
const categoriesElement = document.getElementById('categories')
const categoryBtn = document.getElementsByClassName('category-btn')
const selectCategoryBtn = document.getElementById('category-btn')

const categoryBtnsArray = Array.prototype.slice.call(categoryBtn, 0);
let shuffledQuestions, currentQuestionIndex;
let questions = [];

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion()
})

categoryBtnsArray.forEach(btn => {
    btn.addEventListener('click', (event) => {
        findCategoryQuestions(event.target.innerText)
        categoriesElement.classList.add('hide')
        controlsElement.classList.remove('hide')
    })
})

selectCategoryBtn.addEventListener('click', () => {
    questions = [];
    clearStatusClass(document.body)
    categoriesElement.classList.remove('hide')
    controlsElement.classList.add('hide')
    questionContainerElement.classList.add('hide')
})


function startGame() {
    startButton.classList.add('hide')
    selectCategoryBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    let questionArray = question.question.split(" ")
    questionElement.innerHTML = styleQuestionString(questionArray);
    const qbody = document.createElement('p')
    qbody.innerText = question.body
    questionElement.appendChild(qbody)
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
        selectCategoryBtn.classList.remove('hide')
    }
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function findCategoryQuestions(keyword) {
    questionsData.forEach(question => {
        if (question.category.includes(keyword)) {
            questions.push(question)
        }
    })
}

function styleQuestionString(questionArray) {
    let string = "";
    questionArray.forEach(word => {
        switch (word) {
            case "if":
                string += ` <span class="key-word-1">${word}</span>`
                break;
            case "function":
                string += ` <span class="key-word-1">${word}</span>`
                break;
            case "var":
                string += ` <span class="key-word-1">${word}</span>`
                break;
            case "typeof":
                string += ` <span class="key-word-1">${word}</span>`
                break;
            case "return":
                string += ` <span class="key-word-2">${word}</span>`
                break;
            case "{":
                string += ` <span class="symbol-open">${word}</span>`
                break;
            case "}":
                string += ` <span class="symbol-close">${word}</span>`
                break;
            default:
                string += ` <span >${word}</span>`
        }
    })
    return string;
}


