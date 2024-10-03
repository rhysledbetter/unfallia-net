const magic_items = require('../models/magic-items')

module.exports.list = function(request,response) {
    response.render('magic-items/magic-items-list', { magic_items : magic_items })
}

// Edit form
module.exports.edit = function(request,response) {
    let id = request.params.id;
    let magic_item = magic_items.find( magic_item => magic_item.id == id);
    response.render('magic-items/magic-items-edit', { id : id, title : 'Edit', magic_item : magic_item })
}

// Update form
module.exports.update = function(request,response) {
    let id = request.params.id;
    let magic_item = magic_items.find( magic_item => magic_item.id == id);
    magic_item.name = request.body.name;
    magic_item.location_found = request.body.location_found;
    magic_item.description = request.body.description;
    magic_item.abilities = request.body.abilities;
    response.render('magic-items/magic-items-update', { title : 'Update', magic_item : magic_item})
}

// Add form
module.exports.addform = function(request,response) {
    response.render('magic-items/magic-items-add-form', {title : 'Add'})
}

// Add magic item
module.exports.add = function(request,response) {
    let min = 10;
    let max = 999999;
    let id = Math.floor(Math.random() * (max-min) + min);
    // Create new magic item object
    let magic_item = {
        id : id,
        name : request.body.name,
        location_found : request.body.location_found,
        description : request.body.description,
        abilities : request.body.abilities,
    }
    // Add new magic item to list
    magic_items.push(magic_item);
    response.render('magic-items/magic-items-add', { title : 'Added Magic Item', magic_item : magic_item })
}

// Remove a magic item
module.exports.delete = function(request,response) {
    let id = request.params.id;
    let magic_item = magic_items.find( item => item.id == id)
    let idx = magic_items.indexOf(magic_item);
    // Remove the element at the index of "idx"
    magic_items.splice(idx,1);
    response.render('magic-items/magic-items-delete', { title : 'Deleted Magic Item', magic_item : magic_item})
}