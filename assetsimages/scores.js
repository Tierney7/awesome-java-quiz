var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// event listener, clicl button to play
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// retrieves local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    }


// Event listener to go back home/index
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
}); 