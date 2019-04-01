const express=require('express');
const router=new express.Router()
const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    try {

        console.log(req.body.name);
        
        const userexists = await User.findOne({ email: req.body.email})
        if (userexists) {
           // errors.email = 'Email already exists';
           return res.status(400).send('Email already exists');
        }

        const avatar = gravatar.url(req.body.email, {
            s: '200', // Size
            r: 'pg', // Rating
            d: 'mm' // Default
          });
    
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            avatar,
            password: req.body.password
          });

        await newUser.save()
        res.send(newUser)
    } catch (e) {
        res.status(400).send(e)
    }




  

    try {
        await user.save()
        sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})
router.post('/signin', async (req, res) => {
    try {
        const userexists = await User.findOne({ email: req.body.email})
        if (!userexists) {
           return res.status(400).send('user not exists');
        }
        const user = await User.findByCredentials(req.body.email, req.body.password) // statics can be on schema
       // const token = await user.generateAuthToken()// methods on results;

       if (!user) {
        return res.status(400).send('password wrong');
     }

        res.send({ user })

        
    } catch (e) {
        res.status(400).send(e)
    }
})



module.exports = router