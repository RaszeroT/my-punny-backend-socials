const router = require('express').Router()

const {
    getPosts,
    createPost
} = require('../../controllers/post-controller')

// /api/users
router.route('/').get(getPosts).post(createPost)

module.exports = router