// Constructor Shape imported.
const Shapes = require('./shapes.js');

// A testing suite for Arithmetic is created.
describe('Shape', () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
  describe('color', () => {
    it('should return the correct color input', () => {
    const shape = new Shapes.Triangle('blue','ABC','yellow');
    // shape.color("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

});


// Test for color x2
// Test for 3 letter acronym