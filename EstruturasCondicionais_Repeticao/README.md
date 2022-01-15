# Estruturas condicionais 
São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição

if/else;
else if;
switch/case



# Laços de repetição # For
São estruturas condicionais que repetem uma instrução até atingir determinada condição

for;
for/in;
for/of;
while;
Do/while

For/of não funcionam com objetos pois as propiedades variam, diferentes do índice em um array que sempre serão números inteiros.

### Mas e se eu quiser pegar o valor mnesmo assim?
Ex: for (i of object.propriedade){
    console.log(i);
}

OBS: Com for/of usado em objetos, o resultado irá ser imprimido em cada linha


# While
Executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução;

Ex: var a = 0;
    while(a<10){
        a++
        console.logo(a);
    }

Como ler: equanto a variável a for menor que 10 ela irá receber mais 1 e imprimir no console 

# Do/while 
Executa uma instrução  "até que" determinada condição seja falsa, a verificação é feita depois da execução;

Ex: var a  = 0
do{
    a++;
    console.log(a);
}while(a < 10)