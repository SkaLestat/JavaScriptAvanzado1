/* Concatenar arreglo */
const array = [1, 2, 3, 4];
const temp = [...array, 5];
console.log(temp);

const [all, anno, mes, dia] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2019-10-31');
console.log(/^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2019-10-31'));
console.log(all, anno, mes, dia);

let objetoSet = new Set().add(1).add(2);
const [x, y] = objetoSet;
console.log(x, y);

function nombreCompleto({ nombre: x = 'Fulano', apellido: y = 'De tal' } = {}) {
    console.log(x + ' ' + y);
}
nombreCompleto({});
nombreCompleto({ nombre: 'Natalia', apellido: 'Corea' });
nombreCompleto({ nombre: 'Natalia' });