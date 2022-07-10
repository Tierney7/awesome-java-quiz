var secondsLeft = 50

function updateTimer() {
    var timer =document.getElementById("timer")
    timer.innerText = (secondsLeft)

}
function x() {
    secondsLeft -=1
        updateTimer()
}
var interval = setInterval(x, 1000)