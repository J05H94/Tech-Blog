const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll({
        attributes: ["id", "title", "post_content"],
        include: [
            {
                model: Comment,
                attributes: ["id", "user_name", "email", "password"],
            },
        ]
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;