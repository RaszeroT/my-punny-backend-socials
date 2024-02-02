const router = require("express").Router();

const {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost
} = require("../../controllers/post-controller");

// /api/posts
router.route("/").get(getPosts).post(createPost);

// /api/posts/:postID
router.route("/:postID").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
