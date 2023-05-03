const router = require('express').Router();
const { User,  Post, Comment  } = require("../models");
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) =>{
    Post.findAll({
        where:{
            user_id: req.session.user_id,
        },
        attributes:[
            {
                model: Comment,
                attributes:[
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id'
                ],
                include:{
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(data => {
        const posts = data.map(d => d.get({plain: true}))
        res.render('dashboard', {posts, loggedIn: true})
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/edit/:id', withAuth, (req, res) =>{
    Post.findOne({
        where: {
            id:req.params.id
        },
        attributes: [
        'id',
        'title',
        'post_content'
        ],
        include:[
            {
                model: Comment,
                attributes:[
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(data => {
        if(!data){
            res.status(400).json({message: 'No Post found with this ID'})
            return;
        }

        const posts = data.get({plain: true}) 

        res.render('edit-post', {Post, loggedIn: true})
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/create', withAuth, (req, res) =>{
    Post.findAll({
        where: {
            user_id:req.session.user_id
        },
        attributes: [
        'id',
        'title',
        'post_content'
        ],
        include:[
            {
                model: Comment,
                attributes:[
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(data => {
        const posts = data.map(d => d.get({plain: true}))
        res.render('create-post', {posts, loggedIn: true})
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;