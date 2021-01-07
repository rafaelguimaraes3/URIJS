var input = require("fs").readFileSync("stdin", "utf-8")

var [A, B, C] = input.split(" ").map(item => parseFloat(item))

const delta = B ** 2 - 4 * A * C

var x1 = (-B + Math.sqrt(delta)) / (2 * A)

var x2 = (-B - Math.sqrt(delta)) / (2 * A)

if (delta < 0 || A == 0) {
    console.log("Impossivel calcular")

} else {

    console.log(`R1 = ${x1.toFixed(5)}`)
    console.log(`R2 = ${x2.toFixed(5)}`)
}



