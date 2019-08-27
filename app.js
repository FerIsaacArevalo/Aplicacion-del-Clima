const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const getInfo = async(direccion) => {

    try {

        const coord = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coord.latitud, coord.longitud);

        return `El clima de ${coord.direccion} es de ${temp} °C`;

    } catch (error) {
        return `No se pudo encontrar el clima de ${direccion}`;

    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);