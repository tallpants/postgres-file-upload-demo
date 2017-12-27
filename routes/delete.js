const express = require('express');

const db = require('../db');

const router = express.Router();

router.post('/', async (req, res) => {
  await db
    .delete()
    .from('files')
    .where({ id: req.body.fileId });

  return res.redirect('/');
});

module.exports = router;
