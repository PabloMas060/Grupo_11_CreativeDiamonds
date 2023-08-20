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
        const terminoDeBusqueda = req.query.search || '';
    
        // Manejo de filtros
        const filtros = {
            genero: req.query.genre || [],
            formato: req.query.formato || [],
            ordenar: req.query.ordenar || ''
        };
    
        // Filtrar y mostrar los productos de vinilos
        let productosAMostrar = vinyls;
    
        if (terminoDeBusqueda) {
            productosAMostrar = filtroController.filtrarVinilos(terminoDeBusqueda, filtros);
        }
    
        // Aplicar filtros de género y formato a los productos
        const productosFiltrados = filtroController.aplicarFiltros(productosAMostrar, filtros);
    
        // Ordenar los productos según la opción seleccionada
        if (filtros.ordenar === 'mayor-precio') {
            productosFiltrados.sort((a, b) => b.price - a.price);
        } else if (filtros.ordenar === 'menor-precio') {
            productosFiltrados.sort((a, b) => a.price - b.price);
        }
    
        return res.render('products/vinilos', {
            productosAMostrar: productosFiltrados,
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
    
        let productosFiltradosFormulario = shirts;
        productosFiltradosFormulario = filtroController.aplicarFiltros(productosFiltradosFormulario, filtrosFormulario);
    
        const productosFiltradosBusqueda = filtroController.filtrarProductos(terminoDeBusqueda);
    
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
