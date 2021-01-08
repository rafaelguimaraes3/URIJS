var input = require("fs").readFileSync("stdin", "utf-8")

var recebe = input

if (recebe >= 0 && recebe <= 25) {

    console.log("Intervalo [0,25]")

} else if (recebe > 25 && recebe <= 50) {

    console.log("Intervalo (25,50]")

} else if (recebe > 50 && recebe <= 75) {

    console.log("Intervalo (50,75]")

} else if (recebe > 75 && recebe <= 100) {

    console.log("Intervalo (75,100]")

} else {

    console.log("Fora de intervalo")
}


