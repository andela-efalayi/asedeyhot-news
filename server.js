const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const fpath = path.join(__dirname, 'src/www/');

app.use(express.static(fpath));

router.get('/', (req, res) => {
  res.sendFile(`${fpath}index.html`);
});

router.get('*', (req, res) => {
  res.send('404 not found');
});

app.use('/', router);

app.listen(process.env.PORT || 3000, function () {
  return ('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
