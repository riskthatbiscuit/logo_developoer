// Constructor Shape imported.
const Shapes = require('./shapes.js');

// A testing suite for Arithmetic is created.
describe('Shape', () => {
  describe('color', () => {
    it('should return the correct color input', () => {
      const shape = new Shapes.Triangle('blue', 'ABC', 'yellow');
      expect(shape.color).toEqual('blue');
    });
  });

  describe('text', () => {
    it('should return the correct text input', () => {
      const shape = new Shapes.Triangle('blue', 'ABC', 'yellow');
      expect(shape.text).toEqual('ABC');
    });
  });

  describe('textColor', () => {
    it('should return the correct text-color input', () => {
      const shape = new Shapes.Triangle('blue', 'ABC', 'yellow');
      expect(shape.textColor).toEqual('yellow');
    });
  });

});


// Test for color x2
// Test for 3 letter acronym