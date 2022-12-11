const express = require('express')
const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const mongoose = require('mongoose')

const authRoute = require('./routes/auth')
const scribbleRoute = require('./routes/scribble')

const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

app.use('/user', authRoute)
app.use('/scribble', scribbleRoute)

app.get('/', (req,res) => {
    res.send('Welcome to Scribble App, where you can scribble your thoughts and read from others.')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(process.env.DB_CONNECTOR, ()=>{
    console.log('DB is connected')
})

app.listen(3000, () => {
    console.log('Listening to port 3000.')
})
