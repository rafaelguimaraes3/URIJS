var input = require("fs").readFileSync("stdin", "utf-8")

var tempo = parseInt(input)

var horas = 3600
var minutos = 60
var segundos = 60

var converterHoras = parseInt(tempo / horas)
var converterMinutos = parseInt((tempo % horas) / minutos)
var converterSegundos = tempo % minutos

console.log(`${converterHoras}:${converterMinutos}:${converterSegundos}`)