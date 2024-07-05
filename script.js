// variables

let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";

// display
window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTitle.classList.add("active");
};

// start timer
function start() {
  // change button
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  // change the time
  seconds = 59;

  let workMinutes = workTime -1;
  let breakMinutes = breakTime -1;

  let breakCount = 0;

  // countdown
  const timerFuncion = () => {
    // change the display
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    // start
    seconds -= 1;

    if (seconds === 0) {
      workMinutes -= 1;
      if(workMinutes === -1) {
        if(breakCount % 2 === 0) {
          // start break
          workMinutes = breakMinutes;
          breakCount ++;

          // change title
          workTitle.classList.remove("active");
          breakTitle.classList.add("active");
        } else {
          // continue work
          workMinutes = workTime;
          breakCount ++;

          // change the painel
          breakTitle.classList.remove("active");
          workTitle.classList.add("active");
        }
      }
      seconds = 59;
    }
  };

  // start countdown
  setInterval(timerFuncion, 1000);
}