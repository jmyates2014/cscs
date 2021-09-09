const express = require('express');
const router = express.Router();

// @ route     GET api/snippets
// @ desc      Get all users snippets
// @ access    Private
router.get('/', (req, res) => {
  res.send('Show all the users snippets');
});

// @ route     POST api/snippets
// @ desc      Add new snippet
// @ access    Private
router.post('/', (req, res) => {
  res.send('Add snippet');
});

// @ route     PUT api/snippets/:id
// @ desc      Get all users snippets
// @ access    Private
router.put('/:id', (req, res) => {
  res.send('Update snippet');
});

// @ route     POST api/snippets/:id
// @ desc      Get all users snippets
// @ access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete snippet');
});

module.exports = router;
