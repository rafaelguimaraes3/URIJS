const { parse } = require("path");

var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

var numfunc = parseInt(lines.shift())
var htrab = parseInt(lines.shift())
var valorhora = parseFloat(lines.shift(2))

var sal = htrab * valorhora

console.log("NUMBER = " + numfunc)
console.log("SALARY = U$ " + sal.toFixed(2))