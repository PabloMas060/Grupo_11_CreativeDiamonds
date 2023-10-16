module.exports = {
    index: (req, res) => {
        res.render('index'); 
    },
    about: (req, res) => {
        res.render('about')
    },
    contact: (req, res) => {
        res.render('contact')
    },
    groups: (req, res) => {
        res.render('groups')
    },
    profile: (req, res) => {
        res.render('profile')
    },
}