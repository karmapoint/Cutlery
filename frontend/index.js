const Card = require("./card");
const Deck = require("./deck.js");

document.addEventListener("DOMContentLoaded", function(){
  const currentDeck = new Deck();
  let x = currentDeck.shuffledCards[0];
  let y = `${x.shapeNumber} ${x.colorShading}`;
  console.log(y);
  $("#root").append(`<div class=${y}></div>`);
});
