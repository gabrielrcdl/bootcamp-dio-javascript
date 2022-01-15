const lista = [
    {
        name: 'Sabão',
        preco: 6
    },
    {
        name:'Águan Sanitária',
        preco: 4
    },
    {
        name: 'Queijo',
        preco: 40
    }
];


const saldoDisponivel = 100;


function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
      console.log('rodada', index + 1);
      console.log({prev});
      console.log({current}) ;
      return prev - current.preco;
    }, saldoDisponivel);

}


console.log(calculaSaldo(saldoDisponivel,lista));

