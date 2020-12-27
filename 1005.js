var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

var A = parseFloat(lines.shift(5));
var B = parseFloat(lines.shift(5));
var MEDIA = ((A * (3.5 / 11)) + (B * (7.5 / 11)));

//console.log(B);
console.log("MEDIA = " + MEDIA.toFixed(5));