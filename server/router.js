const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Servido Ativo');
});

module.exports = router;
