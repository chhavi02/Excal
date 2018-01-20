var scheduleDuties = require('../models/scheduleDuty');
var moment = require('moment');

exports.scheduleDuty_detail = function(req,res,next){
    console.log('List of all duties');
    scheduleDuties.find({'_id' : req.params.scheduleDutyId}).then((scheduleDuty)=>{
        res.send(scheduleDuty);
    },(e)=>{
        res.status.send(e);
    });
}

exports.scheduleDuty_list = function(req,res,next){
   console.log('List of all duties');
   scheduleDuties.find({}).then((scheduleDuties) => {
    res.send({scheduleDuties});
   }, (e) => {
       res.status(400).send(e);
   });
//    scheduleDuties.find({},{scheduleDutyCode :1, scheduleDutyName : 1, _id :0}).toArray(function(err,result){
//        if(err)
//        throw err;
//        console.log(result);
//        res.send(result);
//    });
};

exports.scheduleDuty_assign_get = function(req,res,next){
    
   
};


exports.scheduleDuty_assign_post = function(req,res,next){
   console.log('Inside create scheduleDuty');
   var dutyStart = req.body.startDate + "T" + req.body.startTime +"Z" ;
   var dutyEnd = req.body.endDate + "T" + req.body.endTime + "Z";
   console.log(dutyStart);
   console.log(dutyEnd);
   var scheduleDuties_instance = new scheduleDuties({
         empCode : req.body.empCode,
         centreCode: req.body.centreCode,
         locationCode: req.body.locationCode,
         startDuty: new Date(dutyStart),
         endDuty: new Date(dutyEnd)
        //  startDuty: new Date(req.body.startDuty), //"2016-05-18T16:00:00Z"
        //  endDuty: new Date(req.body.endDuty)
     });
    console.log('Before saving');
    scheduleDuties_instance.save(function(e,doc){
        if(e){
            console.log("scheduleDuty instance could not be saved !!");
            //throw e;
            res.status(400).send(e);
        }
        else{
            res.send(doc); 
        } 
    })
};

exports.scheduleDuty_delete_get = function(req,res,next){
    
  
};

exports.scheduleDuty_delete_post = function(req,res,next){
    
   
};

exports.scheduleDuty_update_get = function(req,res,next){
    
    
};
    
exports.scheduleDuty_update_post = function(req,res,next){
      
    
};

