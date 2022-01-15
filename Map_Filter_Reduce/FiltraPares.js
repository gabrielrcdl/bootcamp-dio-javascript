const numeros = [2,3,6,5,10,11]

function filtraPares(array){
    return array.filter(callback); // A função callback poderia também ser declarada dentro da função filtraPares
}

function callback(item){
    return item % 2 == 0;
}

console.log(filtraPares(numeros)); // Array filtrado
console.log(numeros); // Array Original

