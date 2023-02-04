const lista = ["Ivan","Ari","Rangel","Yan"]

for(let i = 0; i < lista.length; i++){
    console.log(`${lista[i]}`)
}

console.log('-----------------------')

let a = 0

while(a <= 10){
    console.log(a)
    a += 2
}

console.log('-----------------------')

// let resposta 

// do {
//    resposta =  confirm("Vai me passa o pix?")    
// } while (!resposta);

console.log('-----------------------')

function concatenaUm(value, index){
    console.log(`${index+1}-${value}`)
}

lista.forEach(concatenaUm)

console.log('-----------------------')

lista.forEach(function concatenaUm(value,index){
    console.log(`${index+1}-${value}`)
})