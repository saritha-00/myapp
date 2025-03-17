const express = require('express');
const path = require('path');
const app = express();
const port = 6000;

// Serve static files from the current directory (instead of 'public')
app.use(express.static(__dirname));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Serve index.html directly from the root directory
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

