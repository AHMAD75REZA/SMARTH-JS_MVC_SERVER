const mongoose = require('mongoose');

// const mongoDB = mongoose.connect('mongodb://127.0.0.1:270177//IMS');

mongoose.connect('mongodb://127.0.0.1:27017/codeil_development').then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error conneting to MongoDB"));

// db.once('open', function () {
//     console.log('conneted to database:: MongoDB');
// });

module.exports = db;