const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { auth } = require('express-oauth2-jwt-bearer');
const initialData = require('./initialData');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { events, tags } = initialData;
let { config } = initialData;

app.get('/events', (req, res) => res.json(events));
app.get('/events/:id', (req, res) => {
  const { id } = req.params;
  const singleEventToSend = events.findIndex((item) => item.id === id);
  res.json(events[singleEventToSend]);
});
app.post('/events', checkJwt, (req, res) => {
  const id = uuidv4();
  const newEvent = { id, ...req.body };
  events.push(newEvent);
  res.json(newEvent);
});
app.delete('/events/:id', checkJwt, (req, res) => {
  const { id } = req.params;
  const eventToDelete = events.findIndex((item) => item.id === id);
  events.splice(eventToDelete, 1);
  res.send('event deleted');
});
app.put('/events/:id', checkJwt, (req, res) => {
  const { id } = req.params;
  const eventToUpdate = events.findIndex((item) => item.id === id);
  events[eventToUpdate] = req.body;
  res.send('event updated');
});

app.get('/config', (req, res) => res.json(config));
app.put('/config', checkJwt, (req, res) => {
  const newObj = { ...req.body };
  config = newObj;
  res.send('config updated');
});

app.get('/tags', (req, res) => res.json(tags));
app.get('/tags/:id', (req, res) => {
  const { id } = req.params;
  const singleTag = tags.findIndex((tag) => tag.id === id);
  res.json(tags[singleTag]);
});
app.post('/tags', checkJwt, (req, res) => {
  const id = uuidv4();
  const newTag = { id, ...req.body };
  tags.push(newTag);
  res.json(newTag);
});
app.delete('/tags/:id', checkJwt, (req, res) => {
  const { id } = req.params;
  const tagToDelete = tags.findIndex((tag) => tag.id === id);
  tags.splice(tagToDelete, 1);
  res.send('tag deleted');
});
app.put('/tags/:id', checkJwt, (req, res) => {
  const { id } = req.params;
  const tagToUpdate = tags.findIndex((tag) => tag.id === id);
  tags[tagToUpdate] = req.body;
  res.send('tag updated');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
