const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Snippet = require('../models/Snippet');

// @ route     GET api/snippets - by user id
// @ desc      Get all users snippets
// @ access    Private
router.get('/', auth, async (req, res) => {
  try {
    const snippets = await Snippet.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(snippets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ route     POST api/snippets
// @ desc      Add new snippet
// @ access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('content', 'Snippet body is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, platform, content } = req.body;

    try {
      const newSnippet = new Snippet({
        name,
        platform,
        content,
        user: req.user.id,
      });

      const snippet = await newSnippet.save();

      res.json(snippet);
    } catch (err) {
      console.error(er.message);
      res.status(500), send('Server Error');
    }
  }
);

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
