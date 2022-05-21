const express = require('express');
const companyData = require('../models/company');


const router = express.Router();
//get all companies from database 
router.get('/', async (req,res) => {
    try {
        const allCompanies = await companyData.find();

        res.status(200).json(allCompanies);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
})
//add a company to database
router.post('/', async (req,res) => {
    const companyDe = req.body;
    const newCompany = new companyData(companyDe);

    try {
       await newCompany.save();
       res.status(201).json(newCompany);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
})
//delete sompany from database
router.delete('/:id', async (req,res) => {
    const id = req.params.id;

    try {
       await companyData.findByIdAndRemove(id).exec();
       res.send(' Company has been deleted successfully! ')
       
    } catch (error) {
        console.log(error);
    }
})



//update compnay to database
router.route('/update/:id').post((req,res) => {
    companyData.findById(req.params.id)
        .then(company => {
            company.name = req.body.name;
            company.field = req.body.field;
            company.numberOfWorker = req.body.numberOfWorker;
            company.address = req.body.address;
            company.companyImg = req.body.companyImg;
            

            company.save()
                .then(() => res.json('company updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});



module.exports = router;