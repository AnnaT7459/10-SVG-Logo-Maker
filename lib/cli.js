// referenced README generator and OOP student mini project (Module 10)
// Example SVG https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg

// Scalable Vector Graphics (SVG) https://en.wikipedia.org/wiki/SVG

// SVG tutorial https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

// Basic SVG shapes https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

// Text in SVG https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

// SVG VS Code extension https://marketplace.visualstudio.com/items?itemName=jock.svg
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { join } = require('path');
const { createSVG } = require('./examples');

class CLI {
    constructor() {
        this.shape = '';
    }

    run() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shape',
                    choices: ['circle', 'triangle', 'square'],
                },
            ])
            .then(({ shape }) => {
                this.shape = `${shape}`;
                return this.promptColorsAndText();
            });
    }

    promptColorsAndText() {
        return inquirer
            .prompt([
{
    type: 'input',
        name: 'ShapeColor',
            message: 'What color would you like your shape to be?'
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
            },
        ])
        .then((answers) => {
                const logoContent = createSVG({
                    shape: this.shape,
                    shapeColor: answers.shapeColor,
                    characters: answers.characters,
                    charColor: answers.charColor,
                });

                const filePath = join(__dirname, 'logo.svg');
                return writeFile(filePath, logoContent)
                .then(() => {
                    console.log('Generated logoContent.svg!')
                });
            });
        }
}

const cli = new CLI();
cli.run();