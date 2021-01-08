var input = require("fs").readFileSync("stdin", "utf-8")


var [codigo, quantidade] = input.split(" ").map(item => parseFloat(item))


var itens = [4.00, 4.50, 5.00, 2.00, 1.50]

switch (codigo) {
    case 1:
        console.log("Total: R$ " + (quantidade * itens[0]).toFixed(2))
        break
    case 2:
        console.log("Total: R$ " + (quantidade * itens[1]).toFixed(2))
        break
    case 3:
        console.log("Total: R$ " + (quantidade * itens[2]).toFixed(2))
        break
    case 4:
        console.log("Total: R$ " + (quantidade * itens[3]).toFixed(2))
        break
    case 5:
        console.log("Total: R$ " + (quantidade * itens[4]).toFixed(2))
        break
    default:
        console.log(`Código Inválido`)
        break
}
