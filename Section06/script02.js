// function cambiarResidencia(persona, nuevaCiudad){
//     persona.ciudad = nuevaCiudad;
//     return persona;
// }
function cambiarResidencia(persona, nuevaCiudad){
    let copia = Object.assign({}, persona, {ciudad: nuevaCiudad});
    return copia;
}
const PERSONA = {
    nombre: "Pepito",
    ciudad: "LPM"
}
let nuevaPersona = cambiarResidencia(PERSONA, "OPM");
console.log(PERSONA);
console.log(nuevaPersona);

const ARRAY = new Array(1, 2, 3, 4, 5);
const ARRAY_2 = ARRAY.map(valor => valor * 2);
console.log(ARRAY_2);
const ARRAY_3= ARRAY.filter(valor => valor >= 3);
console.log(ARRAY_3);
console.log(ARRAY);