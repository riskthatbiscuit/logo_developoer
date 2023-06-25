// Constructor Shape imported.
const Shapes = require('./shapes.js');

// A testing suite for Shapes is created.
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

  describe('Traingle',() => {
    it('should return the correct Triangle shape and default values', () => {
      const triangle = new Shapes.Triangle();
      expect(triangle.render()).toEqual('<polygon points="150,10 280,190 20,190" fill="black"/><text x=\"75\" y=\"150\" fill=\"white\" font-size=\"75\">ABC</text>');
    })
  })

  describe('Circle',() => {
    it('should return the correct Circle shape and default values', () => {
      const circle = new Shapes.Circle();
      expect(circle.render()).toEqual('<circle cx=\"150\" cy=\"100\" r=\"100" fill="black"/><text x=\"75\" y=\"150\" fill=\"white\" font-size=\"75\">ABC</text>');
    })
  })

  describe('Square',() => {
    it('should return the correct Square shape and default values', () => {
      const square = new Shapes.Square();
      expect(square.render()).toEqual('<rect x=\"50\" y=\"0\" width=\"200\" height=\"200" fill="black"/><text x=\"75\" y=\"150\" fill=\"white\" font-size=\"75\">ABC</text>');
    })
  })
});
