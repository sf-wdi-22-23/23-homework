var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    content: String,
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;