const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Admin = require('./models/admin.model')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/myJobs')


app.post('/api/register', async (req, res) =>{
    console.log(req.body)
    try{
         await Admin.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok'})
    } catch (err){
        res.json({ status: 'error', error: 'Duplicate email '})
    }

    
})


app.post('/api/login', async (req, res) =>{
    const admin = await Admin.findOne({ 
        email: req.body.email,
        password: req.body.password,
    })

    if(admin) {
        const token = jwt.sign({
            name: admin.name,
            email: admin.email,

        }, 'secret123' )
        return res.json({  status: 'ok', admin: token })
    } else {
        return res.json({ status: 'error', admin: false })
    }
    
})










app.listen(1337, () =>{
    console.log('Server started on 1337')
})