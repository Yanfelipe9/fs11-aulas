function desconto(preco, percentualDesconto){
    let valorFinal = preco * ((100 - percentualDesconto)/100)
    return valorFinal
}

console.log(desconto(1000, 30))