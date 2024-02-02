const { Schema, model } = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            minLength: 1
        },
        username: {
            type: String,
            required: true
        },      
    },
    {timestamps: true,
    toJSON: {
        getters: true
    }}
)

//export model
module.exports = reactionSchema;