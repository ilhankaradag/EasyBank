const express = require('express');
const app = express();
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
