const express = require('express');

const db = require('../db');

const router = express.Router();

router.post('/', async (req, res) => {
  if (req.files.uploadedFile) {
    await db('files').insert({
      name: req.files.uploadedFile.name,
      content: req.files.uploadedFile.data
    });
  }

  return res.redirect('/');
});

module.exports = router;
