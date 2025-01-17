const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 8080
const cors = require("cors")
const dotenv = require("dotenv")
const ProdutRouter = require("./routers/productRouter")
dotenv.config()
app.use(cors())
app.use(express.json())

const DB_URl = "mongodb+srv://eminovemin199:eminovemin199@eminfullstack-project.mbhs8.mongodb.net/fullStack-practica?retryWrites=true&w=majority&appName=EminFullStack-Project"
const Port = 8080


app.use("/products", ProdutRouter)
mongoose.connect(DB_URl)
  .then(() => {
    app.listen(Port, () => {
        console.log(`http://localhost:${Port}`)
      })
    console.log('Connected!')});