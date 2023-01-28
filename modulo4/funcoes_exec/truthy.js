
function verificarValorSeTruthy(valor){

    if(valor){
        console.log("É truthy")
    } else {
        console.log("É falsy")
    }

    // return valor ? console.log("É Truthy") : console.log("É falsy")


    const resposta = valor? "É Truthy" : "É falsy"

    return console.log(resposta)

}

verificarValorSeTruthy()