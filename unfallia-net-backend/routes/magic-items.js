var express = require('express');
var router = express.Router();
const magicItemsController = require('../controllers/magic-items')

/* GET home page. */
router.get('/', magicItemsController.list);
/* GET edit page. */
router.get('/edit/:id', magicItemsController.edit)
/* POST update page. */
router.post('/update/:id', magicItemsController.update)
/* GET add page. */
router.get('/add-magic-item', magicItemsController.addform)
/* POST add page. */
router.post('/add', magicItemsController.add)

router.get('/delete/:id',magicItemsController.delete)

module.exports = router;
