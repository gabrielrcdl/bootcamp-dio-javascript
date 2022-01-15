# 3 tipos de declarar variáveis em JS


var - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;


let - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;


const - escopo local de bloco, somente leitura, o valor inicial é obrigatório  e não pode ter seu valor alterado



# Escopo local e global

## O escopo em JS defiene a limitação e visibilidade de um blocxo de código


Escopo global - quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o códigoç.

Escopo local - quando a variável é declarada dentro de um bloc, sua visibilidade pode ficar disponível ou não.


# Regras de Uso de Variáveis 

## Iniciar com letras, underscore_ ou cifrão $; não iniciar com número.

Ex: 
var1nome ERRADO
var nome ou var_nome CERTO

## Não usar espaços(us o camelCase ou_);

Ex:
var nome completo ERRADO
var nomeCompleto ou var nome_completo CERTO

## Não usar palavras reservadas

Ex:
 var function

 ## Declarar variáveis no topo do bloco de código.


 # Atribuição

 O sinal de igualdade  = em JS, significa atribuição


 Ex:

declarando: var nome = "meu nome";
lendo: variável nome recebe meunome;


# Comparação

Ex:

declarando "0" == 0;
lendo: "0" tem o valor igual a 0?

obs: nesse caso irá retorna true!

# Comparação idêntica

Ex:

declarando = "0" === 0
lendo: "0" tem o valor e tipo idêntico?

obs: nesse caso irá retorna falso!


# Operadores aritméticos

+adição;
-subtração;
*multiplicação
/divisão real;
%divisão inteira
**potenciação;

# Operadores relacionais

>  maior que;
<  menor que;
>= maior ou igual a;
<= menor ou igual a;