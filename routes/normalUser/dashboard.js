var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    if (req.session && req.session.empCode) {
        if (req.session.isAdmin) {
            // res.render('admin/dashboard');
            res.render('admin/dashboard', {
                image: req.session.image,
                name: req.session.empName
            });
        } else {
            res.render('normalUser/dashboard', {
                image: req.session.image,
                name: req.session.empName
            });
        }
    } else {
        res.redirect('/');
    }
});
module.exports = router;