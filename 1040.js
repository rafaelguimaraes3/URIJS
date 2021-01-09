var input = require("fs").readFileSync("stdin", "utf-8")

var valores = input.split("\n")

var [N1, N2, N3, N4] = valores[0].split(" ").map(item => parseFloat(item))
var [NotaExame] = valores[1].split(" ").map(nitem => parseFloat(nitem))

var N1 = (N1 * ((2 / 10).toFixed(1)))
var N2 = (N2 * ((3 / 10).toFixed(1)))
var N3 = (N3 * ((4 / 10).toFixed(1)))
var N4 = (N4 * ((1 / 10).toFixed(1)))

var Media = parseFloat((N1 + N2 + N3 + N4).toFixed(1))
var SomaNotaExameMedia = Media + NotaExame
var NovaNota = SomaNotaExameMedia / 2

console.log("Media: " + Media)

if (Media >= 7) {
    console.log("Aluno aprovado.")

} else if (Media < 5) {
    console.log("Aluno reprovado.")

} else if (Media >= 5 && Media <= 6.9) {
    console.log("Aluno em exame.")
    console.log(`Nota do exame: ${NotaExame}`)

    if (NovaNota >= 5) {
        console.log("Aluno aprovado.")
        console.log(`Media final: ${NovaNota}`)

    } else {
        console.log("Aluno reprovado.")
        console.log(`Media final: ${NovaNota}`)
    }

}
