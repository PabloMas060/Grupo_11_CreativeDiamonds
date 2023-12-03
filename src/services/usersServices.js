const db = require('../database/models');
const { hashSync } = require('bcryptjs');
const fs = require('fs');

module.exports = {
    getAllUsers: async () => {
        try {
            const users = await db.Users.findAll();
            return users
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },
    getOneUser: async (id) => {
        try {
            const user = await db.User.findByPk(id);
            return user
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },
    getAllEmails: async () => {
        try {
            const users = await db.User.findAll({
                attributes: ['email']
            });
            const emails = users.map(user => user.email);
            return emails
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },
    registerUser: async (data, image) => {
        try {
            const newAddress = await db.Address.create();
            const newUser = await db.User.create({
                first_name: data.first_name.trim(),
                last_name: data.last_name.trim(),
                email: data.email.trim(),
                password: hashSync(data.password, 10),
                rolId: 2,
                addressId: newAddress.id,
                identificatorId: null,
                faceId: 1,
                headId: 1,
                bustId: 1,
                hatId: 1
            })
            return newUser
        } catch (error) {
            throw {
                status: 500,
                message: message.error
            }
        }
    },
  destroyUser : async (id) => {
    try {
        const deletedUser = await db.User.destroy({
            whre : {id}
        })
        return deletedUser
    } catch (error) {
        throw {
            status : 500,
            message : error.message
        }
    }
  }


}