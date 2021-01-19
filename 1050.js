var input = require("fs").readFileSync("stdin", "utf-8")

var num = input.split(" ").map(item => parseInt(item))

switch (num > 0) {
    case num == 61:
        console.log("Brasilia")
        break
    case num == 71:
        console.log("Salvador")
        break
    case num == 11:
        console.log("Sao Paulo")
        break
    case num == 21:
        console.log("Rio de Janeiro")
        break
    case num == 32:
        console.log("Juiz de Fora")
        break
    case num == 19:
        console.log("Campinas")
        break
    case num == 27:
        console.log("Vitoria")
        break
    case num == 31:
        console.log("Belo Horizonte")
        break
    default:
        console.log("DDD nao cadastrado")

}