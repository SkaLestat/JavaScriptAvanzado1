const objetoMap = new Map();
objetoMap.set("un string", "valor asociado a un string");
const miObjeto = {};
objetoMap.set(miObjeto, "valor asociado a un objeto");
objetoMap.set(12, "valor asociado a un numero");
for([key, value] of objetoMap) {
    console.log(key, value);
}

/* En objetos solo se pueden usar strings como Keys */
const obj = {};
obj["valorKey"] = 12;
obj["valorKey2"] = 34;
obj["valorKey3"] = 56;
/* objetos no son iterables */
/* for([key, value] of obj) {
    console.log(key, value);
} */
/* Iterar en objetos */
const objKeys = Object.keys(obj);
objKeys.forEach(key => {
    console.log(obj[key]);
});