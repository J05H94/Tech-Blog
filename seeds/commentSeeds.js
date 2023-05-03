const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Hello World1"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Hello World2"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "Hello World3"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Hello World4"
    },
    {
        user_id: 5,
        post_id: 5,
        comment_text: "Hello World5"
    }
]

const seedComments = () => Comment.bulkCreate(commentData)
module.exports = seedComments;