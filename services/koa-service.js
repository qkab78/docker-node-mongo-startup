const koa = require('koa');
const koaRouter = require('koa-router');
const port = process.env.PORT || 8080
const index = require('../routes/index');


const app = new koa();
const router = new koaRouter();


app.use(require('@koa/cors')());
app.use(require('koa-respond')());
app.use(require('koa-body')());
app.use(async (ctx, next)=>{
    try{
        await next();
    }catch(error){
        console.error("Error during request: ", error);
        ctx.internalServerError();
    }
});

index(router);
app.use(router.routes());
app.use(router.allowedMethods());
exports.start = () => {
    app.listen(port, ()=>console.log(`Koa server running on port ${port}`));
}