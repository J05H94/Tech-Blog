const router = require('express').Router();
const { User,  Post, Comment  } = require("../models");
const withAuth = require('../../utils/auth');

router('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes:{exclude:['password']}
        });
        const postData = await Post.findAll();
        const commentData = await Comment.findAll();

        const users = userData.map((project) => project.get({ plain: true }));
        const posts = postData.map((project) => project.get({ plain: true }));
        const comments = commentData.map((project) => project.get({ plain: true }));

        res.render('home', {
            posts, 
            logged_in: req.session.logged_in,
        });
    }
    catch(err){
        res.status(500).json(err);
    }
})

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

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
}); 

module.exports = router;