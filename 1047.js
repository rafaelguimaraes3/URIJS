var input = require("fs").readFileSync("stdin", "utf-8")

var [hInicial, mInicial, hFinal, mFinal] = input.split(" ").map(item => parseInt(item))

const dia = 24
const hora = 60

if (mInicial >= mFinal) {
    mInicial = hora - mInicial
    totalMinuto = mInicial + mFinal
}
if (hInicial >= hFinal) {
    hInicial = dia - hInicial
    totalHora = hInicial + hFinal
    console.log(`O JOGO DUROU ${totalHora} HORA(S) E ${totalMinuto} MINUTO(S)`)
} else {
    console.log(`O JOGO DUROU ${hFinal - hInicial} HORA(S) E ${mFinal - mInicial} MINUTO(S)`)
}