var express = require('express');
var router = express.Router();
const spellsController = require('../controllers/spells')

/* GET home page. */
router.get('/', spellsController.list);
router.get('/remove/:id',spellsController.remove)

module.exports = router;
