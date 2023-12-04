let libro = {
    titulo: "Titulo",
    autor: "Autor",
    genero: "Genero",
    numeroPaginas: 255
}
/* Forma Antigua */
/* let titulo = libro.titulo;
let autor = libro.autor;
let genero = libro.genero;
console.log(titulo, autor, genero); */

/* Nombres variables deben coincidir */
/* let {titulo, autor, genero} = libro;
console.log(titulo, autor, genero); */

let {titulo: propTitulo, autor: propAutor, genero: propGenero} = libro;
console.log(propTitulo, propAutor, propGenero);

/* Operador rest (...)*/
let {titulo, autor, ...otros} = libro;
console.log(titulo, autor, otros);

/* Forma Dinamica */
let key = "titulo";
let {[key]: val} = libro;
console.log(val);

let libros = {
    categorias: {
        drama: ["Drama 1", "Drama2", "Drama3"],
        cienciaFiccion: ["cienciaFiccion1", "cienciaFiccion2", "cienciaFiccion3"]
    }
}
let {
    categorias:{
        drama: a,
        cienciaFiccion: b
    }
} = libros;
console.log(a, b);