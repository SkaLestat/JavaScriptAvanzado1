const TARGET = {
    titulo: "fundacion",
    autor: "Issac Asimov",
    genero: "Ciencia Ficcion",
    numeroPaginas: 255
}
const HANDLER = {
    get: function(target, prop, proxy){
        if(prop === "numeroPaginas"){
            return `Tengo ${target[prop]} paginas!`;
        } else {
            return target[prop]
        }
    },
    set(target, prop, value){
        if(prop === "titulo" || prop === "autor"){
            console.log(`No puedes modificar la propiedad ${prop}`)
        } else {
            target[prop] = value;
        }
    },
    deleteProperty(target, prop){
        throw Error("No esta permitido eliminar propiedades de este objeto!");
        return;
    }
}

const MY_PROXY = new Proxy(TARGET, HANDLER);
console.log(MY_PROXY.titulo);
console.log(MY_PROXY.numeroPaginas);
MY_PROXY.titulo = "Un titulo nuevo";
MY_PROXY.numeroPaginas = 500;
console.log(MY_PROXY.numeroPaginas);
delete MY_PROXY.genero;