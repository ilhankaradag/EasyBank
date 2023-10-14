const express = require('express');
const app = express();
const connection = require('./connection.js');
const accountRoutes = require('./Routers/accountRouter');
const cors = require('cors');

const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/', accountRoutes);

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
