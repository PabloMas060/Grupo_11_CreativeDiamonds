const vinyls = require('../data/vinyls.json');
const shirts = require('../data/shirts.json');
const filtroController = require('./filtroController'); 

module.exports = {
    detail: (req, res) => {
        const id = req.params.id;
        const vinyl = vinyls.find(vinyl => vinyl.id === id);

        return res.render('products/detail', {
            vinyl
        });
    },
    vinilos: (req, res) => {
        const terminoDeBusqueda = req.query.search || ''; // Obtén el término de búsqueda desde la URL
        let productosAMostrar = vinyls;

        if (terminoDeBusqueda) {
            productosAMostrar = filtroController.filtrarVinilos(terminoDeBusqueda);
        }

        return res.render('products/vinilos', {
            vinyls: productosAMostrar
        });
    },

    indumentaria: (req, res) => {
        const terminoDeBusqueda = req.query.search || ''; // Obtén el término de búsqueda desde la URL
        let productosAMostrar = shirts;

        if (terminoDeBusqueda) {
            productosAMostrar = filtroController.filtrarProductos(terminoDeBusqueda);
        }

        return res.render('products/indumentaria', {
            shirts: productosAMostrar
        });
    },

    shows: (req, res) => {
        return res.render('products/shows');
    },
    add: require('./products/add'),
    create: require('./products/create'),
    edit: (req, res) => {
        return res.render('products/editProduct');
    },
};
