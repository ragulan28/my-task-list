const express = require('express');
const router = express.Router();
const mongoJS = require('mongojs');
const db = mongoJS('mongodb://ragul:2808@ds113566.mlab.com:13566/my-task-lists', ['tasks']);

//get all task
router.get('/tasks', (req, res, next) => {
    db.tasks.find((err, tasks) => {
        if (err) {
            res.send(err);
        } else {
            res.json(tasks);
        }
    });
});

//find by id
router.get('/tasks/:id', (req, res, next) => {
    db.tasks.findOne({_id: mongoJS.ObjectID(req.params.id)}, (err, task) => {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
});

//save task
router.post('/task', (req, res, next) => {
    var task = req.body;
    if (!task.title || (task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });

    } else {
        db.tasks.save(task, (err, task) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json(task);
            }
        });
    }
});


//find by id and delete
router.delete('/tasks/:id', (req, res, next) => {
    db.tasks.remove({_id: mongoJS.ObjectID(req.params.id)}, (err, task) => {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
});

//update task
router.put('/tasks/:id', (req, res, next) => {
    var task = req.body;
    var updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }
    if (task.title) {
        updTask.title = task.title;
    }

    if (!task.isDone) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        })
    } else {
        db.tasks.update({_id: mongoJS.ObjectID(req.params.id)},updTask,{}, (err, task) => {
            if (err) {
                res.send(err);
            } else {
                res.json(task);
            }
        });
    }

});

module.exports = router;