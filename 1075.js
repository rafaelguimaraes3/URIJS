var input = require("fs").readFileSync("stdin", "utf-8")

i = 1

while (i < 10000) {
    if (i % input == 2) {
        console.log(i)
    }

    i++
}

