//Require Mongoose
var mongoose = require('mongoose');
//var mongooseId = Schema.Types.ObjectId;
//Define a schema
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    locationCode :  {
        type :Number,
        required : true
    },
    locationName : {
        type :String,
        required : true
    },
    latitude :{
        type :Number,
        required : true
    },
    longitude: {
        type :Number,
        required : true
    }
});

module.exports = mongoose.model('location', LocationSchema);