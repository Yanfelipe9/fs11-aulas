// if - Verifica se a condição é verdadeira
// else - Caso a condição seja falsa

// if (condição) {
//     // Código a ser executado
// } else {
//     // Código a ser executado
// }

var idade = Number(prompt("Digite sua idade"))
console.log(idade)

if(idade < 14){
    alert("Voçê é uma criança")
} else if(idade >= 14 && idade < 18){
    alert("Voçê é um adolecente")
} else if (idade >= 18 && idade < 65){
    alert("Você é um adulto")
} else {
    alert("Você é idoso")
}
