const express=require('express');
const router=new express.Router()

router.get('/tasks/', async (req, res) => {
    try {
       

        res.send('hi')
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router