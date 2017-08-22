/* eslint-disable no-console*/
const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const fpath = path.join(__dirname, 'build/');
const PORT = process.env.PORT || 3000;

app.use(express.static(fpath));

router.get('/', (req, res) => {
  res.sendFile(`${fpath}index.html`);
});

router.get('*', (req, res) => {
  res.send('404 not found');
});

app.use('/', router);

app.listen(PORT, () => {
  console.log('App is running on localhost: ', PORT);
});
