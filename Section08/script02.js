/* Guardar Datos */
/* Persistentes */
localStorage.setItem("nombre", "Pepito Perez");
/* Desaparecen al cerrar navegador */
sessionStorage.setItem("ciudad", "LPM");

/* Recuperar Datos */
let nombre = localStorage.getItem("nombre");
let ciudad = sessionStorage.getItem("ciudad");
console.log(`${nombre} vive en ${ciudad}`);

/* Eliminar Datos */
localStorage.removeItem("nombre");
sessionStorage.removeItem("ciudad");

localStorage.clear();
sessionStorage.clear();

let nombreOtraVez = localStorage.getItem("nombre");
console.log(`Ahora el nombre es ${nombreOtraVez}`);