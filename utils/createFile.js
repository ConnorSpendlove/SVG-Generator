const Circle = require("./Circle.js")
const Triangle = require("./Triangle.js")
const Square = require("./Square.js")
// Checks to see what shape the user selected, and creates a new shape that passes in the data from the user to the constructer, and then calls the render() function according to correct shape.
function selectUserShape(response) {
    if(response.shape === "circle"){
        let newShape = new Circle(response.text, response.textColor, response.shapeColor)
        return newShape.render()
    }
    if(response.shape === "square"){
        let newShape = new Square(response.text, response.textColor, response.shapeColor)
        return newShape.render()
    }
    if(response.shape === "triangle"){
        let newShape = new Triangle(response.text, response.textColor, response.shapeColor)
        return newShape.render()
    }
}
module.exports = selectUserShape