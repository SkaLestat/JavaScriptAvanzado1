/* No funcional */
let val1 = 10;
function sumar(){
    /**
     * Una funcion no debe acceder a estados que estan fuera de si
     * ni debe modificarlos - Funcion pura
     */
    return val1 + 1;
}
let temp1 = sumar();
/* Funcional */
let val2 = 10;
function sumar2(num){
    return num + 1;
}
let temp2 = sumar2(val2);

let resultado = [1, 2, 3].reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
});
console.log(resultado);