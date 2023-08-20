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
    },

    aplicarFiltros: (productos, filtros) => {
        let productosFiltrados = [...productos];

        if (filtros.genero && filtros.genero.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => filtros.genero.includes(producto.genero));
        }

        if (filtros.color && filtros.color.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => filtros.color.includes(producto.color));
        }

        if (filtros.talle && filtros.talle.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => filtros.talle.includes(producto.size)); 
        }

        if (filtros['Tipo de Manga'] && filtros['Tipo de Manga'].length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => filtros['Tipo de Manga'].includes(producto.sleeve)); 
        }

        if (filtros.ordenar === 'mayor-precio') {
            productosFiltrados.sort((a, b) => b.price - a.price); 
        } else if (filtros.ordenar === 'menor-precio') {
            productosFiltrados.sort((a, b) => a.price - b.price); 
        }

        return productosFiltrados;
    }
};