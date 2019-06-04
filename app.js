const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ strict: false }));

module.exports = app;