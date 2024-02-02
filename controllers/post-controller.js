const { Post, User } = require("../models");

const PostController = {
  // get posts
  async getPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // create posts
  async createPost(req, res) {
    try {
      const post = await Post.create(req.body);
      res.json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // get post by id
  async getPostById(req, res) {
    try {
      const postID = req.params.postID;
      const post = await Post.findById(postID);
      res.json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // update post
  async updatePost(req, res) {
    try {
      const postID = req.params.postID;
      const newPostInfo = await Post.findOneAndUpdate(
        { _id: postID },
        req.body,
        // show updated data
        { new: true }
      );
      res.json(newPostInfo);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // delete post
  async deletePost(req, res) {
    try {
      const postID = req.params.postID;
      const post = await Post.findOneAndDelete({ _id: postID });
      res.json({ message: "Post successfully deleted!" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};

module.exports = PostController;
