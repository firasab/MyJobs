const express = require('express');
const router = express.Router();
const Worker = require('../../model/Worker');
const app = express();
app.use(express.json());


//add worker to the database
app.post("/add_worker", async  (req, res) => {
    const worker = new Worker(req.body); 
    try {
        worker.save();
      res.send(worker);
    } catch (error) {   
      res.status(300).send(error);
    }
    
});

// git the all the workers from database
app.get("/workers", (req, res) => {
    Worker.find()
    .exec()
    .then(docs => {console.log(docs);
    res.status(200).json(docs)
})
.catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});
});

// git the  user by id from database
app.get('/workers/:id', function(req, res, next) {
    Worker.findById(req.params.id)
  .then(doc => {
    if (!doc) { return res.status(404).end(); }
    return res.status(200).json(doc);
  })
  .catch(err => next(err));
})

// update user by id in database
app.put('/workers/:id', function(req, res, next) {
  var conditions = {_id: req.params.id};

  Worker.update(conditions, req.body)
  .then(doc => {
    if (!doc) { return res.status(404).end(); }
    return res.status(200).json(doc);
  })
  .catch(err => next(err));
})

//delete a user from database
app.delete('/workers/:id', function(req, res, next){
    Worker
  .findByIdAndRemove(req.params.id)
  .exec()
  .then(doc => {
    if (!doc) { return res.status(404).end(); }
    return res.status(204).end();
  })
  .catch(err => next(err));
})



module.exports = router;