const { Post, User } = require('../models')

const PostController = {
    // get posts
    async getPosts(req, res) {
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    // create posts
    async createPost(req, res) {
        try {
            const post = await Post.create(req.body)
            res.json(post)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

module.exports = PostController