const Post = require('../models/posts-model')

exports.getAllposts = async ctx => {
    const posts = await posts.find();
    ctx.ok(posts)
}

exports.getUser = async ctx => { }
exports.create = async ctx => {
    const newPost = new Post(ctx.request.body);
    const postaved = await newPost.save();
    ctx.ok(postaved)
}
exports.update = async ctx => { }
exports.delete = async ctx => { }