const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");

const timeLeft = document.querySelector("#timeLeft");
let score = document.querySelector("#score");

let result = 0;
let currentTime = 60;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  //assign random position's id to the hit position for us to use later
  hitPosition = randomPosition.id;
}

square.forEach((currentSquare) => {
  currentSquare.addEventListener("click", () => {
    if (currentSquare.id === hitPosition) {
      result += 1;
      score.textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  console.log(currentTime);

  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
    alert("Game over ! Your final score is " + result);
  }
}

let timerId = setInterval(countDown, 1000);
