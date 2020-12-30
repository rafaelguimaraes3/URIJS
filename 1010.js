var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n")

var [cod1, numpeca1, valorunit1] = lines.shift().split(" ")
var [cod2, numpeca2, valorunit2] = lines.shift().split(" ")

var calculo = (numpeca1 * valorunit1) + (numpeca2 * valorunit2)

console.log("VALOR A PAGAR: R$ " + calculo.toFixed(2))