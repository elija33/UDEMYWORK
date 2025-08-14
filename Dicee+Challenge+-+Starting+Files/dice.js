function diceGame() {
  // create a variable called randomNumber1 for palyer 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var firstdice = document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");

  // create a variable called randomNumber2 for palyer 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var seconddice = document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
