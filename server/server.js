// node colour app

const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '../client/public');

app.use('/', express.static(publicPath));
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
  res.send({message:"Hello World"});
})

app.listen(port, function () {
  console.log(`Started server on port ${port}`);
});
