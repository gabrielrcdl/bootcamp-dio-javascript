//Manipulando o DOM
const manipula = document.getElementById('idclasse')

// Utilizando o elemento classList
manipula.classList.add('nova');

// manipulando css via JavaScript
document.getElementsByTagName("h1").style.color="red"; 



const botao = document.getElementById("btn");

botao.addEventListener("click", chamaUmaFuncao)


function chamaUmaFuncao(){
    alert('Botão Clicado!');
}
chamaUmaFuncao();