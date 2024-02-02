const router = require('express').Router();
// import functions from controllers 
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/users/:userID
router.route('/:userID').get(getUserById).put(updateUser).delete(deleteUser)

module.exports = router