// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

function Shape(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
    this.textElement = `<text x="150" y="100" fill="${this.textColor}">${this.text}</text>`
}

// -------------
function Triangle(color, text, textColor){
  Shape.call(this, color, text, textColor);
}

Triangle.prototype.render = function() {
  const trianglePoints = "150,10 280,190 20,190"; 
  const triangleElement = `<polygon points="${trianglePoints}" fill="${this.color}"/>`;
  return `${triangleElement}${this.textElement}`
};

// -------------
function Circle(color, text, textColor){
  Shape.call(this, color, text, textColor);
}

Circle.prototype.render = function() {
  const circleRadius = 80; 
  const circleCenterX = 150; 
  const circleCenterY = 100;

  const circleElement = `<circle cx="${circleCenterX}" cy="${circleCenterY}" r="${circleRadius}" fill="${this.color}"/>`;
  return `${circleElement}${this.textElement}`

};

// -------------
function Square(color, text, textColor){
  Shape.call(this, color, text, textColor);
}

Square.prototype.render = function() {
  const squareWidth = 160;
  const squareHeight = 160;
  const squareX = 70;
  const squareY = 20;
  
  const squareElement = `<rect x="${squareX}" y="${squareY}" width="${squareWidth}" height="${squareHeight}" fill="${this.color}"/>`;
  return `${squareElement}${this.textElement}`
};

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};