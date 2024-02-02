const { User } = require("../models");
const { findById } = require("../models/User");

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
};

module.exports = UserController;
