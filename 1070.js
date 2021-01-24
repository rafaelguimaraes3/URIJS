var input = require("fs").readFileSync("stdin", "utf-8")

i = 0

while (i < 6) {

    if (input % 2 != 0) {

        console.log(input)
        i++

    }

    input++
}