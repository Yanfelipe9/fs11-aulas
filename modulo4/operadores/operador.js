var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50

// operadores aritimeticos string

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// nan - Começa por multiplicação e divisão, depois soma e subtração

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// operadores aritimeticos unários

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento = 5;
console.log(++incremento); // 6
console.log(incremento); // 6

// mesma coisa para decremento --n

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN






// Qual o resultado da seguinte expressão?

var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN

alert(+10 * "2"); 

// Somar a string '90' com o número 10 e retornar 100

var soma = +"90" + 10;

// Incremente o número 10 e retorne o seu valor incrementado

var incremento = 10;
console.log(++incremento); // 11

// Como dividir o peso por 2?

var peso = '80';
var unidade = 'kg';
var peso = peso / 2; 
var pesoPorDois = peso + unidade;
