function primerProceso(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, "Primer valor");
    });
}
function segundoProceso(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "Segundo valor");
    });
}
function tercerProceso(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "Tercer valor");
    });
}

async function llamaTodas(){
    console.log("1");
    console.time("1");
    let primerValor = await primerProceso();
    console.timeEnd("1");
    console.log("2");
    console.time("2");
    let segundoValor = await segundoProceso();
    console.timeEnd("2");
    console.log("3");
    console.time("3");
    let tercerValor = await tercerProceso();
    console.timeEnd("3");
    
    console.log(primerValor, segundoValor, tercerValor);
    console.timeEnd("async");
}
console.time("async")
llamaTodas();
console.log("fin script");