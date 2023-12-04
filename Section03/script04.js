const objetoSet = new Set([1, "string", {}, {nombre: "Natalia"}]);
objetoSet.add(12);
objetoSet.add(12); // no genera error, pero set asegura no repetir el 12
console.log(objetoSet[0]); //no se puede acceder a un valor por su indice
objetoSet.add(true);
console.log("Recorriendo el objeto set: ");
objetoSet.forEach(value => {
    console.log(value);
});
for(value of objetoSet){
    console.log(value);
}
objetoSet.delete(1);

const array = new Array(1, 4, 2, 3, 4, {});
array[0];
array.push(39);
array.push(40);
console.log("Recorriendo el objeto Array: ");
for(value of array){
    console.log(value);
}
array.pop();
array.shift();