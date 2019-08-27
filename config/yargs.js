const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            demmand: true,
            desc: "Nombre de la ciudad para buscar el clima"
        }
    }).argv;


module.exports = {
    argv
}