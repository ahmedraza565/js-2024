let playChoice = confirm("Do you want to play rock, paper, scissors?");

if (playChoice) {
  let userChoice = prompt("Please enter rock, paper or scissors!");
  if (userChoice) {
    userChoice = userChoice.trim().toLowerCase();
    if (
      userChoice === "rock" ||
      userChoice === "paper" ||
      userChoice === "scissors"
    ) {
      let computerNum = Math.floor(Math.random() * 3) + 1;
      let computerChoice =
        computerNum === 1 ? "rock" : computerNum === 2 ? "paper" : "scissors";

      let result =
        userChoice === computerChoice
          ? `User: ${userChoice}\nComputer: ${computerChoice}\nTie!`
          : userChoice === "rock" && computerChoice === "paper"
          ? `User: ${userChoice}\nComputer: ${computerChoice}\nComputer wins!`
          : userChoice === "paper" && computerChoice === "rock"
          ? `User: ${userChoice}\nComputer: ${computerChoice}\nUser wins!`
          : userChoice === "scissors" && computerChoice === "rock"
          ? `User: ${userChoice}\nComputer: ${computerChoice}\nComputer wins!`
          : userChoice === "rock" && computerChoice === "scissors"
          ? `User: ${userChoice}\nComputer: ${computerChoice}\nUser wins!`
          : userChoice === "scissors" && computerChoice === "paper"
          ? `User: ${userChoice}\nComputer: ${computerChoice}\nUser wins!`
          : `User: ${userChoice}\nComputer: ${computerChoice}\nComputer wins!`;

      alert(result);

      let playAgain = confirm("Do you want to play again?");

      playAgain ? location.reload() : alert("See you next time!");
    } else {
      alert("You didn't enter rock, paper or scissors!");
    }
  } else {
    alert("Seems like you changed your mind!");
  }
} else {
  alert("No problem! Next time.");
}
