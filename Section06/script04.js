/* Primer Orden */
const FUNC = function(){}
function myFunction(foo){
    foo();
    return function(){};
}
myFunction(FUNC);

Promise.resolve(5).then(val => {
    console.log(val);
});
document.getElementById("boton").addEventListener("click", function(evt){
    console.log(evt);
});

setTimeout(function(){}, 0);

/* Aplicacion Parcial */
function crearSaludo(saludo){
    /* Closure? */
    return function(nombre){
        console.log(`${saludo} ${nombre}`);
    }
}
let saludoManana = crearSaludo("Buenos dias");
saludoManana("Pepito");
let saludoTarde = crearSaludo("Buenas tardes");
saludoTarde("PepitoTarde1");
saludoTarde("PepitoTarde2");