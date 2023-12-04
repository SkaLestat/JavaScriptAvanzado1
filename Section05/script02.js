const PROMESA = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 5);// el 5 es un parametro enviado en la funcion resolve
});

PROMESA.then(primerValor => {
    console.log(`El primer valor es ${primerValor}`);
    return primerValor * primerValor;
}).then(segundoValor => {
    console.log(`El segundo valor es ${segundoValor}`);
    throw new Error("Error en encadenamiento de la promesa");
    return segundoValor * segundoValor;
}).then(tercerValor => {
    console.log(`El tercer valor es ${tercerValor}`);
}).catch(error => { //sirve para detectar errores en la promesa
    console.log(error);
});

setTimeout(() => {
    console.log("test");
}, 700, 5);


