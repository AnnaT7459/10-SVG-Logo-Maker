// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  module.exports = Shape;