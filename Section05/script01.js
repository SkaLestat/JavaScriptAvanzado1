/* fetch("algunaUrl").then(respuesta => {
    if(respuesta.ok){
        console.log("Salio Bien");
    } else {
        throw Error(respuesta.statusText);
    }
}); */

const PROMESA = new Promise((resolve, reject) => {
    let allOk = false;
    if(allOk){
        resolve("Salio Bien - Promesa");
    } else {
        /* Buena practica regresar el tipo Error */
        reject(new Error("Hubo un error - Promesa"))
    }
});

PROMESA.then(valor => {
    console.log(valor)
}, error => {
    console.log(error);
});