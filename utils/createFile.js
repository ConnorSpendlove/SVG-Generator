const Circle = require("../utils/generateSVG")
const Triangle = require("../utils/generateSVG")
const Square = require("../utils/generateSVG")

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