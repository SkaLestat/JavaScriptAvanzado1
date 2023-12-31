document.getElementById("contenedor-padre").addEventListener("click", function(evt){
    console.log("Click en el padre con el target: ", evt.target);
}, {capture: true});
/* capture=true invierte la captura por default del evento en la fase de bubbling, el evento se capta de "arriba hacia Abajo" */
document.getElementById("contenedor-hijo1").addEventListener("click", function(evt){
    console.log("Click en el hijo #1");
    console.log("Yo soy: ",evt.currentTarget);
}, {capture: true});
document.getElementById("contenedor-hijo2").addEventListener("click", function(evt){
    /* Detiene el bubbling al contenedor padre  */
    evt.stopPropagation();
    /* Detiene bubbling a cualquier otro listener */
    evt.stopImmediatePropagation();
    console.log("Click en el hijo #2");
}, {capture: true});
document.getElementById("contenedor-hijo2").addEventListener("click", function(evt){
    console.log("Click en el hijo #2 segundo listener");
}, {capture: true});