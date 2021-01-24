var input = require("fs").readFileSync("stdin", "utf-8")

var num = input.split("\n").map(item => parseFloat(item))

p = 0
i = 0
x = 0

while (i < 6) {

    if (num[i] > 0) {
        p++
        x += num[i]
    }

    i++
}
console.log(`${p} valores positivos`)
console.log((x / p).toFixed(1))