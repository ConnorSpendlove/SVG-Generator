// Sets parent attricbutes of all shapes.
module.exports = class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
}
// Makes the circle class inherit attributes from Shape class
module.exports = class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
    render() {
        // svg outline from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
}
// Makes the square class inherit attributes from Shape class
module.exports = class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
    render() {
        // svg outline from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
}
// Makes the triangle class inherit attributes from Shape class
module.exports = class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
    render() {
        // svg outline from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
   
}



