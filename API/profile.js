const express=require('express');
const router=new express.Router()
const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

router.post('/users', async (req, res) => {



    try {

        const user = new User(req.body)
        const userexists = await User.findOne({ email: req.user.email})
        if (!userexists) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
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

        await task.save()
        res.send(task)
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


module.exports = router