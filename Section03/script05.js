/**
 * El array por detras utiliza un iterador para recorrer
 * sus elementos
 */
const array = new Array(1, 2, 3, 4, 5, 6, 7);
for(let val of array){
    console.log(val);
}
/* Forma para recuperar el iterador del arreglo*/
const iterable = array[Symbol.iterator]();
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next()); // Indefinido el valor por que no hay mas objetos

/* Objetos no implementan este protocolo*/
/* let libros = {
    categorias: {
        drama: ["Drama 1", "Drama2", "Drama3"],
        cienciaFiccion: ["cienciaFiccion 1", "cienciaFiccion2", "cienciaFiccion3"]
    }
}
// Genera error "is not iterable"
for(val of libros){
    console.log(val);
} */
let libros = {
    categorias: {
        drama: ["Drama 1", "Drama2", "Drama3"],
        cienciaFiccion: ["cienciaFiccion1", "cienciaFiccion2", "cienciaFiccion3"]
    },
    // Implementar iterador dentro del objeto
    [Symbol.iterator]() {
        let categoriasLibros = Object.values(this.categorias);
        let indiceDrama = 0;
        let indiceFiccion = 0;
        return {
            next(){
                if(indiceDrama >= categoriasLibros[indiceFiccion].length){
                    indiceFiccion ++;
                    indiceDrama = 0;
                }
                if(indiceFiccion >= categoriasLibros.length){
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return{
                    value: categoriasLibros[indiceFiccion][indiceDrama++],
                    done: false
                }
            }
        }
    }
}
for(let libro of libros){
    console.log(libro);
}