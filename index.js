// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

const inquirer = require('inquirer');
const fs = require('fs')
const shapes = require('./lib/shapes.js');

// Get questions
const questions = [
    //   {
    //     type: 'list',
    //     name: 'shape',
    //     message: 'Choose a shape for logo:',
    //     choices: ['Square', 'Triangle' ,'Circle'],
    //  },    
    {
        type: 'input',
        name: 'color',
        message: 'What is the background color of the logo?',
    },
    {
        type: 'input',
        name: 'text',
        message: 'What are the three letters you want in the logo?',
    },
        {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text?',
    },
]


// Output
console.log('Creating a new Shape...');

function writeToFile(fileName, data) {
    const svgContent = `<svg width="300" height="200">${data}</svg>`
    fs.writeFile(fileName, svgContent, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const newTriangle = new shapes.Triangle(answers.color, answers.text, answers.textColor);
        const svgString = newTriangle.render();
        writeToFile("examples/logo.svg",svgString);
    })
}


// Function call to initialize app
init();