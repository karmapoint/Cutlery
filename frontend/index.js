const Card = require("./card");
const Deck = require("./deck");
const Game = require("./game");
const Timer = require("./timer");
const dragula = require('dragula');
var _ = require('lodash');

document.addEventListener("DOMContentLoaded", function(){
  var currentGame = new Game();


  // New Game Button --------------------
  $( "#newGame").click(function() {
    currentGame.currentDeck.clearBoard();
    currentGame.resetScore();
    new Game();
  });

  let potentialAttributes = [];

  let drake = dragula({
    isContainer: (el) => {
      return el.classList.contains('card_start') ||
      el.classList.contains('target');
    }
  }).on('drop', (el) => {
    potentialAttributes.push(el.className.slice(0, el.className.length - 11));
    checkForSet(potentialAttributes);
  });


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
    currentGame.currentDeck.clearTargets();
    let newCards =
    currentGame.currentDeck.draw3(currentGame.currentDeck.shuffledCards);
  };

}
);
