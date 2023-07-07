// The parent Shape class representing a basic shape with color, text, and text color properties
function Shape(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
    this.textElement = `<text x="75" y="150" fill="${this.textColor}" font-size="75">${this.text}</text>`
}

// -------------
// The Triangle class, inhereting from the Shape class
function Triangle(color, text, textColor){
  // Set default values if no arguments are provided
  color = color || 'black';
  text = text || 'ABC';
  textColor = textColor || 'white';

  // Call the parent Shape constructor
  Shape.call(this, color, text, textColor);
}

Triangle.prototype.render = function() {
  const trianglePoints = "150,10 280,190 20,190"; 
  const triangleElement = `<polygon points="${trianglePoints}" fill="${this.color}"/>`;
  return `${triangleElement}${this.textElement}`
};

// -------------
// The Circle class, inhereting from the Shape class
function Circle(color, text, textColor){
  // Set default values if no arguments are provided
  color = color || 'black';
  text = text || 'ABC';
  textColor = textColor || 'white';
  Shape.call(this, color, text, textColor);
}

Circle.prototype.render = function() {
  const circleRadius = 100; 
  const circleCenterX = 150; 
  const circleCenterY = 100;

  const circleElement = `<circle cx="${circleCenterX}" cy="${circleCenterY}" r="${circleRadius}" fill="${this.color}"/>`;
  return `${circleElement}${this.textElement}`
};

// -------------
// The Square class, inhereting from the Shape class
function Square(color, text, textColor){
  // Set default values if no arguments are provided
  color = color || 'black';
  text = text || 'ABC';
  textColor = textColor || 'white';
  Shape.call(this, color, text, textColor);
}

Square.prototype.render = function() {
  const squareWidth = 200;
  const squareHeight = 200;
  const squareX = 50;
  const squareY = 0;
  
  const squareElement = `<rect x="${squareX}" y="${squareY}" width="${squareWidth}" height="${squareHeight}" fill="${this.color}"/>`;
  return `${squareElement}${this.textElement}`
};

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};