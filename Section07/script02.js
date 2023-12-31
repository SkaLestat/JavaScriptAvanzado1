class RequestsHandler {
    constructor() {
        // this.url = 'https://us-central1-restful-test-257520.cloudfunctions.net/rest-api-example-2';
        this.url = 'https://dummyjson.com/products';
        this.color = 'color: purple;';
        this.green = 'background: green; color: white; display: block;';
        this.red = 'background: red; color: white; display: block;';
    }
    getHeaders() {
        return {
            "Content-type": "application/json",
        }
    }
    hacerRequest(request, params, tipoRequest) {
        return new Promise((resolve, reject) => {
            console.log('%c enviando request con los parámetros =>', this.color, params);
            fetch(this.url + (request || ''), {
                headers: this.getHeaders(),
                method: tipoRequest,
                body: tipoRequest !== 'GET' ? JSON.stringify(params) : null,
                // mode: "no-cors"//Agregar para evitar error de CORS desde local
            }).then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
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
REQUEST_HANDLER.hacerRequest("/add", {
    title: "Spring and summershoes New",
    price: 90,
    thumbnail: "https://i.dummyjson.com/data/products/59/thumbnail.jpg"
}, "POST").then(datos => {
    console.log(datos);
});