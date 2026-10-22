const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

//middlewares
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.status(200).json("Home Page")
})

// app.use("/api")

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MONGODB Connected...");
}).catch((Error) => {
    console.log(Error)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`)
})