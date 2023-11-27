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
    const triangle = new Triangle
    const result = triangle.isTriangle('true')

    expect(result).toEqual('true')
  })
})

describe('Square has correct size', () => {
  it('should create a square', () => {
    const square = new Square
    const result = square.isSquare('true')

    expect(result).toEqual('true')
  })
})