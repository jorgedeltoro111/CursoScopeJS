//Concepto: function scope
function local(){
    let userName = 'Ana'; //variable local
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`);
    }
}
//console.log(userName); No permite ya que solo existe en la funcion
local();