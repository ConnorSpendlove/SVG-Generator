
function generateSVG(data){
    if (data.shape = "cirlce"){
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
</svg>`
    }
    else if (data.shape = "square"){
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="150" height="150" x="10" y="10" style="${data.shapeColor}"/>
          <text x="85" y="105" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </svg>`
    }
    else if (data.shape = "triangle"){
        ``
    }

}

module.exports = generateSVG;