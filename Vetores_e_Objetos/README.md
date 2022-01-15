# Manipulando Arrays
### Ao ser declarado, o array traz consigo uma série de métodos para manipulá-lo

forEach() - itera um array;
push() - add item no final do array;
pop() - remove item no final do array;
shift() - remove item no início do array;
unshift() - add item no início do array;
indexOf() - retorna o índice de um valor;
splice() - remove ou substitui um item pelo índice;
slice() - retorna uma parte de um array existente;


# Objetos

### Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chave{}

Ex:

var xicara = {
    cor: 'azul'
    valor: 15
    funcao: tomarCafe()
}

# Manipulando objetos

### As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de destruturação.

Ex: var xicara = {cor:'azul', tamanho:'p', funcao:tomarCafe()}

var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();



