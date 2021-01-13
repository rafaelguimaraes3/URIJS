var input = require("fs").readFileSync("stdin", "utf-8")

var [A, B, C] = input.split(" ").map(item => parseFloat(item))

triangulo = (A + B > C && A + C > B && B + C > A ? console.log(`Perimetro = ${(A + B + C).toFixed(1)}`) : console.log(`Area = ${(((A + B) * C) / 2).toFixed(1)}`))
