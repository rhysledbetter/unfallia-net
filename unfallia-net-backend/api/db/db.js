const mongoose = require('mongoose');
const {MagicItem} = require('../models/magic-item')

// Connection URI to MongoDB
const uri = 'mongodb://127.0.0.1:27017/magic_items_db';

// Make db connection (async)
mongoose.connect(uri)
    .then( result => {
        console.log('Connected successfully uwu');
    })
    .catch( error => console.log(error));

    module.exports = MagicItem;