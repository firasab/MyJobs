    const express = require('express');
    const router = express.Router();
    const bcrypt = require('bcryptjs');
    const passport = require('passport');
    const Worker = require('../../model/Worker');


    router.post('/add_worker', (req, res) => {
        let {
            name,
            email,
            password,
            id,
            location,
            phoneNumber
        } = req.body;
        if (!name || !email || !password || !id || !location || !phoneNumber) {
            return res.send('Must include all the details')
        }
        Worker.findOne({
            email: email
        }).then(worker => {
            if (worker) {
                return res.status(400).json({
                    msg: "Email is already registred."
                });
            }
        });
      
        let newWorker = new Worker({
            name,
            password,
            email,
            id,
            location,
            phoneNumber
        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newWorker.password, salt, (err, hash) => {
                if (err) throw err;
                newWorker.password = hash;
                newWorker.save().then(worker => {
                    return res.status(201).json({
                        success: true,
                        msg: "Thank you! Worker is now registered."
                    });
                });
            });
        });
    });

    


    router.get('/profile', passport.authenticate('jwt', {
        session: false
    }), (req, res) => {
        return res.json({
            worker: req.worker
        });
    });

    module.exports = router;
