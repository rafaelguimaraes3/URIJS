var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n")

const pi = 3.14159
var r = lines.shift()

var form = (4.0 / 3) * pi * (r ** 3)

console.log("VOLUME = " + form.toFixed(3))