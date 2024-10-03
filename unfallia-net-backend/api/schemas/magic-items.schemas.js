const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

// Create magic-items schema (top-level document)
const magicItemSchema = new Schema({
    "id": {type: Number, required: true, unique: true},
    "name": {type: String, required: true, unique: true},
    "location_found": {type: String, required: true},
    "description": String,
    "abilities": String
})

module.exports = {magicItemSchema};