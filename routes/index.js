const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const uploadedFiles = await db.select(['id', 'name']).from('files');
  return res.render('index', { uploadedFiles });
});

router.use('/upload', require('./upload'));
router.use('/download', require('./download'));
router.use('/delete', require('./delete'));

module.exports = router;
