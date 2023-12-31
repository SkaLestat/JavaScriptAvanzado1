/**
 * Deben cumplir 2 principios
 * 1-Dada la entrada de los mismo valores, deben regresar el mismo valor
 * por ejemplo si ejecuto la funcion 5 veces seguidas con los mismo parametros
 * debe retornar la misma respuesta
 * 2-No deben tener un efecto secundario observable, no deben modificar
 * el estado de la aplicacion directamente
 */

/* No pura */
let valor = 5;
let valor2 = 5;
function incrementar(){
    return valor += 1;
}
incrementar();
console.log(valor);
console.log(incrementar());
/* Pura */
function incrementar2(num){
    return num + 1;
}
incrementar2(valor2);
console.log(valor2);
console.log(incrementar2(valor2));

