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


