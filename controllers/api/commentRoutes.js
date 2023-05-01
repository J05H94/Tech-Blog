const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ["id", "user_name", "email", "password"],
        include: {
            model: User,
            attributes: ["user_name"]
        }
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;