const express = require('express');

const db = require('../db');

const router = express.Router();

router.post('/', async (req, res) => {
  if (req.files.uploadedFile) {
    await db('files').insert({
      name: req.files.uploadedFile.name,
      content: req.files.uploadedFile.data
    });
    console.log(req.files.uploadFile.length);
    console.log(`Inserted '${req.files.uploadedFile.name}'`);
  }

  return res.redirect('/');
});

module.exports = router;
