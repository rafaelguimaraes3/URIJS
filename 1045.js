var input = require("fs").readFileSync("stdin", "utf-8")

var num = input.split(" ").map(item => parseFloat(item))

num.sort((a, b) => b - a)

var [A, B, C] = num


if (A >= (B + C)) {
    console.log("NAO FORMA TRIANGULO")
} if ((Math.pow(A, 2)) == ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {
    console.log("TRIANGULO RETANGULO")
} if ((Math.pow(A, 2)) > ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {
    console.log("TRIANGULO OBTUSANGULO")
} if ((Math.pow(A, 2)) < ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {
    console.log("TRIANGULO ACUTANGULO")
} if ((A == B) && (B == C)) {
    console.log("TRIANGULO EQUILATERO")
} if ((A == B && A !== C) || (A == C && A !== B) || (B == C && B !== A) || (B == A && B !== C)) {
    console.log("TRIANGULO ISOSCELES")
}




