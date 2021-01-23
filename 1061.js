var input = require("fs").readFileSync("stdin", "utf-8")

var num = input.split("\n").map(item => parseFloat(item))

var i, p, x

p = 0
i = 1
x = 0

while (i <= 6) {

    if (num[x] > 0.0) {


        var sum = num.reduce(function (k, y) {
            if (num[x] > 0) return k + y
        }, 0)

        p++

    }
    x++
    i++

}




console.log(`${p} valores positivos`)

console.log(sum)
//console.log((teste/6).toFixed(1))