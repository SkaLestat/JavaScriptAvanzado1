const PROMESA = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 5);
});

PROMESA.then(primerValor => {
    console.log(`El primer valor es ${primerValor}`);
    return primerValor * primerValor;
}).then(segundoValor => {
    throw new Error("Error en encadenamiento de la promesa");
    console.log(`El segundo valor es ${segundoValor}`);
    return segundoValor * segundoValor;
}).then(tercerValor => {
    console.log(`El tercer valor es ${tercerValor}`);
}).catch(error => { //sirve para detectar errores en la promesa
    console.log(error);
}).finally(() => {
    console.log("Cadena de promesas terminada");
});