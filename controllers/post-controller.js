const { Post, User } = require('../models')

const PostController = {
    async getPosts(req, res) {
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

module.exports = PostController