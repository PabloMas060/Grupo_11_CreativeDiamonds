const { readJSON } = require("../../data")

module.exports =  (req, res) => {
    res.render('./users/profile')
}


/* (req,res) => {
    const users = readJSON('users.json');
    const user = users.find(user => user.id === req.session.user.id)

return res.render('users/profile', {
        ...user
    })
} */