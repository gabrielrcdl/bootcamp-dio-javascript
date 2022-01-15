function soma(array){
    return array.reduce(function(prev, current){
        return prev + current;
    })
}


const numeros = [2,4,1]

console.log(soma(numeros));

