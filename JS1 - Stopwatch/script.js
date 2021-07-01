// web load done use this function
window.onload = function change() {
    var seconds = 00;   //-      : 00 :
    var tens = 00;      //-      :    : 00
    var hours = 00;     //-   00 :    :
    var getIdSeconds = document.getElementById("seconds");
    var getIdTens = document.getElementById("tens");
    var getIdHours = document.getElementById("hours")
    var buttonStart = document.getElementById("btn-Start")
    var buttonStop = document.getElementById("btn-Stop")
    var buttonReset = document.getElementById("btn-Reset")
    var Interval; // store time

    buttonStart.onclick = function () {
        clearInterval(Interval); // clear time before value
        Interval = setInterval(startTimer, 100) // 1000 = 1s
    }
    buttonStop.onclick = function () {
        clearInterval(Interval); // stop time now
    }
    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        hours = "00";
        getIdTens.innerHTML = tens;
        getIdSeconds.innerHTML = seconds;
        getIdHours.innerHTML = hours;
    }
    function startTimer() {
        tens++;
        if (tens <= 9) {
            getIdTens.innerHTML = "0" + tens; // 01 02 03---- 09
        }
        if (tens > 9) {
            getIdTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            getIdSeconds.innerHTML = "0" + seconds;
            tens = 0;
            getIdTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            getIdSeconds.innerHTML = seconds;
        }
        if (seconds > 99) {
            hours++;
            getIdHours.innerHTML = "0" + hours;
            seconds = 0;
            getIdSeconds.innerHTML = "0"+ 0;
        }


    }
}