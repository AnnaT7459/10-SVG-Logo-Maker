const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle has correct size', () => {
  it('should create a circle', () => {
    const expectedResult = '<circle cx="150" cy="100" r="50" fill="purple"/>'
    const circle = new Circle()
    circle.setColor ('purple')
    const result = circle.render()

    expect(result).toEqual(expectedResult)
  })
})

describe('Triangle has correct size', () => {
  it('should create a triangle', () => {
    const expectedResult = '<polygon points="140,20 50,180 230,180" fill="orange"/>'
    const triangle = new Triangle
    triangle.setColor ('orange')
    const result = triangle.render()

    expect(result).toEqual(expectedResult)
  })
})

describe('Square has correct size', () => {
  it('should create a square', () => {
    const expectedResult = '<rect x = "50" y = "20" width = "150" height = "150" fill="green"/>'
    const square = new Square
    square.setColor ('green')
    const result = square.render()

    expect(result).toEqual(expectedResult)
  })
})