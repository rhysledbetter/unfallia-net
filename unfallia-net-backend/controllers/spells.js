const spells = require('../models/spells')

module.exports.list = function(request,response) {
    response.render('spells/spells-list', 
        {   spells : spells.spellbook,
            myspells : spells.myspells
     })
}

// Remove a spell
module.exports.remove = function(request,response) {
    let id = request.params.id;
    // let myspells = spells.myspells.find( spell => spell.id == id);
    let idx = spells.myspells.indexOf(spells.myspells.find( spell => spell.id == id));
    // Remove the element at the index of "idx"
    spells.myspells.splice(idx,1);

    response.render('spells/spells-list', 
        {   spells : spells.spellbook,
            myspells : spells.myspells
     })
}