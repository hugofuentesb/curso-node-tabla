const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es la base de la tabla a multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    //demandOption: true,
                    type: 'boolean',
                    derault: false,
                    describe: 'True o False para pintar o no la tabla en consola'
                })
                .option('m', {
                    alias: 'maximo',
                    //demandOption: true,
                    type: 'number',
                    derault: 10,
                    describe: 'Número máximo hasta donde va a multiplicar'
                })
                .check((argv, options) => {
                    console.log('yargs', argv)
                    if( isNaN(argv.b)){
                        throw 'La base debe ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;