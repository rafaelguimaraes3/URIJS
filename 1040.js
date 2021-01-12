var input = require("fs").readFileSync("stdin", "utf-8")

var valores = input.split("\n")

var [N1, N2, N3, N4] = valores[0].split(" ").map(item => parseFloat(item))

if (valores[1] !== undefined) {
    var [NotaExame] = valores[1].split(" ").map(nitem => parseFloat(nitem))
}

var Media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10
var SomaNotaExameMedia = (Media + NotaExame) / 2

console.log("Media: " + Media.toFixed(1))

if (Media >= 7) {
    console.log("Aluno aprovado.")

} else if (Media < 5) {
    console.log("Aluno reprovado.")

} else if (Media >= 5 && Media <= 6.9) {
    console.log("Aluno em exame.")

    console.log(`Nota do exame: ${NotaExame}`)

    if (SomaNotaExameMedia >= 5) {
        console.log("Aluno aprovado.")
        console.log(`Media final: ${SomaNotaExameMedia}`)

    } else {
        console.log("Aluno reprovado.")
        console.log(`Media final: ${SomaNotaExameMedia}`)
    }

}
