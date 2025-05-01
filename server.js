const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;
const PUBLIC_DIR = path.join(__dirname);

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
