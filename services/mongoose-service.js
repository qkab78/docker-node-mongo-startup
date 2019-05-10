const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect(process.env.MONGOURIDOCKER, {useNewUrlParser:true, useCreateIndex:false}).then(()=> console.log('MongoDB connected...')).catch(error=>console.error(error));
}
