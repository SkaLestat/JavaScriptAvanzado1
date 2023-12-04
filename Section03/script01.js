const objetoMap = new Map();
objetoMap.set("un string", "valor asociado a un string");
const miObjeto = {};
objetoMap.set(miObjeto, "valor asociado a un objeto");
objetoMap.set(12, "valor asociado a un numero");
for([key, value] of objetoMap){
    console.log(key, value);
}
objetoMap.forEach(value => {
    console.log(value);
});

/**
 * WeakMap mantiene una referencia debil del valor asociado
 * si el objeto se elimina del contexto tambien se desaparece del 
 * weakmap(con Map no se elimina del contexto), sirve para que sea mas ligero
 */
const objetoWeakMap = new WeakMap();
/* Solo se puede usar objetos como keys*/
objetoWeakMap.set("un string", "valor asociado a un string"); //Genera error
objetoWeakMap.set({}, "valor asociado a un objeto");