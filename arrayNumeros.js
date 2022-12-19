//1- Calcule a média e imprima no console

let array = [10, 23, 43, 44, 56, 12, 35, 77, 23, 13, 31, 55, 24, 60];
let soma = 0;

for (let i = 0; i < array.length; i++) {
  soma += array[i];
}

let media = soma / array.length;

console.log(media);

//2- Remova o quinto elementos do array e imprima o total do array no console
array.splice(4, 1);
console.log(array);

//3- Gere um novo array somente com números pares e imprima no console
let arrayPares = [];

for (let n of array) {
  if (n % 2 == 0) {
    arrayPares.push(n);
  }
}

console.log(arrayPares);

//4- Gere um novo array somente com números primos e imprima no console
let arrayPrimos = [];

for (let n of array) {
  if (n == 2 || n == 3 || n == 5 || n == 7 || n == 11 || n == 13 || n == 17 || n == 19 || n == 23 || n == 29 || n == 31 || n == 37 || n == 41 || n == 43 || n == 47 || n == 53 || n == 59 || n == 61 || n == 67 || n == 71 || n == 73 || n == 79 || n == 83 || n == 89 || n == 97) {
    arrayPrimos.push(n);
  }
}

console.log(arrayPrimos);