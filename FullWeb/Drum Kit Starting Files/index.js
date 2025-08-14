let allbuttonclick = document.querySelectorAll(".set button");
for (var i = 0; i < allbuttonclick.length; i++) {
  document
    .querySelectorAll(".set button")
    [i].addEventListener("click", handleClick);

  function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSounds(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    this.style.color = "white";
  }
}

// Using the keybord Press
document.addEventListener("keydown", keybordUse);

function keybordUse(event) {
  makeSounds(event.key);

  buttonAnimation(event.key);
}

// function the make the sounds
function makeSounds(key) {
  switch (key) {
    case "w":
      var audio = new Audio("../sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("../sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("../sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("../sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("../sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("../sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("../sounds/crash.mp3");
      audio.play();
      break;
    default:
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
