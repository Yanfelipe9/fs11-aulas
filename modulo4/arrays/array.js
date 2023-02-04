const lista = ["Bola","Livro","Boneca","Quadro","Skate"]

console.log(lista.length) // 5

console.log(lista[0]) // Bola - Acessa o primeiro Index do Array

console.log(lista[lista.length - 1]) // Skate - Acessa o ultimo Index do Array

console.log(lista.push("Patinete")) // Adicionou "Patinete" (do final) da lista
console.log(lista) // 6) ['Bola', 'Livro', 'Boneca', 'Quadro', 'Skate', 'Patinete']

console.log(lista.pop()) // Removeu "Patinete" (do final)
console.log(lista) // 5) ['Bola', 'Livro', 'Boneca', 'Quadro', 'Skate']

console.log(lista.shift()) //Remove (do inicio) do Array (Bola)
console.log(lista) // (4) ['Livro', 'Boneca', 'Quadro', 'Skate']

console.log(lista.unshift("Notebook")) // Adiciona (no inicio) do Array
console.log(lista) // (5) ['Notebook', 'Livro', 'Boneca', 'Quadro', 'Skate']

lista.forEach(function (item, indice) {
    console.log(item,indice)
    /*
    Bola 0
    Livro 1
    Boneca 2
    Quadro 3
    Skate 4
    */
}) 


