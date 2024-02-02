const router = require("express").Router();

const {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  createReaction,
  deleteReaction
} = require("../../controllers/post-controller");

// /api/posts
router.route("/").get(getPosts).post(createPost);

// /api/posts/:postID
router.route("/:postID").get(getPostById).put(updatePost).delete(deletePost);

// /api/posts/:postID/reactions
router.route("/:postID/reactions").post(createReaction)

// /api/posts/:postID/reactions/:reactionID
router.route("/:postID/reactions/:reactionID").delete(deleteReaction)

module.exports = router;
