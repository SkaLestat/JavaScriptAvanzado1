function funcionNormal() {
    for (let i = 0; 1 < 5; i++) {
        console.log(i);
        return; //Forzar detencion
    }
}
funcionNormal();

function* generadorSaludo() {
    yield "Hola!";
    yield "Como estas";
    yield "Un gusto conocerte";
}
let saludo = generadorSaludo();
console.log(saludo.next().value);
console.log(saludo.next().value);
console.log(saludo.next().value);
console.log(saludo.next());

function* generador(interacciones) {
    while (interacciones > 0) {
        yield --interacciones;
    }
}
let iterador = generador(3);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
/**
 * ¿De qué nos sirven las funciones 'Generator'? Bueno, las funciones 'Generator'
 * nos pueden servir como una vía rápida para crear iteradores. Por ejemplo,
 * yo puedo iterar a través de esta función, ya que esta implementa el 'Generator'.
 * Aquí utilizando el "keyword" 'for' y 'of' puedo recorrer esta función como si fuera
 * una estructura de datos.
 */
for (const val of generador(2)) {
    console.log(val);
}