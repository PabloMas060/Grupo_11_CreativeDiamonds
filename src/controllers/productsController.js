module.exports = {
    detail: (req, res) => {
        return res.render('products/detail')
    },
    vinilos: (req, res) => {
        return res.render('products/vinilos')
    },
    indumentaria: (req, res) => {
        return res.render('products/indumentaria')
    },
    shows: (req, res) => {
        return res.render('products/shows')
    }
}