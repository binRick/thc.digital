var fs = require('fs'),
    trim = require('trim');
var rRead = function(fn) {
    return fs.readFileSync('./' + fn + '.txt').toString().split(',').map(function(f) {
        return trim(f);
    });
};
module.exports = {
    symptoms: rRead('symptoms'),
    tags: rRead('tags'),
    contions: rRead('contions'),
    flavors: rRead('flavors'),
    categories: rRead('categories'),
};
