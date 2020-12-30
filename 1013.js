var input = require("fs").readFileSync("stdin", "utf-8")

var [A, B, C] = input.split(" ").map(item => parseInt(item))

var calculoAB = (A + B + Math.abs(A - B)) / 2

var calculoXC = (C + calculoAB + Math.abs(C - calculoAB)) / 2

console.log(calculoXC + " eh o maior")