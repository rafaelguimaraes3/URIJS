var input = require("fs").readFileSync("stdin", "utf-8")

var idade = parseInt(input)

var ano = 365
var mes = 30

var calcAno = parseInt(idade / ano)
var calcMes = parseInt((idade % ano) / mes)
var calcDia = (idade % ano) % mes

console.log(calcAno + ' ano(s)')
console.log(calcMes + ' mes(es)')
console.log(calcDia + ' dia(s)')