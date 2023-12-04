const TARGET = {
    render(val, tag) {
        let htmlTag = document.getElementsByTagName(tag)[0];
        if (!htmlTag) {
            htmlTag = document.createElement(tag);
            document.body.appendChild(htmlTag);
        }
        htmlTag.textContent = val;
    }
}

const HANDLER = {
    set(TARGET, prop, value) {
        TARGET[prop] = value;
        TARGET.render(value, prop == "titulo" ? "h1" : "p");
    }
}

const MY_PROXY = new Proxy(TARGET, HANDLER);

let date = new Date();
const MY_PROXY_DATE = new Proxy(date, {
    get: function (target, prop, proxy) {
        console.log(proxy);
        if (prop == "format") {
            return `${target.getDate()}/${target.getMonth()}/${target.getFullYear()}`
        } else {
            return target[prop];
        }
    }
});

const MY_PROXY_DATOS = new Proxy({}, {
    set(target, prop, value) {
        if (prop == 'edad' && !Number.isInteger(value)) {
            throw new Error('El valor de edad no es válido');
        }

        if (prop == 'fecha' && !/^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/.test(value)) {
            throw new Error('El valor de fecha no es válido');
        }

        return target[prop] = value;
    }
});