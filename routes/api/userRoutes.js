const router = require('express').Router();
// import methods from controllers 
const {
    getUsers,
    createUser,
    getUserById
} = require('../../controllers/user-controller')

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/users/:userID
router.route('/:userID').get(getUserById)

module.exports = router