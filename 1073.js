var input = require("fs").readFileSync("stdin", "utf-8")

i = 2
while (i <= input) {
    console.log(`${i}^2 = ${Math.pow(i, 2)}`)
    i += 2
}

