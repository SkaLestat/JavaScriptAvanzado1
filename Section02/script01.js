/* Tipos de Datos Primitivos */
const valorBooleano = false;
const valorNumerico = 10;
const valorTexto = "Hola Mundo";
// Indica que no tiene valor
const valorNulo = null;
// Indica que la variable es declarada pero aun no tiene valor asignado
const valorNoDefinido = undefined;
// un valor que no es igual a ningun otro valor
const simbolo = Symbol();

/* Todo lo demas son objetos */
const elementos = new Array(); // Es lo mismo que [];
const fecha = new Date();
// {} es lo mismo que new Object();
const obj = {
    propiedad1: 12,
    sumar(){
        return this.propiedad1 +1;
    }
}
console.log("Valor de la funcion sumar:", obj.sumar());
valorNumerico.temp = "abc";
console.log("Valor de la propiedad temp:", valorNumerico.temp);
// Objetos son comparados por referencia
console.log("Pueden dos objetos ser exactamente iguales?: ", {} === {});
// Primitivos son comparados por valor
console.log("Pueden dos primitivos ser exactamente iguales?: ", 10 === 10);
const cadena = "Una cadena de texto";
console.log("El largo de la cadena es:", cadena.length);
/*
    Cuando se accede a una propiedad como lenght, js por detras encapsula temporalmente
    en un objeto la variable y luego desaparece 
    const valorBooleano = new Boolean(true);
    const valorNumerico = new Number(10);
    const valorTexto = new String("abc");
*/