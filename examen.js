//Hoisting
let hola = "hola";
nameOfDog(hola); 
function nameOfDog(name) { 
    console.log(name); 
};
//alcance de variables en la funcion
const fruits = () => { 
    if (true) { 
        console.log(hola);
    } 
}
fruits();