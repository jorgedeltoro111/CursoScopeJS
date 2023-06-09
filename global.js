//variables

var a; //estamos declarando
var b = 'b'; //declarando y asignando
b = 'bb'; //reasignando
var a = 'aa' //redeclaracion

//global scope

/**Todas las variables declaradas en el documento, son variables
 * que se pueden usar en cualquier parte del codigo, a estas variables
 * se les llaman variables globales.
 */
function show(){
    fruit = 'apple'; //si no la declaramos en automatico se vuelve variable global
    console.log(fruit);
}
show();
console.log(fruit);
