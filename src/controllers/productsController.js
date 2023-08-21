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
    detailShirt: (req, res) => {
        const id = parseInt(req.params.id);
        console.log("req.query:", req.query);
        const shirt = shirts.find(shirt => shirt.id === id);

        console.log("Shirt:", shirt);
        
        if (!shirt) {
            return res.status(404).send('Shirt not found');
        }
        
        return res.render('products/detailShirt', {
            shirt: shirt
        });
    },
    vinilos: (req, res) => {
        const terminoDeBusqueda = req.query.search || '';
        
        const filtros = {
            formato: req.query.formato || '', 
            ordenar: req.query.ordenar || '',
            genero: req.query.genre || '',
        };
        
        let productosAMostrar = vinyls;
        
        if (terminoDeBusqueda) {
            productosAMostrar = filtroController.filtrarVinilos(terminoDeBusqueda);
        }
        
        if (filtros.formato) {
            productosAMostrar = productosAMostrar.filter(vinilo => vinilo.format === filtros.formato);
        }

        if (filtros.genero) {
            productosAMostrar = productosAMostrar.filter(vinilo => vinilo.genre === filtros.genero);
        }
        
        if (filtros.ordenar === 'mayor-precio') {
            productosAMostrar.sort((a, b) => b.price - a.price);
        } else if (filtros.ordenar === 'menor-precio') {
            productosAMostrar.sort((a, b) => a.price - b.price);
        }
        
        return res.render('products/vinilos', {
            productosAMostrar: productosAMostrar,
        });
    },
    indumentaria: (req, res) => {
        const terminoDeBusqueda = req.query.search || '';
        
        const filtrosFormulario = {
            color: req.query.color || [],
            talle: req.query.talle || [],
            'Tipo de Manga': req.query['Tipo de Manga'] || [],
            ordenar: req.query.ordenar || '',
        };
        
        let productosFiltradosFormulario = shirts;
        productosFiltradosFormulario = filtroController.aplicarFiltros(productosFiltradosFormulario, filtrosFormulario);
        
        const productosFiltradosBusqueda = filtroController.filtrarProductos(terminoDeBusqueda);
        
        const productosAMostrar = productosFiltradosFormulario.filter(producto =>
            productosFiltradosBusqueda.some(p => p.id === producto.id)
        );
        
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
    addVinyl: require('./products/addVinyl'),
    createVinyl: require('./products/createVinyl'),
    addShirt: require('./products/addShirt'),
    createShirt: require('./products/createShirt'),
    edit: (req, res) => {
        return res.render('products/editProduct');
    },
};
