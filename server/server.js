// node colour app

const express = require('express');
const app = express();
const path = require('path');
const PaletteModel = require('./models/palette_model');

const publicPath = path.join(__dirname, '../client/public');

app.use('/', express.static(publicPath));
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
  // return front-end client
  res.sendFile(path.join(publicPath,'index.html'));
});

app.get('/colors', (req,res) => {
  const paletteModel = new PaletteModel();
  const sortBy = req.query.sortedBy;
  const paletteName = req.query.palette;
  console.log(`paletteName: ${paletteName}`);
  console.log(`sortBy: ${sortBy}`);
  res.json(paletteModel.getAll(sortBy, paletteName));
})

app.listen(port, function () {
  console.log(`Started server on port ${port}`);
});
