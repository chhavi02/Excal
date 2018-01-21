var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    if (req.session && req.session.empCode) {
        if (req.session.isAdmin) {
            res.render('admin/dashboard', {
                name: req.session.empName,
                image: req.session.image
            });
        } else {
            res.send('Normal User page');
        }
    } else {
        res.redirect('/');
    }
    // res.render('admin/dashboard', {
    //     image: ' ',
    //     name: 'chhavi'
    // });

});
module.exports = router;