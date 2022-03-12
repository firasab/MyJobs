const express = require('express');
const jobData = require('../models/job');


const router = express.Router();
//get all jobs from database
router.get('/', async (req,res) => {
    try {
        const allJobs = await jobData.find();

        res.status(200).json(allJobs);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
})
//add a job to database
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
//dalate a job from database
router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
       await jobData.findByIdAndRemove(id).exec();
       res.send(' Job has been deleted successfully! ')
       
    } catch (error) {
        console.log(error);
    }
})

//get job by id 
router.get('/view/:id', async (request, response) => {
    try{
        const job = await jobData.findById(request.params.id);
        response.status(200).json(job);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
});



router.route('/update/:id').post((req,res) => {
    jobData.findById(req.params.id)
        .then(job => {
            job.name = req.body.name;
            job.discription = req.body.discription;
            job.position = req.body.position;
            job.payPerHour = req.body.payPerHour;
            job.address = req.body.address;
            job.jobImg = req.body.jobImg;
            

            job.save()
                .then(() => res.json('job updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;