const { Schema, model } = require("mongoose");

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
  },
  {
    timestamps: true,
    toJSON: { 
        getters: true, 
        virtuals: true },
  }
);

// initialize the Post model
const Post = model("Post", postSchema);
// export model
module.exports = Post;
