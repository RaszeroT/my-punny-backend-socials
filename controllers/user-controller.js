const { User } = require("../models");

const UserController = {
  // get users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users)
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
};

module.exports = UserController;
