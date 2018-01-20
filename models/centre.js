//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var mongooseId = Schema.Types.ObjectId;

var centreSchema = new Schema({
    centreCode : {
        type :Number,
        required : true
    },
    centreName : {
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
    },
    locations: [{
        type: mongooseId,
        ref: 'location',
        required: true
    }]
});

module.exports = mongoose.model('centre', centreSchema);