var centres = require('../models/centre');
var locations = require('../models/location');
//var mongoose = require('mongoose');

exports.location_detail = function(req,res,next){
    locations.find({'locationCode' : req.params.locationCode}).then((Location)=>{
        res.send(Location);
    },(e)=>{
        res.status.send(e);
    })
}

exports.location_list = function(req,res,next){
    console.log("Location list function called");
    locations.find({'centreCode' : req.params.centreCode},{locationCode :1, locationName : 1, _id :0}).then((Locations)=>{
        res.send("Working");
    },(e)=>{
        res.status(400).send(e);
    });
};

exports.all_location_list = function(req,res,next){
    locations.find({},{locationCode :1, locationName : 1, _id :0}).then((Locations) => {
        res.send({Locations});
       }, (e) => {
           res.status(400).send(e);
       });
};


exports.location_create_get = function(req,res,next){
    // let id = req.params.id;
    // if(!ObjectId.isValid(id)){
    //     return res.status(404).send('ID is not valid');
    // }
    // locations.findById(id).then((location) =>{
    //     if(!location){
    //         return res.status(404).send();
    //     }
    //     res.send({location});
    // }).catch((e)=>{
    //     res.status(400).send();
    // });
};


exports.location_create_post = function(req,res,next){
    var location_instance = new locations({
        locationCode: req.body.locationCode,
        locationName: req.body.locationName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });
    location_instance.save(function(e,doc){
        if(e){
            console.log("Location instance can't be added !!");
            console.log(e);
            throw e;
        }
        else{
            res.send(doc);
            console.log("Lcoation added succefully !!");
            centres.update({_id: req.params.centre_id }, //centres same as imported from models
                { $push :{ locations : location_instance._id }},function(err,result){
                if(err){
                    locations.deleteOne({_id:location_instance._id},function(e,res){
                        if(e){
                            console.log("Failed");
                            throw err;
                        }
                        console.log("Location added, succesfully rolled back");
                    })
                    console.log("Can't be updated !!");
                    throw err;
                    //this.location_delete_post(req,res,next); 
                }//if close
                else{
                    console.log('Centre updated succesfully with location %j !!', result);
                } //else close
            })//update close  
        } 
    })
};

exports.location_delete_get = function(req,res,next){
    
  
};

exports.location_delete_post = function(req,res,next){
    
   
};

exports.location_update_get = function(req,res,next){
    
    
};
    
exports.location_update_post = function(req,res,next){
      
    
};
