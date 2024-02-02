const router = require('express').Router();
// import functions from controllers 
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller')

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/users/:userID
router.route('/:userID').get(getUserById).put(updateUser).delete(deleteUser)

// /api/users/:userID/friends/:friendID
router.route('/:userID/friends/:friendID').put(addFriend).delete(deleteFriend)

module.exports = router