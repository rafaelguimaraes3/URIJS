var input = require("fs").readFileSync("stdin", "utf-8")

var num = input.split(" ").map(item => parseInt(item))

num.sort((a, b) => a - b)

var [A, B] = num

mult = (B % A == 0 ? console.log(`Sao Multiplos`) : console.log(`Nao sao Multiplos`))