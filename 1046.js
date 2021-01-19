var input = require("fs").readFileSync("stdin", "utf-8")

var [inicial, final] = input.split(" ").map(item => parseInt(item))

const dia = 24

if (inicial >= final) {
    inicial = dia - inicial
    total = inicial + final
    console.log(`O JOGO DUROU ${total} HORA(S)`)
} else {
    console.log(`O JOGO DUROU ${final - inicial} HORA(S)`)
}