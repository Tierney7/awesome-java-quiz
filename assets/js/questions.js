var container = document.getElementById("container");
var timer = document.getElementById("timer")
var begin = document.getElementById("start");
var quiz = document.getElementById("quiz");
var answerStatus = document.getElementById("answer")
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var submitForm = document.getElementById("submitScore")

var currentStage = 0;
var correctAnswers = 0;
var timeLeft = 75;
var gameOver = false;


var stages = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["script", "Javascript", "Scripting", "JS"],
        answer: "Script",
    },
    {
        question: "Where is the correct place to insert a Javascript?",
        choices: ["Head", "Body", "Both Sections", "None"],
        answer: "Both Sections",
    },
    {
        question: "What is the correct syntax for reffering to an external script called 'xxx.js'?",
        choices: ["href=", "Name=", "Src=", "var="],
        answer: "Src=",
    },
    {
        question: "Who invented JavaScript?",
        choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Tracy McGrady"],
        answer: "Brendan Eich",
    },
  
];

function startTimer(){
    var timer = setInterval(function(){
        if(gameOver != true && timeLeft>0){
            document.getElementById("timer").innerHTML = "Time Left: " + timeLeft;
            timeLeft -= 1;
        } else {
            clearInterval(timer);  
            gameOver = true;
            if(correctAnswers==0 || timeLeft==0){
                
                timeLeft=0;
            }
            question.textContent = "";
            choices.innerHTML = "";
            answerStatus.textContent = "";
            renderSubmitScore()
        }
    }, 1000);
}



function  renderSubmitScore(){
    var h1 = document.createElement("h4");
    h1.textContent = "Your Score is: " + timeLeft ;
    submitForm.append(h1);
    var br = document.createElement("br");
    var label = document.createElement("label");
    label.setAttribute("for", "initials");
    label.textContent = "Enter Your Initials";
    submitForm.append(label);
    submitForm.append(br);
    var br = document.createElement("br");
    var initials = document.createElement("input");
    initials.setAttribute("type", "text");
    initials.setAttribute("id", "initials");
    initials.setAttribute("name", "initials");
    initials.required= true;
    submitForm.append(initials);
    submitForm.append(br);
    var submit = document.createElement("input");
    submit.setAttribute("class", "btn btn-danger");
    submit.setAttribute("value", "Submit");
    submit.setAttribute("onclick", "saveScore(document.getElementById('initials').value,timeLeft)");
    submitForm.append(submit);
    timer.style.display = "none";
}


function saveScore(userInitials, score){
    var initials = document.getElementById("initials")
    if(initials.value==""){
        answerStatus.textContent = "Please enter initials";
    } else{
        myStorage = window.localStorage;
        myStorage.setItem(userInitials, score);
        window.location.href = "scores.html"
    }
}

function renderQuestions(array) {
    if(array != undefined){
        var newQuestion = document.createTextNode(array["question"]);
        question.append(newQuestion);
        for (i = 0; i < array.choices.length; i++) {
            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-danger");
            button.textContent = array.choices[i];
            button.setAttribute("data-value", array.choices[i]);
            choices.append(button);
        }
    } else {
        gameOver = true;
        answerStatus.textContent = "";
        if(correctAnswers==0){
            timeLeft=0;
        }
    }
}

begin.addEventListener("click", function () {
    startTimer();
    begin.style.display = "none";
    var questionToDisplay = stages[currentStage];
    renderQuestions(questionToDisplay);
});


choices.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        var selectedAnswer = event.target.textContent;
        if(selectedAnswer != stages[currentStage].answer){
           
            timeLeft -= 10;
            answerStatus.textContent = "Incorrect";
        }else {
            
            correctAnswers++;
            answerStatus.textContent = "Correct!";
        }
        setTimeout(function () {
            currentStage++;
            var questionToDisplay = stages[currentStage];
            if(timeLeft<0){
                timeLeft=0;
            }
            question.textContent = "";
            choices.innerHTML = "";
            renderQuestions(questionToDisplay);
        }, 100);
    }
});