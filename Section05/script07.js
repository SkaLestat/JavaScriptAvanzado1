const PRIMERPROCESO = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 2);
});

/* async siempre retorna una promesa */
async function llamarProceso(){
    let valor = await PRIMERPROCESO;
    console.log("primer async");
    return valor * 2;
}

async function llamarFuncionAsincrona(){
    let resultado = await llamarProceso();
    console.log("segundo async");
    return resultado * 2;
}

llamarFuncionAsincrona().then(resultadoFinal => {
    console.log(`Al final de todas las funciones el valor es: ${resultadoFinal}`);
});