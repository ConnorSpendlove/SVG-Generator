const Shape = require('./createShape')

// Makes the square class inherit attributes from Shape class
 class Square extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
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
module.exports = Square