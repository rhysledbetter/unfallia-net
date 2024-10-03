var magic_items = require('../models/magic-items.models');
const MagicItem = require('../db/db');
const { ObjectId } = require('mongodb');

// Utility functions

// Check if list is empty
function isEmptyList(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0)
}

// Handle error
function handleError(response, error) {
    response.status(500);
    response.send('Something went wrong uwu \n' + error);
}

// CRUD - Create (POST), Read (GET), Update (PUT), Delete


// POST
// uri: /api/magic-items
module.exports.create = function (request, response) {
    try {
        var magic_item = request.body; // get new magic item
        MagicItem.create(magic_item)
            .then(result => {
                response.status(201); // 201 Created
                response.send(result);
            })
            .catch(error => handleError(response, error));
    } catch {
        handleError(response, error);
    }
};

// GET all
// uri: /api/magic-items
module.exports.readAll = function (request, response) {
    try {
        MagicItem.find()
            .then(result => {
                if (isEmptyList(result)) {
                    response.status(400);
                    response.send('List is empty.');
                } else {
                    response.status(200);
                    response.send(result);
                    // or .json instead of .send
                }
            })
            .catch(error => handleError(response, error));
    }
    catch (error) {
        handleError(response, error);
    }
};

// GET one
// uri: /api/magic-items/#
module.exports.readOne = function (request, response) {
    // TODO send custom response if ID not found
    try {
        let id = request.params.id;
        MagicItem.find({ 'id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    response.status(404);
                    response.send('ID not found.');
                } else {

                    response.status(200);
                    response.send(result);
                }
            })
            .catch(error => handleError(response, error));
    }
    catch (error) {
        handleError(response, error);
    }
};
/*
module.exports.readOne = function (request, response) {
    // TODO send custom response if ID not found
    try {
        let id = ObjectId.createFromHexString(request.params.id);
        MagicItem.find({ '_id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    response.status(404);
                    response.send('ID not found.');
                } else {

                    response.status(200);
                    response.send(result);
                }
            })
            .catch(error => handleError(response, error));
    }
    catch (error) {
        handleError(response, error);
    }
};
*/
// PUT
// uri: /api/magic-items/#
module.exports.update = function (request, response) {
    try {
        let id = request.params.id;
        var magic_item = request.body; // get new magic item
        MagicItem.findOneAndUpdate({'id':id}, magic_item,{new:true})
            .then(result => {
                if (isEmptyList(result)) {
                    response.status(400); // 400 Bad Request
                    response.send('Record not found. Cannot update.');
                } else {
                    response.status(200);
                    response.send(result);
                }
            })
            .catch(error => handleError(response, error));
    }
    catch (error) {
        handleError(response, error);
    }
};
/*
module.exports.update = function (request, response) {
    try {
        let id = ObjectId.createFromHexString(request.params.id);
        var magic_item = request.body; // get new magic item
        MagicItem.findOneAndUpdate({'_id':id}, magic_item,{new:true})
            .then(result => {
                if (isEmptyList(result)) {
                    response.status(400); // 400 Bad Request
                    response.send('Record not found. Cannot update.');
                } else {
                    response.status(200);
                    response.send(result);
                }
            })
            .catch(error => handleError(response, error));
    }
    catch (error) {
        handleError(response, error);
    }
};
*/

// DELETE one
// uri: /api/magic-items/#
module.exports.deleteOne = function (request, response) {
    try {
        let id = request.params.id;
        MagicItem.findOneAndDelete({'id':id})
            .then( result => {
                if (isEmptyList(result)) {
                    response.status(400);
                    response.send('Record not found. Cannot delete.');
                } else {
                    response.status(200);
                    response.send(result);
                }
            })
            .catch(error => handleError(response, error));
    }
    catch (error) {
        handleError(response, error);
    }
};
/*
module.exports.deleteOne = function (request, response) {
    try {
        let id = ObjectId.createFromHexString(request.params.id);
        MagicItem.findOneAndDelete({'_id':id})
            .then( result => {
                if (isEmptyList(result)) {
                    response.status(400);
                    response.send('Record not found. Cannot delete.');
                } else {
                    response.status(200);
                    response.send(result);
                }
            })
            .catch(error => handleError(response, error));
    }
    catch (error) {
        handleError(response, error);
    }
};
*/

// DELETE
// uri: /api/magic-items
module.exports.deleteAll = function (request, response) {
    try {
        MagicItem.deleteMany({})
            .then( result => {
                if (result.deletedCount === 0) {
                    response.status(400);
                    response.send('No records to delete.');
                } else {
                    response.status(200);
                    response.send('All magic items deleted.\n');
                }
            })
            .catch(error => handleError(response, error));
    }
    catch (error) {
        handleError(response, error);
    }
    // if (isEmptyList(magic_items)) {
    //     response.status(404);
    //     response.send('List is empty. Cannot delete.');
    // } else {
    //     magic_items = [];
    //     response.status(200); // consider status(404)
    //     response.send("All magic items have been deleted.");
    // }
};