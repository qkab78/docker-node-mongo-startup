require('dotenv').config()
const koa = require('koa');
const koaRouter = require('koa-router');
const mongoose = require('mongoose')
const port = process.env.PORT || 9000
const index = require('./routes/index');

exports.start = (app, router, port) => {
    app.use(cors());
    app.use(require("koa-body")());
    app.use(require('koa-respond')());

    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            // will only respond with JSON
            console.log("error during request: ", err)
            ctx.internalServerError();
        }
    })

    app.use(router.allowedMethods())
    app.use(router.routes())

    //Connect to database
    if (process.env.MONGOURIDOCKER) {
        mongoose.connect(process.env.MONGOURIDOCKER);
    }

    if (!port) port = process.env.PORT || 8080;
    app.listen(port, () => console.log("Server running on:" + port));
    return app;
}