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
// @ desc      Update Snippet
// @ access    Private
router.put('/:id', auth, async (req, res) => {
  const { name, platform, content } = req.body;

  // create snippet object
  const snippetFields = {};
  if (name) snippetFields.name = name;
  if (platform) snippetFields.platform = platform;
  if (content) snippetFields.content = content;

  try {
    let snippet = await Snippet.findById(req.params.id);

    if (!snippet) return res.status(404).json({ msg: 'Snippet Not Found' });

    // check if user owns snippet
    if (snippet.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: 'Noth Authorized to update snippet BLAH' });
    }

    snippet = await Snippet.findByIdAndUpdate(
      req.params.id,
      { $set: snippetFields },
      { new: true }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ route     POST api/snippets/:id
// @ desc      Delete Snippet
// @ access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let snippet = await Snippet.findById(req.params.id);

    if (!snippet) return res.status(404).json({ msg: 'Contact Not Found' });

    // check if user owns snippet
    if (snippet.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: 'Noth Authorized to update snippet BLAH' });
    }

    await Snippet.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Snippet Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
