const axios = require('axios');

const getLugareLatLng = async dir => {
    const resp = await axios({
        url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        method: 'get',
        params: {
            location: dir
        },
        headers: {
            'X-RapidAPI-Key': 'ff80cd638emshfea4a3c1129e28bp1c8ea3jsn7e9c32a08508'
        }
    });

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugareLatLng
}