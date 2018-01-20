var express = require('express')

var router = express.Router();

var centre_controller = require('../controllers/centreController');
var location_controller = require('../controllers/locationController');
var employee_controller = require('../controllers/employeeController');
var scheduleDuty_controller = require('../controllers/scheduleDutyController');


//router.get('/',nanoskill_controller.index);

/* GET request for creating a centre. NOTE This must come before routes that display centres (uses id) */
router.get('/centre/create', centre_controller.centre_create_get);

/* POST request for creating centre. */
router.post('/centre/create', centre_controller.centre_create_post);

/* GET request to delete centre. */
router.get('/centre/:id/delete', centre_controller.centre_delete_get);

// POST request to delete centre
router.post('/centre/:id/delete', centre_controller.centre_delete_post);

/* GET request to update centre. */
router.get('/centre/:id/update', centre_controller.centre_update_get);

// POST request to update centre
router.post('/centre/:id/update', centre_controller.centre_update_post);

/* GET request for one centre. */
router.get('/centre/:centreCode', centre_controller.centre_detail);

/* GET request for list of all centre items. */
router.get('/centres', centre_controller.centre_list);
//router.get('/centre/list', centre_controller.centre_list); //Why doesn't it work while the below route does




/* GET request for creating a location. NOTE This must come before routes that display location (uses id) */
router.get('/location/:centre_id/create', location_controller.location_create_get);

/* POST request for creating location. */
router.post('/location/:centre_id/create', location_controller.location_create_post);

/* GET request to delete location. */
router.get('/location/:id/delete', location_controller.location_delete_get);

// POST request to delete location
router.post('/location/:id/delete', location_controller.location_delete_post);

/* GET request to update location. */
router.get('/location/:id/update', location_controller.location_update_get);

// POST request to update location
router.post('/location/:id/update', location_controller.location_update_post);

/* GET request for one location. */
router.get('/location/:locationCode', location_controller.location_detail);

/* GET request for list of all location items. */
router.get('/location/list', location_controller.all_location_list);

/* GET request for list of selected centre locations. */
router.get('/location/centreCode/list',location_controller.location_list);




/* GET request for creating a employee . NOTE This must come before routes that display employee (uses id) */
router.get('/employee/create', employee_controller.employee_create_get);

/* POST request for creating employee. */
router.post('/employee/create', employee_controller.employee_create_post);

/* GET request to delete employee. */
router.get('/employee/:id/delete', employee_controller.employee_delete_get);

// POST request to delete employee
router.post('/employee/:id/delete', employee_controller.employee_delete_post);

/* GET request to update employee. */
router.get('/employee/:id/update', employee_controller.employee_update_get);

// POST request to update employee
router.post('/employee/:id/update', employee_controller.employee_update_post);

/* GET request for one employee. */
router.get('/:id', employee_controller.employee_detail);

/* GET request for list of all employee items. */
router.get('/employee/list', employee_controller.employee_list);




/* GET request for creating a scheduleDuty . NOTE This must come before routes that display scheduleDuty (uses id) */
router.get('/scheduleDuty/assign', scheduleDuty_controller.scheduleDuty_assign_get);

/* POST request for creating scheduleDuty. */
router.post('/scheduleDuty/assign', scheduleDuty_controller.scheduleDuty_assign_post);

/* GET request to delete scheduleDuty. */
router.get('/scheduleDuty/:id/delete', scheduleDuty_controller.scheduleDuty_delete_get);

// POST request to delete scheduleDuty
router.post('/scheduleDuty/:id/delete', scheduleDuty_controller.scheduleDuty_delete_post);

/* GET request to update scheduleDuty. */
router.get('/scheduleDuty/:id/update', scheduleDuty_controller.scheduleDuty_update_get);

// POST request to update scheduleDuty
router.post('/scheduleDuty/:id/update', scheduleDuty_controller.scheduleDuty_update_post);

/* GET request for one scheduleDuty. */
router.get('/:id', scheduleDuty_controller.scheduleDuty_detail);

/* GET request for list of all scheduleDuty items. */
router.get('/scheduleDuty/list', scheduleDuty_controller.scheduleDuty_list);


module.exports = router;