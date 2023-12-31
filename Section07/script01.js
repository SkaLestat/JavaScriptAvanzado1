class RequestsHandler {
    constructor() {
        // this.url = 'https://us-central1-restful-test-257520.cloudfunctions.net/rest-api-example-2';
        this.url = 'https://dummyjson.com/carts';
        this.color = 'color: purple;';
        this.green = 'background: green; color: white; display: block;';
        this.red = 'background: red; color: white; display: block;';
    }
    getHeaders() {
        return {
            "Content-type": "application/json",
        }
    }
    // @returns {void} para cuando la funcion no retorna nada
    /**
     * Test de code hint de una funcion
     * @param {string} request - Descripción del parámetro request
     * @param {object} params - Descripción del parámetro params
     * @param {string} tipoRequest - Descripción del parámetro tipoRequest
     * @returns {object} - Descripción del valor de retorno
     */
    hacerRequest(request, params, tipoRequest) {
        return new Promise((resolve, reject) => {
            // console.log('%cenviando request con los parámetros =>%cpara%cms', 'color: pink;',this.color, 'color: pink;');
            console.log('%c enviando request con los parámetros =>', this.color, params);
            fetch(this.url + (request || ''), {
                headers: this.getHeaders(),
                method: tipoRequest,
                body: tipoRequest !== 'GET' ? JSON.stringify(params) : null,
                // mode: "no-cors"//Agregar para evitar error de CORS desde local
            }).then(response => {
                /**
                 * Se pude usar este primer then para revisar el estado del objeto Response
                 * si se ignora se puede usar los valores entregados por el api directamente
                 * si hay algun tipo de error en la peticion(autorizacion, procesos del lado del servidor)
                 * la propiedad .ok retorna false
                 */
                if (!response.ok) {
                    throw Error(response.statusText);
                } else{
                    console.log(response)
                }
                return response;
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log('%c datos recibidos =>', this.green, data);
                resolve(data);
            }).catch(error => {
                console.log('%c Request falló', this.red, error);
                reject(new Error(error));
            });
        });
    }
}
const REQUEST_HANDLER = new RequestsHandler();
REQUEST_HANDLER.hacerRequest(null, {}, "GET");

/* var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
fetch("https://dummyjson.com/carts", requestOptions)
  .then(response => {console.log(response); return response})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */