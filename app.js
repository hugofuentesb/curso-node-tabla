const argv = require('./config-yargs/yargs');
require('colors')
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

//const [, , arg3='base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

//console.log(process.argv);
//console.log(argv);


crearArchivo(argv.b, argv.l, argv.m)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err));

