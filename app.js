const { getLugareLatLng } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

const { argv } = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
});

// console.log(argv.direccion);

// getLugareLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => console.log('ERROR!!!', err));

// getClima(40.75, -74)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async direccion => {

    try {
        const { lat, lng, direccion: dir } = await getLugareLatLng(argv.direccion);

        const temp = await getClima(lat, lng);

        return `El clima de ${ dir } es de ${ temp }`;
    } catch (e) {
        throw new Error(`No se pudo determinar el clima de ${ direccion }`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);