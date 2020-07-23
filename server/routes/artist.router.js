// artist.router.js

const express = require('express');
const router = express.Router();
// Using a array of data on the server, we will eventually
// move this back into the database.
let artists = require('../modules/artist.data');
let nextId = artists.length;

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  artists = artists.filter((item, index) => {
    return id != item.id;
  });
  res.sendStatus(200);
});

// POST new book
router.post('/', (req, res) => {
  console.log('In artist POST with', req.body);
  const artistToAdd = req.body;
  // add an id to the incoming artist
  artistToAdd.id = nextId;
  nextId += 1;
  artists.push(artistToAdd);
  res.send(201);
}); // END GET Route

// GET all the books
router.get('/', (req, res) => {
  res.send(artists);
}); // END GET Route

module.exports = router;
