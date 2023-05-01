const { Post } = require('../models');

const postData = [
    {
        title: "Post Title 1",
        post_content: "Post content 1",
        user_id: 1
    },
    {
        title: "Post Title 2",
        post_content: "Post content 2",
        user_id: 2
    },
    {
        title: "Post Title 3",
        post_content: "Post content 3",
        user_id: 3
    },
    {
        title: "Post Title 4",
        post_content: "Post content 4",
        user_id: 4
    },
    {
        title: "Post Title 5",
        post_content: "Post content 5",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData)
module.exports = seedPosts;