const { User } = require('../models');

const userData = [
    {
        username: "User1",
        email: "User1@user.com",
        password: '1'
    },
    {
        username: "User2",
        email: "User2@user.com",
        password: '2'
    },
    {
        username: "User3",
        email: "User3@user.com",
        password: '3'
    },
    {
        username: "User4",
        email: "User4@user.com",
        password: '4'
    },
    {
        username: "User5",
        email: "User5@user.com",
        password: '5'
    }
]

const seedUser = () => User.bulkCreate(userData)
module.exports = seedUser;