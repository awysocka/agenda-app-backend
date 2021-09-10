const express = require('express');
const cors = require('cors');
const initialData = require('./initialData');

const app = express();
const port = 3003;

app.use(cors());

const { events, config, tags } = initialData;

app.get('/events', (req, res) => res.type('json').json(events));
app.get('/config', (req, res) => res.type('json').json(config));
app.get('/tags', (req, res) => res.type('json').json(tags));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
