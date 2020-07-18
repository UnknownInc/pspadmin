const express = require('express');
const path = require('path');
const app = express()
const port = process.env['PORT']||8080;

app.use(express.static(path.resolve('build/web')));
app.get('/ping', (_req, res) => res.send('pong'));

app.listen(port, () => console.log(`pspadmin app listening at http://localhost:${port}`))