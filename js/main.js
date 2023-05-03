let mainQuestion = document.querySelector('#mainQuestion');
let optionA = document.querySelector('.a');
let optionB = document.querySelector('.b');
let optionC = document.querySelector('.c');
let optionD = document.querySelector('.d');
let nextQuestion = document.querySelector('#nextQuestion');

const overlay = document.getElementById('overlay')


let finalYes = document.querySelector('#finalYes');

var myButtons = document.querySelectorAll('.option');
let finalAnswer = document.querySelector('.final-Answer');
let greenScreen = document.querySelector('.correctScreen');

(function start(){
for (var i = 0; i < myButtons.length; i++) {
  var button = myButtons[i];
  button.addEventListener('click', function() {
    var x = document.querySelectorAll(".activated");
    overlay.classList.add('active')

    if(x.length) {
        x[0].classList.remove('activated');
    }
    this.classList.toggle("activated");
    finalAnswer.style.display = 'block'
  });
}
})();

let finalNo = document.querySelector('#finalNo')

finalNo.addEventListener('click', resetFunction)

function resetFunction(){
    finalAnswer.style.display = 'none'
    overlay.classList.remove('active')
    for (var i = 0; i < myButtons.length; i++) {
    var button = myButtons[i];
    var x = document.querySelectorAll(".activated");
    if(x.length) {
        x[0].classList.remove('activated');
    }
}
}

const myQuestions = [
  {
    question: "Opposite of Clear",
    answers: {
      a: "Murky",
      b: "Sheltered",
      c: "Restricted", 
      d: "Dubious"
    },
    correctAnswer: "a"
  },
  {
    question: "Pleasure - Pain, Joy - _________",
    answers: {
      a: "Surprise",
      b: "Pride",
      c: "Sorrow",
      d: "Elation"
    },
    correctAnswer: "c"
  },

  {
    question: "Digress",
    answers: {
      a: "Long answer",
      b: "Saying only what's necessary",
      c: "Short answer",
      d: "To go off topic"
    },
    correctAnswer: "d"
  },
];

let count = 0

function questionsIntoBoxes(){
    mainQuestion.innerText = myQuestions[count].question
    optionA.innerText = myQuestions[count].answers.a
    optionB.innerText = myQuestions[count].answers.b
    optionC.innerText = myQuestions[count].answers.c
    optionD.innerText = myQuestions[count].answers.d
};

questionsIntoBoxes()

nextQuestion.addEventListener('click', function(){
    count++
    questionsIntoBoxes()
    resetFunction()
    greenScreen.style.display = 'none'
  })

finalYes.addEventListener('click', checkAnswer)

function checkAnswer(){
  var elements = document.getElementsByClassName('activated');
  var id = elements[0].getAttribute( 'id' );

  if (String(id) === String(myQuestions[count].correctAnswer)){
    finalAnswer.style.display = 'none'
    greenScreen.style.display = 'block'
  }
  else if (String(id) !== String(myQuestions[count].correctAnswer)){
    console.log('Incorrect!')
  }
  console.log(String(id))

}
