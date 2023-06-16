// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

function Shape(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
}

// -------------
function Triangle(color, text, textColor){
  Shape.call(this, color, text, textColor);
  this.type = "Triangle";
}

Triangle.prototype.render = function() {
  return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}/>`;
};

// -------------
function Circle(color, text, textColor){
  Shape.call(this, color, text, textColor);
  this.type = "Circle";
}

Circle.prototype.render = function() {
  return `<circle cx="100" cy="100" r="50" fill="${this.color}/>`;
};

// -------------
function Square(color, text, textColor){
  Shape.call(this, color, text, textColor);
  this.type = "Square";
}

Square.prototype.render = function() {
  return `<rect width="300" height="100" fill="${this.color}/>`;
};
