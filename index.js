// referenced README generator
// Example SVG https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg

// Scalable Vector Graphics (SVG) https://en.wikipedia.org/wiki/SVG

// SVG tutorial https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

// Basic SVG shapes https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

// Text in SVG https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

// SVG VS Code extension https://marketplace.visualstudio.com/items?itemName=jock.svg
const { readFile, writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes')
const LogoContent = require('./logoContent');

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

        // switch(expression) {
        //   case x:
        //     // code block
        //     break;
        //   case y:
        //     // code block
        //     break;
        //   default:
        //     // code block
        // }
        // https://www.w3schools.com/js/js_switch.asp
        .then (( { shape, shapeColor, characters, charColor } ) => {
            console.log(shape, shapeColor, characters, charColor)
            let userShape
            switch (shape) {
                case 'circle':
                    console.log('circle')
                    userShape = new Circle()
                    break;
                case 'triangle':
                    userShape = new Triangle()
                    break;
                case 'square':
                    userShape = new Square()
            }
            userShape.setColor(shapeColor)
// Discord study group with H. Burke
            const logoContent = new LogoContent()
            logoContent.setContent(characters, charColor)
            logoContent.setShape(userShape)
            return writeFile('logo.svg', logoContent.render())
        })
        .then(() => {
            console.log('Generated logo.svg!')
        })
}
// const logoContent = generateLogo(answers);
// fs.writeFile
// );
//         });('logo.svg', logoContent, (err) =>
//     err ? console.log(err) : console.log('Genereated logo.svg!')
// }

init();

