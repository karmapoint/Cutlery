
class Card {
  constructor(shape, color, shading, number){
    this.shape = shape;
    this.color = color;
    this.shading = shading;
    this.number = number;
    this.shapeNumber = this.shape + "_" + this.number;
    this.colorShading = this.color + "_" + this.shading;
  }

}
module.exports = Card;
