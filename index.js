// Import dependencies
const inquirer = require('inquirer');
const fs = require('fs')
const shapes = require('./lib/shapes.js');

// Define questions for user
const questions = [
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for logo:',
        choices: ['Square', 'Triangle' ,'Circle'],
     },    
    {
        type: 'input',
        name: 'color',
        message: 'What is the background color of the logo? (color keyword OR a hexadecimal number)',
    },
    {
        type: 'input',
        name: 'text',
        message: 'What are the three letters you want in the logo?',
    },
        {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text? (color keyword OR a hexadecimal number)',
    },
]


// Create a function to initialize app
function init() {
    // Prompt the user with the questions and handle the answers
    inquirer.prompt(questions).then(answers => {
        // Get the user's shape choice
        const shapeChoice = answers.shape;
        let newShape;
        
        // Create an instance of the selected shape class based on the user's choice
        switch (shapeChoice) {
            case 'Square':
                newShape = new shapes.Square(answers.color, answers.text, answers.textColor);
                break;
            case 'Triangle':
                newShape = new shapes.Triangle(answers.color, answers.text, answers.textColor);
                break;
            case 'Circle':
                newShape = new shapes.Circle(answers.color, answers.text, answers.textColor);
                break;
            default:
                console.log('Invalid shape choice.');
                return;
            }
        
        // Render the shape as an SVG string
        const svgString = newShape.render();

        // Write the SVG string to a file
        writeToFile("examples/logo.svg",svgString);
    })
}
                
// Write data to a file
function writeToFile(fileName, data) {
    // Create the SVG content with a fixed width and height
    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${data}</svg>`

    // Write the SVG content to the file
    fs.writeFile(fileName, svgContent, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
    );
}

// Function call to initialize app
init();