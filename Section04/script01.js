/* Proxy */
/* 1er elemento */
const TARGET = function (nombre, apellido){
    console.log(`Mi nombre es ${nombre} ${apellido}`);
}
/* 2do elemento */
const HANDLER = {
    /* Trap */
    apply: function(target, thisValue, args){
        console.log(`Se ha llamado la funcion ${target.name} con los parametros ${args}`);
        return target(...args);
    }
}

const MY_PROXY = new Proxy(TARGET, HANDLER);
MY_PROXY("Pepito", "Perez");

const DATE_PROXIED = new Proxy(Date, {
    /* Trap */
    construct(target, args){
        console.log("Creamos un objeto Date");
        return new target(...args);
    }
});
let fecha = new DATE_PROXIED();
