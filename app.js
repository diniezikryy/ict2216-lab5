const express = require('express');
const _ = require('lodash');
const moment = require('moment');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    const data = _.merge({}, { message: 'Hello World!', timestamp: now });
    res.json(data);
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});