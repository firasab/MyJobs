const express = require('express');
const workerData = require('../models/worker');


const router = express.Router();
//get all workers from database
router.get('/', async (req,res) => {
    try {
        const allWorkers = await workerData.find();

        res.status(200).json(allWorkers);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
})
//add worker to database
router.post('/', async (req,res) => {
    const workerDe = req.body;
    const newWorker = new workerData(workerDe);

    try {
       await newWorker.save();
       res.status(201).json(newWorker);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
})
//delete worker from database
router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
       await workerData.findByIdAndRemove(id).exec();
       res.send(' Worker has been deleted successfully! ')
       
    } catch (error) {
        console.log(error);
    }
})

// router.put('/:id', (req, res) => {
//     const worker = getWorker(req.params.id)
   
//     if (!worker) return res.status(404).json({})
   
//     worker.name = req.body.name
//     worker.id = req.body.id
//     worker.location = req.body.location
//     worker.phoneNumber = req.body.phoneNumber
//     worker.email = req.body.email
//     worker.company = req.body.company

//     res.json(worker)
//    })


module.exports = router;