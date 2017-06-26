const express = require('express')
    , bodyParser = require('body-parser')
    , users = require('./users.json');

const app = express();
app.use(bodyParser.json());


// === ENDPOINTS =========================








// =======================================

const port = 3000;
app.listen(port, () => console.log('Listening on port: ', port));
