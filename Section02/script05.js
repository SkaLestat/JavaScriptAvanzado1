/* Las funciones son o se pueden usar como objetos y se pueden usar como parametros */
function incrementar(val) {
    return val + 1;
}
const diTuNombre = function(nombre) {
    console.log("Mi nombre es Pepito");
}
setTimeout(diTuNombre, 5);
const array = [1, 2];
array.forEach(function(val, i) {
    console.log(val, i);
});