
const Shape = require('./shapes');

class Circle extends Shape {
  render() {
    // reference: 
    // circle cx="25" cy="75" r="20"
    // circle cx="150" cy="100" r="80"
    // circle cx="150" cy="100" r="100"
    // not sure which one to use for 300 x 200 px for image?
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

module.exports = Circle;