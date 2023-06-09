//Reasignacion y declaracion
var firstName; //Undifined 
firstName = 'jorge';//asignando
console.log(firstName);//saldra la asignacion mas reciente

var lastName = 'David'; //Asignando y declarando
lastName = 'Ana'; //reasignacion
console.log(lastName); // Saldra la asignacion mas reciente

//declarar y asignar se podran llevar mil cambios pero el ultimo se tomara como definitivo
let fruit = 'apple';
//let fruit = 'kiwi'; me  da un error ya que una variable let no se puede redeclarar
//si se puede reasignar el valor

const animal = 'dog'; //declarar y asignando
//animal = 'cat'; no se puede reasignar ni redeclarar porque es una constante
console.log(animal);


