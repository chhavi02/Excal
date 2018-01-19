var scheduleDutys = require('../models/scheduleDuty');
//var con = require('../connection');
//var db = con.db;
exports.scheduleDuty_detail = function(req,res,next){
    //console.log('something');
    scheduleDuties.find({'scheduleDutyCode' : req.params.scheduleDutyCode}).then((scheduleDuty)=>{
        res.send(scheduleDuty);
    },(e)=>{
        res.status.send(e);
    });
}

exports.scheduleDuty_list = function(req,res,next){
   //console.log("Inside scheduleDutys list function");
   scheduleDuties.find({}).then((scheduleDuties) => {
    res.send({scheduleDuties});
   }, (e) => {
       res.status(400).send(e);
   });
//    scheduleDutys.find({},{scheduleDutyCode :1, scheduleDutyName : 1, _id :0}).toArray(function(err,result){
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
   var scheduleDutys_instance = new scheduleDutys({
        empCode : req.body.empCode,
        centreName: req.body.centreCode,
        locationName: req.body.locationCode,
        startDuty: new Date(req.body.startDuty),
        endDuty: new Date(req.body.endDuty)
    });
    console.log('Before saving');
    scheduleDutyies_instance.save(function(e,doc){
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

