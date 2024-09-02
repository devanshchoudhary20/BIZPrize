const express = require('express');
// const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));
app.use(express.static('public'));

app.get('/items', (req, res) => {
  const itemsDir = path.join(__dirname, 'items');
  fs.readdir(itemsDir, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Unable to read items directory' });
    } else {
      const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');
      res.json(jsonFiles);
    }
  });
});


app.get('/item/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'items', filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).json({ error: 'File not found' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});