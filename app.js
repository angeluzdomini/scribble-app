const express = require('express')
const app = express()

const mongoose = require('mongoose')

const authRoute = require('./routes/auth')
const scribbleRoute = require('./routes/scribble')

const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

app.use('/auth', authRoute)
app.use('/scribble', scribbleRoute)

app.get('/', (req,res) => {
    res.send('Home page.')
})

mongoose.connect(process.env.DB_CONNECTOR, ()=>{
    console.log('DB is connected')
})

app.listen(3000, () => {
    console.log('Listening to port 3000.')
})
