var input = require("fs").readFileSync("stdin", "utf-8")

var palavra = input.split("\n")

var coluna1 = palavra[0].split(" ")
var coluna2 = palavra[1].split(" ")
var coluna3 = palavra[2].split(" ")

var tipo1 = ['vertebrado', 'invertebrado']
var tipo2 = ['ave', 'mamifero', 'inseto', 'anelidio']
var tipo3 = ['carnovoro', 'onivoro', 'herbivoro', 'hematofago']

const comparar = (palavra[1], tipo2[1]) => {

    return palavra[1].length === tipo2[1].length &&
        palavra[1].every((item, index) => item === tipo2[index]
}



console.log(typeof palavra[1])