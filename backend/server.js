const express = require('express');
const app = express();
const connection = require('./connection.js');
const accountRoutes = require('./Routers/accountRouter');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const port = 5000;

app.use('/account', accountRoutes);

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
