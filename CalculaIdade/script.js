function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos`;
}


const pessoa={
    nome:"Gabriel",
    idade:20
}


console.log(calcularIdade.call(pessoa,10))