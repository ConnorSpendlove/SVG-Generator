// Array of all valid color keywords from 
const colorKeywords = require('./colorKeywords.js')
// Array of questions
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter text up to 3 characters long to go inside of your SVG.",
        validate: function(answer){
            if (answer.length > 3){
                return console.log(" You must enter 3 characters or less.");
             }
             else if (answer.length < 1){
                return console.log(" You must enter something.");

             }
             return true;
        }
    },
    // Select how you want to enter your text color. Color Keyword or Hexidecimal.
    {
        type: "list",
        name: "textColorOptions",
        message: "Please select a method to pick a text color",
        choices: ["Color Keyword", "Hexadecimal"]
    },
    // If the user selects Color Keyword, this object is true
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color keyword.",
        when: (answers) => {
            if(answers.textColorOptions === 'Color Keyword') {
                return true;
            }
            return false;
        },
        // if there is no answer
        validate: function(answer){
            if (answer.length < 1){
                return console.log("\n You must enter a text-color");
             }
            //  If color entered is not equal to any color in the colorKeywords Array, this is false
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
            }
    },
    // If user selects hexidecimal this object is true
    {
        type: "input",
        name: "textColor",
        message: "Please enter a hexadecimal number (#ABCDEF)",
        when: (answers) => {
            if(answers.textColorOptions === 'Hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            // if there is no answer
            if (answer.length < 1){
                return console.log("\n You must enter a text-color");
             }
            //  Makes a variable that is equal to the RegEx pattern
            const RegEx = '^#[A-Fa-f0-9]{6}$'
            // if the answer is not valid
            if (!answer.match(RegEx)) {
                return console.log("\n Please enter a valid hexadecimal number")
            }
            return true;
        }
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape for your SVG.",
        choices: ["circle", "triangle", "square"]

    },
    
       // Select how you want to enter your shape color. Color Keyword or Hexidecimal.
    {
        type: "list",
        name: "shapeColorOptions",
        message: "Please select a method to pick a shape color",
        choices: ["Color Keyword", "Hexadecimal"]
    },
    // If the user selects Color Keyword, this object is true
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color keyword.",
        when: (answers) => {
            if(answers.shapeColorOptions === 'Color Keyword') {
                return true;
            }
            return false;
        },
        // if there is no answer
        validate: function(answer){
            if (answer.length < 1){
                return console.log("\n You must enter a shape-color");
             }
            //  If color entered is not equal to any color in the colorKeywords Array, this is false
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
            }
    },
    // If user selects hexidecimal this object is true
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a hexadecimal number (#ABCDEF)",
        when: (answers) => {
            if(answers.shapeColorOptions === 'Hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            // if there is no answer
            if (answer.length < 1){
                return console.log("\n You must enter a shape-color");
             }
            //  Makes a variable that is equal to the RegEx pattern
            const RegEx = '^#[A-Fa-f0-9]{6}$'
            // if the answer is not valid
            if (!answer.match(RegEx)) {
                return console.log("\n Please enter a valid hexadecimal number")
            }
            return true;
        }
    },
]
module.exports = questions;