const express = require('express');
const jobData = require('../models/job');


const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const allJobs = await jobData.find();

        res.status(200).json(allJobs);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
})

router.post('/', async (req,res) => {
    const jobDe = req.body;
    const newJob = new jobData(jobDe);

    try {
       await newJob.save();
       res.status(201).json(newJob);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
})

router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
       await jobData.findByIdAndRemove(id).exec();
       res.send(' Job has been deleted successfully! ')
       
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;