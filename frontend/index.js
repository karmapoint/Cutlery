const Card = require("./card");
const Deck = require("./deck");
const Game = require("./game");
const Timer = require("./timer");
const dragula = require('dragula');
var _ = require('lodash');

document.addEventListener("DOMContentLoaded", function(){
  let currentGame = new Game();
  const currentTimer = new Timer();
  $(".timer").html(currentTimer.counter);
  let potentialAttributes = [];



  // New Game Button --------------------
  $( "#newGame").click(function() {
    currentGame.currentDeck.clearBoard();
    currentGame.resetScore();
    currentTimer.resetTimer();
    currentTimer.startTimer();
    currentGame = new Game();
    potentialAttributes = [];
  });



  let drake = dragula({
    isContainer: (el) => {
      return el.classList.contains('card_start') ||
      el.classList.contains('target');
    }
  }).on('drop',
    (el) => {
    potentialAttributes.push(el.className.slice(0, el.className.length - 11));
    setTimeout(() => {checkForSet(potentialAttributes);},100);
  }
);


  const checkForSet = (potential) => {
    if (potential.length < 3 ){
      return false;
    } else {
        let attributes = [];
        potential.forEach(word => {
          let tempAttr = word.split("_");
          tempAttr.forEach(el => attributes.push(el));
        });
        if (countAttributes(attributes) === true) {
          successfulSet();
          potentialAttributes =[];
        } else {
          alert("Not a set!");
          potentialAttributes =[];
          let failure1 = $("#target1").html();
          $('.card_start:empty:first').html(failure1);
          let failure2 = $("#target2").html();
          $('.card_start:empty:first').html(failure2);
          let failure3 = $("#target3").html();
          $('.card_start:empty:first').html(failure3);
          currentGame.currentDeck.clearTargets();
        }
    }
  };

  const countAttributes = (items) => {
    let counts = _.countBy(items, _.identity);
    return !_.values(counts).includes(2);
  };

  const successfulSet = () => {
    currentGame.updateScore();
    alert("found one!");
    currentTimer.resetTimer();
    currentGame.currentDeck.clearTargets();
    let newCards =
    currentGame.currentDeck.draw3(currentGame.currentDeck.shuffledCards);

  };

  const modal = document.getElementsByClassName('modalBox')[0];
  const tutorialButton = document.getElementById("tutorialButton");
  const tutorialMessage = document.getElementById("tutorialMessage");
  const aboutMessage = document.getElementById("aboutMessage");
  const aboutButton = document.getElementById("aboutButton");
  const closer = document.getElementsByClassName('close')[0];
  const closer2 = document.getElementsByClassName('close')[1];

  tutorialButton.onclick = () => {
    modal.style.display = "flex";
    tutorialMessage.style.display = "flex";
  };

  aboutButton.onclick = () => {
    modal.style.display = "flex";
    aboutMessage.style.display = "flex";
  };

  closer.onclick = () => {
    modal.style.display = "none";
    tutorialMessage.style.display = "none";
  };

  closer2.onclick = () => {
    modal.style.display = "none";
    aboutMessage.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      tutorialMessage.style.display = "none";
      aboutMessage.style.display = "none";
    }
  };



}
);
