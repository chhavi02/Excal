//Import the mongoose module
var mongoose = require('mongoose');
var config = require('./config/database');

//Set up default mongoose connection
var mongoDB = config.url;

var db = mongoose.connection;
exports.connect = function(){
    mongoose.connect(mongoDB, {
    useMongoClient: true
  });
  // Get Mongoose to use the global promise library
  mongoose.Promise = global.Promise;
  //Get the default connection

  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  db.once('open', function() {
      console.log('Database connected succesfully !');
  });
}
//module.exports = db;