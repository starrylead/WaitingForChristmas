const clock = document.querySelector(".clock");
const day = document.querySelector(".days");
function getClock() {
  const dday = new Date("2025-12-25,00:00:00").getTime();
  const today = new Date().getTime();
  const timeLeftSec = (dday - today)/1000;

  let seconds = Math.floor(timeLeftSec)%60;
  let minutes = Math.floor(timeLeftSec/60)%60;
  let hours = Math.floor(timeLeftSec/(60*60))%24;
  let days = Math.floor(timeLeftSec/(60*60*24));

  //  if (seconds === 0) { minutes = (minutes + 1) % 60; }

  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedHours = String(hours).padStart(2, "0");

  if(Math.floor(days) < 0) {
    day.innerText = `D+${Math.abs(Math.floor(days))}`;
  }
  else {
    day.innerText = `D-${Math.floor(days)}`;
  }
  clock.innerText = `${Math.abs(formattedHours)}:${Math.abs(formattedMinutes)}:${Math.abs(formattedSeconds)}`;
}

const init = () => {
  getClock();
  setInterval(getClock, 1000);
};

init();