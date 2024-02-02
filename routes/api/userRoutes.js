const router = require('express').Router();
// import methods from controllers 
const {
    getUsers,
    createUser
} = require('../../controllers/user-controller')

// /api/users
router.route('/').get(getUsers).post(createUser)

module.exports = router