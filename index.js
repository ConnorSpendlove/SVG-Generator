// Requires all neccessary tools and files
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateSVG.js');
const questions = require('./utils/questions.js');
const createShape = require('./utils/generateSVG.js');

// Creates a new file
function writeToFile(response) {
  const create = createShape(response)
    fs.writeFile(fileName, create, err => {
        if (err) {
          return console.log(err);
        }
        console.log(`Successfully generated logo.svg`);
      });
    }

// This function takes the user data answered in the console, and generates an SVG file custom made to that information.
    function init() {
        inquirer.prompt(questions)
        .then(function(data) {
          writeToFile("logo.svg", generateSVG(data));
          });
        }
    
    init();