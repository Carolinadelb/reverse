/*1. REVERSE
Crea una función que invierta el orden de los elementos de un array. 
Completa este reto de dos maneras: en una, el array invertido es un 
nuevo array; en la segunda, modifica el mismo array que se proporciona
 como argumento. Investiga sobre el método reverse. ¿Qué puedes concluir?*/

 //Primera solución

 var vowels = ['a', 'e', 'i', 'o', 'u'];
 var size = vowels.length; //5
 let numbers = [1, 2, 3, 4, 5];
 /*var lastPosition = size - 1;*/
 
 /*for(var i = lastPosition; i>=0; i--){ //desde la última posición , i-- para que vaya disminuyendo de 1 en 1
    console.log(vowels [i]);    
 } */

 //función llamada reverse:

 var reverse = function (array) {
     var newArray = [];
     var size = array.length;
     var lastPosition = size -1 ;
     for (var i = lastPosition; i >= 0; i--) {
         newArray.push (array [i]); //para agregar nuevos elementos en push, pero al reves
     }
     return newArray;
 }
console.log(reverse(vowels));
console.log(vowels);

console.log(reverse(numbers));
console.log(numbers);

//Segunda solución:

var vowels = ['a', 'e', 'i', 'o', 'u'];
/*
//método pop (metodo de array solo funciona con array)
console.log(vowels.pop());// ahí da la última posición 'u'
// el array original se modifica en tamaño.

console.log(vowels);
console.log(vowels.pop());// se va quitando últimos elementos
//para colocarnos nuevamente:
*/

// Método Splice(puede funcionar con 3 párametros)

//para Eliminar y modifica el array original:

console.log(vowels.splice(0,1)); //solo quita la a que esta en posicion 0
console.log(vowels);// e i o u
console.log(vowels.splice(1,1)); //elimina la i que en este caso esta posicion 1

// la siquiente forma (para eliminar y reemplazar con algo nuevo):
console.log(vowels.splice(1, 1, 'hola'));
console.log(vowels); 
/* con esto queda literalmente así:
[ 'e' ]
[ 'a', 'hola', 'i', 'o', 'u' ] */

console.log(vowels.splice(0, 0, 'hola2')); //para que no elimine se pone 00 y se agrega algo X
console.log(vowels);

console.log(vowels.splice(2, 0, 'caro aprende lento'));
console.log(vowels);


var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels.pop()); //u
console.log(vowels.splice(0, 0, 'u')); //para que agregue la u 
console.log(vowels);
console.log(vowels.pop());
console.log(vowels.splice(1, 0, 'o'));
console.log(vowels);

//Funcion llamada reverse:



