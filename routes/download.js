const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/:fileId', async (req, res) => {
  const file = await db
    .select(['name', 'content'])
    .from('files')
    .where({ id: req.params.fileId });

  res.setHeader('Content-Disposition', `attachment; filename="${file[0].name}"`);
  res.send(file[0].content);
});

module.exports = router;
