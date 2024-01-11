let [hours, minutes, seconds] = [0, 0, 0];
        let lapCounter = 1;
        let timer = null;

        let displayTime = document.getElementById("Stopwatch");
        let lapTimesList = document.getElementById("lapTimes");

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    clearLapTimes();
    lapCounter = 1;
}

function recordLap() {
    let lapTime = displayTime.innerHTML;
    let lapItem = document.createElement("ul");
    lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
    lapTimesList.appendChild(lapItem);
    lapCounter++;
}

function clearLapTimes() {
    lapTimesList.innerHTML = "";
}