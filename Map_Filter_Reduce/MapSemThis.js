const numeros = [2,3,5];


function mapSemThis(array){
    return array.map(function(item){
        return item * 2;
    });
}


console.log(mapSemThis(numeros)); // array multplicado pela função
console.log(numeros); // array original



