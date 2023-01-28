// peso e altura são parâmetros
function imc(peso, altura){

    const imc = peso / (altura * altura);

    return imc;

    console.log(imc);

}

imc(80, 1.80); // 80 e 1.80 são argumentos

imc(60, 1.70); // 60 e 1.70 são argumentos