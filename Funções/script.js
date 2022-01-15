
//Função declaritva
function funcao(){
    console.log('Olá Tudo certo, essa mensagem veio de uma função')
}

funcao;


//Função com parâmetros
function menssagem(primeiro, segundo){
    console.log(primeiro,segundo)
}

menssagem("ola", "gabriel")





//Aprofudando em funções
//Expressão de função é opcional


//com nomeação
var Umafuncao = function Umafuncao(){
    console.log('Sou uma expresão de função COM nomeação!')
}
 Umafuncao();   
 
 

 //sem nomeação
 var Umafuncao = function(){
    console.log('Sou uma expresão de função SEM nomeação!')
}
 Umafuncao();    



//arrow function


var OutraFuncao = () =>{
    console.log("Sou uma arrow function")
}

OutraFuncao()
