function frutas(){
    if(true){
        var fruta1 = 'manzana';//scope global por ser var
        let fruta2 = 'platano';//scope del bloque if
        const fruta3 = 'kiwi';//scope del bloque if
    }
    console.log(fruta1);//si se mostrara
    console.log(fruta2);//no se mostrara
    console.log(fruta3);//no se mostrara
}
frutas();