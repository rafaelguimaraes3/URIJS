var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

var nome = lines.shift()
var salario = parseFloat(lines.shift())
var comissao = parseFloat(lines.shift())

var percomissao = comissao * 0.15
var total = percomissao + salario

console.log("TOTAL = R$ " + total.toFixed(2))