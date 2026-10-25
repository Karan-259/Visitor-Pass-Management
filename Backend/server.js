const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

const visitorRoutes = require('./Routes/visitor')
const authRoutes = require('./Routes/auth')

dotenv.config()

const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use((req, res) => {
    console.log(req.path, req.method)
})

app.get('/', (req, res) => {
    res.status(200).json(
        {
            message: "Home Page"
        }
    )
})

app.use("/api/visitors", visitorRoutes)
app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MONGODB Connected...");
}).catch((Error) => {
    console.log(Error)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`)
})