const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const player = document.querySelector(".player");
const opponent = document.querySelector(".opponent");
const message = document.querySelector(".message");

rock.addEventListener("click", () => {
  RockPaperScissors("Rock!");
});

paper.addEventListener("click", () => {
  RockPaperScissors("Paper!");
});

scissors.addEventListener("click", () => {
  RockPaperScissors("Scissors!");
});

function RockPaperScissors(a) {
  const num = Math.floor(Math.random() * 3 + 1);
  console.log(num);

  player.textContent = `Player: ${a}`;
  switch (num) {
    case 1:
      opponent.textContent = `Opponent: Rock`;
      //   if (a === "Rock!" && num === 1) {
      //     message.textContent = "Draw!!";
      //   } else if (a === "Paper!" && num === 1) {
      //     message.textContent = "You Win!";
      //   } else if (a === "Scissors!" && num === 1) {
      //     message.textContent = "You Lose!";
      //   }
      //   break;
      switch (a) {
        case "Rock!":
          message.textContent = "Draw!!";
          break;
        case "Paper!":
          message.textContent = "You Win!";
          break;
        case "Scissors!":
          message.textContent = "You Lose!";
          break;
      }
      break;
    case 2:
      opponent.textContent = `Opponent: Paper`;
      switch (a) {
        case "Rock!":
          message.textContent = "You Lose!";
          break;
        case "Paper!":
          message.textContent = "Draw!!";
          break;
        case "Scissors!":
          message.textContent = "You Win!";
          break;
      }
      break;
    case 3:
      opponent.textContent = `Opponent: Scissors`;
      switch (a) {
        case "Rock!":
          message.textContent = "You Win!";
          break;
        case "Paper!":
          message.textContent = "You Lose!";
          break;
        case "Scissors!":
          message.textContent = "Draw!!";
          break;
      }
      break;
  }
}
