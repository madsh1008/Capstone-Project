const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

const uri = "mongodb+srv://TigerTrade:MizzouTigers77!!@tigertrade.uhrunzt.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
