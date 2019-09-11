const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        method: 'get',
        params: {
            lat,
            lon: lng,
            APPID: '4bba9ee89a808cb1065be7d1b1e44b86',
            units: 'metric'
        }
    });

    return resp.data.main.temp;

}

module.exports = {
    getClima
}