const express = require('express');
const workerData = require('../models/worker');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');



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

//update worker to databse
router.route('/update/:id').post((req,res) => {
    workerData.findById(req.params.id)
        .then(worker => {
            worker.name = req.body.name;
            worker.id = req.body.id;
            worker.location = req.body.location;
            worker.phoneNumber = req.body.phoneNumber;
            worker.password = req.body.password;
            worker.email = req.body.email;
            worker.companyName = req.body.companyName;
            worker.password = req.body.password;
            worker.workerImg = req.body.workerImg;
            worker.isWorkingSun = req.body.isWorkingSun;
            worker.isWorkingMon = req.body.isWorkingMon;
            worker.isWorkingTues = req.body.isWorkingTues;
            worker.isWorkingWed = req.body.isWorkingWed;
            worker.isWorkingThur = req.body.isWorkingThur;
            worker.isWorkingFri = req.body.isWorkingFri;
            worker.isWorkingSat = req.body.isWorkingSat;
            
            worker.timeWorkingSun = req.body.timeWorkingSun;
            worker.timeWorkingMon = req.body.timeWorkingMon;
            worker.timeWorkingTues = req.body.timeWorkingTues;
            worker.timeWorkingWed = req.body.timeWorkingWed;
            worker.timeWorkingThur = req.body.timeWorkingThur;
            worker.timeWorkingFri = req.body.timeWorkingFri;
            worker.timeWorkingSat = req.body.timeWorkingSat;
            
            worker.dateStartWorking = req.body.dateStartWorking;
            worker.dateFinishWorking = req.body.dateFinishWorking;
                  

            worker.save()
                .then(() => res.json('worker updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});


//login the user to the database
router.post('/auth/login', (req, res) => {
    workerData.findOne({
        phoneNumber: req.body.phoneNumber
    }).then(worker => {
        if (!worker) {
            return res.status(404).json({
                worker: worker,
                msg: "Username is not found.",
                success: false
            });
        }
     
            if (req.body.password == worker.password) {
                const payload = {
                    _id: worker._id,
                    username: worker.phoneNumber,
                    name: worker.name,
                    email: worker.email
                }
                    res.status(200).json({
                        success: true,
                        worker: worker,
                        msg: "Thank you! You are now logged in."
                    });
             
            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
        })
    });


    //update worker in the application
    router.route('/appupdate/:id').post((req,res) => {
        workerData.findById(req.params.id)
            .then(worker => {
                worker.name = req.body.name;
                worker.id = req.body.id;
                worker.location = req.body.location;
                worker.phoneNumber = req.body.phoneNumber;
                worker.email = req.body.email;
                worker.companyName = req.body.companyName;
                worker.workerImg = req.body.workerImg;
                worker.isWorkingSun = req.body.isWorkingSun;
                worker.isWorkingMon = req.body.isWorkingMon;
                worker.isWorkingTues = req.body.isWorkingTues;
                worker.isWorkingWed = req.body.isWorkingWed;
                worker.isWorkingThur = req.body.isWorkingThur;
                worker.isWorkingFri = req.body.isWorkingFri;
                worker.isWorkingSat = req.body.isWorkingSat;

                worker.timeWorkingSun = req.body.timeWorkingSun;
                worker.timeWorkingMon = req.body.timeWorkingMon;
                worker.timeWorkingTues = req.body.timeWorkingTues;
                worker.timeWorkingWed = req.body.timeWorkingWed;
                worker.timeWorkingThur = req.body.timeWorkingThur;
                worker.timeWorkingFri = req.body.timeWorkingFri;
                worker.timeWorkingSat = req.body.timeWorkingSat;

                worker.dateStartWorking = req.body.dateStartWorking;
                worker.dateFinishWorking = req.body.dateFinishWorking;

                worker.save()
                    .then(() => res.json('worker updated !'))
                    .catch(err => res.status(400).json('Error: '+err));
            })
            .catch(err => res.status(400).json('Error: '+err));
    });
    
    //post the shifts from database to application
    router.route('/shift/:id').post((req,res) => {
        workerData.findById(req.params.id)
            .then(worker => {
                worker.shifts.push({hourE:req.body.hourE,hourS:req.body.hourS,date:req.body.date})
                worker.save()
                    .then(() => res.json('worker updated !'))
                    .catch(err => res.status(400).json('Error: '+err));
            })
            .catch(err => res.status(400).json('Error: '+err));
    });

    //gethours from database to application
    router.patch('/gethours/:id', async (req,res) => {
        try {
            const worker = await workerData.findById(req.params.id)
            const shifts = worker.shifts.filter(elemnt => elemnt.date.includes(req.body.mo))
            res.status(200).json(shifts);
        } catch (error) {
            res.status(404).json({ message: error.message})
        }
    })

    //refresh worker in the application
    router.get('/refresh/:id', async (req,res) => {
        try {
            const worker = await workerData.findById(req.params.id)
    
            res.status(200).json(worker);
        } catch (error) {
            res.status(404).json({ message: error.message})
        }
    })




module.exports = router;