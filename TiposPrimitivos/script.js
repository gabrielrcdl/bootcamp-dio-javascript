//Tipos primitivos de dados

// Boolean
var VouF = false
console.log(typeof(VouF));

//Number
var Numberqlq = 1
console.log(typeof(Numberqlq));


//string
var stringqlq ='olá'
console.log(typeof(stringqlq));



// Variável de escopo local

var escopoglobal = 'global'
console.log(escopoglobal)

// Escopo local

function local(){
    let escopolocal = 'local'
    console.log(escopolocal);
}

//Se a função console estivesse definida aqui ia gerar um erro de que não foi definida, então a função console deve ser chamada dentro do escopo local
local();

var comparar = "0" == 0;
console.log(comparar);

var comparar2 = "0"=== 0;
console.log(comparar2);
