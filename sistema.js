//Percorrer de zero até o número de alunos.
//Se o número for par, escreva "par" e número correspondente.
//Se o número fo ímpar, escreva "ímpar" e número correspndente.
//Se o número for zero, escreva "zero" e número correspondente.

let numeroDeAlunos = 10;

// let contador = 0;

// do {
//     if(contador === 0){
//         console.log("O número atual é ZERO")
//     }else if (contador % 2 != 0){
//         console.log("O número " + contador + " é ÍMPAR")
//     }else {
//         console.log("O número " + contador + " é PAR")
//     }
//     ++contador;
// } while (contador <= numeroDeAlunos);

// while (contador <= numeroDeAlunos){
//     console.log(contador)
// }
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
        //console.log(contador)
    if (contador === 0){
        console.log("número atual é ZERO");
    } else if (contador % 2 == 0 && contador > 5){
        console.log("O número " + contador + " é PAR e maior que 5")
    }else if (contador % 2 == 0){
        console.log("O número " + contador + " é PAR")
    }else {
        console.log("O número " + contador + " é IMPAR")
    }
}

// let usuario;

// if (!usuario) {
//     console.log("A resposta está vazia")
// }

// let listaDeAlunos = ["Marcelo", "Juh", "Cleber", "Wesley", "Adriano"]

// // for (const aluno of listaDeAlunos){
// //     console.log(aluno);
// // }
// listaDeAlunos.forEach(element => {
//     console.log(element)
// });
/*
AND (E)
true && true -> true
true && false -> false
false && true -> false
false && false -> false

OR (OU)
true || true -> true
true | false -> true
false || true -> true
false || false -> false

NOT (NÃO)
*/