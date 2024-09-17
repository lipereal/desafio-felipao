let nomeHeroi = "Duriel";
let nivelHeroi = 9001;
let classificacaoHeroi = ""; 

if (nivelHeroi <= 1000){
    classificacaoHeroi = "Ferro";
} 

if (nivelHeroi >= 1001 && nivelHeroi <= 2000){
    classificacaoHeroi = "Bronze"
}

if (nivelHeroi >= 2001 && nivelHeroi <= 5000){
    classificacaoHeroi = "Prata"
}

if (nivelHeroi >= 5001 && nivelHeroi <= 7000){
    classificacaoHeroi = "Ouro"
}

if (nivelHeroi >= 7001 && nivelHeroi <= 8000){
    classificacaoHeroi = "Platina"
}

if (nivelHeroi >= 8001 && nivelHeroi <= 9000){
    classificacaoHeroi = "Ascendente"
}

if (nivelHeroi >= 9001 && nivelHeroi <= 10000){
    classificacaoHeroi = "Imortal"
}

if (nivelHeroi >= 10001){
    classificacaoHeroi = "Radiante"
}

//Saída

console.log("O Hérói de nome " + nomeHeroi + " está no nível de " + classificacaoHeroi)



