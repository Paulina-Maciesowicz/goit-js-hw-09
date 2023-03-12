const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    startBtn.disabled = true;
    anotherColor();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  console.log(`Interval with id ${timerId} has stopped!`);
});

const btn = document.querySelector(".change-color");
const chageColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btn.addEventListener("click", anotherColor);
function anotherColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}
