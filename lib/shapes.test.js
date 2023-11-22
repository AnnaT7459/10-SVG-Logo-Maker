const Circle = require('./circle');

test('Circle has correct size', () => {
  const circle = new Circle();
//   can change values to test size of circle
  const expectedCenterX = 150;
  const expectedCenterY = 100;
  const expectedRadius = 100;

  circle.setColor('blue');

  const svgString = circle.render();

  expect(svgString).toEqual(`<circle cx="${expectedCenterX}" cy="${expectedCenterY}" r="${expectedRadius}" fill="blue" />`);
});