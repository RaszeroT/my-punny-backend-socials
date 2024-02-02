const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // regex format from 17-CS 02-challenge
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
      },
    },
    // // link posts to user
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Post",
    //   },
    // ],
    // // link friends to User
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
  },
  //  convert to JSON
  { toJSON: { virtuals: true } }
);

// initialize the User model
const User = model('User', userSchema)
// export model
module.exports = User
