# Funções

São blocos de comandos e instruções para a execução de determinadas tarefas, geralmente se utiliza a palavra reservada "function" seguida de parênteses "()" e chaves "{}":

Ex: function nomeDaFuncao(){
    ${instrucao};
}

nomeDafunção(); invocando a função e a executando();


() - Indica que é um objeto do tipo function;
{} - Indica que é um bloco de instruçãso;



# Funçoes com parâmetros

As funçoes podem receber em sua declaração, parâmetrosm que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

Ex: function nomeDaFuncao(parametro)- variáveis de estado{
    ${instrução}
}

nomeDaFuncao(valorDoParametro)



# Aprofundando em funções 



## Funções declarativas

São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada "function" seguida do nome da função, parênteses "()" e chaves "{}":

Ex: function nomeDaFuncao(){
    ${instrucao};
}





## Expressões de funções

São funções atribuidas à expressões. A nomeação das funçoes por expressão é opcional

Ex 1: var funcao = funtion nomeDaFuncao(){
    ${instrucao};
}

Ex 2: var funcao = function(){
    ${instrucao};
};





## Arrow Function

São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas,  e portanto não podem ser nomeadas. Deve ser declarada com parênteses "()", seguido "=>" e depois chaves "{}"

Ex 1: var funcao = () => {
    ${instrucao};
}

# Função Anônima

Quando uma variável pode armazenar uma função

Ex:
const soma = function(a,b){
    return a + b;
}
soma(1,1) // 2


# Callbacks

Uma funçao passada como argumento para outra

Ex:

const calc = function(operacao, num1, num2){
    return operacao(num1,num2);
}
const soma = function(num1, num2){
    return num1 + num2;
}
const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma,1,2);
const resultSoma = calc(sub,5,2);


# Criando uma calculadora utilizando JavaScript

Para o exercício foram utilizados alguns métodos do JS:

1. Number() - para converter valores em números;
2. Prompt() - para registrar entradas de usuários;
3. Alert()  - para mostrar mensagens ao usuários;
4. Template Strings - para usar strings junto com expressões;