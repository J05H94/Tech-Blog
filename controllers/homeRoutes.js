const router = require('express').Router();
const {  Post, User, Comment  } = require("../models");
const withAuth = require('../../utils/auth');

router.get('/post/:id', async (req, res) => {
    try{
        console.log("home/post:/id")
        const postData = await Post.findByPk(req.params.id, {
            include: [User, {
                model: Comment,
                include: [User]
            }]
        })
        console.log(postData)
        if (postData){
            const posts = postData.get({plain: true})
            res.render('postID', {posts})
        }
        else {res.status(403).end()}
    }
    catch(err){
        res.json(err);
    }
})