var nome = prompt('Digite seu nome')

var peso = prompt("Digite seu peso (kg)")
peso = peso.replace(',','.')
console.log(peso)

var altura = prompt('Digite sua altura (m)')
altura = altura.replace(',','.')
console.log(altura)

var imc = peso/(altura*altura)
imc = imc.toFixed(2)
console.log(imc)

if(imc < 18.5){
alert(`${nome} e seu IMC:${imc} que está classificado com Magreza`)
} else if( imc >= 18.5 && imc <= 24.9 ) {
    alert(`${nome} e seu IMC:${imc} que está classificado com Peso normal`)
} else if( imc >= 25 && imc <= 29.9 ) {
    alert(`${nome} e seu IMC:${imc} que está classificado com Sobrepeso`)
} else if( imc >= 30 && imc <= 34.9 ) {
    alert(`${nome} e seu IMC:${imc} que está classificado com Obesidade grau 1`)
} else if( imc >= 35 && imc <= 40 ) {
    alert(`${nome} e seu IMC:${imc} que está classificado com Obesidade grau 2`)
}else {
    alert(`${nome} e seu IMC:${imc} que está classificado com Obesidade grau 3`)
}