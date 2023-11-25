// referenced README generator
// Example SVG https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg

// Scalable Vector Graphics (SVG) https://en.wikipedia.org/wiki/SVG

// SVG tutorial https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

// Basic SVG shapes https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

// Text in SVG https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

// SVG VS Code extension https://marketplace.visualstudio.com/items?itemName=jock.svg
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes')

function init() {
    inquirer  
        .prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape for your logo.',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like your shape to be?',
            },
            {
                type: 'input',
                name: 'characters',
                message: 'Enter 3 characters of text for your logo.',
            },
            {
                type: 'input',
                name: 'charColor',
                message: 'What color would you like your text to be?',
            }
        ])

        .then((answers) => {
            const logoContent = generateLogo(answers);
            fs.writeFile('logo.svg', logoContent, (err) =>
                err ? console.log(err) : console.log('Genereated logo.svg!')
            );
        });
}

init();

// Circle
// `<svg width = "300" height = "200"><circle cx="150" cy="100" r="50" fill="${shapeColor}/><text x = "0" y = "15" fill = ${charColor}>${characters}/text></svg>`

// Triangle
// `<svg height="300" width="200">
//       <polygon points="100,20 10,180 190,180" style="fill:"${shapeColor}"/><text x = "0" y = "15" fill = ${this.charColor}>${characters}/text>
//     </svg>`

// Square
// `<svg width="300" height="200">
//     <rect x = "50" y = "20" width = "150" height = "150" style = fill = "${shpaeColor}"/><text x = "0" y = "15" fill = ${charColor}>${characters}/text>
//   </svg>`