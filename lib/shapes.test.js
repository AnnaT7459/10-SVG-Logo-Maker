const shape = require('./shapes.js');

describe('Circle has correct size', () => {
  it('should create a cirle', () => {
    const circle = new Circle
    const result = circle.isCircle ('true')

    expect(result).toEqual('true')
  })
})

describe('Triangle has correct size', () => {
  it('should create a triangle', () => {
    const triangle = new Triangle
    const result = triangle.isTriangle ('true')

    expect(result).toEqual('true')
  })
})

describe('Square has correct size', () => {
  it('should create a square', () => {
    const square = new Square
    const result = square.isSquare ('true')

    expect(result).toEqual('true')
  })
})