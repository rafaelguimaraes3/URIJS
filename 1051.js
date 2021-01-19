var input = require("fs").readFileSync("stdin", "utf-8")

var salario = input.split(" ").map(item => parseFloat(item))

switch (salario >= 0) {

    case salario >= 0 && salario <= 2000.00:
        console.log(`Isento`)
        break
    case salario > 2000.00 && salario <= 3000.00:
        salario -= 2000
        salario *= 0.08
        console.log(`R$ ${salario}`)
        break
    case salario > 3000.00 && salario <= 4500.00:
        salario -= 2000
        salario *= 0.08
        salario2 =

            console.log(`R$ ${salario}`)





}