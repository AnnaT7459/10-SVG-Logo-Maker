// referenced README generator
// Example SVG https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg

// Scalable Vector Graphics (SVG) https://en.wikipedia.org/wiki/SVG

// SVG tutorial https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

// Basic SVG shapes https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

// Text in SVG https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

// SVG VS Code extension https://marketplace.visualstudio.com/items?itemName=jock.svg
const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = ({ characters, charColor, shape, shapeColor })

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'characters',
                message: 'Enter 3 characters of text for your logo.',
            },
            {
                type: 'input',
                name: 'charColor',
                message: 'What color would you like your text to be?',
            },
            {
                type: 'list',
                name: 'shape',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like your shape to be?'
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