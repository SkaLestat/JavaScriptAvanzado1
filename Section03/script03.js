/**
 * Set Permite mantener colecciones de datos donde cada elemento
 * es unico
 */
const objetoSet = new Set([1, "string", {}, {nombre: "Natalia"}]);
objetoSet.add(12);
objetoSet.add(12); // no genera error, pero set asegura no repetir el 12
console.log("Recorriendo el objeto set: ");
objetoSet.forEach(value => {
    console.log(value);
});
for(value of objetoSet){
    console.log(value);
}
console.log(objetoSet.has(12))
console.log(objetoSet.size);
/**
 * WeakSet solo puede almacenar objetos,
 * Mantienen referencia "debil"
 */
const objetoWeakSet = new WeakSet([{}, {mpnbre: "Natalia"}]);
// objetoWeakSet.add(12); //Genera error
// WeakSet no iterable, recorrerlo genera error
for(value of objetoWeakSet){
    console.log(objetoWeakSet);
}
