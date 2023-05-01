const { User } = require('../models');

const userData = [
    {
        user_name: "User1",
        email: "User1@user.com",
        password: '1'
    },
    {
        user_name: "User2",
        email: "User2@user.com",
        password: '2'
    },
    {
        user_name: "User3",
        email: "User3@user.com",
        password: '3'
    },
    {
        user_name: "User4",
        email: "User4@user.com",
        password: '4'
    },
    {
        user_name: "User5",
        email: "User5@user.com",
        password: '5'
    }
]

const seedUser = () => User.bulkCreate(userData)
module.exports = seedUser;