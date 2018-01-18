var employees = require('../models/employee');
//var con = require('../connection');
//var db = con.db;
exports.employee_detail = function(req,res,next){

}

exports.employee_list = function(req,res,next){
   console.log("Inside employees list function");
   employees.find({},{empCode :1, empName : 1, _id :0}).then((employees) => {
    res.send({employees});
   }, (e) => {
       res.status(400).send(e);
   })
};

exports.employee_create_get = function(req,res,next){
    
   
};


exports.employee_create_post = function(req,res,next){
   console.log('Inside create employee');
   var employees_instance = new employees({
        empCode: req.body.empCode,
        empName: req.body.empName,
        contact: req.body.contact,
        password: req.body.password,
        isImage : req.body.isImage
    });
    console.log('Before saving');
    employees_instance.save(function(e,doc){
        if(e){
            console.log("Employee instance could not be saved !!");
            //throw e;
            res.status(400).send(e);
        }
        else{
            res.send(doc); 
        } 
    })
};

exports.employee_delete_get = function(req,res,next){
    
  
};

exports.employee_delete_post = function(req,res,next){
    
   
};

exports.employee_update_get = function(req,res,next){
    
    
};
    
exports.employee_update_post = function(req,res,next){
      
    
};

