var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');

// HTTP Verbs: POST GET PUT DELETE

// POST /api/magic-items
router.post('/magic-items', mainController.create);

// GET /api/magic-items
router.get('/magic-items', mainController.readAll);

// GET one /api/magic-items/#
router.get('/magic-items/:id', mainController.readOne);

// PUT one /api/magic-items/#
router.put('/magic-items/:id', mainController.update);

// DELETE one /api/magic-items/#
router.delete('/magic-items/:id', mainController.deleteOne);

// DELETE all /api/magic-items/
router.delete('/magic-items', mainController.deleteAll);

// No matching API endpoints
router.post('/*', notFound);
router.get('/*', notFound);
router.put('/*', notFound);
router.delete('/*', notFound);

function notFound(request,response) {
    response.status(400);
    response.send('Invalid endpoint.')
}

module.exports = router;