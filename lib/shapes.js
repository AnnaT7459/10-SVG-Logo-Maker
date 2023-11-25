// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }

  class Circle extends Shape {
    render() {
      return `<svg width = "300" height = "200"><circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }

  class Triangle extends Shape {
    render() {
      return `<svg width = "300" height = "200" id = "triangle" viewBox = ><triangle fill="${this.color}" />`;
    }
  }

  class Square extends Shape {
    render() {
      return `<svg width = "300" height = "200" id = "square" viewBox = ><square fill="${this.color}" />`;
    }
  }
  
  module.exports = Shape, Circle, Triangle, Square