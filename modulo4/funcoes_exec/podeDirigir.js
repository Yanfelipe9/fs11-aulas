function podeDirigir(idade,habilitado){

    if(idade>=18 && habilitado == true){
        console.log("Voce é maior de idade e pode dirigir")
    } else if (idade>=18 && habilitado == false){
        console.log("Voce e maior de idade e não pode dirigir")
    } else {
        console.log("Voce e menor de idade")
    }
}

let idade = prompt("Digite sua idade")
let habilitado = false

if (idade>=18){
    habilitado = confirm('Você tem habilitação? Ok - sim ; Cancelar - não')
} 

podeDirigir(idade,habilitado)
