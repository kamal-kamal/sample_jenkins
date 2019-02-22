const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  res.json('Welcome to Jenkins')
});

app.listen(2000, () => {
  console.log('first project with jenkins')
})