require('dotenv').config();
const app = require('./services/koa-service');
const mongoose = require('./services/mongoose-service');

app.start();
mongoose.connect();