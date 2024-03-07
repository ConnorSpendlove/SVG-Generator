// gets the shape classes 
const Circle = require("../utils/Circle")
const Triangle = require("../utils/Triangle")
const Square = require("../utils/Square")

// tests to see if the svg matches the data that the user puts in
describe('Circle', () => {
    it('should create a circle that matches the user attributes', () => {
        // creates new constructer
        const circle = new Circle('SVG','white','lime');
        // expects the svg to match the constructer
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="lime" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});

describe('Square', () => {
    it('should create a square that matches the user attributes', () => {
        const square = new Square('SVG','white','lime');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="lime"/>
            <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});

describe('Triangle', () => {
    it('should create a triangle that matches the user attributes', () => {
        const triangle = new Triangle('SVG','white','lime');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="lime"/>
            <text x="100" y="185" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});