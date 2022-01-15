// new Error('message, fileName, lineName')

// // Todos os parâmetros são opcionais

// const MeuErro = new Error('Mensagem Inválida');
// //MeuErro.name = 'inválida'; Dando nome ao erro
// throw MeuErro;


function validaArray(array, num){
  try{

    if(!array && !num) throw new ReferenceError('Envie os parâmetros'); // Se não existe uma array e não existe um número lança um erro utilizando o throw ReferenceError. 

    if(typeof array !== 'object') throw new TypeError('Array precisa ser do tipo objeto'); //Se o array não for um objeto lança um erro utilizando throw TypeError.

    if(typeof num !== 'number') throw new TypeError('Precisa ser um número'); // Se número não for do tipo number lança um erro utilizando throw TypeError.

    if(array.length !== num) throw new RangeError('Tamanho Inválido'); 

    return array;

    }

  catch(erro){ // Filtrando cada tipo de erro utilizando instaceof

        if(erro instanceof ReferenceError){ 
            console.log('Este erro é um Reference Error!');
            console.log(erro.message)
        }

        else if(erro instanceof TypeError){
            console.log('Este erro é um TypeError!');
            console.log(erro.message)

        }

        else if(erro instanceof RangeError){
            console.log('Este erro é um RangeError!');
            console.log(erro.message)
        }

        else{
            console.log('Ocorreu um erro inesperado:' + erro);
        }


    }


}
console.log(validaArray());

