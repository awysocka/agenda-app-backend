const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const initialData = require('./initialData');

const app = express();
const port = 3003;

app.use(cors());

const { events, config, tags } = initialData;

app.get('/events', (req, res) => res.json(events));
app.get('/config', (req, res) => res.json(config));
app.get('/tags', (req, res) => res.json(tags));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/events', (req, res) => {
  const id = uuidv4();
  const newEvent = { id, ...req.body };
  events.push(newEvent);
  res.json(newEvent);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
