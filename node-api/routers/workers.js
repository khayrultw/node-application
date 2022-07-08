const express = require('express');
const operation = require('../operation');
const router = express.Router();


router.get('/workers', function(req, res){

    //console.log(req);
    operation.findInf(res, 'test', 'workers', req.query);
});

router.post('/workers', function(req, res){

    //console.log(req.body);
    if(!req.body._id || !req.body.name || Object.keys(req.body).length>2)
        res.status(500).json('Error. require _id and name keys');
    else{
        operation.insertData(res, 'test', 'workers', req.body);
    }
});

router.delete('/workers', function(req, res){

    //console.log(req.body);
    operation.deleteData(res, 'test', 'workers', req.body);
});

router.put('/workers', function(req, res){

    var data = {_id:req.body._id};
    //console.log(req.body);
    operation.updateData(res, 'test', 'workers', data, req.body);
});


module.exports = router;