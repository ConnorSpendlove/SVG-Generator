const Shape = require('./createShape')

// Makes the circle class inherit attributes from Shape class
class Circle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
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

module.exports = Circle