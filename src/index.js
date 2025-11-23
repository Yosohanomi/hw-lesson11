const secondsText = document.querySelector("#seconds");
const secondSecondsText = document.querySelector("#secondSeconds");
const startAgain = document.getElementById("startAgain");
let seconds = Number(secondsText.textContent);
let secondSeconds = Number(secondSecondsText.textContent);

let timerId = setInterval(function() {
    secondsText.textContent = seconds;
    seconds --
    // console.log(seconds);
    if (seconds ==3) {
        alert("Залишилось меньше половини часу!")
    }
    else if (seconds == -1) {
        clearInterval(timerId)
    }
}, 1000);

let timerIdSecond = null;

function resetAnalogClock() {
    if (timerIdSecond) {
        clearInterval(timerIdSecond);
    }
    secondSeconds = 30;
    timer();
}
startAgain.addEventListener("click", ()=> {resetAnalogClock()})

function timer(){
    if (timerIdSecond) {
        clearInterval(timerIdSecond);
    }
    timerIdSecond = setInterval(function() {
    secondSecondsText.textContent = secondSeconds.toFixed(3);
    secondSeconds = secondSeconds - 0.0025
    if (parseInt(secondSeconds) ==10) {
        secondSecondsText.style.transition = "color 1s ease-out";
        secondSecondsText.style.color = "red";
    }
    else if (secondSeconds <= 0) {
        startAgain.style.transition= "transform 1s ease-out";
        startAgain.style.transform = "scale(2)";
        clearInterval(timerIdSecond)
    }
}, 1);
}
timer()