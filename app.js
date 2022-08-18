const express = require('express')
const {buildDB} = require('./db/populateDataBase')
const app = express()
const PORT = 3000 

buildDB()

app.use(express.json())






app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})