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

const {proxy: MY_PROXY, revoke: REVOKE} = Proxy.revocable(TARGET, HANDLER);
console.log(MY_PROXY.titulo);
console.log(MY_PROXY.numeroPaginas);
MY_PROXY.titulo = "Titulo nuevo";
REVOKE();
MY_PROXY.titulo = "Titulo nuevo"; // Genera error


