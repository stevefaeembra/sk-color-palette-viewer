// node colour app

const express = require('express');
const app = express();
const path = require('path');
const PaletteModel = require('./models/palette_model');

const publicPath = path.join(__dirname, '../client/public');

// app.use('/', express.static(publicPath));
const port = process.env.PORT || 3000

app.get('/colors', (req,res) => {
  const paletteModel = new PaletteModel();
  const sortBy = req.query.sortedBy;
  res.json(paletteModel.getAll(sortBy));
})

app.listen(port, function () {
  console.log(`Started server on port ${port}`);
});
