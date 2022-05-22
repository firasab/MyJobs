const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

//register new user to the database
router.post('/register', (req, res) => {
    let {
        name,
        email,
        password,
        password_confirmation
    } = req.body;
    if (password !== password_confirmation) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }
    if (!email || !password) {
        return res.send('Must include email and password')
    }
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registred."
            });
        }
    });
   
    let newUser = new User({
        name,
        password,
        email
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Thank you! User is now registered."
                });
            });
        });
    });
});

//login the user to the database
router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                user: user,
                msg: "Username is not found.",
                success: false
            });
        }
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: "Thank you! You are now logged in."
                    });
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
        })
    });
});



module.exports = router;