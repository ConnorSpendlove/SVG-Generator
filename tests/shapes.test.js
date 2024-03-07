 require("../utils/generateSVG")

describe('Circle', () => {
    it('should create a circle that matches the user attributes', () => {
        const circle = new Circle('lime','SVG','white');
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
        const square = new Square('lime','SVG','white');
        expect(square.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="lime"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`
        );
    });
});

describe('Triangle', () => {
    it('should create a triangle that matches the user attributes', () => {
        const triangle = new Triangle('lime','SVG','white');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="lime"/>
        <text x="100" y="185" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`
        );
    });
});