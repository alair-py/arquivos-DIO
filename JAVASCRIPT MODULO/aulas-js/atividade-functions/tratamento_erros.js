
function verifyArr(arr, num) {
    
    try {
        if (!arr && !num) throw new ReferenceError("Envie parâmetros");

        if (typeof arr !== "object") throw new TypeError("Array precisa ser do tipo Object");

        if (typeof num !== "number") throw new TypeError("Parâmetro 'num' precisa ser do tipo Number");

        if(arr.length !== num) throw new RangeError('Tamanho do array inválido!');

        return arr;
    }
    catch(error) {
        if(error instanceof ReferenceError) {
            console.log("ReferenceError");
            return;
        }
        else if (error instanceof TypeError) {
            console.log("TypeError");
            return;
        }
        else (error instanceof RangeError) 
            console.log("RangeError");
            return;
    }
}



console.log(verifyArr([1,2,3,4,5], 5));