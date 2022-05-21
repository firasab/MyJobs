const express = require('express');
const jobFormData = require('../models/jobForm');


const router = express.Router();
//get all jobForms from database
router.get('/', async (req,res) => {
    try {
        const allJobForms = await jobFormData.find();

        res.status(200).json(allJobForms);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
})
//add a jobForm to database
router.post('/', async (req,res) => {
    const jobFormDe = req.body;
    const newJobForm = new jobFormData(jobFormDe);

    try {
       await newJobForm.save();
       res.status(201).json(newJobForm);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
})
//dalate a jobForm from database
router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
       await jobFormData.findByIdAndRemove(id).exec();
       res.send(' Job Form has been deleted successfully! ')
       
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;