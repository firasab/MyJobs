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



// //get worker by id 
// router.get('/view/:id', async (request, response) => {
//     try{
//         const worker = await workerData.findById(request.params.id);
//         response.status(200).json(worker);
//     }catch( error ){
//         response.status(404).json({ message: error.message })
//     }
// });

router.route('/view/:id').get((req,res) => {
    workerData.findById(req.params.id)
        .then(worker => {
            worker.name = req.body.name;
            worker.id = req.body.id;
            worker.location = req.body.location;
            worker.phoneNumber = req.body.phoneNumber;
            worker.email = req.body.email;
            worker.companyName = req.body.companyName;

            try{
                response.status(200).json(worker);
            }catch( error ){
                response.status(404).json({ message: error.message })
            }
        })
});


router.route('/update/:id').post((req,res) => {
    workerData.findById(req.params.id)
        .then(worker => {
            worker.name = req.body.name;
            worker.id = req.body.id;
            worker.location = req.body.location;
            worker.phoneNumber = req.body.phoneNumber;
            worker.email = req.body.email;
            worker.companyName = req.body.companyName;
            

            worker.save()
                .then(() => res.json('worker updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;