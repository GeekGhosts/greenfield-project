const express = require('express');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../database-mongo/models/userModel.js');



router.post('/signup', (req, res, next) => {

    User.findOne({email: req.body.email})
    .exec()
    .then(user => {

        if(user){
            return res.status(500).json({
                message: 'Email Already Exists'
            })
        }else{

            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    return res.status(500).json({
                        error: 'Something went wrong'
                    });
                }else{
                    const user = new User({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: hash
                    });

                    user.save()
                    .then(doc => {
                        res.status(201).json({
                            message: 'Account Created Successfully'
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });


                }

            });

        }


    });


});



router.post('/login', (req, res, next) => {

    User.findOne({email: req.body.email})
    .select('first_name last_name email password')
    .exec()
    .then(user => {
        if(user){

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    return res.status(500).json({
                        message: 'Login Failed'
                    })
                }else{
                    if(result){
                        const payload = {
                            userEmail: user.email,
                            iat:  Math.floor(Date.now() / 1000) - 30,
                            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 24),
                        }
                        jwt.sign(payload, 'mysecretkey', (err, token) => {
                            if(err){
                                return res.status(500).JSON({
                                    message: 'Authentication Failed'
                                });
                            }else{
                                res.status(200).json({
                                    message: {
                                        user: {
                                            first_name: user.first_name,
                                            last_name: user.last_name,
                                            userEmail: user.email
                                        },
                                        token: token
                                    }
                                })
                            }
                        })
                    }else{
                        res.status(500).json({
                            message: 'Incorrect Password'
                        });
                    }
                }
            });

        }else{
            res.status(500).json({
                message: 'Email doesn\'t not exists'
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })


});



module.exports = router;