var express = require("express");
var TaskList = require('./../model/task-list');

var route = express.Router();

var onError = function(e) { res.status(500).json(e) };

route.get('/:id', function(req, res) {
    TaskList.findOne({id: req.param.id}).then(function (response) {
       if(response) {
            res.json(response)
        } else {
            res.status(404).json('Not Found');
        }
    }, onError);
});

route.get('/', function(req, res) {
    TaskList.find(req.query).then(res.json, onError);
});

route.post('/', function(req, res) {
    if(req.body.id) {
        TaskList.find({id: req.body.id}).then(function (taskList) {
            if(taskList) {
                delete req.body.items;
                taskList.set(req.body);
                taskList.save().then(res.json, onError);
            }
        }, onError);
    } else {
        var taskList = new TaskList(req.body);
        taskList.save().then(function(response) {
            res.json(response);
        }, onError);
    }
});


route.delete('/:id', function(req, res) {
    TaskList.findOneAndRemove(req.params).then(function() { res.status(200).json({success:true})}, onError);
});



module.exports =  route;