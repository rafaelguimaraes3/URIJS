var input = require("fs").readFileSync("stdin", "utf-8")

var lines = input.split("\n")

var tempo = lines.shift()
var velocidade = lines.shift()
const autonomia = 12

var calc = (tempo * velocidade) / autonomia

console.log(calc.toFixed(3))