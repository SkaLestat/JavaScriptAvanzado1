function listarCookies(){
    return document.cookie.split("; ")
    .map(cookie => cookie.split("="));
}
function buscarCookie(key){
    /* OJO recordar que si en el arrow function se colocan {} se debe usar el return para retornar */
    return listarCookies().filter(param => param[0] == key);
}
/* Cookies no pueden ser creadas en archivos que corren localmente */
document.cookie = "temp=abc; expires=Thu, 4 Dec 2023 23:59:00 UTC; path=/";