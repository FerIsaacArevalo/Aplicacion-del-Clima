const axios = require('axios');


const getClima = async(latitud, longitud) => {

    const encodLat = encodeURI(latitud);
    const encodLon = encodeURI(longitud);

    const instance = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${encodLat}&lon=${encodLon}&appid=201cc8f97ae43937ceede47fb2bc123c&units=metric`);

    return instance.data.list[0].main.temp;

}

module.exports = {
    getClima
}