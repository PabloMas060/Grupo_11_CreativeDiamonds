// filtroController.js
const shirts = require('../data/shirts.json');
const vinyls = require('../data/vinyls.json'); 

module.exports = {
    filtrarProductos: (terminoDeBusqueda) => {
        const resultadosFiltrados = shirts.filter(producto => {
            const nombreArtista = producto.artist.toLowerCase();
            const terminoMinusculas = terminoDeBusqueda.toLowerCase();
            return nombreArtista.includes(terminoMinusculas);
        });

        return resultadosFiltrados;
    },
    filtrarVinilos: (terminoDeBusqueda) => {
        const resultadosFiltrados = vinyls.filter(vinilo => {
            const tituloMinusculas = vinilo.title.toLowerCase();
            const bandaMinusculas = vinilo.artist.toLowerCase();
            const terminoMinusculas = terminoDeBusqueda.toLowerCase();
            return tituloMinusculas.includes(terminoMinusculas) || bandaMinusculas.includes(terminoMinusculas);
        });

        return resultadosFiltrados;
    }
};