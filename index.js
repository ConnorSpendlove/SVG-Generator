// Requires all neccessary tools and files
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions.js');
const createFile = require('./utils/createFile.js');


// Creates a new file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log(`Successfully generated logo.svg`);
    });
  }

// This function takes the user data answered in the console, and generates an SVG file custom made to that information.
function init() {
  inquirer.prompt(questions)
  .then(function(response) {
    writeToFile("logo.svg", createFile(response));
    });
  }
    
    init();