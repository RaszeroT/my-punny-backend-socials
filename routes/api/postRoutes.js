const router = require('express').Router()

const {
    getPosts
} = require('../../controllers/post-controller')

// /api/users
router.route('/').get(getPosts)

module.exports = router