const db = require('../../database/models');

module.exports = {
    loginGoogle: async (req,res) => {
        const {
            provider,
            photos: [{value:picture}],
            emails: [{value:email}],
            _json: {
                sub : googleId,
                family_name: last_name,
                given_name: first_name,
            }
        } = req.session.passport.user;
        try {
            const address = await db.Address.create()
            const [{id,rolId}, isCreate] = await db.User.findOrCreate({
                where: {
                    socialId: googleId
                },
                defaults: {
                    first_name,
                    last_name,
                    email,
                    avatar : picture,
                    addressId: address.id,
                    socialId: googleId,
                    socialProvider: provider
                }
            })
            if(!isCreate){
                await address.destroy()
            }

            req.session.userLogin= {
                id : id,
                first_name,
                last_name,
                email,
                avatar : picture,
                rol: rolId,
                socialId : googleId
            }
            res.cookie('creativeDiamonds', req.session.userLogin, {maxAge: 1000 * 60 * 5})
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }
}