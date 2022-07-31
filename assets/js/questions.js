const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}
function showResults(){}

buildQuiz();

output.push(
    `<div class="slide">
      <div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>
    </div>`
  );

submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        title: "A Function Associated With An object is Called:",
        choices: ["Function", "Link", "Method", "None"],
        answer: "Method"
    },
    {
        title: "JavaScript File Has An Extension of:",
        choices: [".Java", ".Js", ".javascript", ".xml"],
        answer: ".Js"
    },
    {
        title: " Which built-in method returns the length of the string?:",
        choices: ["Length", "Size", "Index", "None"],
        answer: "Length"
    },
    {
        title: "Which of the following function of Array object extracts a section of an array and returns a new array?: ",
        choices: ["Reverse", "Shift", "Slice", "Some"],
        answer: "Slice"
    },
    {
        title: "Which built-in method reverses the order of the elements of an array?:",
        choices: ["ChangeOrder","Reverse", "Sort", "None"],
        answer: "Reverse"
    },

];

function buildQuiz(){

    const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
    const output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
  
        for(letter in currentQuestion.answers){
  
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    quizContainer.innerHTML = output.join('');
  }
  
  myQuestions.forEach( (currentQuestion, questionNumber) => {
  });

  const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;
  
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
  
        
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
  
if(userAnswer === currentQuestion.correctAnswer){
    numCorrect++;
  
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  else{
    answerContainers[questionNumber].style.color = 'red';
  }
  
  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  
  previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);