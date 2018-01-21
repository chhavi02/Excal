var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Device = new Schema({
    deviceId : String,
    platform : String
});

var DeviceSchema = mongoose.model('Device', Device);
module.exports = Device;
