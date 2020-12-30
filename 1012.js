var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split(' ');

const pi = 3.14159

var A = parseFloat(lines.shift())

var B = parseFloat(lines.shift())

var C = parseFloat(lines.shift())

var triangulo = (A * C) / 2
var circulo = pi * (C ** 2)
var trapezio = ((A + B) * (C)) / 2
var quadrado = B * B
var retangulo = A * B

console.log("TRIANGULO: " + triangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))