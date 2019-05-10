const Item = require('../models/items-model')
const joiValidator = require('../validations/item-validation');
exports.getAllItems = async ctx =>{
    const items = await Item.find();
    ctx.ok(items)
}

exports.getItem = async ctx =>{
    const item = await Item.findById(ctx.params.id);
    ctx.ok(item)
}
exports.create = async ctx =>{
    const {name}=ctx.request.body;
    const newItem = new Item({ name });
    let validation = await newItem.itemValidator(ctx.request.body, joiValidator.create);
    if(validation.error) return ctx.badRequest({error:'Bad Request'});
    const itemSaved = await newItem.save();
    ctx.ok(itemSaved);
}
exports.update = async ctx =>{
    const item = await Item.findById(ctx.params.id);
    let validation = await item.itemValidator(ctx.request.body, joiValidator.update);
    if(validation.error) return ctx.badRequest({error:'Bad Request'});
    if(ctx.request.body.name !== '') item.name = ctx.request.body.name;
    const itemUpdated = await item.save();
    ctx.ok(itemUpdated);
}
exports.delete = async ctx =>{
    const item = await Item.findById(ctx.params.id);
    let validation = await item.itemValidator(ctx.params, joiValidator.delete);
    if(validation.error) return ctx.badRequest({error:'Bad Request'});
    await item.remove();
    ctx.ok({message:'Item deleted'});
}