const mongoose = require('mongoose');
const {magicItemSchema} = require('../schemas/magic-items.schemas');

// Create the magic item model
const MagicItem = mongoose.model('MagicItems', magicItemSchema);

module.exports = { MagicItem };