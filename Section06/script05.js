/**
 * para que una funcion pueda formar una composicion, deben retornar y recibir 
 * el mismo tipo de dato y deben ser funciones puras
 * Ramda.js libreria programacion funcional
 */
function estrella(str){ return str + "✨"};
function feliz(str){ return str + "😀"};
function triste(str){ return str + "☹"};
function reir(str){ return str + "😁"};
function exclamacion(str){ return str + "!"};
console.log(reir(exclamacion("Eso fue gracioso")));

/* Funcion Compuesta */
function crearComposicion(fun1, fun2){
    return function(texto){
        return fun1(fun2(texto))
    }
}
const MUY_FELIZ = crearComposicion(feliz, estrella);
let frase1 = MUY_FELIZ("Hoy es un buen dia");
const MUY_TRISTE = crearComposicion(triste, exclamacion);
let frase2 = MUY_TRISTE("Lo siento");
const REIR_MUCHO = crearComposicion(reir, reir);
let frase3 = REIR_MUCHO("LOL");
console.log(frase1);
console.log(frase2);
console.log(frase3);