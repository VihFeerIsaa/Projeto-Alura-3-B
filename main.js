const questions = [
    {
        question: "Qual a capital do Brasil?",
        answers: [
            { text: "São Paulo", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasília", correct: true },
            { text: "Salvador", correct: false }
        ]
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        answers: [
            { text: "Terra", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Saturno", correct: false },
            { text: "Marte", correct: false }
        ]
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        answers: [
            { text: "Abraham Lincoln", correct: false },
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "John Adams", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionText = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");

    questionText.textContent = question.question;
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");

    const resultText = document.getElementById("result-text");

    if (score === questions.length) {
        resultText.textContent = "Parabéns! Você acertou todas as perguntas!";
    } else if (score >= questions.length / 2) {
        resultText.textContent = "Bom trabalho! Você acertou mais da metade!";
    } else {
        resultText.textContent = "Tente novamente! Você pode fazer melhor.";
    }
}

// Iniciar o jogo quando a página carregar
window.onload = startGame;
