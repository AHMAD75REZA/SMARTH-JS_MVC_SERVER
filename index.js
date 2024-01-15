const express = require('express')
const cors = require('cors');
const mongoDB = require('./config/mongoose')
const port = 1000
const app = express()

app.use(cors())
app.use('/', require('./routes'));
app.use(express.json())

// mongoDB.then( () => {
//     app.listen(port, () => {
//         console.log("Server is running!")
//     })
// }).catch((error) => {
//         console.log('Error in connecting to db');
// })

app.listen(port, () => {
    console.log("Server is running!")
})