// como declarar um array
// let array = ['string', 1, true];
// console.log(array)


//arrays funcionam como um caixa podendo conter dados de todos os tipos(incluisive conter outros arrays dentro)
let arrayTwo = ['string', 3, true,['array1',false],['array2', true]];
//console.log(arrayTwo);



// forEach
//arrayTwo.forEach(function(item, index)   {console.log(item, index)});


//push - adicionando novo item no final do array
//arrayTwo.push('novo item')
//console.log(arrayTwo)



// pop - removendo último item
//arrayTwo.pop();
//console.log(arrayTwo)



// shift - removendo primeiro item do array
//arrayTwo.shift()
//console.log(arrayTwo)   



// unshift - adicionando novo item no começo do array
//arrayTwo.unshift('outro item no início')
//console.log(arrayTwo) 



// indexOf - procurando o índice
//console.log(arrayTwo.indexOf(3))
    


// splice - remove ou substitui um item por um índice
// arrayTwo.splice(0,3);
// console.log(arrayTwo)



//slice - retorna uma parte de um array existente;

// let novoArray = arrayTwo.slice(0,3)
// console.log(novoArray)



// objeto pode ter outros objetos dentro, permitindo também acesso a índices específicos

let objeto = {
    string: "string",
    number: 1,
    boolean: true,
    array: ['array 1'],
    objetoInterno:{ objeto:'valor'

    }
}
//console.log(objeto.number);

//Destruturação

var{string,number} = objeto
//console.log(string,number)


