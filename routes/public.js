const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render("index");
});
// GET /feed/posts
router.get('/:elo0/:elo1/:length?', publicController.getElo);


module.exports = router;