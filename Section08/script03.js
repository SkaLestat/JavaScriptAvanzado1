function displayLocation(latitude, longitude) {
    var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true&key=';
   console.log(url)
    fetch(url, {
        headers: {"Content-type": "application/json"},
        mode: "no-cors"
    }).then((response) => {
        console.log(response)
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(response => {
        return response.json();
    }).then(data => {
        var address = data.results[0];
        let el = address.formatted_address.split(', ');
        let node = document.createElement('h1');
        node.textContent = 'Tú estas en ' + el[el.length - 1]
        document.body.appendChild(node);
    }).catch(error => {
        console.log('Request falló', error);
    });
};
var mostrarNombrePais = function (position) {
    console.log(position)
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    console.log(x, y);
    displayLocation(x, y);
};
var errorCallback = function (error) {
    throw new Error('No es posible acceder a las coordenadas del usuario');
};

navigator.geolocation.getCurrentPosition(mostrarNombrePais, errorCallback);