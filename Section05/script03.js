const PRIMER_PROCESO = new Promise((resolve, reject) => {
    // setTimeout(reject, 4000, "Primer Error");
    setTimeout(resolve, 3000, "Primer valor");
});
const SEGUNDO_PROCESO = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Segundo valor");
});
const TERCER_PROCESO = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Tercer valor");
});

const LISTA_PROMESAS = [PRIMER_PROCESO, SEGUNDO_PROCESO, TERCER_PROCESO];

Promise.all(LISTA_PROMESAS).then(valores => {
    console.log(valores);
}, error => {
    console.log(error);
});

