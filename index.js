// referenced README generator
const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = ({ text, textColor, shape, shapeColor })

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter 3 characters of text for your logo.',
            },
            {
                type: 'input',
                name: 'textColor',
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
                err ? console.log(err) : console.log('Successfully created logo.svg!')
            );
        });
}

init();