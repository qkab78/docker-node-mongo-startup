const koa = require('koa');
const Router = require('koa-router');
const Items = require('../controllers/items-controller');

const router = new Router();

module.exports = router.routes();