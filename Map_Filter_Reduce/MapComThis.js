// function pegarAdmins(map){
//     let admins = [];
//     for([key, value] of map){
//         if (value === 'Adm')
//         admins.push(key);
//     }
//     return admins

// }



// const usuarios = new Map();


// usuarios.set('Luiz', 'Adm');
// usuarios.set('Jorge', 'Adm');
// usuarios.set('Marcela', 'User');

// console.log(pegarAdmins(usuarios));





//Map com this
const maca = {
    value: 2,

}

const laranja = {
    value: 3,
}


function mapComThis(array, thisArg){
    return array.map(function(item){
         return item * this.value;
    }, thisArg)
}


const numeros = [1,2];

console.log('this -> maçã', mapComThis(numeros, maca));
console.log('this -> laranja', mapComThis(numeros, laranja));
