function greeting(){
    let userName = 'Jorge';

    function displayUserName(){
        return `Hello ${userName}`;
    }
    
    return displayUserName();
}

const g = greeting();
console.log(g);