//Palindromo palavra única (meu método)

const verifyPal = (string) => {
    if(!string) return "String não existe.";

    let result = false;
    let stringReverse = string.split("").reverse().join("");

    string === stringReverse ? result = true : result = false;

    console.log(result);


    //Método mais simples
    //return stringReverse = string.split("").reverse().join("") === string;

}


verifyPal("teste");

//console.log(verifyPal("teste"));



//============================
//Solução dois, percorrendo a string com loop

const verifyPal2 = (string) => {
    if(!string) return "String não existe.";

    for(let i = 0; i < string.length / 2; i++) {

        if(string[i] !== string[string.length -1 -i]) {
            return false;
        }
    }
    return true;
}


console.log(verifyPal2("teste"));