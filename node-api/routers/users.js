const express = require('express');
const operation = require('../operation');
const router = express.Router();


router.get('/users', function(req, res){

    //console.log(req);
    operation.findInf(res, 'test', 'users', req.query);
});

router.post('/users', function(req, res){

    //console.log(req.body);
    if(!req.body._id || !req.body.name || Object.keys(req.body).length>2)
        res.status(500).json('Error. require _id and name keys');
    else{
        operation.insertData(res, 'test', 'users', req.body);
    }
});

router.delete('/users', function(req, res){

    //console.log(req.body);
    operation.deleteData(res, 'test', 'users', req.body);
});

router.put('/users', function(req, res){

    var data = {_id:req.body._id};
    //console.log(req.body);
    operation.updateData(res, 'test', 'users', data, req.body);
});


module.exports = router;