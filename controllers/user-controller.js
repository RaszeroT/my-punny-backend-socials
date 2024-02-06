const { User } = require("../models");
const { findById } = require("../models/User"); // what is this?? TODO:

const UserController = {
  // get users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  //   create user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // get user by id
  async getUserById(req, res) {
    try {
      const userID = req.params.userID;
      const user = await User.findById(userID);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // update user
  async updateUser(req, res) {
    try {
      const userID = req.params.userID;
      const newUserInfo = await User.findOneAndUpdate(
        { _id: userID },
        req.body,
        // show updated data
        { new: true }
      );
      res.json(newUserInfo);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // delete user
  async deleteUser(req, res) {
    try {
      const userID = req.params.userID;
      const user = await User.findOneAndDelete({ _id: userID });
      res.json({ message: "User successfully deleted!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // add friend to user
  async addFriend(req, res) {
    try {
      const userID = req.params.userID;
      const userData = await User.findOneAndUpdate(
        { _id: userID },
        { $addToSet: { friends: req.params.friendID } },
        { new: true }
      );
      res.json(userData);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // delete friend
  async deleteFriend(req, res) {
    try {
      const userID = req.params.userID;
      const userData = await User.findOneAndUpdate(
        { _id: userID },
        { $pull: { friends: req.params.friendID } },
        { new: true }
      );
      res.json({ message: 'Friend removed successfully!'});
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = UserController;
