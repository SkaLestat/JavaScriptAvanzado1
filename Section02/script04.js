/* Metodo Tradicional */
const Persona = function (nombre) {
    this.nombre = nombre;
}
/* __proto__ */
Persona.prototype.decirNombre = function () {
    console.log("Mi nombre es: ", this.nombre);
}
/**
 * Cada instancia apunta a la misma definicion del prototipo
 */
const persona1 = new Persona("Lincy");
persona1.decirNombre();
const persona2 = new Persona("Lucia");
persona2.decirNombre();

class OtraPersona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    decirNombre() {
        console.log("Mi nombre es: ", this.nombre);
    }
}
const otraPersona1 = new OtraPersona("Lincy");
otraPersona1.decirNombre();
const otraPersona2 = new OtraPersona("Lucia");
otraPersona2.decirNombre();