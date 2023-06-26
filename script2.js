const quizData = [
    {
        question: "1. _______ is a large language model chatbot developed by OpenAI based on GPT-3.5",
        a: "OpenAI Gym",
        b: "Keras",
        c: "ChatGPT",
        d: "TensorFlow",
        correct: "c",
    },{
        question: "2. DALL-E was named after?",
        a: "A type of flower",
        b: "Salvador Dalí and Pixar’s WALL-E",
        c: "A mythical creature",
        d: "A famous painting",
        correct: "b",
    },
    {
        question: "3. _______  created a Discord community with bots that can turn your text into images in less than a minute.",
        a: "Midjourney",
        b: "Keras",
        c: "ChatGPT",
        d: "TensorFlow",
        correct: "a",
    },{
        question: "4. _______  is a method for creating images from text prompts. It works by adding random noise to a set of training images, then learning how to remove noise to construct the desired image.",
        a: "Diffusion model",
        b: "Keras",
        c: "ChatGPT",
        d: "TensorFlow",
        correct: "a",
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const nextBtn = document.getElementById('next')
const backBtn = document.getElementById('back')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
nextBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer !== undefined) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h1 style="margin-left: 20px"><br><br>Congratulations</h1>
                <h2 style="margin-left: 20px">You answered ${score}/${quizData.length} questions correctly</h2>
            `;
        }
    }
});
backBtn.addEventListener('click', () => {
        currentQuiz--;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
    
});

var countDownDate = new Date().getTime() + 5 * 60 * 1000

        var countdown = setInterval(function() {
            var currentTime = new Date().getTime()
            var distance = countDownDate - currentTime

            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            var seconds = Math.floor((distance % (1000 * 60)) / 1000)

            document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " left" 

            if (distance < 0) {
                clearInterval(countdown)
                document.getElementById("timer").textContent = "Time's up!"
            }
        }, 1000)




