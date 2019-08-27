const axios = require('axios');


const getLugar = async(dire) => {

    const encodURL = encodeURI(dire);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodURL}`,
        headers: { 'x-rapidapi-key': 'fdbf317d72msha75794e5f0f4e83p14c7f6jsnad43a77549d9' }
    });

    const resultado = await instance.get();

    if (resultado.data.Results.length === 0) {
        throw new Error('No se encontro una ciudad con esa referencia');
    }

    const direccion = resultado.data.Results[0].name;
    const latitud = resultado.data.Results[0].lat;
    const longitud = resultado.data.Results[0].lon;

    return {
        direccion,
        latitud,
        longitud
    }

}





module.exports = {
    getLugar
}