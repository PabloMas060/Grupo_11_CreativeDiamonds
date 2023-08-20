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
    
        // Manejo de filtros desde el formulario
        const filtrosFormulario = {
            genero: req.query.genero || [],
            color: req.query.color || [],
            talle: req.query.talle || [],
            'Tipo de Manga': req.query['Tipo de Manga'] || [],
            ordenar: req.query.ordenar || ''
        };
    
        // Aplicar filtros a los productos desde el formulario
        let productosFiltradosFormulario = shirts;
        productosFiltradosFormulario = filtroController.aplicarFiltros(productosFiltradosFormulario, filtrosFormulario);
    
        // Obtén productos filtrados por búsqueda
        const productosFiltradosBusqueda = filtroController.filtrarProductos(terminoDeBusqueda);
    
        // Combina los resultados de ambos filtros
        const productosAMostrar = productosFiltradosFormulario.filter(producto =>
            productosFiltradosBusqueda.some(p => p.id === producto.id)
        );
    
        // Ordenar los productos según la opción seleccionada
        if (filtrosFormulario.ordenar === 'mayor-precio') {
            productosAMostrar.sort((a, b) => b.price - a.price);
        } else if (filtrosFormulario.ordenar === 'menor-precio') {
            productosAMostrar.sort((a, b) => a.price - b.price);
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
