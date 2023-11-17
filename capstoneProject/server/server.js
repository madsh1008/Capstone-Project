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

//hooking post to database
// app.use(bodyParser.json());

const Post = mongoose.model('Post', {
  post_title: String,
  description: String,
  pictures: String,
  trade_status: String,
  free_status: String
});

app.post('/api/posts', (req, res) => {
  const newPost = new Post(req.body);

  newPost.save((err, post) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(201).json({ message: 'Post added successfully', post });
  });
});

connect();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
