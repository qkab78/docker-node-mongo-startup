const User = require('../models/users-model')

exports.getAllUsers = async ctx => {
    const users = await users.find();
    ctx.ok(users)
}

exports.getUser = async ctx => { }
exports.create = async ctx => {
    const { email, password, avatar, username } = ctx.request.body;
    const newUser = new User(ctx.request.body);
    const usersaved = await newUser.save();
    ctx.ok(usersaved)
}
exports.update = async ctx => { }
exports.delete = async ctx => { }