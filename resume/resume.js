const express = require('express');
const path = require('path');
const app = express();
const port = 7000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Resume.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
