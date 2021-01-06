var input = require("fs").readFileSync("stdin", "utf-8")

var dinheiro = parseFloat(input)

var notas = [100, 50, 20, 10, 5, 2]

console.log("NOTAS:")

for (var nota of notas) {
    var qtNotas = parseInt(dinheiro / nota)
    console.log(`${qtNotas} nota(s) de R$ ${nota.toFixed(2)}`)
    dinheiro %= nota

}

var moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("MOEDAS:")

for (var moeda of moedas) {
    var qtMoedas = parseInt((dinheiro / moeda).toFixed(2))
    console.log(`${qtMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`)
    dinheiro %= moeda
}

