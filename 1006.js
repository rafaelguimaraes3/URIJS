var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

var A = parseFloat(lines.shift(1));
var B = parseFloat(lines.shift(1));
var C = parseFloat(lines.shift(1));
var MEDIA = ((A * (2 / 10) + (B * (3 / 10)) + (C * (5 / 10))));


console.log("MEDIA = " + MEDIA.toFixed(1));