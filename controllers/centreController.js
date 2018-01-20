var centres = require('../models/centre');
var locations = require('../models/location');

exports.centre_detail = function(req,res,next){
    centres.findOne({'centreCode' : req.params.centreCode}).populate('locations',null).exec(function(err,result){
        if(err){
            res.status(400).send(err);
        }
        res.send(result);
    });
     //console.log('something');
    // centres.find({'centreCode' : req.params.centreCode}).then((Centre)=>{
    //     res.send(Centre);
    // },(e)=>{
    //     res.status.send(e);
    // });


    // console.log(req.params.centreCode);
    // centres.findOne({'centreCode' : req.params.centreCode}).then((Centre)=>{    
    // console.log(Centre.locations);
    // var all_locations = [];
    // for(var locationId of Centre.locations){
    //     console.log(locationId);
    //     //var loc = locations.find({_id : mongoose.Types.ObjectId(locationId)});
    //     locations.find({'_id' :locationId}).then((result)=>{
    //         all_locations.push(result);
    //         console.log("Result is "+ result);
    //         console.log("All locations are " + all_locations);
    //     },(e) =>{
    //         res.status(400).send();
    //   });
    //     // all_locations.push(loc);
    // }
    //     res.send(all_locations);
    // },(e)=>{
    //     res.status.send(e);
    // });
}

// exports.get_all_centres = function(res,req,next){
//     for(item in )
// }

exports.centre_list = function(req,res,next){
   console.log("Inside centres list function");
   centres.find({},{centreCode :1, centreName : 1, _id :0}).then((Centres) => {
    res.send({Centres});
   }, (e) => {
       res.status(400).send(e);
   });
//    centres.find({},{centreCode :1, centreName : 1, _id :0}).toArray(function(err,result){
//        if(err)
//        throw err;
//        console.log(result);
//        res.send(result);
//    });
};

exports.centre_create_get = function(req,res,next){
    
   
};


exports.centre_create_post = function(req,res,next){
   console.log('Inside create centre');
   var centres_instance = new centres({
        centreCode: req.body.centreCode,
        centreName: req.body.centreName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        locations: []
    });
    console.log('Before saving');
    centres_instance.save(function(e,doc){
        if(e){
            console.log("Centre instance could not be saved !!");
            throw e;
        }
        else{
            res.send(doc); 
        } 
    })
};

exports.centre_delete_get = function(req,res,next){
    
  
};

exports.centre_delete_post = function(req,res,next){
    
   
};

exports.centre_update_get = function(req,res,next){
    
    
};
    
exports.centre_update_post = function(req,res,next){
      
    
};

