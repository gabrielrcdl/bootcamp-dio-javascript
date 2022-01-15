
//Condicionais if e else
var jogador1 = 0;
var jogador2 = 0;
var placar;

if(jogador1 > 0 && jogador2 == 0){
    //console.log('Jogador 1 marcou ponto');
    placar = jogador1 > jogador2
}

else if (jogador2 > 0 && jogador1 == 0){
    //console.log('Jogador 2 marcou ponto')
    placar = jogador2 > jogador1
}

else{
    //console.log(" niguem marcou ponto");
}



//Switch/case

switch(placar){

    case placar = jogador1 > jogador2:
        //console.log("Jogador 1 ganhou")
        break;

    case placar = jogador2 > jogador1:
        //console.log("Jogador 2 ganhou")
        break;

    default:
        //console.log("Niguém ganhou o racha :( ")
}


//for

let array = ['string1', 'string2', 'string3', 'string4'];

let object = {
    chave1:'valor1',
    chave2:'valor2',
    chave3:'valor3',
    chave4:'valor4',
    
}

// for executa uma instrução até que ela seja falsa
for(let indice = 0; indice < array.length; indice++){  //enquanto indice não atingir o valor total do array vai receber o indice +1 a cada repetição
    //console.log(indice);

}


//for in executa repetição a partir de uma propiedade
// com array
for (let i in array){
    //console.log(i)
}


//com object
for(i in object){
    //console.log(i)
}



// for of executa repetição a partir de um valor
// com array
for( i of array){
    //console.log(i)
}

// com object
for (i of object.chave1){
    //console.log(i)

}



//While

var a = 0
while(a < 10){
    a++
    console.log(a)
}

//Do/While

var a  = 0
do{
    a++;
    console.log(a);
}while(a < 10)
