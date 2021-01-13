var input = require("fs").readFileSync("stdin", "utf-8")

var [x, y, z] = input.split(" ").map(item => parseInt(item))
var recebe = input.split(" ").map(item => parseInt(item))

recebe.sort((a, b) => a - b)

var [a, b, c] = recebe

console.log(a)
console.log(b)
console.log(c)
console.log()
console.log(x)
console.log(y)
console.log(z)