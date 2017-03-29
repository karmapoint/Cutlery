
class Card {
  constructor(shape, color, shading, number){
    this.shape = shape;
    this.color = color;
    this.shading = shading;
    this.number = number;
    this.cardClass = this.shape + "_" + this.color + "_" + this.shading + "_" + this.number;
  }

}
module.exports = Card;
