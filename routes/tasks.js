const express = require('express');
const router = express.Router();
const mongoJS = require('mongojs');
const db = mongoJS('mongodb://ragul:2808@ds113566.mlab.com:13566/my-task-lists',['tasks']);

//get all task
router.get('/tasks', (req, res, next) => {
    db.tasks.find((err,tasks)=>{
        if (err){
            res.send(err);
        }else {
            res.json(tasks);
        }
    });
});

//find by id
router.get('/tasks', (req, res, next) => {
    db.tasks.find((err,tasks)=>{
        if (err){
            res.send(err);
        }else {
            res.json(tasks);
        }
    });
});router.get('/tasks:id', (req, res, next) => {
    db.tasks.find((err,tasks)=>{
        if (err){
            res.send(err);
        }else {
            res.json(tasks);
        }
    });
});


module.exports = router;