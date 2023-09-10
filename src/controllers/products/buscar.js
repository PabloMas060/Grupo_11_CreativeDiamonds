let vinyls = require('../../data/vinyls.json');
let shirts = require('../../data/shirts.json');
const filtroController = require('../filtroController'); 

module.exports = {
    productos: (req, res) => {
        const terminoDeBusqueda = req.query.search || '';
        const categoriaSeleccionada = req.query.category || '';

        console.log(categoriaSeleccionada);
        let productosAMostrarVinyls = vinyls
        let productosAMostrarShirts = shirts

        if (terminoDeBusqueda) {
            if (categoriaSeleccionada === 'vinilos' || categoriaSeleccionada === 'home') {
                productosAMostrarVinyls = filtroController.filtrarVinilos(terminoDeBusqueda);
            } else if (categoriaSeleccionada === 'indumentaria') {
                productosAMostrarShirts = filtroController.filtrarProductos(terminoDeBusqueda);
            }
        }

        if (categoriaSeleccionada === 'vinilos' || categoriaSeleccionada === 'home') {
            // Renderizar la vista de vinilos si la categoría es 'vinilos'
            return res.render('products/vinilos', {
                productosAMostrar: productosAMostrarVinyls
            });
        } else if (categoriaSeleccionada === 'indumentaria') {
            // Renderizar la vista de camisetas si la categoría es 'indumentaria'
            return res.render('products/indumentaria', {
                shirts: productosAMostrarShirts
            });
        }
    }
};
