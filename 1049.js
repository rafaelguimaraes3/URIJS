var input = require("fs").readFileSync("stdin", "utf-8")

var [a,b,c] = input.split("\n");

if (b === "ave"){
    if (c === "carnivoro"){
        console.log("aguia")
    }
    if (c === "onivoro"){
        console.log("pomba")
    }
    
} else if (b === "mamifero"){
    if (c === "onivoro"){
        console.log("homem")
    }
    if (c === "herbivoro"){
        console.log("vaca")
    }
} else if (b === "inseto"){
    if (c === "hematofago"){
        console.log("pulga")
    }
    if (c === "herbivoro"){
        console.log("lagarta")
    }
} else if (b === "anelideo"){
    if (c === "hematofago"){
        console.log("sanguessuga")
    }
    if (c === "onivoro"){
        console.log("minhoca")
    }
}else{
    console.log("Animal não encontrado!")
} 
