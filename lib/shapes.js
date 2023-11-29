// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
// reference: Module 10 Activity 8 Solved

class Shape {
  constructor() {
    this.shapeColor = '';
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor
  }
}

class Circle extends Shape {
  // w3 schools svg tutorial
  // link: https://www.w3schools.com/graphics/svg_intro.asp
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="140,20 50,180 230,180" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x = "50" y = "20" width = "150" height = "150" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Circle, Triangle, Square }
