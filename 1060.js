var input = require("fs").readFileSync("stdin", "utf-8")

var num = input.split("\n").map(item => parseFloat(item))

var i, p, x

p = 0
i = 1
x = 0

while (i <= 6) {

    if (num[x] > 0.0) {

        p++

    }
    x++

    i++

}

console.log(`${p} valores positivos`)