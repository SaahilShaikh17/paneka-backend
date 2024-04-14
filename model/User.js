const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
      },
      lastname:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
      },
      username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        maxlength: 1024,
        minlength: 5,
      },
      posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      }],
      comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }]
})

module.exports =mongoose.model('User', userSchema);