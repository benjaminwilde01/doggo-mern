// DEPENDENCIES
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import dogRoutes from './routes/dogsRoutes.js'

const app = express()

// MIDDLEWARE 
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// POSTS ROUTE
app.use('/dogs', dogRoutes)

// MONGODB URL
const CONNECTION_URL = 'mongodb+srv://bwilde:admin123@cluster0.ntz4c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// PORT ASSIGNMENT
const PORT = process.env.PORT || 5000

// MONGOOSE CONNECTION & APP.LISTEN
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Listening to server on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)