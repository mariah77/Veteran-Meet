var config = {
    DB: 'mongodb://127.0.0.1:27017/veteranMeet'
};

const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);


module.exports = mongoose;

