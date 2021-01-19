var input = require("fs").readFileSync("stdin", "utf-8")

var salario = input

switch (salario > 0) {
    case salario > 0 && salario <= 400:
        console.log(`Novo salario: ${(salario * 1.15).toFixed(2)}`)
        console.log(`Reajuste ganho: ${(salario * 0.15).toFixed(2)}`)
        console.log(`Em percentual: 15 %`)
        break
    case salario > 400.00 && salario <= 800.00:
        console.log(`Novo salario: ${(salario * 1.12).toFixed(2)}`)
        console.log(`Reajuste ganho: ${(salario * 0.12).toFixed(2)}`)
        console.log(`Em percentual: 12 %`)
        break
    case salario > 800.00 && salario <= 1200.00:
        console.log(`Novo salario: ${(salario * 1.10).toFixed(2)}`)
        console.log(`Reajuste ganho: ${(salario * 0.10).toFixed(2)}`)
        console.log(`Em percentual: 10 %`)
        break
    case salario > 1200.00 && salario <= 2000.00:
        console.log(`Novo salario: ${(salario * 1.07).toFixed(2)}`)
        console.log(`Reajuste ganho: ${(salario * 0.07).toFixed(2)}`)
        console.log(`Em percentual: 7 %`)
        break
    case salario > 2000.00:
        console.log(`Novo salario: ${(salario * 1.04).toFixed(2)}`)
        console.log(`Reajuste ganho: ${(salario * 0.04).toFixed(2)}`)
        console.log(`Em percentual: 4 %`)
        break

}