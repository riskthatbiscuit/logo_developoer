// Constructor Shape imported.
const Shapes = require('./shapes.js');

// A testing suite for Arithmetic is created.
describe('shape', () => {
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

  describe('hexColor', () => {
    it('should return the correct color from hex input', () => {
      const shape = new Shapes.Triangle('#0000FF', 'ABC', 'yellow');
      expect(shape.color).toEqual('#0000FF');
    });
  });  
});
