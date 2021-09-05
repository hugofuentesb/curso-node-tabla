
const fs = require('fs');

const colors = require('colors')

const crearArchivo = async (base = 5, listar, maximo = 10) => {


    let salidaArchivo = '';
    let salidaConsola = '';
    for(let i = 1; i <= maximo; i++) {
        salidaArchivo += `${base} * ${i} = ${base * i}\n`;
        salidaConsola += `${base} ${'*'.yellow} ${i} = ${base * i}\n`;
    }

    if(listar) {
        console.log( colors.blue('===========================') );
        console.log('Tabla del '.rainbow, base);
        console.log( colors.blue('===========================') );
        console.log(salidaConsola);
    }

    /*fs.writeFile(`tabla-${base}.txt`, salida, (err)=> {
        if(err) throw err;
        console.log(`tabla-${base}.txt creado`);
    });*/

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salidaArchivo);
    //console.log(`tabla-${base}.txt creado`);
    return `tabla-${base}.txt`;
}

module.exports = {
    crearArchivo: crearArchivo
}