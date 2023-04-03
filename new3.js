const quizData = [

    {
        question: "What country hosted the 2022 FIFA World Cup",
        a: "Saudi Arabia",
        b: "Russia",
        c: "Qatar",
        d: "Argentina",
        correct: "c",
    },
	{
        question: "Which player is also known as 'Pulga' ",
        a: "Paulo Dybala",
        b: "Cristiano Ronaldo",
        c: "Alexander Pato",
        d: "Leo Messi",
        correct: "d",
    },
    {
        question: "Which nation has won more FIFA World Cups",
        a: "Spain",
        b: "Uruguay",
        c: "Netherlands",
        d: "England",
        correct: "b",
    },
    {
        question: "What team does James Ward-Prowse play for",
        a: "Southampton",
        b: "Newcastle United",
        c: "Arsenal",
        d: "Manchester city",
        correct: "a",
    },
	{
        question: "Which player out of those 4 has won a ballon d'or ",
        a: "Pele",
        b: "Diego Maradona",
        c: "Pavel Nedved",
        d: "Thierry Henry",
        correct: "c",
    },

	{
		question: "Which European football stadium holds the most fan capacity",
        a: "Spotify Camp Nou",
        b: "Wembley",
        c: "Allianz Arena",
        d: "Santiago Bernabeu",
        correct: "a",
		
	},
		
	{
        question: "Which of these players has won a UEFA Champions league",
        a: "Gigi Buffon",
        b: "Zlatan Ibrahimovic",
        c: "Ronaldo Nazario",
        d: "David Beckham",
        correct: "d",
	},
		
	{	question: "Which of these players has never played in a FIFA World Cup",
        a: "Eric Cantona",
        b: "Nemanja Vidic",
        c: "Gareth Bale",
        d: "Jay Jay Okocha",
        correct: "a",
	},
		
	{
		question: "Who is the youngest scorer in FIFA World Cup History",
        a: "Kylian Mbappe",
        b: "Pele",
        c: "Leo Messi",
        d: "Garrincha",
        correct: "b",
    },

	{
		question: "Who is the oldest player to ever appear in a FIFA World Cup game",
        a: "Dani Alves",
        b: "Cristiano Ronaldo",
        c: "Essam El Hadary",
        d: "Ze Roberto",
        correct: "c",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


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


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})