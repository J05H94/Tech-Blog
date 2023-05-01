const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "post_content"],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "post_id", "user_id"],
                include: {
                    model: User,
                    attributes: ["user_name"]
                }
            },
            {
                model: User,
                attributes: ["user_name"]
            }
        ]
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get("/:id", withAuth, async (req, res) =>{
    try{
        console.log("postRoutes: id "+ id)
    }catch(err){
        res.json(err);
    }
})

module.exports = router;