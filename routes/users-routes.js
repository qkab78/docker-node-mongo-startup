const koa = require('koa');
const Router = require('koa-router');
const Users = require('../controllers/users-controller');

const router = new Router();

module.exports = router.routes();