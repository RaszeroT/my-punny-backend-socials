const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create Post model
const postSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    postContext: {
      type: String,
      required: true,
      minLength: 1,
    },
      reactions: [reactionSchema],
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// initialize the Post model
const Post = model("Post", postSchema);
// export model
module.exports = Post;
