const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

const cors = require('cors');

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
app.use(express.json());

app.use(cors());

const Post = mongoose.model('Post', {
  post_title: String,
  description: String,
  pictures: String,
  trade_status: String,
  free_status: String
});

app.post('/api/posts', (req, res) => {
  const newPost = new Post(req.body);

  console.log('Received POST request with data:', newPost);

  newPost.save()
  .then(post => {
    return res.status(201).json({ message: 'Post added successfully', post });
  })
  .catch(err => {
    return res.status(500).send(err);
  });
});

connect();

app.get('/api/posts', async (req, res) => {
  try{
    const posts = await Post.find();
    res.status(200).json({message: 'Posts have been fetched', posts});
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({message: 'Internal server error', error});
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
