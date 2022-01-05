const mongoose = require('mongoose');
mongoose.Promsie = global.Promise;
const db = {};

// Config
var DatabaseUser = process.env.MONGO_USER || "admin";
var DatabasePW = process.env.MONGO_PW || "passwword";
var Database = process.env.MONGO_DB || "database";
const PORT = process.env.PORT || 4000;

db.mongoose = mongoose;
db.url = `mongodb+srv://${DatabaseUser}:${DatabasePW}@cluster0.pasgn.mongodb.net/${Database}?retryWrites=true&w=majority`;
db.models = require('./db.model.js');
module.exports = db;